
import Hero from '@/components/Hero';
import KeyHighlights from '@/components/KeyHighlights';
import Performance from '@/components/Performance';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <KeyHighlights />
      <Performance />
      
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gold-gradient">Ready to optimize your crypto portfolio?</span>
              </h2>
              <p className="text-zinc-300 mb-8">
                Take the first step towards a structured, risk-managed approach to digital asset investments. Our team of experts is ready to help you navigate the complexities of crypto investing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800 p-5 rounded-lg">
                  <h3 className="text-watermark-gold font-semibold mb-2">For Investors</h3>
                  <p className="text-sm text-zinc-400">
                    Diversify your portfolio with our market-neutral strategies that deliver consistent returns.
                  </p>
                </div>
                <div className="bg-zinc-800 p-5 rounded-lg">
                  <h3 className="text-watermark-gold font-semibold mb-2">For Professionals</h3>
                  <p className="text-sm text-zinc-400">
                    Join our team of experts and contribute to the future of digital asset management.
                  </p>
                </div>
              </div>
              <Button asChild className="gold-button rounded-md">
                <Link to="/about">Learn More About Us <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
