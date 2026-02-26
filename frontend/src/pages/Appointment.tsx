import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '919482929768';

const caseTypes = [
  'Civil Case',
  'Criminal Defence',
  'Family Law',
  'Property Matter',
  'Documentation',
  'Other',
];

export default function Appointment() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    caseType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.caseType) newErrors.caseType = 'Please select a case type';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const msg = `Hello Advocate Nishanth H C,\n\nI would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nCase Type: ${form.caseType}${form.message ? `\nDetails: ${form.message}` : ''}\n\nPlease let me know your availability.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Nishanth HC Advocate',
    description: 'Book an appointment with Advocate Nishanth H C',
    telephone: '+919482929768',
  };

  return (
    <>
      <SEO
        title="Book Appointment | Advocate Nishanth H C"
        description="Book a legal consultation with Advocate Nishanth H C in Chikkamagaluru, Karnataka. Fill the form to connect via WhatsApp."
        keywords="book appointment advocate Chikkamagaluru, legal consultation Karnataka"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section
        style={{ backgroundColor: '#f8f9fb', borderBottom: '1px solid rgba(212,175,55,0.2)' }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-gold text-xs font-inter mb-4 tracking-widest uppercase">
            Appointment
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
            Book an Appointment
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
                Get in Touch
              </h2>
              <p className="font-inter leading-relaxed mb-8" style={{ color: '#555555' }}>
                Reach out to Advocate Nishanth H C for a consultation. Fill in the form and connect directly via WhatsApp for a quick response.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="w-5 h-5 text-gold" />,
                    label: 'Phone',
                    value: '+91 94829 29768',
                    href: 'tel:+919482929768',
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-gold" />,
                    label: 'Email',
                    value: 'adv.nishanthhc@gmail.com',
                    href: 'mailto:adv.nishanthhc@gmail.com',
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5 text-gold" />,
                    label: 'WhatsApp',
                    value: '+91 94829 29768',
                    href: `https://wa.me/${WHATSAPP_NUMBER}`,
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-gold" />,
                    label: 'Address',
                    value:
                      '#T, 6th Cross Road, Block 9, Ward No 2, Vasathi Badavane, Hiremgaluru, Chikkamagaluru, Karnataka',
                    href: null,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(212,175,55,0.15)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-inter font-semibold uppercase tracking-wide text-gold mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-inter transition-colors hover:text-gold"
                          style={{ color: '#555555' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-inter" style={{ color: '#555555' }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Now button */}
              <div className="mt-8">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-inter font-bold text-white transition-all"
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
            </div>

            {/* Form */}
            <div>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                }}
              >
                <h2 className="font-playfair text-2xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
                  Appointment Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-inter font-medium mb-1" style={{ color: '#1a1a1a' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg text-sm font-inter outline-none transition-all"
                      style={{
                        border: errors.name ? '1px solid #ef4444' : '1px solid rgba(212,175,55,0.3)',
                        backgroundColor: '#ffffff',
                        color: '#1a1a1a',
                      }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#d4af37';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(212,175,55,0.1)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = errors.name ? '#ef4444' : 'rgba(212,175,55,0.3)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-inter font-medium mb-1" style={{ color: '#1a1a1a' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 rounded-lg text-sm font-inter outline-none transition-all"
                      style={{
                        border: errors.phone ? '1px solid #ef4444' : '1px solid rgba(212,175,55,0.3)',
                        backgroundColor: '#ffffff',
                        color: '#1a1a1a',
                      }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#d4af37';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(212,175,55,0.1)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = errors.phone ? '#ef4444' : 'rgba(212,175,55,0.3)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Case Type */}
                  <div>
                    <label className="block text-sm font-inter font-medium mb-1" style={{ color: '#1a1a1a' }}>
                      Case Type *
                    </label>
                    <select
                      name="caseType"
                      value={form.caseType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg text-sm font-inter outline-none transition-all"
                      style={{
                        border: errors.caseType ? '1px solid #ef4444' : '1px solid rgba(212,175,55,0.3)',
                        backgroundColor: '#ffffff',
                        color: form.caseType ? '#1a1a1a' : '#888888',
                      }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#d4af37';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(212,175,55,0.1)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = errors.caseType ? '#ef4444' : 'rgba(212,175,55,0.3)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Select case type</option>
                      {caseTypes.map((ct) => (
                        <option key={ct} value={ct}>
                          {ct}
                        </option>
                      ))}
                    </select>
                    {errors.caseType && <p className="text-red-500 text-xs mt-1">{errors.caseType}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-inter font-medium mb-1" style={{ color: '#1a1a1a' }}>
                      Additional Details (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your legal matter..."
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg text-sm font-inter outline-none transition-all resize-none"
                      style={{
                        border: '1px solid rgba(212,175,55,0.3)',
                        backgroundColor: '#ffffff',
                        color: '#1a1a1a',
                      }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#d4af37';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(212,175,55,0.1)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.3)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-inter font-bold text-white transition-all flex items-center justify-center gap-2"
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
                    Book Appointment via WhatsApp
                  </button>
                  <p className="text-xs font-inter text-center" style={{ color: '#888888' }}>
                    This will open WhatsApp with your details pre-filled.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
