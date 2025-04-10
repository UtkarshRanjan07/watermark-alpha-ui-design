
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="bg-black text-white pt-20">
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            <span className="gold-gradient">Get in Touch</span>
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
            We are here to help you navigate the world of digital asset investments with confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center text-center md:col-span-1">
              <div className="w-16 h-16 bg-watermark-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-watermark-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-zinc-400 mb-4">For general inquiries and information</p>
              <a 
                href="mailto:crypto@watermarkalpha.org" 
                className="text-watermark-gold hover:underline font-medium"
              >
                crypto@watermarkalpha.org
              </a>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center text-center md:col-span-1">
              <div className="w-16 h-16 bg-watermark-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-watermark-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-zinc-400 mb-4">Direct line for urgent matters</p>
              <a 
                href="tel:+918877990038" 
                className="text-watermark-gold hover:underline font-medium"
              >
                +91 88779 90038
              </a>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center text-center md:col-span-1">
              <div className="w-16 h-16 bg-watermark-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Linkedin className="h-8 w-8 text-watermark-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-zinc-400 mb-4">Connect with us on social platforms</p>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-watermark-gold hover:bg-transparent">
                  <a href="https://www.linkedin.com/in/harsh-dalmia-ab46bba3/" target="_blank" rel="noreferrer">
                    <Linkedin size={18} className="text-zinc-400 hover:text-watermark-gold" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-watermark-gold hover:bg-transparent">
                  <a href="https://x.com/KushaalPatel" target="_blank" rel="noreferrer">
                    <Twitter size={18} className="text-zinc-400 hover:text-watermark-gold" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number (optional)"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-watermark-gold"
                  >
                    <option value="" disabled>Select subject</option>
                    <option value="Investment Inquiry">Investment Inquiry</option>
                    <option value="Job Application">Job Application</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows={6}
                    className="bg-zinc-800 border-zinc-700 text-white resize-none"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="gold-button px-8 rounded-md"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
