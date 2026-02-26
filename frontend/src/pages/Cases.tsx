import { useRef } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

// URL-encoded parentheses (%28 and %29) to fix image loading
const HERO_IMAGE = 'https://i.postimg.cc/ncL4hcQ9/Whats_App_Image_2026_02_26_at_6_16_08_PM_%281%29.jpg';

const services = [
  {
    icon: '⚖️',
    title: 'Civil Cases',
    desc: 'Comprehensive representation in civil disputes including property matters, injunctions, recovery suits, and civil appeals before district and high courts.',
  },
  {
    icon: '🛡️',
    title: 'Criminal Defence',
    desc: 'Strong defence in criminal cases including bail applications, anticipatory bail, sessions court trials, and appeals in criminal matters.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Law',
    desc: 'Sensitive handling of matrimonial disputes, divorce proceedings, child custody, maintenance cases, and domestic relations matters.',
  },
  {
    icon: '🏠',
    title: 'Property Law',
    desc: 'Expert guidance in property registration, title verification, sale deeds, gift deeds, partition suits, and property dispute resolution.',
  },
  {
    icon: '📄',
    title: 'Documentation',
    desc: 'Professional drafting of legal notices, agreements, contracts, affidavits, power of attorney, and all legal documentation services.',
  },
];

function TiltCard({
  icon,
  title,
  desc,
  onClick,
}: {
  icon: string;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = -(((e.clientX - rect.left) / rect.width - 0.5) * 10);
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="tilt-container rounded-xl p-6 cursor-pointer transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(212,175,55,0.15)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.5)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(212,175,55,0.2)';
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-playfair font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>{title}</h3>
      <p className="text-sm font-inter leading-relaxed" style={{ color: '#555555' }}>{desc}</p>
    </div>
  );
}

export default function Cases() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const heroVisible = useScrollReveal(heroRef);
  const cardsVisible = useScrollReveal(cardsRef);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate({ to: '/appointment' });
    window.scrollTo(0, 0);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Nishanth HC Advocate',
    description: 'Legal services: Civil, Criminal, Family, Property, Documentation',
    telephone: '+919482929768',
  };

  return (
    <>
      <SEO
        title="Cases & Services | Advocate Nishanth H C"
        description="Legal services by Advocate Nishanth H C: Civil cases, Criminal defence, Family law, Property law, and Documentation in Chikkamagaluru, Karnataka."
        keywords="civil cases Karnataka, criminal defence Chikkamagaluru, family law advocate, property registration lawyer"
        ogImage={HERO_IMAGE}
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Legal Services - Advocate Nishanth H C"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Soft white gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)' }}
        />
        <div
          ref={heroRef}
          className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-1 border border-gold/60 rounded-full text-gold text-xs font-inter mb-4 tracking-widest uppercase bg-black/20">
            Our Services
          </div>
          <h1
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Cases & Legal Services
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Services Cards */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={cardsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((s) => (
              <TiltCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                onClick={handleCardClick}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              Ready to Get Legal Help?
            </h2>
            <p className="font-inter mb-8" style={{ color: '#555555' }}>
              Book a consultation with Advocate Nishanth H C today.
            </p>
            <Link
              to="/appointment"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-10 py-3 font-inter font-bold rounded-md text-white transition-all"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#1da851';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(37,211,102,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
