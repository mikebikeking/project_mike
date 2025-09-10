import React from "react";
import { ExternalLinkIcon, GithubIcon, FolderIcon } from "lucide-react";
export function Projects() {
  const featuredProjects = [
    {
      title: "Portfolio Website",
      description:
        "A minimal, light and dark themed portfolio website built with HTML and CSS. Features smooth scrolling, responsive design, and subtle animations.",
      tags: ["React", "Tailwind CSS", "Vite"],
      image: "src/assets/eport_pic.png",
      github: "https://github.com/mikebikeking/EportfolioKing",
      external: "https://eportfolio-king.vercel.app/",
      reverse: false,
    },
    {
      title: "NFT World",
      description:
        "This React application uses React Router for dynamic navigation and Axios for data fetching, with Firebase handling its backend needs. It features a modern, user-friendly interface with animated carousels and smooth transitions powered by keen-slider and AOS. The project is built with standard npm scripts and integrates third-party assets to deliver a polished and engaging experience.",
      tags: ["React", "AXIOS", "", "Tailwind CSS"],
      image: "src/assets/work1.png",
      github: "https://github.com/mikebikeking/michael-internship",
      external: "https://michael-internship.vercel.app/",
      reverse: true,
    },
    {
      title: "Movie Review",
      description:
        "This React applicaion allows users to search for movies, view detailed information, and read reviews using the OMDB API. It features a clean, responsive design with intuitive navigation.",
      tags: ["React", "API", "Tailwind CSS", "Heroku"],
      image: "src/assets/work3.png",
      github: "https://github.com/mikebikeking/Movie-React",
      external: "https://movie-app-react-939f82d3058d.herokuapp.com/",
      reverse: false,
    },
  ];
  const otherProjects = [
    {
      title: "Portfolio Website",
      description:
        "A minimal, light and dark themed portfolio website built with HTML and CSS. Features smooth scrolling, responsive design, and subtle animations.",
      tags: ["HTML", "CSS", "Modal", "JavaScript"],
      github: "https://github.com/mikebikeking/Eportfolio",
      external: "https://eportfolio-liart.vercel.app/",
    },
    {
      title: "Skinstric Internship",
      description:
        "This project involved a full redesign of Skinstric.ai's website, an AI-powered skincare platform, using Next.js and TailwindCSS to create a modern, high-performance online presence.",
      tags: ["JavaScript", "React", "TailwindCSS", "AOS"],
      github: "https://github.com/mikebikeking/Skinstric-AI",
      external: "https://skinstric-ai-gold.vercel.app/",
    },
    {
      title: "React Template Project",
      description:
        "This landing page showcases beautiful and customizable React templates.  The design is visually appealing and responsive, aiming to attract developers seeking efficient and professional website solutions.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/mikebikeking/Beautiful-React-Templates",
      external: "https://mikebikeking.github.io/Beautiful-React-Templates/",
    },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-slate-200 mr-4">
          <span className="text-teal-400 font-mono mr-2">03.</span> Some Things
          I've Built
        </h2>
        <div className="flex-grow h-px bg-slate-700"></div>
      </div>
      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={`relative grid md:grid-cols-12 gap-4 items-center ${
              project.reverse ? "md:text-right" : ""
            }`}
          >
            {/* Project Image */}
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className={`md:col-span-7 relative rounded-md overflow-hidden ${
                project.reverse ? "md:col-start-6" : "md:col-start-1"
              }`}
            >
              <div className="absolute inset-0 bg-teal-400/20 hover:bg-transparent transition duration-300 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </a>
            {/* Project Content */}
            <div
              className={`md:col-span-6 ${
                project.reverse ? "md:col-start-1" : "md:col-start-7 md:z-10"
              }`}
            >
              <p className="text-teal-400 font-mono mb-1">Featured Project</p>
              <h3 className="text-xl font-bold text-slate-200 mb-4">
                {project.title}
              </h3>
              <div className="bg-slate-800 p-6 rounded-md shadow-xl mb-4">
                <p>{project.description}</p>
              </div>
              <ul
                className={`flex flex-wrap gap-3 mb-6 text-sm font-mono ${
                  project.reverse ? "md:justify-end" : ""
                }`}
              >
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>
              <div
                className={`flex gap-4 ${
                  project.reverse ? "md:justify-end" : ""
                }`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400"
                >
                  <GithubIcon size={20} />
                </a>
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-teal-400"
                  >
                    <ExternalLinkIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Other Projects */}
      <div>
        <h3 className="text-xl font-bold text-slate-200 text-center mb-10">
          Other Noteworthy Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-md p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <FolderIcon size={40} className="text-teal-400" />
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-teal-400"
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-teal-400"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-slate-200 font-bold mb-2">{project.title}</h4>
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 text-xs font-mono mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
