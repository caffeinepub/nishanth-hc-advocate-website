import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Scale } from 'lucide-react';

const navLinks = [
  { path: '/' as const, label: 'Home' },
  { path: '/about' as const, label: 'About' },
  { path: '/cases' as const, label: 'Cases' },
  { path: '/appointment' as const, label: 'Appointment' },
  { path: '/contact' as const, label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-site-dark shadow-lg'
          : 'bg-site-dark/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-gold-glow">
              <Scale className="w-5 h-5 text-site-dark" />
            </div>
            <div className="leading-tight">
              <div className="font-playfair font-bold text-gold text-sm tracking-wide">
                NHC Advocate
              </div>
              <div className="text-xs text-gray-400 font-inter">Nishanth H C</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-inter font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="ml-3 px-4 py-2 bg-gold text-site-dark rounded-md text-sm font-inter font-semibold hover:bg-gold-light transition-all duration-200 shadow-gold-glow"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-gold transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-site-dark border-t border-gold/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-sm font-inter font-medium transition-colors border-b border-white/5 ${
                isActive(link.path)
                  ? 'text-gold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="block mt-3 px-4 py-3 bg-gold text-site-dark rounded-md text-sm font-inter font-semibold text-center hover:bg-gold-light transition-all"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
