
import React, { useState } from 'react';
import { 
  Search, UserPlus, Filter, RefreshCw, ChevronRight, Save, 
  Smartphone, MapPin, Package, Database, ShieldCheck, User as UserIcon, Zap, FileSearch, ArrowRight, MoreHorizontal, History, Calendar,
  ChevronDown, CheckCircle2, X, Info, RotateCcw
} from 'lucide-react';
import { ClientAccount } from '../types';

interface ClientTableProps {
  title: string;
  clients: ClientAccount[];
  onAddClient: (client: ClientAccount) => void;
  onNotify: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const ClientTable: React.FC<ClientTableProps> = ({ title, clients, onAddClient, onNotify }) => {
  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', zone: 'Choose Zone', subZone: 'Select Sub Zone',
    server: 'Choose Server', protocol: 'Select Protocol', package: 'Select Server First',
    username: '', password: '', remoteIp: '', cycle: 'Plan Validity', expDate: '',
    popCharge: 'Select POP In-Charge', remark: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.username) {
      onNotify("Please fill all required fields", "error");
      return;
    }
    const newClient: ClientAccount = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      cid: formData.username,
      name: formData.name, mobile: formData.mobile, package: formData.package,
      protocol: formData.protocol, bill: 500, balance: 0, expDate: formData.expDate || '2026-03-05',
      lastPayDate: new Date().toISOString().split('T')[0], status: 'Act'
    };
    onAddClient(newClient);
    onNotify("New client registered successfully!");
  };

  // --- PAGE TYPE 1: REGISTRATION FORM (Add New Client) ---
  if (title === 'Create New' || title === 'Create Only') {
    return (
      <div className="p-6 space-y-6 bg-[#f0f2f5] min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Add New Client</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Forms</span> <ChevronRight size={14} className="mx-1" /> <span className="text-blue-500">Add New Client</span>
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100"><h3 className="text-sm font-bold text-slate-700">Client Information</h3></div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
               <FormInput label="Client Name" required value={formData.name} onChange={v => setFormData({...formData, name: v})} placeholder="Client Name" />
               <FormInput label="Mobile No" required value={formData.mobile} onChange={v => setFormData({...formData, mobile: v})} placeholder="Mobile No" />
               <FormInput label="Email" value={formData.email} onChange={v => setFormData({...formData, email: v})} placeholder="Email" />
            </div>
          </div>

          <div className="bg-white rounded shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100"><h3 className="text-sm font-bold text-slate-700">Server Information</h3></div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <FormSelect label="Zone" options={['Choose Zone']} value={formData.zone} />
                <FormSelect label="Sub Zone" options={['Select Sub Zone']} value={formData.subZone} />
                <FormSelect label="Server Name" required options={['Choose Server']} value={formData.server} />
                <FormSelect label="Protocol" required options={['Select Protocol']} value={formData.protocol} />
                <div className="space-y-1.5">
                   <label className="text-[11px] font-bold text-slate-500">Package <span className="text-red-500">*</span></label>
                   <div className="flex gap-1">
                      <select className="flex-1 px-3 py-2 border border-slate-200 rounded text-xs outline-none bg-white"><option>Select Server First</option></select>
                      <div className="bg-slate-100 px-2 py-2 border border-slate-200 rounded text-[10px] font-bold text-slate-400 flex items-center">--SR</div>
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <FormInput label="Username" required value={formData.username} onChange={v => setFormData({...formData, username: v})} placeholder="Username" />
                <FormInput label="Password" required type="password" value={formData.password} onChange={v => setFormData({...formData, password: v})} placeholder="Password" />
                <FormInput label="Remote Address" value={formData.remoteIp} onChange={v => setFormData({...formData, remoteIp: v})} placeholder="IP Address" />
                <FormSelect label="Billing Cycle" required options={['Plan Validity']} value={formData.cycle} />
                <div className="space-y-1.5">
                   <label className="text-[11px] font-bold text-slate-500">Billing/Exp Date</label>
                   <div className="relative">
                      <input type="text" placeholder="mm/dd/yyyy" className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-400" />
                      <Calendar size={14} className="absolute right-3 top-2.5 text-slate-300" />
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect label="Pop-In Charge" required options={['Sb Wifi Zone']} value={formData.popCharge} />
                <FormInput label="Remark" value={formData.remark} onChange={v => setFormData({...formData, remark: v})} placeholder="Remarks" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100"><h3 className="text-sm font-bold text-slate-700">Documents Upload</h3></div>
            <div className="p-6">
               <div className="bg-[#e7f3ff] border border-[#d1e9ff] p-3 rounded flex items-center gap-3">
                  <div className="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">?</div>
                  <span className="text-[12px] font-medium text-[#004085]">Want to upload photo/NID/Other Documents?</span>
               </div>
            </div>
          </div>

          <div className="bg-white rounded shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100"><h3 className="text-sm font-bold text-slate-700">Location Data</h3></div>
            <div className="p-6">
               <div className="bg-[#e7f3ff] border border-[#d1e9ff] p-3 rounded flex items-center gap-3">
                  <div className="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">?</div>
                  <span className="text-[12px] font-medium text-[#004085]">Want to record location data?</span>
               </div>
            </div>
          </div>

          <div className="flex gap-2">
             <button type="submit" className="px-8 py-2 bg-[#2ecc71] text-white rounded font-bold text-xs flex items-center gap-2 hover:bg-[#27ae60] transition-all">
                <CheckCircle2 size={16} /> Create
             </button>
             <button type="reset" onClick={() => setFormData({} as any)} className="px-8 py-2 bg-[#f1f2f6] text-slate-600 rounded font-bold text-xs flex items-center gap-2 hover:bg-slate-200 transition-all">
                <X size={16} /> Reset
             </button>
          </div>
        </form>
      </div>
    );
  }

  // --- PAGE TYPE 2: SEARCH CARD (General Renew, Client Search, Special Renew) ---
  const isSearchSelectType = title === 'General Renew' || title === 'Client Search' || title === 'Special Renew';
  if (isSearchSelectType) {
    const displayTitle = title === 'General Renew' ? 'Client Renew' : title === 'Special Renew' ? 'Client Renew Special' : title;
    return (
      <div className="p-6 space-y-6 bg-[#f0f2f5] min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">{displayTitle}</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Client</span> <ChevronRight size={14} className="mx-1" /> <span className="text-blue-500">{displayTitle}</span>
          </nav>
        </div>
        <div className="bg-white rounded shadow-sm border border-slate-200 max-w-lg p-8">
           <div className="space-y-4">
              <label className="text-[12px] font-bold text-slate-500">Client ID:</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-slate-200 rounded text-[13px] outline-none bg-white appearance-none text-slate-400">
                   <option>Search for an option</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300" />
              </div>
              <div className="flex gap-2 pt-2">
                 <button className="px-6 py-2 bg-[#2ecc71] text-white rounded font-bold text-xs flex items-center gap-2">
                    <CheckCircle2 size={16} /> Search
                 </button>
                 <button className="px-6 py-2 bg-[#f1f2f6] text-slate-600 rounded font-bold text-xs flex items-center gap-2">
                    <X size={16} /> Cancel
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // --- PAGE TYPE 3: SEARCH INPUT TYPE (View Information, Plan Migration, Client Date Extend) ---
  const isSearchInputType = title === 'View Information' || title === 'Plan Migration' || title === 'Client Date Extend';
  if (isSearchInputType) {
    const displayTitle = title === 'View Information' ? 'Client Information' : title;
    return (
      <div className="p-6 space-y-6 bg-[#f0f2f5] min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">{displayTitle}</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Client</span> <ChevronRight size={14} className="mx-1" /> <span className="text-blue-500">{displayTitle}</span>
          </nav>
        </div>
        <div className="bg-white rounded shadow-sm border border-slate-200 max-w-lg p-8">
           <div className="flex">
              <input type="text" placeholder="Client's Username/AC No/Mobile No" className="flex-1 px-4 py-2 border border-slate-200 rounded-l text-[13px] outline-none focus:border-blue-400" />
              <button className="px-6 py-2 bg-[#34495e] text-white rounded-r font-bold text-xs">Search</button>
           </div>
        </div>
      </div>
    );
  }

  // --- PAGE TYPE 4: ONLINE RENEW (Multiple Zones) ---
  if (title === 'Online Renew') {
    return (
      <div className="p-6 space-y-6 bg-[#f0f2f5] min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Online Client Renew</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span> <ChevronRight size={14} className="mx-1" /> <span>Client</span> <ChevronRight size={14} className="mx-1" /> <span className="text-blue-500">Online Client Renew</span>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Sb Wi-Fi Zone', 'Sb Wi-Fi Zone 2', 'Sb Wi-Fi Zone 3'].map((zone, i) => (
            <div key={i} className="bg-white rounded shadow-sm border border-slate-200 p-8 space-y-4">
               <label className="text-[12px] font-bold text-slate-500">{zone}</label>
               <div className="flex">
                  <input type="text" placeholder={`${zone} Client's username`} className="flex-1 px-4 py-2 border border-slate-200 rounded-l text-[12px] outline-none" />
                  <select className="px-4 py-2 border-y border-slate-200 bg-slate-50 text-[12px] font-bold text-slate-600 outline-none">
                     <option>Hotspot</option>
                     <option>PPPoE</option>
                  </select>
                  <button className="px-6 py-2 bg-[#34495e] text-white rounded-r font-bold text-xs uppercase">Search</button>
               </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const FormSelect = ({ label, options, required = false, value }: any) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-bold text-slate-500 uppercase">{label} {required && <span className="text-red-500">*</span>}</label>
    <div className="relative">
      <select className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-400 bg-white appearance-none text-slate-500">
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-2 top-2.5 text-slate-300 pointer-events-none" />
    </div>
  </div>
);

const FormInput = ({ label, required, value, onChange, placeholder, type = "text" }: any) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-bold text-slate-500">{label} {required && <span className="text-red-500">*</span>}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={e => onChange?.(e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:border-blue-400" />
  </div>
);

export default ClientTable;
