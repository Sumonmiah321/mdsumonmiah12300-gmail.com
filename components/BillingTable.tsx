
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Filter, MessageSquare, Search, RefreshCw, Download, 
  Printer, MoreHorizontal, History, 
  UserPlus, User, Play, List, Smartphone, Tag, UserCheck,
  ChevronDown, UserMinus, CheckCircle, ChevronRight, X, ChevronLeft,
  Calendar, Server, MapPin, Database, Zap, Clock, CreditCard, Trash2, CloudUpload
} from 'lucide-react';
import { ClientAccount } from '../types';
import SMSSender from './SMSSender';

interface BillingTableProps {
  title: string;
  clients: ClientAccount[];
  setClients: React.Dispatch<React.SetStateAction<ClientAccount[]>>;
  onNotify: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const BillingTable: React.FC<BillingTableProps> = ({ title, clients, setClients, onNotify }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSMSOpen, setIsSMSOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredData = useMemo(() => {
    let data = [...clients];
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      data = data.filter(c => c.name.toLowerCase().includes(lower) || c.cid.includes(lower));
    }
    if (title === 'Active Accounts') return data.filter(c => c.status === 'Act');
    if (title === 'Expired Accounts') return data.filter(c => c.status === 'Exp');
    return data;
  }, [title, searchTerm, clients]);

  const moreMenuItems = [
    { label: 'Change Owner', icon: <RefreshCw size={14} />, color: 'text-emerald-400' },
    { label: 'Change Zone', icon: <RefreshCw size={14} />, color: 'text-emerald-400' },
    { label: 'Change Billing Type', icon: <RefreshCw size={14} />, color: 'text-rose-400' },
    { label: 'Change Billing Category', icon: <RefreshCw size={14} />, color: 'text-rose-400' },
    { label: 'Change Server', icon: <RefreshCw size={14} />, color: 'text-sky-400' },
    { label: 'Change Plan', icon: <RefreshCw size={14} />, color: 'text-sky-400' },
    { label: 'Adv Renew', icon: <Calendar size={14} />, color: 'text-sky-400' },
    { label: 'Change Date', icon: <Calendar size={14} />, color: 'text-emerald-400' },
    { label: 'BTRC Report', icon: <Download size={14} />, color: 'text-pink-400' },
    { label: 'BTRC Report New', icon: <Download size={14} />, color: 'text-pink-400' },
    { label: 'Export', icon: <CloudUpload size={14} />, color: 'text-emerald-400' },
    { label: 'Delete Client', icon: <Trash2 size={14} />, color: 'text-rose-400' },
  ];

