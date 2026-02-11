
import React from 'react';
import { ArrowLeft, Banknote, CheckCircle2 } from 'lucide-react';

interface SelfRechargeProps {
  onBack: () => void;
}

const SelfRecharge: React.FC<SelfRechargeProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#2d3436] relative flex items-center justify-center p-4 overflow-hidden">
      <div 
        className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to top left, #d63031 0%, #d63031 50%, transparent 50.1%)',
          opacity: 0.8,
          transform: 'scale(1.5) translate(25%, 25%)',
          zIndex: 0
        }}
      ></div>

      <div className="w-full max-w-xl bg-white rounded-lg shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 pb-4 text-center">
          <h1 className="text-4xl font-black italic tracking-tighter" style={{
            color: '#3498db',
            textShadow: '2px 2px 0px #2c3e50, -1px -1px 0px #e74c3c, 1px -1px 0px #e74c3c, -1px 1px 0px #e74c3c, 1px 1px 0px #e74c3c',
            WebkitTextStroke: '1px white'
          }}>
            SB POWER ISP
          </h1>
        </div>

        <div className="px-8 pb-8">
          <div className="border border-slate-200 rounded overflow-hidden mb-6">
            <div className="grid grid-cols-2 border-b border-slate-200">
              <div className="p-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200">Name:</div>
              <div className="p-3 text-slate-700 text-sm font-medium">SB POWER ISP</div>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-200">
              <div className="p-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200">UserID:</div>
              <div className="p-3 text-slate-700 text-sm font-medium">2880</div>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-200">
              <div className="p-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200">Previous Balance :</div>
              <div className="p-3 text-slate-700 text-sm font-medium">0</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="p-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200">Amount:</div>
              <div className="p-2">
                <input 
                  type="text" 
                  placeholder="Enter Amount" 
                  className="w-full px-3 py-2 border border-slate-200 rounded text-sm focus:outline-none focus:border-blue-400 placeholder:text-slate-300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-slate-700 font-medium">Choose payment option</h3>
            
            <div className="border-2 border-indigo-700 rounded-md p-4 flex items-center justify-between relative bg-white group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-indigo-700">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 10h18" />
                      <path d="M7 15h.01" />
                      <path d="M11 15h2" />
                   </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Other Cards & MFS</p>
                  <div className="flex items-center gap-1 mt-1">
                     <span className="text-[8px] uppercase font-bold text-slate-400">Verified By</span>
                     <span className="text-blue-500 font-bold text-xs">shurjoPay</span>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-500 text-white rounded-full p-0.5 shadow-md">
                 <CheckCircle2 size={16} />
              </div>
            </div>

            <div className="bg-slate-200/60 rounded p-3 text-[11px] text-slate-600 leading-snug">
              By clicking Pay Now button you agree to our <span className="font-bold text-slate-800">terms of service</span> which is limited to facilitating your payment to <span className="font-bold text-slate-800">SB POWER ISP</span>.
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={onBack}
                className="flex items-center justify-center gap-2 bg-slate-500 text-white py-2.5 rounded font-bold hover:bg-slate-600 transition-colors"
              >
                <ArrowLeft size={18} /> Back
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#2ecc71] text-white py-2.5 rounded font-bold hover:bg-[#27ae60] transition-colors shadow-lg shadow-emerald-100">
                <Banknote size={18} /> Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfRecharge;
