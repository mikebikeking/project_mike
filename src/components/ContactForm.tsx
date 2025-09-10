import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsFadingIn(true), 300);
    return () => clearTimeout(timeoutId); 
  }, []);

  const handleClose = () => {
    setIsFadingIn(false);
    setTimeout(onClose, 500); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Sending...');

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_8esl8wr', 'template_wa84bw7', templateParams, '3xJHrGFTGXPgQMtws')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setIsSending(false);
        setTimeout(handleClose, 2000);
      }, (error) => {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message. Please try again.');
        setIsSending(false);
      });
  };

  return (
    <div
      className={`
        fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-50
        transition-opacity duration-300
        ${isFadingIn ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div
        className={`
          bg-slate-800 p-8 rounded-lg shadow-2xl max-w-lg w-full relative
          transition-transform duration-300
          ${isFadingIn ? 'scale-100' : 'scale-95'}
        `}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-teal-400"
          disabled={isSending}
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold text-slate-200 mb-6 text-center">
          Send Me a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-slate-700 text-slate-300 p-3 rounded-md border border-transparent focus:border-teal-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-700 text-slate-300 p-3 rounded-md border border-transparent focus:border-teal-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              className="w-full bg-slate-700 text-slate-300 p-3 rounded-md border border-transparent focus:border-teal-400 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-teal-400 border border-teal-400 rounded px-8 py-4 inline-block hover:bg-teal-400/10 transition-colors duration-300 font-mono"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send it my way'}
          </button>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center text-sm text-slate-400">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}