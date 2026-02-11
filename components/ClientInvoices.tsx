
import React from 'react';
import { ChevronRight, ChevronLeft, Search, Printer, X, FileText } from 'lucide-react';

interface ClientInvoicesProps {
  client: any;
  onBack: () => void;
}

const ClientInvoices: React.FC<ClientInvoicesProps> = ({ client, onBack }) => {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-700">Client Invoices: {client.cid}</h2>
        <nav className="flex items-center text-xs font-medium text-slate-400">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>Client</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-500">Client Invoices</span>
        </nav>
      </div>

      <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Show</span>
            <select className="border border-slate-200 rounded px-2 py-1 text-xs outline-none">
              <option>10</option>
              <option>25</option>
            </select>
            <span className="text-xs text-slate-500">entries</span>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-500">Search:</label>
            <input 
              type="text" 
              className="px-3 py-1.5 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-xs w-48"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-white border-b border-slate-100 text-blue-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Inv ID <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3">Inv Time <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3">Expire Time <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3">Method <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3 text-center">Bill <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3">Done By <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3">Description <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3">Remarks <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-4 text-slate-400">2356612</td>
                <td className="px-5 py-4 text-slate-500">2025-12-22 16:24:35</td>
                <td className="px-5 py-4 text-slate-500">2026-01-21 22:24:34</td>
                <td className="px-5 py-4 text-slate-500">Card</td>
                <td className="px-5 py-4 text-center text-slate-500">30</td>
                <td className="px-5 py-4 text-slate-500">Sb Wifi Zone via CARD</td>
                <td className="px-5 py-4 text-slate-500">Create Account</td>
                <td className="px-5 py-4 text-slate-500">From Card No 590428779472</td>
                <td className="px-5 py-4">
                   <div className="flex justify-center gap-1">
                      <button className="flex items-center gap-1 px-2 py-1 bg-rose-500 text-white rounded text-[10px] font-bold">
                        <FileText size={10} /> Cancel
                      </button>
                      <button className="p-1.5 bg-sky-500 text-white rounded">
                        <Printer size={12} />
                      </button>
                      <button className="p-1.5 bg-sky-400 text-white rounded">
                        <ChevronRight size={12} />
                      </button>
                   </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between bg-white">
          <p className="text-xs text-slate-500">Showing 1 to 1 of 1 entries</p>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-300"><ChevronLeft size={16} /></button>
            <button className="w-7 h-7 bg-blue-500 text-white rounded-full text-xs font-bold">1</button>
            <button className="p-2 text-slate-300"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
      
      <button onClick={onBack} className="fixed bottom-6 right-6 p-4 bg-slate-800 text-white rounded-full shadow-2xl hover:bg-slate-700 active:scale-95 transition-all">
        <X size={24} />
      </button>
    </div>
  );
};

export default ClientInvoices;
