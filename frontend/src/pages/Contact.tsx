import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroVisible = useScrollReveal(heroRef);
  const cardsVisible = useScrollReveal(cardsRef);
  const mapVisible = useScrollReveal(mapRef);
  const ctaVisible = useScrollReveal(ctaRef);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Nishanth HC Advocate',
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
        title="Contact | Advocate Nishanth H C | Chikkamagaluru"
        description="Contact Advocate Nishanth H C in Chikkamagaluru, Karnataka. Phone, email, WhatsApp, and office location."
        keywords="contact advocate Chikkamagaluru, lawyer contact Karnataka, Nishanth HC advocate"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-site-dark py-20 border-b border-gold/20">
        <div
          ref={heroRef}
          className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-gold text-xs font-inter mb-4 tracking-widest uppercase">
            Contact
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Nishanth HC Advocate
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-site-bg">
        <div
          ref={cardsRef}
          className={`max-w-5xl mx-auto px-4 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="glassmorphism rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-playfair font-bold text-white text-lg mb-2">Phone</h3>
              <a
                href="tel:+919482929768"
                className="text-gold hover:underline font-inter text-sm"
              >
                +91 94829 29768
              </a>
            </div>

            {/* Email */}
            <div className="glassmorphism rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-playfair font-bold text-white text-lg mb-2">Email</h3>
              <a
                href="mailto:adv.nishanthhc@gmail.com"
                className="text-gold hover:underline font-inter text-sm break-all"
              >
                adv.nishanthhc@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="glassmorphism rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d4af37" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-playfair font-bold text-white text-lg mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919482929768"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-gold text-site-dark font-inter font-semibold text-sm rounded-md hover:bg-gold-light transition-all"
              >
                Click to Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="py-12 bg-site-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-gold" />
            <h2 className="font-playfair text-2xl font-bold text-white">Office Address</h2>
          </div>
          <p className="text-gray-300 font-inter leading-relaxed">
            Nishanth HC Advocate, #T, 6th Cross Road, Block 9, Ward No 2,<br />
            Vasathi Badavane, Hiremgaluru, Chikkamagaluru,<br />
            Karnataka, India
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-site-bg">
        <div
          ref={mapRef}
          className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-700 ${
            mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Vasathi+Badavane,+Hiremgaluru,+Chikkamagaluru,+Karnataka,+India&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              title="Office Location Map"
              className="block"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-site-dark">
        <div
          ref={ctaRef}
          className={`max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch via WhatsApp
          </h2>
          <p className="text-gray-400 font-inter mb-8">
            Quick response guaranteed. Chat with Advocate Nishanth H C directly.
          </p>
          <a
            href="https://wa.me/919482929768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 bg-gold text-site-dark font-inter font-bold rounded-md hover:bg-gold-light transition-all shadow-gold-glow text-base"
          >
            WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
