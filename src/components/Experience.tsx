import React, { useState } from 'react';
export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const jobs = [{
    company: 'Skinstric AI',
    position: 'Software Engineer Internship',
    period: 'April 2025 - May 2025',
    duties: ["Architected a real-time skin analysis platform using the OpenAI Vision API and Next.js, achieving a 98% detection accuracy across diverse skin conditions.", 'Developed a responsive UI with TailwindCSS and GSAP animations, implementing dynamic skincare recommendation cards that improved engagement by 60%.', 'Optimized performance using Next.js Server Components and Lottie animations, achieving a sub-2-second analysis time for skin condition detection.', 'Built a custom animation system with the GSAP timeline for a seamless user experience, which increased user retention by 40%.']
  }, {
    company: 'Frontend Simplified',
    position: 'Frontend Developer',
    period: 'March 2024 - March 2025',
    duties: ["Selected as a peer mentor after achieving a top 5% performance in the cohort, providing debugging support and code reviews for over 20 students.", 'Created and led workshops on modern frontend optimization techniques, helping students improve their project load times by an average of 50%.', 'Developed comprehensive learning resources on React and TypeScript that enabled 70% of mentored students to successfully implement type-safe applications.', "Initiated weekly pair programming sessions focused on accessibility and SEO best practices, leading to 90% of students achieving WCAG compliance in their projects."]
  }, {
    company: 'Bicycle Retailers',
    position: 'Bicycle Service Manager',
    period: 'Febuary 2006 - Present',
    duties: ['Managed and optimized service department workflows, including scheduling work orders and controlling inventory, to improve efficiency and timeliness.', 'Oversaw high-end bicycle assembly operations, contributing to a significant portion of the company’s annual revenue, and performed highly skilled repairs with minimal rework.', 'Delivered expert guidance and tailored service solutions to a diverse range of customers and provided targeted training to staff to enhance their skills and performance.', 'Defined and implemented departmental goals, monitored employee performance, and facilitated meetings to encourage collaboration and problem-solving.', 'Co-owned a successful bike shop, where I set sales and service goals, analyzed income statements, and prepared financial reports.']
}];
  return <section id="experience" className="py-20">
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-bold text-slate-200 mr-4">
          <span className="text-teal-400 font-mono mr-2">02.</span> Where I've
          Worked
        </h2>
        <div className="flex-grow h-px bg-slate-700"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-32 mb-6 md:mb-0 overflow-x-auto md:overflow-visible">
          <div className="flex md:flex-col whitespace-nowrap">
            {jobs.map((job, index) => <button key={job.company} className={`px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 ${activeTab === index ? 'text-teal-400 border-teal-400' : 'text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-800/30'} transition-colors duration-300 font-mono text-sm`} onClick={() => setActiveTab(index)}>
                {job.company}
              </button>)}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-slate-200 font-medium">
            {jobs[activeTab].position}{' '}
            <span className="text-teal-400">@ {jobs[activeTab].company}</span>
          </h3>
          <p className="font-mono text-sm text-slate-400 mt-1 mb-4">
            {jobs[activeTab].period}
          </p>
          <ul className="space-y-4">
            {jobs[activeTab].duties.map((duty, index) => <li key={index} className="flex">
                <span className="text-teal-400 mr-2 flex-shrink-0">▹</span>
                <span>{duty}</span>
              </li>)}
          </ul>
        </div>
      </div>
    </section>;
}