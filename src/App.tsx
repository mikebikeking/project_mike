import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import { ErrorBoundary } from './components/ErrorBoundary';
export function App() {
  return (
    <ErrorBoundary>
      <div className="bg-slate-900 text-slate-400 min-h-screen font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="py-10">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Analytics />
        </div>
      </div>
    </ErrorBoundary>
  );
}