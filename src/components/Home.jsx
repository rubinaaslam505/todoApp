import React from "react";
import { heroData, skillsData, projectsData } from "../data";
const Home = () => {
  return (
    <div className=" bg-violet-100 text-black min-h-screen p-10">

      <div className="grid md:grid-cols-2 items-center gap-10">

      
        <section className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            {heroData.name}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            {heroData.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            {heroData.description}
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <button
              className="bg-green-600 text-black font-semibold px-6 py-2 rounded-full hover:scale-105 transition"
              onClick={() => alert("Download CV clicked")}
            >
              Download CV
            </button>

            <button
              className="border border-green-600 text-black font-semibold px-6 py-2 rounded-full hover:bg-green-100 transition"
            >
              Contact Me
            </button>
          </div>
        </section>
        <div className="relative  h-100 w-100 top-6">
          <img      
            src="/images/image.jpeg"
            alt="Login"
            className="w-full h-full object-contaim opacity-10 animate-pulse delay-50 hidden sm:block rounded-2xl"
          />
         </div>  
     </div>
      <section>
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skillsData.map((skill,index)=>(
          
            <span
              key={index}
              className="bg-black text-white py-2 px-4 rounded-2xl">
                {skill}
            </span>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold  py-8">projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project)=>(
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-white mt-2">{project.description}</p>
           


          </div>

        ))}

      </div>

      </section>

    </div>
  );      

};
 export default Home;
