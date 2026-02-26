import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import { translations, Language } from '../utils/translations';

const HERO_IMAGE = 'https://i.postimg.cc/dt02VtTd/Whats_App_Image_2026_02_26_at_6_16_08_PM.jpg';

const services = [
  { icon: '⚖️', key: 'civil' as const, descKey: 'civilDesc' as const },
  { icon: '🛡️', key: 'criminal' as const, descKey: 'criminalDesc' as const },
  { icon: '👨‍👩‍👧', key: 'family' as const, descKey: 'familyDesc' as const },
  { icon: '🏠', key: 'property' as const, descKey: 'propertyDesc' as const },
  { icon: '📄', key: 'documentation' as const, descKey: 'documentationDesc' as const },
];

function StatCard({
  end,
  suffix,
  label,
  isVisible,
}: {
  end: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(end, 1500, isVisible);
  return (
    <div
      className="rounded-xl p-6 text-center"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(212,175,55,0.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      }}
    >
      <div className="font-playfair text-4xl font-bold text-gold mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-inter" style={{ color: '#555555' }}>{label}</div>
    </div>
  );
}

function ServiceCard({
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

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [imgError, setImgError] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsVisible = useScrollReveal(statsRef);
  const servicesVisible = useScrollReveal(servicesRef);
  const navigate = useNavigate();

  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem('nhc-lang') as Language | null;
    if (saved && ['en', 'kn', 'hi'].includes(saved)) setLang(saved);
  }, []);

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('nhc-lang', l);
  };

  const handleServiceCardClick = () => {
    navigate({ to: '/appointment' });
    window.scrollTo(0, 0);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Nishanth HC Advocate',
    description: 'Legal services in Chikkamagaluru, Karnataka',
    telephone: '+919482929768',
    email: 'adv.nishanthhc@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#T, 6th Cross Road, Block 9, Ward No 2, Vasathi Badavane',
      addressLocality: 'Hiremgaluru, Chikkamagaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <SEO
        title="Advocate Nishanth H C | Legal Services in Chikkamagaluru"
        description="Trusted legal services in Chikkamagaluru, Karnataka. Civil, Criminal, Family, Property & Documentation by Advocate Nishanth H C."
        keywords="advocate Chikkamagaluru, lawyer Karnataka, civil cases, criminal defence, family law, property registration"
        ogImage={HERO_IMAGE}
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={HERO_IMAGE}
            alt="Advocate Nishanth H C"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0" style={{ backgroundColor: '#f8f9fb', border: '4px solid rgba(212,175,55,0.4)' }} />
        )}
        {/* Soft white gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.45) 100%)' }}
        />

        {/* Language Switcher */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {(['en', 'kn', 'hi'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => changeLang(l)}
              className={`px-3 py-1 rounded-full text-xs font-inter font-semibold border transition-all ${
                lang === l
                  ? 'bg-gold text-site-dark border-gold'
                  : 'bg-transparent text-gold border-gold/50 hover:border-gold'
              }`}
            >
              {l === 'en' ? 'EN' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिंदी'}
            </button>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 border border-gold/60 rounded-full text-gold text-xs font-inter mb-6 tracking-widest uppercase bg-black/20">
            Chikkamagaluru, Karnataka
          </div>
          <h1
            className="font-playfair text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            {t.heroHeading}
          </h1>
          <p className="text-gold font-inter text-xl md:text-2xl font-semibold mb-3">
            {t.heroSubheading}
          </p>
          <p className="font-inter text-base md:text-lg mb-10" style={{ color: 'rgba(255,255,255,0.9)' }}>
            {t.heroTagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-3 font-inter font-bold rounded-md text-base text-white transition-all"
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
              {t.bookAppointment}
            </Link>
            <a
              href="https://wa.me/919482929768"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gold text-gold font-inter font-bold rounded-md transition-all text-base bg-black/20"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
                (e.currentTarget as HTMLElement).style.borderColor = '#25D366';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.2)';
                (e.currentTarget as HTMLElement).style.color = '#d4af37';
                (e.currentTarget as HTMLElement).style.borderColor = '#d4af37';
              }}
            >
              {t.whatsappNow}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} style={{ backgroundColor: '#f8f9fb' }} className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <StatCard end={5} suffix="+" label={t.statsYears} isVisible={statsVisible} />
            <StatCard end={500} suffix="+" label={t.statsCases} isVisible={statsVisible} />
            <StatCard end={100} suffix="%" label={t.statsDedication} isVisible={statsVisible} />
            <StatCard end={5} suffix="" label={t.statsServices} isVisible={statsVisible} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-playfair text-4xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
              {t.servicesTitle}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((s) => (
              <ServiceCard
                key={s.key}
                icon={s.icon}
                title={t[s.key]}
                desc={t[s.descKey]}
                onClick={handleServiceCardClick}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/appointment"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-8 py-3 font-inter font-bold rounded-md text-white transition-all"
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
              {t.viewAllServices}
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section style={{ backgroundColor: '#f8f9fb' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 border border-gold/60 rounded-full text-gold text-xs font-inter mb-4 tracking-widest uppercase">
              {t.aboutLabel}
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
              {t.aboutTitle}
            </h2>
            <p className="font-inter leading-relaxed mb-6" style={{ color: '#555555' }}>
              {t.aboutDesc}
            </p>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-6 py-2 border-2 border-gold text-gold font-inter font-semibold rounded-md transition-all"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#d4af37';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#d4af37';
              }}
            >
              {t.learnMore}
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="rounded-2xl p-8 w-full max-w-sm"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              <div className="text-gold text-5xl font-playfair font-bold mb-4">"</div>
              <p className="font-inter italic leading-relaxed mb-4" style={{ color: '#555555' }}>
                {t.quote}
              </p>
              <div className="font-playfair font-bold" style={{ color: '#1a1a1a' }}>
                — {t.quoteName}
              </div>
              <div className="text-xs font-inter mt-1" style={{ color: '#d4af37' }}>
                {t.quoteTitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
            {t.ctaTitle}
          </h2>
          <p className="font-inter mb-8" style={{ color: '#555555' }}>
            {t.ctaDesc}
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
            {t.needLegalHelp}
          </Link>
        </div>
      </section>
    </>
  );
}
