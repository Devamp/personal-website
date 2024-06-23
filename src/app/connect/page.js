import {
  faBell,
  faEnvelope,
  faHeart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialCard = ({ logoImage, name, desc, buttonTxt, icon, link }) => {
  return (
    <div className="flex flex-col p-5 sm:p-2 lg:p-2 items-center justify-center border border-white rounded-lg w-56 h-full my-5 mx-3 bg-black">
      <div>
        <img
          src={logoImage}
          style={{ width: "50px", height: "50px", backgroundColor: "white" }}
          className="rounded border border-white"
        />
      </div>
      <div className="mt-3 text-white font-bold text-2xl">
        <p>{name}</p>
      </div>
      <div className="mt-2  text-gray-300 text-md">
        <p>{desc}</p>
      </div>
      <Link
        href={link}
        target="_blank"
        className="flex items-center justify-center text-white border border-red-500 px-8 py-1 text-md rounded-xl mt-5 font-bold hover:scale-105 w-48 bg-red-500"
      >
        <FontAwesomeIcon
          icon={icon}
          height={20}
          width={20}
          color="white"
          className="mr-2"
        />
        {buttonTxt}
      </Link>
    </div>
  );
};

export default function Connect() {
  return (
    <div className="flex flex-col items-center h-screen text-center pt-10">
      <p className="text-white font-mono font-bold text-6xl text-center">
        GET IN <span className="text-red-500">TOUCH.</span>
      </p>
      <div className="flex flex-col items-center sm:flex-row lg:flex-row mx-4 mt-8 ">
        <SocialCard
          logoImage={"./linkedin.png"}
          name={"LinkedIn"}
          desc={
            "Connect with me on LinkedIn for professional networking and career opportunities."
          }
          icon={faUserPlus}
          buttonTxt={"Connect"}
          link={"https://www.linkedin.com/in/devam01/"}
        />
        <SocialCard
          logoImage={"./instagram.png"}
          name={"Instagram"}
          desc={
            "Follow my Instagram for a glimpse into my personal and professional life through photos and stories."
          }
          icon={faHeart}
          buttonTxt={"Follow"}
          link={"https://www.instagram.com/devam01/"}
        />
        <SocialCard
          logoImage={"./x.png"}
          name={"Twitter/X"}
          desc={
            "Stay updated with my latest thoughts and updates by following me on X, formally known as Twitter."
          }
          icon={faBell}
          buttonTxt={"Get Updates"}
          link={"https://x.com/Devam29"}
        />
        <SocialCard
          logoImage={"./mail.png"}
          name={"Email"}
          desc={
            "Reach out to me directly via email for any inquiries, collaborations, or professional opportunities."
          }
          icon={faEnvelope}
          buttonTxt={"Email"}
          link={"mailto:devam29@gmail.com"}
        />
      </div>
    </div>
  );
}
