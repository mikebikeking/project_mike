import React, { useState } from 'react';
import { ContactForm } from './ContactForm.tsx'; 

export function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleSayHelloClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <section id="contact" className="py-24 text-center">
      <p className="text-teal-400 font-mono mb-4">04. What's Next?</p>
      <h2 className="text-4xl font-bold text-slate-200 mb-6">Get In Touch</h2>
      <p className="max-w-md mx-auto text-slate-400 mb-10">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll do my best to get back to you!
      </p>
      <a
        href="#"
        onClick={handleSayHelloClick}
        className="text-teal-400 border border-teal-400 rounded px-8 py-4 inline-block hover:bg-teal-400/10 transition-colors duration-300 font-mono"
      >
        Say Hello
      </a>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}