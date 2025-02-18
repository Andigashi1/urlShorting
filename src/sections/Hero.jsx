import illustration from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl relative w-full flex flex-col justify-center max-lg:items-center text-lg md:text-xl lg:my-38 pb-38 space-y-6">
        <img
          className="lg:absolute -right-4 lg:translate-x-1/3 max-lg:max-w-lg"
          src={illustration}
          alt="illustration"
        />
        <div className="max-w-xl space-y-4 flex flex-col items-center lg:items-start">
          <h1 className="text-5xl lg:text-7xl lg:leading-20 max-lg:text-center font-bold max-lg:mt-6">
            More than just shorter links
          </h1>
          <p className="max-lg:text-center tracking-wide text-ngrayishvio">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing
          </p>
          <button>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
