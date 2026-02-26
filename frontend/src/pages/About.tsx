import { useRef, useState } from 'react';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

const IMG1 = 'https://i.postimg.cc/PrqW5r8P/Whats_App_Image_2026_02_26_at_6_16_07_PM.jpg';
const IMG2 = 'https://i.postimg.cc/RV0rRf2D/Whats-App-Image-2026-02-26-at-7-46-51-PM.jpg';

const practiceAreas = [
  'Civil Cases & Property Disputes',
  'Criminal Defence & Bail Applications',
  'Family Law & Matrimonial Cases',
  'Property Registration & Documentation',
  'Legal Notices & Agreements',
  'Anticipatory Bail & Sessions Court',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Nishanth HC Advocate',
  description: 'About Advocate Nishanth H C — Legal Services in Chikkamagaluru',
  telephone: '+919482929768',
  email: 'adv.nishanthhc@gmail.com',
};

export default function About() {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const heroVisible = useScrollReveal(heroRef);
  const bioVisible = useScrollReveal(bioRef);
  const quoteVisible = useScrollReveal(quoteRef);

  return (
    <>
      <SEO
        title="About Advocate Nishanth H C | Legal Services in Chikkamagaluru"
        description="Learn about Advocate Nishanth H C — 5+ years of legal experience in Chikkamagaluru, Karnataka. Civil, Criminal, Family, and Property law specialist."
        keywords="about Nishanth HC advocate, lawyer Chikkamagaluru, Karnataka advocate"
        ogImage={IMG1}
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="bg-site-dark py-20 border-b border-gold/20">
        <div
          ref={heroRef}
          className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-gold text-xs font-inter mb-4 tracking-widest uppercase">
            About
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            About Advocate Nishanth H C
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-site-bg">
        <div
          ref={bioRef}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${
            bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              {!img1Error ? (
                <img
                  src={IMG1}
                  alt="Advocate Nishanth H C"
                  className="w-full rounded-2xl shadow-2xl object-cover max-h-[500px]"
                  onError={() => setImg1Error(true)}
                />
              ) : (
                <div className="w-full h-80 rounded-2xl border-2 border-gold/40 bg-site-card flex items-center justify-center">
                  <span className="text-gold font-playfair text-xl">Advocate Nishanth H C</span>
                </div>
              )}
              <div className="absolute -bottom-4 -right-4 bg-gold text-site-dark px-4 py-2 rounded-lg font-inter font-bold text-sm shadow-gold-glow">
                5+ Years Experience
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-white mb-2">
                Nishanth H C
              </h2>
              <p className="text-gold font-inter font-semibold mb-1">Advocate & Legal Consultant</p>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <p className="text-gray-300 font-inter leading-relaxed mb-4">
                Advocate Nishanth H C is a dedicated legal professional based in Chikkamagaluru, Karnataka, with over 5 years of experience in providing comprehensive legal services to individuals and businesses.
              </p>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                With a strong foundation in civil, criminal, and family law, Advocate Nishanth H C is committed to delivering justice with integrity, diligence, and a client-first approach.
              </p>

              <h3 className="font-playfair text-xl font-bold text-white mb-4">Areas of Practice</h3>
              <ul className="space-y-2 mb-6">
                {practiceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-gray-300 font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>

              <div className="bg-site-card rounded-xl p-5 border border-white/10 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm font-inter">
                    #T, 6th Cross Road, Block 9, Ward No 2, Vasathi Badavane, Hiremgaluru, Chikkamagaluru, Karnataka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a href="tel:+919482929768" className="text-gray-400 hover:text-gold text-sm font-inter transition-colors">
                    +91 94829 29768
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <a href="mailto:adv.nishanthhc@gmail.com" className="text-gray-400 hover:text-gold text-sm font-inter transition-colors">
                    adv.nishanthhc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="py-16 bg-site-dark">
        <div className="max-w-4xl mx-auto px-4">
          {!img2Error ? (
            <img
              src={IMG2}
              alt="Advocate Nishanth H C in court"
              className="w-full rounded-2xl shadow-2xl object-cover max-h-[450px]"
              onError={() => setImg2Error(true)}
            />
          ) : (
            <div className="w-full h-64 rounded-2xl border-2 border-gold/40 bg-site-card flex items-center justify-center">
              <span className="text-gold font-playfair text-xl">Professional Photo</span>
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-site-bg">
        <div
          ref={quoteRef}
          className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${
            quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glassmorphism rounded-2xl p-10 text-center">
            <div className="text-gold text-5xl font-playfair mb-4">"</div>
            <p className="font-playfair text-xl text-white italic leading-relaxed mb-6">
              Every client deserves not just legal representation, but a trusted advisor who stands by them through every step of their legal journey.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold font-inter font-semibold text-sm">Advocate Nishanth H C</span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
