import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

const LOGO_URL = 'https://i.postimg.cc/RV0rRf2D/Whats-App-Image-2026-02-26-at-7-46-51-PM.jpg';

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

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav
      style={{ backgroundColor: '#ffffff' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'shadow-md border-b border-gray-200'
          : 'shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Image */}
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <img
              src={LOGO_URL}
              alt="NHC Advocate — Nishanth H C"
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback text logo */}
            <div className="hidden items-center gap-2">
              <div className="leading-tight">
                <div className="font-playfair font-bold text-gold text-sm tracking-wide">
                  NHC Advocate
                </div>
                <div className="text-xs font-inter" style={{ color: '#555555' }}>Nishanth H C</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`px-4 py-2 rounded-md text-sm font-inter font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'border-b-2 border-gold'
                    : 'hover:bg-gray-50'
                }`}
                style={{
                  color: isActive(link.path) ? '#d4af37' : '#1a1a1a',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={handleNavClick}
              className="ml-3 px-4 py-2 rounded-md text-sm font-inter font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: '#25D366',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#1da851';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden transition-colors p-2"
            style={{ color: '#1a1a1a' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t px-4 pb-4"
          style={{ backgroundColor: '#ffffff', borderColor: 'rgba(212,175,55,0.2)' }}
        >
          {/* Mobile Logo */}
          <div className="py-3 flex justify-center border-b mb-2" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
            <img
              src={LOGO_URL}
              alt="NHC Advocate"
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={`block px-4 py-3 text-sm font-inter font-medium transition-colors border-b`}
              style={{
                color: isActive(link.path) ? '#d4af37' : '#1a1a1a',
                borderColor: 'rgba(0,0,0,0.05)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={handleNavClick}
            className="block mt-3 px-4 py-3 rounded-md text-sm font-inter font-semibold text-center text-white transition-all"
            style={{ backgroundColor: '#25D366' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#1da851';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366';
            }}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
