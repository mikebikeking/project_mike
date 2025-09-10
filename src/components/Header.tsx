import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Work',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm py-4' : 'py-6'}`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#" className="text-teal-400 font-bold text-xl">
          MK
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => <li key={item.name}>
                <a href={item.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm">
                  <span className="text-teal-400 mr-1">0{index + 1}.</span>{' '}
                  {item.name}
                </a>
              </li>)}
            <li>
              <a href="/Michael_King_Resume.pdf" className="text-teal-400 border border-teal-400 rounded px-4 py-2 text-sm hover:bg-teal-400/10 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-teal-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="fixed inset-0 bg-slate-900/95 flex flex-col items-center justify-center md:hidden z-40">
          <nav>
            <ul className="flex flex-col items-center space-y-6">
              {navItems.map((item, index) => <li key={item.name}>
                  <a href={item.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-lg" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-teal-400 mr-2">0{index + 1}.</span>{' '}
                    {item.name}
                  </a>
                </li>)}
              <li className="mt-6">
                <a href="/Michael_King_Resume.pdf" className="text-teal-400 border border-teal-400 rounded px-6 py-3 text-sm hover:bg-teal-400/10 transition-colors duration-300" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>}
    </header>;
}