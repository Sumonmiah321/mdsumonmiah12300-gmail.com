
import React, { useState, useMemo } from 'react';
import { 
  Network, Search, Filter, RefreshCw, Activity, ArrowDownCircle, ArrowUpCircle, 
  XCircle, Power, MoreHorizontal, UserCheck, ShieldAlert, Globe, Monitor, Zap,
  ChevronRight, Database, ShieldCheck, Clock, Share2, BarChart3, Users, Router, 
  ChevronDown, CheckCircle, MessageSquare, UserMinus, UserPlus, ChevronLeft, X
} from 'lucide-react';

interface PPPoETableProps {
  title: string;
}

const PPPoETable: React.FC<PPPoETableProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data for the table based on screenshot
  const mockData: any[] = []; // Empty as per screenshot "No data available in table"

  return (
    <div className="p-4 space-y-4 bg-[#f8fafc] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-700">{title === 'All Users' ? 'Client List' : title}</h2>
        <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>{title === 'All Users' ? 'Client List' : 'PPPoE'}</span>
        </nav>
      </div>

      {/* Top Stat Cards - Matching Image */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Total User" value="0" color="bg-indigo-500" icon={<Users size={20} />} />
        <StatCard label="Online User" value="0" color="bg-emerald-400" icon={<UserCheck size={20} />} />
        <StatCard label="Offline" value="0" color="bg-rose-500" icon={<UserMinus size={20} />} />
        <StatCard label="Blocked User" value="0" color="bg-amber-500" icon={<XCircle size={20} />} />
      </div>

      <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden mt-6">
        {/* Colorful Action Buttons - Matching Image */}
        <div className="p-4 flex flex-wrap items-center gap-2 border-b border-slate-100">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2ecc71] text-[#2ecc71] rounded text-[11px] font-bold hover:bg-emerald-50 transition-all"
          >
            <Filter size={14} /> Filter
          </button>
          
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#f39c12] text-[#f39c12] rounded text-[11px] font-bold hover:bg-amber-50">
            <CheckCircle size={14} /> Bulk Renew
          </button>
          
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#3498db] text-[#3498db] rounded text-[11px] font-bold hover:bg-sky-50">
            <MessageSquare size={14} /> Bulk SMS
          </button>
          
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e74c3c] text-[#e74c3c] rounded text-[11px] font-bold hover:bg-rose-50">
            <UserMinus size={14} /> Left
          </button>
          
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#3498db] text-[#3498db] rounded text-[11px] font-bold hover:bg-blue-50">
            <UserPlus size={14} /> Activate
          </button>
          
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2ecc71] text-[#2ecc71] rounded text-[11px] font-bold hover:bg-emerald-50">
            More <ChevronDown size={14} />
          </button>
        </div>

        {/* Filter Panel (if toggled) */}
        {isFilterOpen && (
          <div className="p-6 bg-slate-50/50 border-b border-slate-100 animate-in slide-in-from-top-4">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase">Server</label>
                   <select className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none"><option>All Servers</option></select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase">Package</label>
                   <select className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none"><option>All Packages</option></select>
                </div>
                <div className="md:pt-5">
                   <button className="w-full py-2 bg-blue-600 text-white rounded text-xs font-bold shadow-md">Apply Filter</button>
                </div>
             </div>
          </div>
        )}

        {/* Rows & Search Bar */}
        <div className="p-4 flex items-center justify-between bg-white border-b border-slate-50">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-[#eaf2ff] text-[#3498db] rounded text-[11px] font-bold border border-blue-100">Show 25 rows</button>
            <button className="px-3 py-1.5 bg-[#f0efff] text-[#6c5ce7] rounded text-[11px] font-bold border border-indigo-100">Export</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-bold">Search:</span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-slate-200 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-400 w-48 bg-white"
            />
          </div>
        </div>

        {/* Data Table - Matching Image Columns */}
        <div className="overflow-x-auto">
          <table className="w-full text-[11px] text-left">
            <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
              <tr>
                <th className="p-4 w-4 border-r border-slate-50"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="px-4 py-3 border-r border-slate-50">ID <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50">C.ID <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50">Name <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50">Mobile <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50">Package <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">R.Days <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">Uptime <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50">IP <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50">Mac Address <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">Up <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">Down <span className="text-[9px] opacity-40">↕</span></th>
                <th className="px-4 py-3 text-center">Last Offline <span className="text-[9px] opacity-40">↕</span></th>
              </tr>
            </thead>
            <tbody>
              {mockData.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-4 py-6 text-center text-slate-400 font-medium">
                    No data available in table
                  </td>
                </tr>
              ) : (
                mockData.map((row, i) => (
                   <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      {/* Rows would go here if data existed */}
                   </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 bg-white flex items-center justify-between text-[11px] text-slate-400 font-bold">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="flex gap-1">
            <button className="p-1 text-slate-300"><ChevronLeft size={16} /></button>
            <button className="p-1 text-slate-300"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color, icon }: any) => (
  <div className="bg-white rounded shadow-sm border border-slate-100 p-5 flex items-center justify-between group overflow-hidden relative">
     {/* Subtle Wave Effect background */}
     <div className="absolute top-0 right-0 h-full w-24 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className={color.replace('bg-', 'text-')} /></svg>
     </div>
     
     <div className={`w-12 h-12 ${color} text-white rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
        {icon}
     </div>
     <div className="text-right">
        <h3 className="text-2xl font-black text-slate-700 leading-none mb-1">{value}</h3>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{label}</p>
     </div>
  </div>
);

export default PPPoETable;
