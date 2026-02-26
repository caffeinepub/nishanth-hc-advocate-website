import { useRef, useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
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
    <div className="glassmorphism rounded-xl p-6 text-center">
      <div className="font-playfair text-4xl font-bold text-gold mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-gray-300 text-sm font-inter">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
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
      className="tilt-container bg-site-card border border-white/10 hover:border-gold/60 rounded-xl p-6 cursor-default transition-all duration-300 hover:shadow-gold-glow"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-playfair font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm font-inter leading-relaxed">{desc}</p>
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

  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem('nhc-lang') as Language | null;
    if (saved && ['en', 'kn', 'hi'].includes(saved)) setLang(saved);
  }, []);

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('nhc-lang', l);
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
          <div className="absolute inset-0 bg-site-dark border-4 border-gold/40" />
        )}
        <div className="absolute inset-0 bg-black/65" />

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
          <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-gold text-xs font-inter mb-6 tracking-widest uppercase">
            Chikkamagaluru, Karnataka
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {t.heroHeading}
          </h1>
          <p className="text-gold font-inter text-xl md:text-2xl font-semibold mb-3">
            {t.heroSubheading}
          </p>
          <p className="text-gray-300 font-inter text-base md:text-lg mb-10">{t.heroTagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="px-8 py-3 bg-gold text-site-dark font-inter font-bold rounded-md hover:bg-gold-light transition-all shadow-gold-glow text-base"
            >
              {t.bookAppointment}
            </Link>
            <a
              href="https://wa.me/919482929768"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gold text-gold font-inter font-bold rounded-md hover:bg-gold hover:text-site-dark transition-all text-base"
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
      <section ref={statsRef} className="py-16 bg-site-dark">
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
      <section ref={servicesRef} className="py-20 bg-site-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-playfair text-4xl font-bold text-white mb-3">{t.servicesTitle}</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((s) => (
              <ServiceCard key={s.key} icon={s.icon} title={t[s.key]} desc={t[s.descKey]} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/appointment"
              className="inline-block px-8 py-3 bg-gold text-site-dark font-inter font-bold rounded-md hover:bg-gold-light transition-all shadow-gold-glow"
            >
              {t.bookAppointment}
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-site-dark">
        <div className="max-w-3xl mx-auto px-4">
          <div className="glassmorphism rounded-2xl p-10 text-center">
            <div className="text-gold text-5xl font-playfair mb-4">"</div>
            <p className="font-playfair text-xl text-white italic leading-relaxed mb-6">
              Justice is not just a word — it is a commitment I make to every client who walks
              through my door.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold font-inter font-semibold text-sm">
                Advocate Nishanth H C
              </span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-site-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-gray-400 font-inter mb-8 text-lg">
            Contact Advocate Nishanth H C today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="px-8 py-3 bg-gold text-site-dark font-inter font-bold rounded-md hover:bg-gold-light transition-all shadow-gold-glow"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-gold text-gold font-inter font-bold rounded-md hover:bg-gold hover:text-site-dark transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
