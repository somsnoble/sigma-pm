
import React from 'react';
import { BotForm } from './components/BotForm.tsx';
import { SigmaLogo } from './constants.tsx';
import { Activity, Cpu, Zap, Globe, Shield } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <SigmaLogo />
            <div className="h-6 w-px bg-zinc-800" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Sigma Trades</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <button 
              onClick={() => scrollToSection('strategy')}
              className="hover:text-white transition-colors uppercase font-bold"
            >
              Strategy
            </button>
            <button 
              onClick={() => scrollToSection('infrastructure')}
              className="hover:text-white transition-colors uppercase font-bold"
            >
              Infrastructure
            </button>
            <button 
              onClick={() => scrollToSection('security')}
              className="hover:text-white transition-colors uppercase font-bold"
            >
              Security
            </button>
            <button 
              onClick={() => scrollToSection('deploy')}
              className="border border-zinc-800 px-4 py-2 hover:border-white hover:text-white transition-all uppercase font-bold"
            >
              Client Access
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full mb-8">
            <Activity className="w-3 h-3 text-white" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Node Status: Operational</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-4xl leading-tight mb-8">
            Automate Your Edge. <br />
            <span className="text-zinc-600 italic">The 90&cent; Sniper Strategy.</span>
          </h1>
          
          <p className="text-zinc-500 max-w-xl text-lg md:text-xl font-light leading-relaxed mb-12">
            Institutional-grade cloud-hosted infrastructure for high-frequency execution on Polymarket. Deploy in seconds. Profit indefinitely.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl py-12 border-y border-zinc-900">
            {[
              { label: 'Latency', value: '14ms', icon: Zap },
              { label: 'Uptime', value: '99.9%', icon: Globe },
              { label: 'Encryption', value: '256-bit', icon: Shield },
              { label: 'System', value: 'V3-Core', icon: Cpu }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-4 h-4 text-zinc-600" />
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{stat.label}</span>
                <span className="text-lg font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section id="deploy" className="max-w-7xl mx-auto flex justify-center mb-32 scroll-mt-32">
          <BotForm />
        </section>

        {/* Info Grid */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div id="strategy" className="space-y-4 border-l border-zinc-900 pl-6 scroll-mt-32">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">01 / Quantitative Logic</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
              Our proprietary liquidity sniping algorithms are tuned for probability event hedging. We capture market inefficiencies before retail participants can react.
            </p>
          </div>
          <div id="infrastructure" className="space-y-4 border-l border-zinc-900 pl-6 scroll-mt-32">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">02 / Edge Infrastructure</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
              Deployments run on high-performance compute clusters directly co-located near primary liquidity providers, ensuring sub-20ms execution times.
            </p>
          </div>
          <div id="security" className="space-y-4 border-l border-zinc-900 pl-6 scroll-mt-32">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">03 / Yield Optimization</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
              Profits are automatically settled on the Polygon network and routed to your destination wallet. Non-custodial execution ensures total capital control.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <SigmaLogo />
            <p className="text-[11px] text-zinc-600 uppercase tracking-widest font-bold text-center md:text-left">
              &copy; 2026 SIGMA TRADES. <br />
              QUANTITATIVE EXECUTION SYSTEMS.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Infrastructure</span>
              <button onClick={() => scrollToSection('infrastructure')} className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white font-bold transition-colors text-left">Documentation</button>
              <button onClick={() => scrollToSection('deploy')} className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white font-bold transition-colors text-left">API Keys</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Legal</span>
              <button className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white font-bold transition-colors text-left">Privacy</button>
              <button className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white font-bold transition-colors text-left">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
