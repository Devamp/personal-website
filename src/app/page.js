import {
  faCloudArrowDown,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mt-28 lg:mt-12">
      <div className="flex flex-col text-center lg:text-left lg:ml-72 lg:pl-5 text-3xl sm:text-3xl md:text-5xl">
        <p className="text-white  font-bold">ADAPTABLE.</p>
        <p className="text-red-500  font-bold">DETERMINED.</p>
        <p className="text-white  font-bold">INNOVATIVE.</p>
      </div>
      <p className="text-white text-center text-6xl sm:text-7xl md:text-9xl font-bold">
        DEVAM PATEL
      </p>
      <p className="text-white text-center text-2xl font-bold mt-2">
        • FULL STACK DEVELOPER •
      </p>
      <i class="fa-brands fa-github"></i>
      <div className="flex justify-center mt-5">
        <Link
          href={"https://github.com/Devamp"}
          target="_blank"
          className="border border-white px-8 py-2 text-lg  rounded-xl font-bold mx-2  font-mono hover:scale-120 text-white hover:border-green-500"
        >
          <FontAwesomeIcon
            icon={faCodeFork}
            height={20}
            width={20}
            color="white"
            className="mr-1"
          />
          GitHub
        </Link>
        <Link
          href="./Resume-Devam-Patel.pdf"
          className="border border-black px-8 py-2 text-lg text-black rounded-xl font-bold mx-2 bg-yellow-400 font-mono hover:bg-yellow-500"
        >
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            height={20}
            width={20}
            color="black"
            className="mr-1"
          />
          Resume
        </Link>
      </div>
    </div>
  );
}
