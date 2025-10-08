import React, { useState } from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const socialLinks = [
    {
      icon: <GithubIcon size={20} />,
      url: "https://github.com/mikebikeking",
    },
    {
      icon: <LinkedinIcon size={20} />,
      url: "https://www.linkedin.com/in/michael-king-804b6037/",
    },
  ];

  return (
    <>
      <footer className="py-6 text-center">
        <div className="flex justify-center mb-4 md:hidden">
          <div className="flex gap-6">
            
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden fixed bottom-0 left-10 md:flex flex-col items-center">
          <div className="flex flex-col gap-6 mb-6">
            
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="w-px h-24 bg-slate-400"></div>
        </div>

        <div className="hidden fixed bottom-0 right-10 md:flex flex-col items-center">
          <button
            type="button"
            onClick={() => setIsContactFormOpen(true)}
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-mono mb-6"
            style={{ writingMode: "vertical-rl" }}
          >
            Mikebikeking@gmail.com
          </button>
          <div className="w-px h-24 bg-slate-400"></div>
        </div>

        <p className="text-sm font-mono text-slate-500">
          <a
            href="https://github.com/mikebikeking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            Designed & Built by Michael King
          </a>
        </p>
      </footer>

      {isContactFormOpen && (
        <ContactForm onClose={() => setIsContactFormOpen(false)} />
      )}
    </>
  );
}