
import React, { useState } from 'react';
import { ChevronRight, X, CheckCircle2, Timer, BellRing, ShieldCheck } from 'lucide-react';

interface ClientRenewProps {
  client: any;
  onBack: () => void;
}

const ClientRenew: React.FC<ClientRenewProps> = ({ client, onBack }) => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Precision Voucher Renewal</h2>
          <nav className="flex items-center text-xs font-black text-slate-400 mt-2 uppercase tracking-widest">
            <span>Radius Engine</span>
            <ChevronRight size={14} className="mx-2" />
            <span>Client</span>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#006a4e]">Smart Renew</span>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border-2 border-slate-50 shadow-xl overflow-hidden">
          <div className="p-6 bg-slate-800 text-white flex items-center gap-3">
             <ShieldCheck size={24} />
             <h3 className="font-black uppercase tracking-widest text-sm">Account Synchronization</h3>
          </div>
          <div className="divide-y-2 divide-slate-50 text-sm">
            <RenewRow label="Client Identity:" value={client.cid} isBold />
            <RenewRow label="Current Name:" value={client.name} />
            <RenewRow label="Old Expire Schedule:" value={client.expDate} isStrikethrough />
            <RenewRow label="New Precision Expiry:" value="2026-03-05 22:45:12" isGreen isBold />
            
            <div className="grid grid-cols-2 group">
              <div className="p-4 border-r-2 border-slate-50 bg-slate-50/20 text-slate-400 font-black uppercase tracking-widest text-[10px]">Policy Mode:</div>
              <div className="p-4 text-emerald-600 font-black flex items-center gap-2">
                 <Timer size={16} /> HARD LIMIT SYNC
              </div>
            </div>

            <div className="p-6 space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Voucher Plan</label>
              <div className="flex gap-2">
                <select className="flex-1 px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-black text-slate-800 outline-none focus:border-[#006a4e] transition-all bg-white">
                  <option>30 Days (৳30)</option>
                  <option>15 Days (৳15)</option>
                  <option>07 Days (৳10)</option>
                </select>
                <div className="px-6 py-3.5 bg-emerald-100 text-[#006a4e] rounded-xl font-black text-sm flex items-center justify-center border-2 border-emerald-200">৳30</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="p-6 bg-[#f42a41] rounded-2xl text-white shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                 <BellRing size={24} />
                 <h4 className="font-black uppercase tracking-widest text-sm">Expiry Alert Config</h4>
              </div>
              <p className="text-white/70 text-xs font-medium leading-relaxed">অটোমেটিক সিস্টেম ৫ মিনিট আগে ক্লায়েন্টকে এলার্ট দিবে। ক্লায়েন্ট তার ফোনে একটি পপ-আপ মেসেজ দেখতে পাবে যা তাকে রিচার্জ করার কথা মনে করিয়ে দিবে।</p>
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                 <input type="checkbox" defaultChecked className="w-5 h-5 rounded accent-white cursor-pointer" />
                 <span className="text-sm font-black">Enable 5-Min Radius Alert</span>
              </div>
           </div>

           <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl space-y-4 shadow-md">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Operational Remarks</label>
              <textarea 
                 placeholder="Enter any notes for this renewal..."
                 className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-black text-slate-800 outline-none focus:border-[#006a4e] transition-all resize-none h-32"
              ></textarea>
           </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button className="px-12 py-4 bg-[#006a4e] text-white rounded-xl font-black text-base shadow-2xl hover:bg-emerald-900 active:scale-95 transition-all flex items-center gap-3">
          <CheckCircle2 size={22} /> Commit Renewal
        </button>
        <button onClick={onBack} className="px-8 py-4 bg-slate-200 text-slate-600 rounded-xl font-black text-base hover:bg-slate-300 transition-all">
          Cancel
        </button>
      </div>
    </div>
  );
};

const RenewRow = ({ label, value, isBold = false, isGreen = false, isStrikethrough = false }: any) => (
  <div className="grid grid-cols-2 group hover:bg-emerald-50/30 transition-colors">
    <div className="p-4 border-r-2 border-slate-50 bg-slate-50/20 text-slate-400 font-black uppercase tracking-widest text-[10px] flex items-center">
      {label}
    </div>
    <div className={`p-4 ${isBold ? 'font-black' : 'font-bold'} ${isGreen ? 'text-emerald-600' : 'text-slate-800'} ${isStrikethrough ? 'line-through opacity-40' : ''} flex items-center text-sm`}>
      {value}
    </div>
  </div>
);

export default ClientRenew;