  return (
    <div className="p-4 space-y-4 bg-[#f8fafc] min-h-screen">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
        <h2 className="text-xl font-bold text-slate-700">{title}</h2>
        <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>Billing</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-400">Accounts</span>
        </nav>
      </div>

      <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 flex flex-wrap items-center gap-2 border-b border-slate-50">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-1.5 px-3 py-1.5 border rounded text-xs font-bold transition-all ${isFilterOpen ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-[#2ecc71] text-[#2ecc71] hover:bg-emerald-50'}`}
          >
            <Filter size={14} /> Filter
          </button>
          
          <button onClick={() => onNotify("Bulk renewal process started")} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#f39c12] text-[#f39c12] rounded text-xs font-bold hover:bg-amber-50">
            <CheckCircle size={14} /> Bulk Renew
          </button>
          
          <button onClick={() => setIsSMSOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#3498db] text-[#3498db] rounded text-xs font-bold hover:bg-sky-50">
            <MessageSquare size={14} /> Bulk SMS
          </button>
          
          <button onClick={() => onNotify("Client marked as left", "error")} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e74c3c] text-[#e74c3c] rounded text-xs font-bold hover:bg-rose-50">
            <UserMinus size={14} /> Left
          </button>
          
          <button onClick={() => onNotify("New client activation form requested", "info")} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3498db] text-white rounded text-xs font-bold hover:bg-blue-600">
            <UserPlus size={14} /> Activate
          </button>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-[#48d1cc] text-white rounded text-xs font-bold hover:bg-[#3dbbb6] transition-all"
            >
              More <ChevronDown size={14} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMoreOpen && (
              <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-2xl border border-slate-100 z-[100] py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {moreMenuItems.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      onNotify(`${item.label} action triggered`, "info");
                      setIsMoreOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors"
                  >
                    <span className={item.color}>{item.icon}</span>
                    <span className={item.color}>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {isFilterOpen && (
          <div className="p-6 bg-white border-b border-slate-100 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <FilterSelect label="POP In-charge" options={['Choose ...']} />
              <FilterSelect label="Protocol" options={['Choose...', 'Hotspot', 'PPPoE']} />
              <FilterSelect label="Server" options={['Choose ...']} />
              <FilterSelect label="Plan" options={['Choose...', '30Days', '15Days']} />
              <FilterSelect label="Status" options={['Choose...']} />
              <FilterSelect label="Zone" options={['Choose ...']} />
              <FilterSelect label="Sub Zone" options={['Choose...']} />
            </div>
            <div className="mt-4 flex justify-end">
               <button className="px-8 py-2 bg-[#3498db] text-white rounded font-bold text-xs flex items-center gap-2"><Search size={14} /> Search</button>
            </div>
          </div>
        )}

        <div className="p-4 flex items-center justify-between border-b border-slate-50 bg-slate-50/20">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded text-[11px] font-bold border border-blue-200">Show 20 rows</button>
            <button className="px-3 py-1.5 bg-indigo-100 text-indigo-600 rounded text-[11px] font-bold border border-indigo-200">Export</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Search:</span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-slate-200 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-400 w-48 bg-white"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[11px] text-left">
            <thead className="bg-slate-50 text-slate-500 font-black uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="p-4 w-4"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="px-4 py-3">ID ↕</th>
                <th className="px-4 py-3">C.ID ↕</th>
                <th className="px-4 py-3">Name ↕</th>
                <th className="px-4 py-3">Mobile ↕</th>
                <th className="px-4 py-3">Package ↕</th>
                <th className="px-4 py-3 text-center">Bill ↕</th>
                <th className="px-4 py-3 text-center">Balance ↕</th>
                <th className="px-4 py-3">Exp Date ↕</th>
                <th className="px-4 py-3 text-center">Status ↕</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-4 py-20 text-center text-slate-300 font-bold uppercase tracking-widest">
                    কোন ডাটা পাওয়া যায়নি।
                  </td>
                </tr>
              ) : (
                filteredData.map((client) => (
                  <tr key={client.id} className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300" /></td>
                    <td className="px-4 py-3 text-slate-400">{client.id}</td>
                    <td className="px-4 py-3 font-bold text-blue-500">{client.cid}</td>
                    <td className="px-4 py-3 font-semibold text-slate-700">{client.name}</td>
                    <td className="px-4 py-3 text-slate-500">{client.mobile}</td>
                    <td className="px-4 py-3 text-slate-500">{client.package}</td>
                    <td className="px-4 py-3 text-center">৳{client.bill}</td>
                    <td className="px-4 py-3 text-center font-bold">৳{client.balance}</td>
                    <td className="px-4 py-3 text-slate-400">{client.expDate}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase text-white ${client.status === 'Act' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                        {client.status === 'Act' ? 'Paid' : 'Exp'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        <button className="px-2 py-0.5 bg-sky-400 text-white rounded text-[10px] font-bold">Ren</button>
                        <button className="p-1 bg-slate-100 text-slate-400 rounded hover:bg-slate-800 hover:text-white"><MoreHorizontal size={12} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase">
          <span>Showing {filteredData.length} entries</span>
          <div className="flex gap-1">
            <button className="p-1 text-slate-300"><ChevronLeft size={16} /></button>
            <button className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">1</button>
            <button className="p-1 text-slate-300"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
      
      <SMSSender isOpen={isSMSOpen} onClose={() => setIsSMSOpen(false)} />
    </div>
  );
};

const FilterSelect = ({ label, options }: { label: string, options: string[] }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-black text-slate-500 uppercase tracking-tight">{label}</label>
    <div className="relative">
      <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-[11px] outline-none focus:border-blue-400 appearance-none text-slate-400 font-medium">
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown size={12} className="absolute right-2 top-2.5 text-slate-300 pointer-events-none" />
    </div>
  </div>
);

export default BillingTable;
