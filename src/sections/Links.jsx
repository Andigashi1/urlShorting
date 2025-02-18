import { useState } from "react";
import PropTypes from "prop-types";

function Links({ link }) {
  const [copied, setCopied] = useState(false);

  //Save the shortUrl to the clipboard and return state to false after delay
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link.shortUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      throw new Error("failed to copy:" + err);
    }
  };

  return (
    <div>
      <section className="bg-white [&>*]:p-4 flex max-md:flex-col justify-between max-md:text-left md:items-center rounded">
        <p className="max-md:border-b-2 border-ngray">{link.longUrl}</p>
        <span className="flex max-md:flex-col md:items-center gap-4">
          <p className="text-cyan">
            <a href={link.shortUrl} target="_blank">
              {link.shortUrl}
            </a>
          </p>
          <button onClick={handleCopy} className={`!rounded max-md:w-full ${copied && '!bg-violet'}`}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </span>
      </section>
    </div>
  );
}

Links.propTypes = {
    link: PropTypes.shape({
      longUrl: PropTypes.string.isRequired,
      shortUrl: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Links;
