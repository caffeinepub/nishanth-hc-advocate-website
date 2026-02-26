import { useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

const HERO_IMAGE =
  'https://i.postimg.cc/ncL4hcQ9/Whats_App_Image_2026_02_26_at_6_16_08_PM_(1).jpg';

const services = [
  {
    icon: '⚖️',
    title: 'Civil Cases',
    description: 'Expert handling of all civil matters with strategic legal approach.',
    items: [
      'Property Disputes & Injunctions',
      'Recovery Suits',
      'Civil Appeals',
      'Execution Petitions',
      'Declaratory Suits',
    ],
  },
  {
    icon: '🛡️',
    title: 'Criminal Defence',
    description: 'Strong criminal defence representation at all court levels.',
    items: [
      'Bail Applications',
      'Anticipatory Bail',
      'Criminal Trials',
      'Sessions Court Matters',
      'High Court Appeals',
    ],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Law',
    description: 'Sensitive and professional handling of family legal matters.',
    items: [
      'Divorce & Separation',
      'Maintenance & Alimony',
      'Child Custody',
      'Adoption Proceedings',
      'Domestic Violence Cases',
    ],
  },
  {
    icon: '🏠',
    title: 'Property & Registration',
    description: 'Complete property legal services from documentation to registration.',
    items: [
      'Sale Deeds & Gift Deeds',
      'Property Registration',
      'Title Verification',
      'Encumbrance Certificates',
      'Partition Suits',
    ],
  },
  {
    icon: '📄',
    title: 'Legal Documentation',
    description: 'Professional drafting of all legal documents and agreements.',
    items: [
      'Legal Notices',
      'Affidavits',
      'Agreements & Contracts',
      'Power of Attorney',
      'Memorandum of Understanding',
    ],
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    const y = -(((e.clientX - rect.left) / rect.width - 0.5) * 8);
    setTilt({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="tilt-container bg-site-card border border-white/10 hover:border-gold/60 rounded-xl p-6 transition-all duration-300 hover:shadow-gold-glow"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-playfair font-bold text-white text-xl mb-2">{service.title}</h3>
      <p className="text-gray-400 font-inter text-sm mb-4 leading-relaxed">{service.description}</p>
      <ul className="space-y-1.5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-gray-300 text-sm font-inter">
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Cases() {
  const [imgError, setImgError] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroVisible = useScrollReveal(heroRef);
  const cardsVisible = useScrollReveal(cardsRef);
  const ctaVisible = useScrollReveal(ctaRef);

  return (
    <>
      <SEO
        title="Legal Services | Advocate Nishanth H C | Chikkamagaluru"
        description="Comprehensive legal services by Advocate Nishanth H C — Civil, Criminal, Family, Property & Documentation in Chikkamagaluru, Karnataka."
        keywords="legal services Chikkamagaluru, civil cases Karnataka, criminal defence, family law, property registration"
        ogImage={HERO_IMAGE}
      />

      {/* Hero Banner */}
      <section className="relative py-28 overflow-hidden">
        {!imgError ? (
          <img
            src={HERO_IMAGE}
            alt="Legal Services"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-site-dark" />
        )}
        <div className="absolute inset-0 bg-black/70" />
        <div
          ref={heroRef}
          className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-gold text-xs font-inter mb-4 tracking-widest uppercase">
            Our Services
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Legal Services by Advocate Nishanth H C
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-site-bg">
        <div
          ref={cardsRef}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-site-dark">
        <div
          ref={ctaRef}
          className={`max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Need Legal Help?
          </h2>
          <p className="text-gray-400 font-inter mb-8">
            Book a consultation with Advocate Nishanth H C today.
          </p>
          <Link
            to="/appointment"
            className="inline-block px-10 py-3 bg-gold text-site-dark font-inter font-bold rounded-md hover:bg-gold-light transition-all shadow-gold-glow text-base"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
