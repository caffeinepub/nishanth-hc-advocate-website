import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Scale } from 'lucide-react';

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
    <footer className="bg-site-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                <Scale className="w-5 h-5 text-site-dark" />
              </div>
              <div>
                <div className="font-playfair font-bold text-gold text-base">NHC Advocate</div>
                <div className="text-xs text-gray-400 font-inter">Nishanth H C</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-inter leading-relaxed">
              Providing trusted legal services in Chikkamagaluru, Karnataka with dedication and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-gold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold text-sm font-inter transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-bold text-gold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-inter leading-relaxed">
                  Nishanth HC Advocate, #T, 6th Cross Road, Block 9, Ward No 2, Vasathi Badavane,
                  Hiremgaluru, Chikkamagaluru, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+919482929768"
                  className="text-gray-400 hover:text-gold text-sm font-inter transition-colors"
                >
                  +91 94829 29768
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:adv.nishanthhc@gmail.com"
                  className="text-gray-400 hover:text-gold text-sm font-inter transition-colors"
                >
                  adv.nishanthhc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm font-inter text-center">
            © {year} Nishanth HC Advocate. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm font-inter text-center">
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
