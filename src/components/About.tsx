import React from "react";
import Mike from "../assets/Mike_192.jpg";

export function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Redux",
    "Sass",
    "Tailwind CSS",
    "Next.js",
    "Firebase",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="py-20">
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-slate-200 mr-4">
          <span className="text-teal-400 font-mono mr-2">01.</span> About Me
        </h2>
        <div className="flex-grow h-px bg-slate-700"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 text-slate-400">
          <p className="mb-4">
            Hello! My name is Michael and I enjoy creating things that live on
            the internet. As a Frontend Developer with a background in
            management, I bring a unique and results-driven approach to creating
            digital experiences. My proficiency in frontend technologies like
            React, Next.js, and TypeScript is combined with a proven ability to
            lead teams, optimize workflows, and drive business growth. I am
            passionate about leveraging my dual expertise to build exceptional,
            high-performance applications that not only solve complex problems
            but also deliver measurable results.
          </p>
          
          <p className="mb-4">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 mt-5">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-400 mr-2">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-md bg-teal-400/20 opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
          <div className="relative">
            <div className="relative rounded-md overflow-hidden bg-teal-400/20 aspect-square">
              
              <img
                src={Mike}
                alt="Michael King"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
