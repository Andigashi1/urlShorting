import { useState, useTransition, useEffect } from "react";
import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import customizable from "../assets/images/icon-fully-customizable.svg";
import Links from "./Links";

function Stats() {
  const [inputUrl, setInputUrl] = useState("");
  const [links, setLinks] = useState(() => { //Get shortened links from localStorage and convert into object
    const savedLinks = localStorage.getItem("shortenedLinks"); 
    return savedLinks ? JSON.parse(savedLinks) : [];
  });
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();


  //Save the links in the localStorage
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);


  const handleShorten = () => {
    setError(null); //Clear the errors everytime the function is called

    //Check whether the link contains white spaces or starts with https
    if (!inputUrl.trim() || !inputUrl.startsWith("https")) {
      setError("Please enter a valid URL");
      return;
    }

    //fetch the data from the api which triggers useEffect to save in localStorage
    startTransition(async () => {
      try {
        const response = await fetch("/api/server", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: inputUrl }),
        });
        if (!response.ok) {
          throw new Error("Failed to shorten URL");
        }

        const data = await response.json();
        setLinks((prev) => [
          { longUrl: inputUrl, shortUrl: data.result_url },
          ...prev,
        ]);
      } catch (err) {
        setError(err.message);
      }

      setInputUrl(""); //clear input on click
    });
  };

  return (
    <div className="relative text-center bg-ngray/40 pt-20 pb-24 flex flex-col justify-center items-center gap-20">
      {/* Input field and button */}
      <main className="absolute top-0 -translate-y-1/2 mx-auto left-4 lg:left-8 right-4 lg:right-8 max-w-7xl  
      hero rounded-lg p-8 flex gap-6 flex-col md:flex-row justify-center">
        <span className="md:w-[85%]">
          <input
            className={`w-full bg-white px-3 py-4 rounded ${
              error ? "border-2 border-secondary" : null
            }`}
            placeholder="Shorten a link here..."
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          {error && (
            <p className="absolute text-secondary text-sm mt-1">{error}</p>
          )}
        </span>
        <button
          onClick={handleShorten}
          disabled={isPending}
          className={`md:w-[18%] !py-3.5 !rounded`}
        >
          {isPending ? "Shortening..." : "Shorten It"}
        </button>
      </main>
          
      {/* Shortened links section */}
      <div className="w-full max-w-7xl space-y-5 max-md:mt-14">
        {links.map((link, i) => (
          <Links link={link} key={i} />
        ))}
      </div>

      {/* Stats */}
      <div className="mx-6 space-y-4 max-w-7xl">
        <h1 className="text-4xl font-bold">Advanced Statistics</h1>
        <p className="text-ngrayishvio tracking-wide max-w-lg mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="relative flex flex-col gap-24 lg:gap-6 lg:items-start lg:justify-start lg:flex-row mt-20 [&>*]:max-w-xl">
          <div className="absolute bg-cyan w-3 lg:w-full h-full lg:h-3 left-1/2 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2"></div>
          <div className="bg-white pt-20 pb-14 px-6 space-y-4 rounded-md relative">
            <div className="bg-violet p-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
              <img className="p-4" src={brandRecognition} alt="" />
            </div>
            <h2 className="text-3xl font-bold">Brand Recognition</h2>
            <p className="text-ngrayishvio tracking-wide">
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instill confidence in
              your content.
            </p>
          </div>
          <div className="bg-white pt-20 lg:mt-12 pb-14 px-6 space-y-4 rounded-md relative">
            <div className="bg-violet p-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
              <img className="p-4" src={records} alt="" />
            </div>
            <h2 className="text-3xl font-bold">Detailed Records</h2>
            <p className="text-ngrayishvio tracking-wide">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="bg-white pt-20 pb-14 px-6 lg:mt-24 space-y-4 rounded-md relative">
            <div className="bg-violet p-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
              <img className="p-4" src={customizable} alt="" />
            </div>
            <h2 className="text-3xl font-bold">Fully Customizable</h2>
            <p className="text-ngrayishvio tracking-wide">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
