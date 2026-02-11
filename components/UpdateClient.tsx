
import React from 'react';
import { ChevronRight, Calendar, X } from 'lucide-react';

interface UpdateClientProps {
  client: any;
  onBack: () => void;
}

const UpdateClient: React.FC<UpdateClientProps> = ({ client, onBack }) => {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-700">Update Client Information</h2>
        <nav className="flex items-center text-xs font-medium text-slate-400">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>Forms</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-500">Update Client Information</span>
        </nav>
      </div>

      <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-50">
           <h3 className="font-bold text-slate-700 text-sm">Personal Information</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FormInput label="Client Name" value={client.name} required />
            <FormInput label="Mobile No" value={client.mobile} required />
            <FormInput label="Mobile No 2" placeholder="Mobile No 2" />
            <FormInput label="NID No" placeholder="NID No" />
            <FormInput label="Email" placeholder="Email" />
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase">Date Of Birth</label>
              <div className="relative">
                <input type="text" placeholder="mm/dd/yyyy" className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:ring-1 focus:ring-blue-400" />
                <Calendar className="absolute right-3 top-2 text-slate-300" size={14} />
              </div>
            </div>
            <FormInput label="Village" value="2922" />
            <FormInput label="Notes" placeholder="Notes" />
          </div>

          <div className="pt-6 border-t border-slate-50">
             <h3 className="font-bold text-slate-700 text-sm mb-4">Server Information</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
               <FormSelect label="Zone" options={['Choose Zone']} />
               <FormSelect label="Sub Zone" options={['Choose One']} />
               <FormSelect label="Server Name" required options={['Sb Wi-Fi Zone']} />
               <FormInput label="Username/IP" value={client.cid} required />
               <FormInput label="Password" value="490924" required type="password" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <FormInput label="Remote Address" placeholder="IP Address" />
            <FormSelect label="Billing Cycle" required options={['Plan Validity']} />
            <FormSelect label="Package" required options={['30Days']} />
            <div className="space-y-1.5">
               <label className="text-[11px] font-bold text-slate-400 uppercase">Pop-In Charge <span className="text-rose-500">*</span></label>
               <select className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:ring-1 focus:ring-blue-400 bg-white">
                  <option>Sb Wifi Zone</option>
               </select>
            </div>
            <FormSelect label="Client Category" options={['Prepaid']} />
          </div>

          <div className="space-y-4">
             <div className="p-3 bg-slate-50 border border-slate-100 rounded text-[11px] text-slate-600 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">?</div>
                Want to upload photo/NID/Other Documents?
             </div>
             <div className="p-3 bg-slate-50 border border-slate-100 rounded text-[11px] text-slate-600 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">?</div>
                Want to record location data?
             </div>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded font-bold text-xs hover:bg-blue-700 transition-all shadow-md active:scale-95">
             Submit
          </button>
        </div>
      </div>
      
      <button onClick={onBack} className="fixed bottom-6 right-6 p-4 bg-slate-800 text-white rounded-full shadow-2xl hover:bg-slate-700 active:scale-95 transition-all">
        <X size={24} />
      </button>
    </div>
  );
};

const FormInput = ({ label, value = "", required = false, type = "text", placeholder = "" }: any) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-bold text-slate-400 uppercase">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <input 
      type={type} 
      defaultValue={value} 
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:ring-1 focus:ring-blue-400 transition-all" 
    />
  </div>
);

const FormSelect = ({ label, options, required = false }: any) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-bold text-slate-400 uppercase">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <select className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:ring-1 focus:ring-blue-400 bg-white">
      {options.map((opt: string) => <option key={opt}>{opt}</option>)}
    </select>
  </div>
);

export default UpdateClient;
