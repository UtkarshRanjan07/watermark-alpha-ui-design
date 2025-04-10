
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, BarChart2, TrendingUp, Briefcase, Target, Shield } from 'lucide-react';

const Strategy = () => {
  return (
    <main className="bg-black text-white pt-20">
      {/* Investment Strategy */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            <span className="gold-gradient">Investment Strategy</span>
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
            A structured approach to crypto investing that focuses on risk management, compliance, and long-term growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-xl p-6 transition-all duration-300">
              <Target className="h-12 w-12 text-watermark-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market-Neutral Trading</h3>
              <p className="text-zinc-400 mb-4">
                Strategies designed to generate returns regardless of overall market direction, reducing volatility and downside risk.
              </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-xl p-6 transition-all duration-300">
              <Briefcase className="h-12 w-12 text-watermark-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tactical Sector-Specific Allocation</h3>
              <p className="text-zinc-400 mb-4">
                Strategic allocation to promising sectors within the digital asset ecosystem based on thorough research and market trends.
              </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-xl p-6 transition-all duration-300">
              <BarChart2 className="h-12 w-12 text-watermark-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Derivatives Access</h3>
              <p className="text-zinc-400 mb-4">
                Utilizing derivatives to ensure trend-agnostic all-weather execution, providing consistent returns in various market conditions.
              </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-xl p-6 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-watermark-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tax-Optimized Returns</h3>
              <p className="text-zinc-400 mb-4">
                Trading strategies specifically designed to maximize after-tax returns, considering different tax jurisdictions and regulations.
              </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-xl p-6 transition-all duration-300">
              <ShieldCheck className="h-12 w-12 text-watermark-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Non-Custodial Management</h3>
              <p className="text-zinc-400 mb-4">
                Securely executed via Remote Access to client's portfolios using sub-accounts or APIs without taking custody of assets.
              </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 hover:border-watermark-gold/50 rounded-xl p-6 transition-all duration-300">
              <Shield className="h-12 w-12 text-watermark-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Long & Medium-Term Trades</h3>
              <p className="text-zinc-400 mb-4">
                Focus on sustainable growth over time rather than short-term speculation, reducing risk and enhancing predictability.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="gold-button px-8 py-6 rounded-md text-lg">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Non-Custodial Model */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gold-gradient">Non-Custodial Model</span>
              </h2>
              <h3 className="text-2xl font-semibold mb-4">Your Funds Stay with You</h3>
              
              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-8">
                <p className="text-zinc-300">
                  Watermark Alpha executes trades securely via Remote Access to client's portfolios using sub-accounts or APIs without taking custody.
                </p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Exchange Partnerships</h3>
              
              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-8">
                <p className="text-zinc-300">
                  Watermark Alpha works with the teams of all leading exchanges globally such as Binance, Coinbase, KuCoin, Okex and Indian exchanges such as CoinDCX, CoinSwitch and more.
                </p>
              </div>
              
              <Button asChild className="gold-button rounded-md">
                <Link to="/contact">
                  Explore Our Model <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-watermark-goldDark to-watermark-gold rounded-xl blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                alt="Cryptocurrency Exchange" 
                className="relative rounded-xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="section bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gold-gradient">Risk Management</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Pillars of Risk Management</h3>
              
              <div className="space-y-6">
                <div className="bg-zinc-900 border-l-4 border-watermark-gold rounded-r-xl p-6">
                  <h4 className="font-semibold mb-2">Fundamental Research</h4>
                  <p className="text-zinc-400">
                    Analysing the digital asset's utility, tokenomics, project viability, compliance, team and other immeasurable indicators.
                  </p>
                </div>
                
                <div className="bg-zinc-900 border-l-4 border-watermark-gold rounded-r-xl p-6">
                  <h4 className="font-semibold mb-2">Technical Analysis</h4>
                  <p className="text-zinc-400">
                    Studying market trends, volume, TVL ratios, on-chain and off-chain metrics and other measurable indicators.
                  </p>
                </div>
                
                <div className="bg-zinc-900 border-l-4 border-watermark-gold rounded-r-xl p-6">
                  <h4 className="font-semibold mb-2">Dynamic Hedging</h4>
                  <p className="text-zinc-400">
                    Taking limited exposure to derivatives to mitigate downside risk, and generate returns that are trend agnostic.
                  </p>
                </div>
                
                <div className="bg-zinc-900 border-l-4 border-watermark-gold rounded-r-xl p-6">
                  <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                  <p className="text-zinc-400">
                    Ensuring alignment with domestic regulatory and tax compliance laws as per every client's local jurisdiction.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Risk Limits & Asset Selection</h3>
              
              <div className="bg-zinc-900 rounded-xl p-8 h-full">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-0.5">✓</span>
                    <p className="text-zinc-300">No exposure to microcap or illiquid assets</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-0.5">✓</span>
                    <p className="text-zinc-300">Focus on the top 200 crypto assets by market cap</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-0.5">✓</span>
                    <p className="text-zinc-300">Investments based on availability of assets within the local jurisdiction</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-0.5">✓</span>
                    <p className="text-zinc-300">Exposure only to assets listed on regulated centralised exchanges</p>
                  </li>
                </ul>
                
                <div className="mt-8 p-5 bg-zinc-800 rounded-lg border border-zinc-700">
                  <p className="text-zinc-300 italic">
                    "Our risk management approach combines traditional finance principles with crypto-native methodologies, ensuring that we can capture market opportunities while maintaining strict risk parameters."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Strategy;
