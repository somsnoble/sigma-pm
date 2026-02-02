
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold px-1">
        {label}
      </label>
      <input
        {...props}
        className={`bg-zinc-950 border border-zinc-800 focus:border-white focus:ring-0 text-white px-4 py-3 rounded-none outline-none transition-all duration-300 placeholder:text-zinc-700 text-sm ${className}`}
      />
      {error && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{error}</p>}
    </div>
  );
};
