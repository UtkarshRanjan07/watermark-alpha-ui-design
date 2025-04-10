
import { useState } from 'react';
import { Check, TrendingUp, Shield, FileText, BarChartHorizontal, Globe } from 'lucide-react';

const highlights = [
  {
    title: "Market-neutral strategies",
    description: "Generate consistent returns regardless of market conditions",
    icon: <TrendingUp className="h-6 w-6 text-watermark-gold" />
  },
  {
    title: "Transparent, non-custodial structure",
    description: "Your assets remain with you at all times",
    icon: <Shield className="h-6 w-6 text-watermark-gold" />
  },
  {
    title: "Regulatory-compliant & tax-efficient",
    description: "Investment framework designed with compliance in mind",
    icon: <FileText className="h-6 w-6 text-watermark-gold" />
  },
  {
    title: "Institutional-grade risk management",
    description: "Advanced risk mitigation strategies to protect your investments",
    icon: <BarChartHorizontal className="h-6 w-6 text-watermark-gold" />
  },
  {
    title: "Optimised for local jurisdictions",
    description: "Portfolios tailored for specific jurisdictions, asset availability and tax liabilities",
    icon: <Globe className="h-6 w-6 text-watermark-gold" />
  }
];

const KeyHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gold-gradient">Key Highlights</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-3 bg-zinc-800 rounded-lg inline-flex mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {highlight.title}
              </h3>
              <p className="text-zinc-400">
                {highlight.description}
              </p>
              <div className="flex items-center mt-4">
                <Check 
                  className={`w-4 h-4 mr-2 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-watermark-gold' : 'text-zinc-500'
                  }`} 
                />
                <span className={`text-sm transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-watermark-gold' : 'text-zinc-500'
                }`}>
                  Watermark Alpha Advantage
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
