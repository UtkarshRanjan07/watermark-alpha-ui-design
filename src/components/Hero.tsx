
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center w-full overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90 z-10"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-watermark-gold opacity-20 blur-3xl z-0 animate-float"></div>
      </div>

      <div className="container relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-10">
          <img 
            src="/lovable-uploads/3a96efd8-34e7-4870-947c-9ab9f4346c48.png" 
            alt="Watermark Alpha Logo" 
            className="mb-6 w-40 md:w-56 h-auto animate-fade-in" 
          />
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            <span className="gold-gradient">Global Digital Asset Management</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in">
            Watermark Alpha offers a portfolio management service that delivers risk-managed, tax-optimized exposure to digital (crypto) assets, leveraging a structured investment approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button asChild className="gold-button px-8 py-6 rounded-md text-lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" className="border-watermark-gold text-watermark-gold hover:bg-watermark-gold/10 px-8 py-6 rounded-md text-lg">
              <Link to="/contact">Join Watermark Alpha</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-watermark-gold text-sm mb-2">Explore</span>
        <svg className="w-6 h-6 text-watermark-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
