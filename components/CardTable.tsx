
import React, { useState } from 'react';
import { 
  CreditCard, Search, RefreshCw, ChevronRight, UserPlus, 
  ChevronLeft, FileText, ChevronDown, Download, Printer, 
  Copy, LayoutGrid, Calendar, X, PlusCircle
} from 'lucide-react';

interface CardTableProps {
  title: string;
  onNotify?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const CardTable: React.FC<CardTableProps> = ({ title, onNotify }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 1. --- CARD SEARCH (Card Information) ---
  if (title === 'Card Search') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-700">Card Information</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Client</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">Card Information</span>
          </nav>
        </div>
        <div className="bg-white rounded shadow-sm border border-slate-200 max-w-2xl p-8">
           <div className="flex">
              <input 
                type="text" 
                placeholder="Card No/Ref No" 
                className="flex-1 px-4 py-2.5 border border-slate-200 rounded-l text-[13px] outline-none focus:border-blue-400" 
              />
              <button className="px-8 py-2.5 bg-[#34495e] text-white rounded-r font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">Search</button>
           </div>
        </div>
      </div>
    );
  }

  // 2. --- CARD GENERATOR ---
  if (title === 'Card Generator') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-700">Card Generator</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Forms</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">Card Generator</span>
          </nav>
        </div>
        <div className="bg-white rounded shadow-sm border border-slate-200">
           <div className="px-6 py-4 border-b border-slate-100"><h3 className="text-sm font-bold text-slate-700">Card Generator</h3></div>
           <div className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                 <FormSelect label="User" options={['Choose Pop In-Charge']} />
                 <FormSelect label="Protocol" options={['Hotspot', 'PPPoE']} />
                 <FormSelect label="Server" options={['Choose Server']} />
                 <FormSelect label="Package" options={['Select']} />
                 <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Card Quantity</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-400" />
                 </div>
              </div>
              <button onClick={() => onNotify?.("Card generation request submitted")} className="px-10 py-2.5 bg-[#3b82f6] text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-blue-600 shadow-md">Submit</button>
           </div>
        </div>
      </div>
    );
  }

  // 3. --- CARD GENERATOR EXCEL ---
  if (title === 'Card Generate Excel') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-700">Card Generator Excel</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Forms</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">Card Generator Excel</span>
          </nav>
        </div>
        <div className="bg-white rounded shadow-sm border border-slate-200">
           <div className="px-6 py-4 border-b border-slate-100"><h3 className="text-sm font-bold text-slate-700">Card Generator</h3></div>
           <div className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                 <FormSelect label="Pop In-charge" options={['Select']} />
                 <FormSelect label="Server" options={['Choose Server']} />
                 <FormSelect label="Protocol" options={['Hotspot', 'PPPoE']} />
                 <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Excel File</label>
                    <div className="flex">
                       <button className="px-4 py-2 border border-slate-200 rounded-l bg-slate-50 text-[11px] font-bold text-slate-700 border-r-0">Choose File</button>
                       <div className="flex-1 px-4 py-2 border border-slate-200 rounded-r text-[11px] text-slate-400">No file chosen</div>
                    </div>
                 </div>
              </div>
              <button onClick={() => onNotify?.("Excel processing started")} className="px-10 py-2.5 bg-[#3b82f6] text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-blue-600 shadow-md">Submit</button>
           </div>
        </div>
      </div>
    );
  }

  // 4. --- CARD PRINT (Card List Design/Filter) ---
  if (title === 'Card Print') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-700">Card List</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Forms</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">Card List</span>
          </nav>
        </div>
        <div className="bg-white rounded shadow-sm border border-slate-200 p-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mb-10">
              <FormSelect label="User" options={['Choose Pop In-Charge']} />
              <FormSelect label="Protocol" options={['Hotspot', 'PPPoE']} />
              <FormSelect label="Server" options={['Choose Server']} />
              <FormSelect label="Package" options={['Select']} />
              <FormSelect label="Card Design" options={['Large-1', 'Small-1']} />
              <FormSelect label="Card Type" options={['Valid', 'Invalid']} />
              <FormSelect label="Print Mode" options={['Landscape', 'Portrait']} />
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Date Filter</label>
                <div className="relative">
                   <input type="text" placeholder="mm/dd/yyyy" className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none bg-white" />
                   <Calendar size={14} className="absolute right-3 top-2.5 text-slate-400" />
                </div>
              </div>
           </div>
           <button onClick={() => onNotify?.("Generating print layout...")} className="px-10 py-2.5 bg-[#3b82f6] text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-blue-600 shadow-md">Print Card</button>
        </div>
      </div>
    );
  }

  // 5. --- CARD LIST (All Cards List with filters and table) ---
  if (title === 'Card List') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-700">All Cards List</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">All Cards List</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
           <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <button className="text-slate-400 hover:text-blue-500"><RefreshCw size={18} /></button>
              <button className="flex items-center gap-1.5 text-blue-500 font-bold text-xs uppercase tracking-widest"><PlusCircle size={14} /> Add</button>
           </div>
           
           <div className="p-8 border-b border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                 <FormSelect label="Reseller" options={['Choose Pop In-Charge']} />
                 <FormSelect label="Server" options={['Choose Server']} />
                 <FormSelect label="Package" options={['Choose...']} />
                 <FormSelect label="CardType" options={['Choose...']} />
                 <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Date Filter</label>
                    <div className="relative">
                       <input type="text" placeholder="mm/dd/yyyy" className="w-full px-3 py-2 border border-slate-200 rounded text-[11px] font-bold outline-none" />
                       <Calendar size={14} className="absolute right-3 top-2.5 text-slate-400" />
                    </div>
                 </div>
                 <button className="w-full py-2.5 bg-[#3b82f6] text-white rounded font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"><Search size={14} /> Search</button>
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] font-bold uppercase tracking-widest">
                 <thead className="bg-white text-slate-400 border-b border-slate-100">
                    <tr>
                       <th className="px-6 py-4">SL</th>
                       <th className="px-6 py-4">Ref No</th>
                       <th className="px-6 py-4">Card No</th>
                       <th className="px-6 py-4">State</th>
                       <th className="px-6 py-4">Protocol</th>
                       <th className="px-6 py-4">Package</th>
                       <th className="px-6 py-4">GenerateTime</th>
                       <th className="px-6 py-4">GenerateBy</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr><td colSpan={8} className="px-6 py-10 text-center border-t border-slate-50 opacity-20">No Data Sync Required</td></tr>
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    );
  }

  // 6. --- CARD REPORT ALL (Table + Date Wise) ---
  if (title === 'Card Report All') {
    return (
      <div className="p-6 space-y-12 bg-[#f4f7f6] min-h-screen">
        {/* PART 1: SUMMARY TABLE */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-700">Card Report</h2>
              <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">Card Report</span>
              </nav>
           </div>
           
           <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                 <div className="flex items-center gap-2 text-xs text-slate-500">Show <select className="border border-slate-200 rounded px-1"><option>15</option></select> entries</div>
                 <div className="flex items-center gap-2 text-xs text-slate-500">Search: <input type="text" className="border border-slate-200 rounded px-3 py-1.5 w-48 outline-none focus:border-blue-400" /></div>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left text-xs font-bold text-slate-500 border-collapse">
                    <thead className="bg-[#f8fafc] border-y border-slate-100">
                       <tr>
                          <th className="px-6 py-3 border-r border-slate-100">SL ↕</th>
                          <th className="px-6 py-3 border-r border-slate-100">Plan Name ↕</th>
                          <th className="px-6 py-3 border-r border-slate-100">Total ↕</th>
                          <th className="px-6 py-3 border-r border-slate-100">Valid ↕</th>
                          <th className="px-6 py-3">Invalid ↕</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {[
                         { sl: 1, name: '30Days', total: 4170, valid: 64, invalid: 4106 },
                         { sl: 2, name: '15Days', total: 493, valid: 98, invalid: 395 },
                         { sl: 3, name: '25Days', total: 370, valid: 85, invalid: 285 },
                         { sl: 4, name: '30Days', total: 536, valid: 21, invalid: 515 },
                         { sl: 5, name: '15Days', total: 55, valid: 29, invalid: 26 },
                       ].map(r => (
                         <tr key={r.sl} className="hover:bg-slate-50">
                            <td className="px-6 py-4 border-r border-slate-100">{r.sl}</td>
                            <td className="px-6 py-4 border-r border-slate-100 text-blue-500">{r.name}</td>
                            <td className="px-6 py-4 border-r border-slate-100">{r.total}</td>
                            <td className="px-6 py-4 border-r border-slate-100">{r.valid}</td>
                            <td className="px-6 py-4">{r.invalid}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-5 flex items-center justify-between border-t border-slate-100">
                 <p className="text-xs text-slate-400 font-bold uppercase">Showing 1 to 10 of 10 entries</p>
                 <div className="flex gap-1">
                    <button className="p-1 text-slate-300"><ChevronLeft size={16} /></button>
                    <button className="w-8 h-8 bg-blue-500 text-white rounded-full text-xs font-bold shadow-md">1</button>
                    <button className="p-1 text-slate-300"><ChevronRight size={16} /></button>
                 </div>
              </div>
           </div>
        </div>

        {/* PART 2: DATE WISE GRID */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-700">Card Report Date Wise</h2>
              <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span className="text-slate-300">Card Report Date Wise</span>
              </nav>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { date: '07-08-2024', plans: [{ name: '30Days', total: 75, valid: 0, invalid: 75 }] },
                { date: '04-01-2025', plans: [{ name: '30Days', total: 502, valid: 0, invalid: 502 }] },
                { date: '21-02-2025', plans: [{ name: '30Days', total: 294, valid: 0, invalid: 294 }] },
                { date: '19-03-2025', plans: [{ name: '30Days', total: 400, valid: 0, invalid: 400 }] },
                { date: '14-10-2025', plans: [{ name: '22Days', total: 25, valid: 4, invalid: 21 }] },
                { date: '10-12-2025', plans: [{ name: '20Days', total: 2, valid: 0, invalid: 2 }, { name: '25Days', total: 10, valid: 0, invalid: 10 }] },
                { date: '09-02-2026', plans: [{ name: '25Days', total: 8, valid: 5, invalid: 3 }] },
              ].map((group, i) => (
                <div key={i} className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
                   <div className="px-6 py-4 border-b border-slate-100"><h4 className="text-sm font-bold text-slate-700">{group.date}</h4></div>
                   <div className="p-4">
                      <table className="w-full text-left text-[11px] font-bold text-slate-500 border-collapse">
                         <thead className="bg-[#f8fafc] border border-slate-100">
                            <tr>
                               <th className="px-4 py-2 border-r border-slate-100">Plan Name</th>
                               <th className="px-4 py-2 border-r border-slate-100">Total</th>
                               <th className="px-4 py-2 border-r border-slate-100">Valid</th>
                               <th className="px-4 py-2">Invalid</th>
                            </tr>
                         </thead>
                         <tbody className="border border-slate-100">
                            {group.plans.map((p, pi) => (
                              <tr key={pi}>
                                 <td className="px-4 py-2 border-r border-slate-100 text-blue-500">{p.name}</td>
                                 <td className="px-4 py-2 border-r border-slate-100">{p.total}</td>
                                 <td className="px-4 py-2 border-r border-slate-100">{p.valid}</td>
                                 <td className="px-4 py-2">{p.invalid}</td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }

  return null;
};

const FormSelect = ({ label, options, required = false }: any) => (
  <div className="space-y-1.5 flex-1">
    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{label}</label>
    <div className="relative">
      <select className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-400 bg-white appearance-none text-slate-500">
        {options.map((opt: string) => <option key={opt}>{opt}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-2 top-2.5 text-slate-300 pointer-events-none" />
    </div>
  </div>
);

export default CardTable;
