import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin } from 'lucide-react';

const LOGO_URL = 'https://i.postimg.cc/RV0rRf2D/Whats-App-Image-2026-02-26-at-7-46-51-PM.jpg';

const navLinks = [
  { path: '/' as const, label: 'Home' },
  { path: '/about' as const, label: 'About' },
  { path: '/cases' as const, label: 'Cases' },
  { path: '/appointment' as const, label: 'Appointment' },
  { path: '/contact' as const, label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'nhc-advocate'
  );

  return (
    <footer style={{ backgroundColor: '#f8f9fb', borderTop: '1px solid rgba(212,175,55,0.25)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={LOGO_URL}
                alt="NHC Advocate — Nishanth H C"
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden">
                <div className="font-playfair font-bold text-gold text-base">NHC Advocate</div>
                <div className="text-xs font-inter" style={{ color: '#555555' }}>Nishanth H C</div>
              </div>
            </div>
            <p className="text-sm font-inter leading-relaxed" style={{ color: '#555555' }}>
              Providing trusted legal services in Chikkamagaluru, Karnataka with dedication and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-base mb-4" style={{ color: '#1a1a1a' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-inter transition-colors hover:text-gold"
                    style={{ color: '#555555' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-bold text-base mb-4" style={{ color: '#1a1a1a' }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm font-inter leading-relaxed" style={{ color: '#555555' }}>
                  Nishanth HC Advocate, #T, 6th Cross Road, Block 9, Ward No 2, Vasathi Badavane,
                  Hiremgaluru, Chikkamagaluru, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
                <a
                  href="tel:+919482929768"
                  className="text-sm font-inter transition-colors hover:text-gold"
                  style={{ color: '#555555' }}
                >
                  +91 94829 29768
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold" />
                <a
                  href="mailto:adv.nishanthhc@gmail.com"
                  className="text-sm font-inter transition-colors hover:text-gold"
                  style={{ color: '#555555' }}
                >
                  adv.nishanthhc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(212,175,55,0.2)' }}
        >
          <p className="text-sm font-inter text-center" style={{ color: '#888888' }}>
            © {year} Nishanth HC Advocate. All Rights Reserved.
          </p>
          <p className="text-sm font-inter text-center" style={{ color: '#888888' }}>
            Built with <span className="text-gold">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
