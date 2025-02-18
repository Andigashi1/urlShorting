import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <footer
      className="bg-ndark max-h-screen text-white text-center flex flex-col lg:flex-row justify-evenly 
    gap-12 items-center lg:items-start py-10"
    >
      <p className="text-[2rem] font-bold ">Shortly</p>

      <div
        className="flex flex-col lg:flex-row gap-12 [&>div>p]:font-bold [&>div>p]:mb-6 
      [&>div>ul]:space-y-2.5 [&>div>ul>li]:hover:text-cyan [&>div>ul>li]:cursor-pointer"
      >
        <div className="">
          <p>Features</p>
          <ul className="">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="flex svg gap-6 [&>*]:hover:fill-cyan [&>*]:cursor-pointer">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
        <img src={instagram} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
