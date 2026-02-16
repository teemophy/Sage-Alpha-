
import React from 'react';

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          <div className="glass p-10 rounded-2xl border-green/20 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-32 h-32 text-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            </div>
            <h3 className="font-space text-3xl font-bold mb-6 text-green">What We Are</h3>
            <ul className="space-y-4 text-slate-300 flex-grow">
              <li className="flex gap-3">
                <span className="text-green font-bold">01</span>
                <span>Proprietary quantitative research and execution platform.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green font-bold">02</span>
                <span>Designer of algorithmic trading strategies for liquid markets.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green font-bold">03</span>
                <span>Focused on intellectual property and execution discipline.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green font-bold">04</span>
                <span>Builder of verifiable, real-money track records.</span>
              </li>
            </ul>
          </div>

          <div className="glass p-10 rounded-2xl border-red-500/20 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-32 h-32 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            </div>
            <h3 className="font-space text-3xl font-bold mb-6 text-red-500">What We Are Not</h3>
            <ul className="space-y-4 text-slate-300 flex-grow">
              <li className="flex gap-3 line-through decoration-red-500/30">
                <span className="text-red-500 font-bold">01</span>
                <span>A hedge fund or retail-facing investment brand.</span>
              </li>
              <li className="flex gap-3 line-through decoration-red-500/30">
                <span className="text-red-500 font-bold">02</span>
                <span>A wealth preservation or management firm.</span>
              </li>
              <li className="flex gap-3 line-through decoration-red-500/30">
                <span className="text-red-500 font-bold">03</span>
                <span>Provider of lifestyle management, taxes, or business advisory.</span>
              </li>
              <li className="flex gap-3 line-through decoration-red-500/30">
                <span className="text-red-500 font-bold">04</span>
                <span>Sellers of narratives, ownership stories, or promised returns.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Identity;
