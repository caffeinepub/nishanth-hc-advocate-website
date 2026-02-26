import { useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

const WHATSAPP_NUMBER = '919482929768';
const HERO_IMAGE = 'https://i.postimg.cc/dt02VtTd/Whats_App_Image_2026_02_26_at_6_16_08_PM.jpg';

const contactCards = [
  {
    icon: <Phone className="w-6 h-6 text-gold" />,
    title: 'Phone',
    value: '+91 94829 29768',
    href: 'tel:+919482929768',
    desc: 'Call for immediate assistance',
  },
  {
    icon: <Mail className="w-6 h-6 text-gold" />,
    title: 'Email',
    value: 'adv.nishanthhc@gmail.com',
    href: 'mailto:adv.nishanthhc@gmail.com',
    desc: 'Send your queries via email',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-gold" />,
    title: 'WhatsApp',
    value: '+91 94829 29768',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    desc: 'Chat directly on WhatsApp',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Nishanth HC Advocate',
  description: 'Contact Advocate Nishanth H C in Chikkamagaluru, Karnataka',
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

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const heroVisible = useScrollReveal(heroRef);
  const cardsVisible = useScrollReveal(cardsRef);
  const mapVisible = useScrollReveal(mapRef);

  return (
    <>
      <SEO
        title="Contact | Advocate Nishanth H C"
        description="Contact Advocate Nishanth H C in Chikkamagaluru, Karnataka. Phone, email, WhatsApp, and office address."
        keywords="contact advocate Chikkamagaluru, lawyer contact Karnataka, Nishanth HC contact"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Contact"
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
            Contact
          </div>
          <h1
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Get in Touch
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={cardsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block p-6 rounded-xl transition-all duration-300 group"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(212,175,55,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.15)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
                >
                  {card.icon}
                </div>
                <h3 className="font-playfair font-bold text-lg mb-1" style={{ color: '#1a1a1a' }}>
                  {card.title}
                </h3>
                <p className="font-inter font-medium text-sm mb-1 text-gold">{card.value}</p>
                <p className="font-inter text-xs" style={{ color: '#888888' }}>{card.desc}</p>
              </a>
            ))}
          </div>

          {/* Address Block */}
          <div
            className="rounded-xl p-6 mb-12 flex items-start gap-4"
            style={{
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
            >
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-playfair font-bold text-lg mb-1" style={{ color: '#1a1a1a' }}>
                Office Address
              </h3>
              <p className="font-inter text-sm leading-relaxed" style={{ color: '#555555' }}>
                Nishanth HC Advocate, #T, 6th Cross Road, Block 9, Ward No 2, Vasathi Badavane,
                Hiremgaluru, Chikkamagaluru, Karnataka, India — 577 101
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div
            ref={mapRef}
            className={`rounded-2xl overflow-hidden transition-all duration-700 ${
              mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d75.7720!3d13.3161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE4JzU4LjAiTiA3NcKwNDYnMTkuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ backgroundColor: '#f8f9fb' }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
            Need Immediate Assistance?
          </h2>
          <p className="font-inter mb-8" style={{ color: '#555555' }}>
            Connect with Advocate Nishanth H C directly on WhatsApp for a quick response.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-inter font-bold text-white transition-all"
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
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
