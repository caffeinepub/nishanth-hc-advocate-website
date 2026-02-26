import { useState, useRef } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  phone: string;
  date: string;
  caseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  caseType?: string;
  message?: string;
}

const caseTypes = [
  'Civil Case',
  'Criminal Defence',
  'Family Law',
  'Property & Registration',
  'Legal Documentation',
  'Other',
];

export default function Appointment() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    caseType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const heroVisible = useScrollReveal(heroRef);
  const formVisible = useScrollReveal(formRef);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!form.date) newErrors.date = 'Preferred date is required.';
    if (!form.caseType) newErrors.caseType = 'Please select a case type.';
    if (!form.message.trim()) newErrors.message = 'Please provide details about your case.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = `Hello Advocate Nishanth H C, Name: ${form.name}, Phone: ${form.phone}, Date: ${form.date}, Case Type: ${form.caseType}, Details: ${form.message}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919482929768?text=${encoded}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-site-card border ${
      errors[field] ? 'border-red-500' : 'border-white/10 focus:border-gold'
    } rounded-lg px-4 py-3 text-white font-inter text-sm outline-none transition-colors placeholder-gray-500`;

  return (
    <>
      <SEO
        title="Book Appointment | Advocate Nishanth H C"
        description="Book a legal consultation appointment with Advocate Nishanth H C in Chikkamagaluru, Karnataka."
        keywords="book appointment advocate Chikkamagaluru, legal consultation Karnataka"
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
            Appointment
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Book Appointment with Advocate Nishanth H C
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-site-bg">
        <div
          ref={formRef}
          className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-site-card rounded-xl p-5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-inter font-semibold text-sm mb-1">Phone</p>
                    <a href="tel:+919482929768" className="text-gold hover:underline font-inter text-sm">
                      +91 94829 29768
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-site-card rounded-xl p-5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-inter font-semibold text-sm mb-1">Email</p>
                    <a href="mailto:adv.nishanthhc@gmail.com" className="text-gold hover:underline font-inter text-sm">
                      adv.nishanthhc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-site-card rounded-xl p-5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-inter font-semibold text-sm mb-1">Office Hours</p>
                    <p className="text-gray-400 font-inter text-sm">Monday – Saturday: 10:00 AM – 6:00 PM</p>
                    <p className="text-gray-400 font-inter text-sm">Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 glassmorphism rounded-xl p-6">
                <p className="font-playfair text-white italic text-base leading-relaxed">
                  "Your legal matter deserves prompt attention. Book your appointment and let us help you navigate the legal system."
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-6">Appointment Form</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-gray-300 font-inter text-sm font-medium mb-1.5">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-400 text-xs font-inter mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 font-inter text-sm font-medium mb-1.5">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-400 text-xs font-inter mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 font-inter text-sm font-medium mb-1.5">
                    Preferred Date <span className="text-gold">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass('date')}
                  />
                  {errors.date && <p className="text-red-400 text-xs font-inter mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 font-inter text-sm font-medium mb-1.5">
                    Case Type <span className="text-gold">*</span>
                  </label>
                  <select
                    name="caseType"
                    value={form.caseType}
                    onChange={handleChange}
                    className={inputClass('caseType')}
                  >
                    <option value="" disabled>Select case type</option>
                    {caseTypes.map((ct) => (
                      <option key={ct} value={ct}>{ct}</option>
                    ))}
                  </select>
                  {errors.caseType && <p className="text-red-400 text-xs font-inter mt-1">{errors.caseType}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 font-inter text-sm font-medium mb-1.5">
                    Message / Details <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your legal matter..."
                    className={inputClass('message')}
                  />
                  {errors.message && <p className="text-red-400 text-xs font-inter mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-site-dark font-inter font-bold rounded-lg hover:bg-gold-light transition-all shadow-gold-glow flex items-center justify-center gap-2 text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
