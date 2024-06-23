import { faArrowUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const SmallModule = ({logo, name}) => {
  return (
    <div className="flex flex-col items-center rounded-lg mx-2 p-2">
      <img src={logo} 
      className="rounded-xl shadow-md m-2"
      style={{ width: "50px", height: "50px" }}
      />
      <p className="text-white font-mono">{name}</p>
    </div>
  )
}

const FlutterModule = () => {
  return <SmallModule logo={'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'} name={'Flutter'} />
}

const FirebaseModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' name={'Firebase'} />
}

const DartModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' name={'Dart'} />
}

const ReactModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' name={'React'} />
}

const NextModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' name={'Next.js'} />
}

const TailwindModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' name={'TailwindCSS'} />
}

const FlaskModule = () => {
  return  <SmallModule logo='./flask.png' name={'Flask'} />
}

const SQLiteModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' name={'SQLite3'} />
}

const PythonModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' name={'Python'} />
}

const JavascriptModule = () => {
  return  <SmallModule logo='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' name={'JavaScript'} />
}

const ProjectCard = ({projectName, image, desc, sourceLink, deployedLink, hasDart, hasFlutter, hasFirebase, hasReact, hasNext, hasTailwind, hasSQLite, hasPython, hasFlask, hasJavaScript}) => {
  return (
    <div className="bg-black border flex flex-col rounded-lg mb-5 py-2 px-5">
      <div className="flex">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="This is a picture of a food item"
            className="rounded-xl shadow-md m-2"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        
        <div className=" text-center p-2 flex flex-col w-full">
          <p className="text-white font-mono font-bold text-3xl">{projectName}</p>

          <div className="flex flex-wrap text-gray-300 m-5 justify-center items-center">
            <p className="text-xl">
              {desc}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex w-full mx-5 justify-start">
              {hasFlutter && <FlutterModule />}
              {hasDart && <DartModule />}
              {hasFirebase && <FirebaseModule />}
              {hasReact && <ReactModule />}
              {hasNext && <NextModule />}
              {hasTailwind && <TailwindModule />}
              {hasFlask && <FlaskModule />}
              {hasSQLite && <SQLiteModule />}
              {hasPython && <PythonModule />}
              {hasJavaScript && <JavascriptModule />}

            </div>

            <div className="flex">
              
                <Link 
                  href={sourceLink}
                  target="_blank"
                  className="flex items-center justify-center text-black rounded-lg font-bold hover:scale-105 w-52 p-2 bg-green-500">
                  <FontAwesomeIcon
                    icon={faCode}
                    height={20}
                    width={20}
                    color="black"
                    className="mr-2"
                  />
                  Project Code
                </Link>

                
                {deployedLink && (
                <Link 
                  href={deployedLink}
                  target="_blank"
                  className="flex items-center justify-center text-white rounded-lg font-bold hover:scale-105 w-52 p-2 bg-red-500 ml-4">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    height={20}
                    width={20}
                    color="white"
                    className="mr-2"
                  />
                  Visit Site
                </Link>
              )}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Project() {
    return (
      <div className="py-5 px-10">
        <p className="text-white font-mono font-bold text-5xl text-center mb-8">
          CHECK OUT MY <span className="text-red-500">PROJECTS</span>
        </p>
        <ProjectCard projectName={'Chuckler'} image={'./chuckler-logo.png'} desc={'Chuckler is an exciting and interactive social party game app that combines the best elements of popular games like Jackbox and Cards Against Humanity. It allows users to unleash their creativity and sense of humor by filling in the blanks, sharing funny answers, and engaging with a daily prompt.'} sourceLink={'https://github.com/Devamp/chuckler'} hasDart={true} hasFirebase={true} hasFlutter={true}/>
        <ProjectCard projectName={'FoodIQ Dashboard'} image={'./foodiq.png'} desc={'FoodDashboard is a web application designed to help users track and visualize their food consumption data. With intuitive charts and an easy-to-use interface, users can gain insights into their dietary habits, helping them make informed decisions about their nutrition.'} sourceLink={'https://github.com/Devamp/food-dashboard'} deployedLink={'https://food-dashboard-pi.vercel.app/'} hasReact={true} hasNext={true} hasTailwind={true} hasJavaScript={true}/>
        <ProjectCard projectName={'Famous Quotes'} image={'./quotes.png'} desc={'FamousQuotes is a dynamic fullstack web application that allows users to share and explore a diverse collection of famous quotes. Built with Flask, Python, and SQLite3, FamousQuotes provides a seamless platform for both contributors and enthusiasts of thought-provoking quotes.'} sourceLink={'https://github.com/Devamp/famous-quotes'} hasFlask={true} hasPython={true} hasSQLite={true}/>
      </div>
    );
  }
  