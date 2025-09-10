import React from "react";
export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <p className="text-teal-400 font-mono mb-5">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-200 mb-4">
        Michael King.
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 mb-8">
        I build things for the web.
      </h2>
      <p className="text-slate-400 max-w-xl mb-12 text-lg">
        I apply the precision of a master bicycle technician to the art of web
        development. My background in workflow optimization and customer service
        now drives my passion for crafting efficient, user-centric web
        applications.
      </p>
      <a
        href="#projects"
        className="text-teal-400 border border-teal-400 rounded px-7 py-4 w-fit hover:bg-teal-400/10 transition-colors duration-300 font-mono"
      >
        Check out my work!
      </a>
    </section>
  );
}
