import React, { useState } from 'react';
import { 
  Settings, Server, Package, MapPin, Upload, 
  PlusCircle, Search, Filter, RefreshCw, MoreHorizontal, 
  Edit, Trash2, CheckCircle2, XCircle, ChevronRight, FileText, 
  ShieldCheck, Zap, BellRing, Database, Wifi, ShieldAlert, 
  Lock, HardDrive, Key, Globe, Activity, Link as LinkIcon,
  CloudUpload, FileDown, Layers, MousePointer2, Download, UserCircle,
  Clock, DollarSign, ArrowUpCircle, ArrowDownCircle, Users, X,
  Tag, Save, RotateCw, Trash, Sliders, Unlock, Wrench, Code, 
  ClipboardList, CreditCard, UserPlus, Phone, CheckSquare, Calendar,
  ChevronLeft, List, Settings2, FileUp, FileDown as DownloadIcon,
  ChevronDown
} from 'lucide-react';

interface ConfigTableProps {
  title: string;
}

const ConfigTable: React.FC<ConfigTableProps> = ({ title }) => {
  const [viewMode, setViewMode] = useState<'list' | 'edit' | 'access'>('list');
  const [selectedServer, setSelectedServer] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (title) {
      case 'Mikrotik': 
        if (viewMode === 'edit') return <UpdateServerForm server={selectedServer} onBack={() => setViewMode('list')} />;
        return <ServerMikrotikView 
                  onEdit={(s) => { setSelectedServer(s); setViewMode('edit'); }} 
                  onOpenSidebar={(s) => { setSelectedServer(s); setIsSidebarOpen(true); }}
                />;
      case 'Package Plan': 
        if (viewMode === 'edit') return <EditPlanForm plan={selectedPlan} onBack={() => setViewMode('list')} />;
        if (viewMode === 'access') return <PlanAccessView onBack={() => setViewMode('list')} />;
        return <PackagePlanListView 
                  onEdit={(p) => { setSelectedPlan(p); setViewMode('edit'); }} 
                  onAccess={() => setViewMode('access')}
                />;
      case 'Zone': return <ZoneManagementView />;
      case 'Sub Zone': return <SubZoneManagementView />;
      case 'Import Client': return <ImportClientView />;
      case 'Server Bind': return <ServerBindView />;
      case 'Setup Settings': return <SetupSettingsView />;
      default: return <DefaultConfigView title={title} />;
    }
  };

  const getHeaderIcon = () => {
    switch (title) {
      case 'Mikrotik': return <Server className="text-rose-500" />;
      case 'Package Plan': return <Package className="text-amber-500" />;
      case 'Zone': return <MapPin className="text-emerald-500" />;
      case 'Sub Zone': return <Layers className="text-blue-500" />;
      case 'Import Client': return <CloudUpload className="text-blue-500" />;
      case 'Server Bind': return <LinkIcon className="text-indigo-500" />;
      case 'Setup Settings': return <Settings className="text-slate-500" />;
      default: return <Layers className="text-emerald-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500 relative">
      {/* Header & Breadcrumb - Dynamic based on title */}
      {viewMode === 'list' && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">{getHeaderIcon()}</div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                {title === 'Import Client' ? 'Client Import Excel' : title === 'Server Bind' ? 'Service Server Bind' : title === 'Zone' ? 'Service Zone' : title === 'Sub Zone' ? 'Service Sub Zone' : title === 'Mikrotik' ? 'Server Mikrotik' : title === 'Setup Settings' ? 'Edit Company Information - SB Wi-Fi Zone' : title}
              </h2>
              <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
                <span>SmartISP</span>
                <ChevronRight size={14} className="mx-1" />
                {title === 'Server Bind' ? (
                  <span className="text-blue-500">Service Server Bind</span>
                ) : (
                  <>
                    <span>{title === 'Import Client' ? 'Forms' : title === 'Zone' || title === 'Sub Zone' ? 'Service Zone' : title === 'Mikrotik' ? 'Server' : title === 'Setup Settings' ? 'Company' : 'Global Configuration'}</span>
                    {title !== 'Server Bind' && (
                      <>
                        <ChevronRight size={14} className="mx-1" />
                        <span className="text-blue-500">{title === 'Import Client' ? 'Client Import Excel' : title}</span>
                      </>
                    )}
                  </>
                )}
              </nav>
            </div>
          </div>
          {title !== 'Zone' && title !== 'Sub Zone' && title !== 'Import Client' && title !== 'Server Bind' && title !== 'Setup Settings' && (
            <div className="flex gap-2">
              <button className="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg active:scale-95 transition-all">
                  <RefreshCw size={16} /> Sync Nodes
              </button>
            </div>
          )}
        </div>
      )}

      {renderContent()}

      {/* Detail Sidebar - Mikrotik Only */}
      {isSidebarOpen && title === 'Mikrotik' && selectedServer && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[60] animate-in fade-in duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-[350px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 animate-in slide-in-from-right overflow-y-auto custom-scrollbar">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-slate-700 text-lg">{selectedServer.name}</h3>
                  <p className="text-slate-400 text-sm font-semibold">ID - {selectedServer.id}</p>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-1 flex-1">
                <SidebarAction icon={<RotateCw size={18} />} label="Restart" />
                <SidebarAction icon={<Trash2 size={18} />} label="DNS Flush" />
                <SidebarAction icon={<CloudUpload size={18} />} label="Create Backup" />
                <SidebarAction icon={<RefreshCw size={18} />} label="Sync Clients" />
                <SidebarAction icon={<Sliders size={18} />} label="PPP Server Troubleshoot" />
                <SidebarAction icon={<Lock size={18} />} label="PPP Mac Bind All" />
                <SidebarAction icon={<Unlock size={18} />} label="PPP Mac Unbind All" />
                <SidebarAction icon={<Wrench size={18} />} label="Hotspot Troubleshoot" />
                <SidebarAction icon={<Zap size={18} />} label="HS Disable DNS Redirect" />
                <SidebarAction icon={<Calendar size={18} />} label="Hotspot AddressList" />
                <SidebarAction icon={<Code size={18} />} label="Hotspot Update config.js" />
                <SidebarAction icon={<LinkIcon size={18} />} label="Bind API IP" />
                <SidebarAction icon={<Edit size={18} />} label="Edit Server" onClick={() => { setViewMode('edit'); setIsSidebarOpen(false); }} />
                <SidebarAction icon={<Layers size={18} />} label="Copy Packages" />
                <SidebarAction icon={<Trash size={18} />} label="Delete" color="text-rose-500" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- SETUP SETTINGS VIEW (Precise Screenshot Matching) ---
const SetupSettingsView = () => {
  const [activeCompanyTab, setActiveCompanyTab] = useState('General Info');
  const [activeSMSTab, setActiveSMSTab] = useState('General');

  const companyTabs = ['General Info', 'Bank Info', 'Settings', 'PPP Settings', 'Hotspot Settings'];
  const smsTabs = ['General', 'PPP Template', 'Hotspot Template', 'Alert Template'];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Company Configuration Card */}
      <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="text-[15px] font-bold text-slate-700">Company Configuration</h3>
        </div>
        
        {/* Company Tabs */}
        <div className="flex bg-[#f1f2f6] border-b border-slate-100">
          {companyTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveCompanyTab(tab)}
              className={`flex-1 py-4 text-sm font-bold transition-all ${
                activeCompanyTab === tab ? 'bg-[#3b82f6] text-white shadow-inner' : 'text-slate-500 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-10">
          {activeCompanyTab === 'General Info' && (
            <div className="max-w-4xl space-y-6">
              <SettingsFormRow label="Name" value="SB Wi-Fi Zone" />
              <SettingsFormRow label="Short Name" value="SB Wi-Fi Zone" />
              <SettingsFormRow label="Licence No" value="N/A" />
              <SettingsFormRow label="Email" value="mdsumon12300@gmail.com" />
              <SettingsFormRow label="Owner PhoneNo" value="+966 55 270 5496" />
              <SettingsFormRow label="Support PhoneNo" value="0552705496 / 0578309602" />
              <SettingsFormRow label="Address" value="Saudi Arabia" />
              <div className="grid grid-cols-[180px_1fr] items-center gap-6">
                <label className="text-sm font-bold text-slate-500">Logo</label>
                <div className="flex items-stretch border border-slate-200 rounded overflow-hidden max-w-lg">
                  <button className="px-4 py-2 border-r border-slate-200 bg-[#f8fafc] text-slate-700 text-xs font-bold hover:bg-slate-100 transition-all">
                    Choose File
                  </button>
                  <div className="flex-1 px-4 py-2 text-sm text-slate-400 flex items-center bg-white italic">
                    No file chosen
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCompanyTab === 'Bank Info' && (
            <div className="max-w-4xl space-y-6">
              <SettingsFormRow label="Bank Name" value="URPAY" />
              <SettingsFormRow label="Bank Ac No" value="0578309602" />
              <SettingsFormRow label="Bank Ac Holder" value="Shejan Mahmud" />
            </div>
          )}

          {activeCompanyTab === 'Settings' && (
            <div className="max-w-4xl space-y-6">
              <div className="grid grid-cols-[180px_1fr] items-center gap-6">
                <label className="text-sm font-bold text-slate-500">Graph Type</label>
                <div className="relative max-w-sm">
                  <select className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600 appearance-none focus:border-blue-400">
                    <option>Area-Spline</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          )}

          {activeCompanyTab === 'PPP Settings' && (
            <div className="max-w-4xl space-y-6">
              <SettingsFormSelectRow label="Expire Method" options={['By Normal Disable']} />
              <SettingsFormSelectRow label="Auto Mac Bind" options={['Yes', 'No']} />
              <SettingsFormRow label="Pool Prefix" value="10.250" />
              <SettingsFormSelectRow label="Partial for Fixed,Custom billing" options={['No', 'Yes']} />
              <SettingsFormRow label="Monthly Billing Cycle Date" value="1" />
              <SettingsFormRow label="Free Extend Allow Day" value="0" />
              <SettingsFormSelectRow label="Multi Extend" options={['No', 'Yes']} />
              <div className="grid grid-cols-[180px_1fr] items-center gap-6">
                <label className="text-sm font-bold text-slate-500">Expire Time For Monthly/Cycle Billing</label>
                <div className="relative max-w-lg">
                  <input type="text" value="05:30 AM" className="w-full px-4 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600 font-medium" readOnly />
                  <Clock size={16} className="absolute right-3 top-2.5 text-slate-800" />
                </div>
              </div>
              <SettingsFormSelectRow label="Online Register" options={['No', 'Yes']} />
            </div>
          )}

          {activeCompanyTab === 'Hotspot Settings' && (
            <div className="max-w-4xl space-y-6">
              <SettingsFormSelectRow label="Password Generator Method" options={['Last 6 Digit', 'Random Numbers']} />
              <SettingsFormSelectRow label="Enable QR Scanner" options={['Yes', 'No']} />
              <SettingsFormSelectRow label="User AutoLogin" options={['No', 'Yes']} />
              <SettingsFormSelectRow label="Mac AutoUnbind" options={['No', 'Yes']} />
              <SettingsFormSelectRow label="Mac Bind On Login Page" options={['Editable', 'Static']} />
              <SettingsFormSelectRow label="Allow Only Device Mac" options={['No', 'Yes']} />
              <SettingsFormSelectRow label="Online Register" options={['No', 'Yes']} />
              <SettingsFormSelectRow label="Trial" options={['No', 'Yes']} />
              <SettingsFormSelectRow label="Trial ReRegister" options={['No', 'Yes']} />
              <SettingsFormRow label="Minimum Bill For Free With Lan" value="500" />
              <SettingsFormRow label="Minimum Validity Hour For SMS" value="48" />
            </div>
          )}
        </div>
      </div>

      {/* SMS Settings Card */}
      <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="text-[15px] font-bold text-slate-700">SMS Settings</h3>
        </div>
        
        {/* SMS Tabs */}
        <div className="flex bg-[#f1f2f6] border-b border-slate-100">
          {smsTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveSMSTab(tab)}
              className={`flex-1 py-4 text-sm font-bold transition-all ${
                activeSMSTab === tab ? 'bg-[#3b82f6] text-white shadow-inner' : 'text-slate-500 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-10 min-h-[100px]">
          {/* SMS Tab Content - Placeholder for actual fields seen in future screens */}
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button className="px-8 py-2.5 bg-[#2ecc71] text-white rounded text-sm font-bold shadow-md hover:bg-emerald-600 transition-all active:scale-95">
          Save
        </button>
        <button className="px-8 py-2.5 bg-[#f42a41] text-white rounded text-sm font-bold shadow-md hover:bg-rose-700 transition-all active:scale-95">
          Cancel
        </button>
      </div>
    </div>
  );
};

// Internal components for Setup Settings
const SettingsFormRow = ({ label, value }: { label: string, value: string }) => (
  <div className="grid grid-cols-[180px_1fr] items-center gap-6">
    <label className="text-sm font-bold text-slate-500">{label}</label>
    <input 
      type="text" 
      defaultValue={value} 
      className="w-full max-w-4xl px-4 py-2 border border-slate-200 rounded text-sm outline-none focus:border-blue-400 transition-all text-slate-600 font-medium" 
    />
  </div>
);

const SettingsFormSelectRow = ({ label, options }: { label: string, options: string[] }) => (
  <div className="grid grid-cols-[180px_1fr] items-center gap-6">
    <label className="text-sm font-bold text-slate-500">{label}</label>
    <div className="relative max-w-4xl">
      <select className="w-full px-4 py-2.5 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600 appearance-none focus:border-blue-400">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
    </div>
  </div>
);

// --- SERVER BIND VIEW (High-Fidelity Match to Screenshot) ---
const ServerBindView = () => {
  return (
    <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="p-5 flex items-center justify-between border-b border-slate-50">
        <button className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f42a41] text-white rounded text-sm font-bold shadow-md hover:bg-rose-700 transition-all active:scale-95">
          <PlusCircle size={18} /> Add Server Bind
        </button>
        
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-[#2ecc71] text-white rounded shadow-sm hover:bg-emerald-600 transition-all">
            <Settings2 size={18} />
          </button>
          <button className="px-5 py-2.5 bg-[#f1f2f6] border border-slate-100 text-slate-600 text-[13px] font-bold rounded shadow-sm hover:bg-slate-100 transition-all">
            Import
          </button>
          <button className="px-5 py-2.5 bg-[#f1f2f6] border border-slate-100 text-slate-600 text-[13px] font-bold rounded shadow-sm hover:bg-slate-100 transition-all">
            Export
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[13px] text-slate-500 font-medium">
          Show 
          <div className="relative">
            <select className="border border-slate-200 rounded px-3 py-1.5 outline-none appearance-none pr-8 bg-white focus:border-blue-300">
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-2.5 text-slate-400 pointer-events-none" />
          </div>
          entries
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-slate-500 font-medium">Search:</span>
          <input 
            type="text" 
            className="border border-slate-200 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-400 w-64 bg-white"
          />
        </div>
      </div>

      <div className="overflow-x-auto relative mx-5 border border-slate-100 rounded">
        <table className="w-full text-[13px] text-left border-collapse min-w-[1200px]">
          <thead className="bg-[#f8fafc] text-slate-600 font-bold border-b border-slate-100">
            <tr>
              <th className="px-5 py-4 border-r border-slate-100">SL <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Server Name <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Reseller Name <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Vlan No <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Hotspot Name <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Online <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Support Name <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Support Phone <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 border-r border-slate-100">Created Time <span className="text-[10px] opacity-20 ml-1">↕</span></th>
              <th className="px-5 py-4 text-center">Action <span className="text-[10px] opacity-20 ml-1">↕</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={10} className="py-12 bg-slate-50/20 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Custom Horizontal Scrollbar Style (Matching Screenshot) */}
        <div className="h-[12px] bg-[#f1f2f6] w-full flex items-center px-4">
           <div className="h-2 w-full bg-slate-400 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="px-5 py-6 flex items-center justify-between bg-white">
        <p className="text-[13px] text-slate-400 font-medium">Showing 0 to 0 of 0 entries</p>
        <div className="flex items-center gap-0 border border-slate-200 rounded overflow-hidden">
          <button className="p-2.5 text-slate-300 hover:text-slate-500 border-r border-slate-200 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="p-2.5 text-slate-300 hover:text-slate-500 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- IMPORT CLIENT VIEW (High-Fidelity Match to Screenshot) ---
const ImportClientView = () => {
  return (
    <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-slate-700">Client Import</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white rounded text-[13px] font-bold shadow-md hover:bg-emerald-600 transition-all active:scale-95">
          <DownloadIcon size={16} /> Sample File
        </button>
      </div>

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {/* Row 1 */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Pop In-charge <span className="text-red-500">*</span></label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-500 appearance-none cursor-pointer focus:border-blue-400 transition-all">
                <option>Choose Pop In-Charge</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Server <span className="text-red-500">*</span></label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-500 appearance-none cursor-pointer focus:border-blue-400 transition-all">
                <option>Choose Server</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Protocol <span className="text-red-500">*</span></label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-500 appearance-none cursor-pointer focus:border-blue-400 transition-all">
                <option>Select</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Billing Cycle <span className="text-red-500">*</span></label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-500 appearance-none cursor-pointer focus:border-blue-400 transition-all">
                <option>Monthly</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Expire Date <span className="text-slate-400 font-normal">(Optional)</span></label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="mm/dd/yyyy" 
                className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none focus:border-blue-400 text-slate-500 transition-all" 
              />
              <Calendar size={16} className="absolute right-3 top-2.5 text-slate-800" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Date Format <span className="text-red-500">*</span></label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-500 appearance-none cursor-pointer focus:border-blue-400 transition-all">
                <option>DD-MM-YYYY (11-02-2026)</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Created Date Format <span className="text-slate-400 font-normal">(Optional)</span></label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-500 appearance-none cursor-pointer focus:border-blue-400 transition-all">
                <option>DD-MM-YYYY (11-02-2026)</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500">Excel File <span className="text-red-500">*</span></label>
            <div className="flex items-stretch">
              <button className="px-4 py-2 border border-slate-200 bg-[#f8fafc] text-slate-700 text-xs font-bold rounded-l hover:bg-slate-100 transition-all border-r-0">
                Choose File
              </button>
              <div className="flex-1 px-4 py-2 border border-slate-200 rounded-r text-sm text-slate-400 truncate flex items-center bg-white">
                No file chosen
              </div>
            </div>
          </div>
        </div>

        <button className="px-7 py-2.5 bg-[#3498db] text-white rounded text-sm font-bold shadow-md hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-2">
          Import
        </button>
      </div>
    </div>
  );
};

// --- SERVICE SUB ZONE VIEW ---
const SubZoneManagementView = () => {
  return (
    <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="p-5 flex items-center justify-between border-b border-slate-50">
        <button className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f42a41] text-white rounded text-sm font-bold shadow-md hover:bg-rose-700 transition-all active:scale-95">
          <PlusCircle size={18} /> Add Sub Zone
        </button>
        
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-[#2ecc71] text-white rounded shadow-sm hover:bg-emerald-600 transition-all">
            <Settings2 size={18} />
          </button>
          <button className="px-5 py-2.5 bg-[#f8fafc] border border-slate-100 text-slate-600 text-sm font-bold rounded shadow-sm hover:bg-slate-100 transition-all">
            Import
          </button>
          <button className="px-5 py-2.5 bg-[#f8fafc] border border-slate-100 text-slate-600 text-sm font-bold rounded shadow-sm hover:bg-slate-100 transition-all">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-slate-300" /></th>
              <th className="px-6 py-4 w-24">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4 text-center">Zone</th>
              <th className="px-6 py-4 text-right pr-10">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="py-20 text-center text-slate-300 font-bold uppercase tracking-widest">
                Establishing Node Data...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- SERVICE ZONE VIEW ---
const ZoneManagementView = () => {
  return (
    <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="p-5 flex items-center justify-between border-b border-slate-50">
        <button className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f42a41] text-white rounded text-sm font-bold shadow-md hover:bg-rose-700 transition-all active:scale-95">
          <PlusCircle size={18} /> Add Zone
        </button>
        
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-[#2ecc71] text-white rounded shadow-sm hover:bg-emerald-600 transition-all">
            <Settings2 size={18} />
          </button>
          <button className="px-5 py-2.5 bg-[#f8fafc] border border-slate-100 text-slate-600 text-sm font-bold rounded shadow-sm hover:bg-slate-100 transition-all">
            Import
          </button>
          <button className="px-5 py-2.5 bg-[#f8fafc] border border-slate-100 text-slate-600 text-sm font-bold rounded shadow-sm hover:bg-slate-100 transition-all">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-slate-300" /></th>
              <th className="px-6 py-4 w-24">ID</th>
              <th className="px-6 py-4 text-center">Name</th>
              <th className="px-6 py-4 text-right pr-10">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="py-20 text-center text-slate-300 font-bold uppercase tracking-widest">
                Scanning Service Grid...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- PACKAGE PLAN LIST VIEW ---
const PackagePlanListView = ({ onEdit, onAccess }: { onEdit: (p: any) => void, onAccess: () => void }) => {
  const plans = [
    { sl: 1, server: 'Sb Wi-Fi Zone', protocol: 'hotspot', name: '30Days', speed: 'Unlimited', price: 30, validity: '30d0h', volume: 'Unlimited', count: 237, privacy: 'Public', status: 'Enabled', color: 'bg-purple-700' },
    { sl: 2, server: 'Sb Wi-Fi Zone', protocol: 'hotspot', name: '15Days', speed: 'Unlimited', price: 15, validity: '15d0h', volume: 'Unlimited', count: 5, privacy: 'Public', status: 'Enabled', color: 'bg-red-600' },
    { sl: 3, server: 'Sb Wi-Fi Zone', protocol: 'hotspot', name: '25Days', speed: 'Unlimited', price: 25, validity: '25d0h', volume: 'Unlimited', count: 0, privacy: 'Public', status: 'Enabled', color: 'bg-cyan-400' },
    { sl: 4, server: 'Sb Wi-Fi Zone', protocol: 'hotspot', name: '180Days', speed: 'Unlimited', price: 180, validity: '180d0h', volume: 'Unlimited', count: 20, privacy: 'Public', status: 'Enabled', color: 'bg-slate-300' },
    { sl: 5, server: 'Sb Wi-Fi Zone 2', protocol: 'hotspot', name: '30Days', speed: 'Unlimited', price: 30, validity: '30d0h', volume: 'Unlimited', count: 93, privacy: 'Public', status: 'Enabled', color: 'bg-purple-900' },
    { sl: 6, server: 'Sb Wi-Fi Zone 2', protocol: 'hotspot', name: '15Days', speed: 'Unlimited', price: 15, validity: '15d0h', volume: 'Unlimited', count: 1, privacy: 'Public', status: 'Enabled', color: 'bg-red-600' },
    { sl: 7, server: 'Sb Wi-Fi Zone 2', protocol: 'hotspot', name: '22Days', speed: 'Unlimited', price: 22, validity: '22d0h', volume: 'Unlimited', count: 0, privacy: 'Public', status: 'Enabled', color: 'bg-purple-800' },
    { sl: 8, server: 'Sb Wi-Fi Zone 3', protocol: 'hotspot', name: '15Days', speed: 'Unlimited', price: 15, validity: '15d0h', volume: 'Unlimited', count: 2, privacy: 'Public', status: 'Enabled', color: 'bg-red-500' },
    { sl: 9, server: 'Sb Wi-Fi Zone 3', protocol: 'hotspot', name: '30Days', speed: 'Unlimited', price: 30, validity: '30d0h', volume: 'Unlimited', count: 53, privacy: 'Public', status: 'Enabled', color: 'bg-purple-800' },
    { sl: 10, server: 'Sb Wi-Fi Zone 3', protocol: 'hotspot', name: '20Days', speed: 'Unlimited', price: 20, validity: '20d0h', volume: 'Unlimited', count: 0, privacy: 'Public', status: 'Enabled', color: 'bg-red-600' },
  ];

  return (
    <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="p-5 border-b border-slate-50">
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#2ecc71] text-white rounded text-sm font-bold shadow-md hover:bg-emerald-600 transition-all">
          <PlusCircle size={16} /> Add Plan
        </button>
      </div>

      <div className="p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
          Show 
          <select className="border border-slate-200 rounded px-2 py-1 outline-none focus:border-blue-300">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select> 
          entries
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500 font-medium">Search:</span>
          <input 
            type="text" 
            className="border border-slate-200 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-400 w-48 bg-white"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
            <tr>
              <th className="px-5 py-3 border-r border-slate-50">SL <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Server <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Protocol <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Name <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Speed <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Price <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Validity <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Volume <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Count <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50">Privacy <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 border-r border-slate-50 text-center">Status <span className="text-[10px] opacity-30">↕</span></th>
              <th className="px-5 py-3 text-center">Action <span className="text-[10px] opacity-30">↕</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {plans.map((plan) => (
              <tr key={plan.sl} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 text-slate-400">{plan.sl}</td>
                <td className="px-5 py-4 text-slate-500">{plan.server}</td>
                <td className="px-5 py-4 text-slate-500">{plan.protocol}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 ${plan.color} rounded-sm shadow-sm`}></div>
                    <span className="font-semibold text-slate-600">{plan.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-500">{plan.speed}</td>
                <td className="px-5 py-4 text-slate-500">{plan.price}</td>
                <td className="px-5 py-4 text-slate-500">{plan.validity}</td>
                <td className="px-5 py-4 text-slate-500">{plan.volume}</td>
                <td className="px-5 py-4 text-slate-500">{plan.count}</td>
                <td className="px-5 py-4 text-slate-500">{plan.privacy}</td>
                <td className="px-5 py-4 text-center">
                  <span className="bg-[#d1f2e1] text-[#27ae60] px-2.5 py-0.5 rounded text-[10px] font-bold">
                    {plan.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={onAccess} className="text-slate-400 hover:text-blue-500 transition-colors">
                      <Users size={18} />
                    </button>
                    <button onClick={() => onEdit(plan)} className="text-slate-400 hover:text-emerald-500 transition-colors">
                      <Edit size={18} />
                    </button>
                    <button className="text-slate-400 hover:text-rose-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-5 flex items-center justify-between bg-white border-t border-slate-50">
        <p className="text-xs text-slate-400 font-bold">Showing 1 to 10 of 11 entries</p>
        <div className="flex items-center gap-1">
          <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 bg-[#3498db] text-white rounded-full text-xs font-bold shadow-md">1</button>
          <button className="w-8 h-8 hover:bg-slate-100 text-slate-500 rounded-full text-xs font-bold transition-all">2</button>
          <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- EDIT PLAN FORM ---
const EditPlanForm = ({ plan, onBack }: { plan: any, onBack: () => void }) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-700">Edit Plan - {plan?.name || "30Days"}</h2>
        <nav className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-500">Edit Plan - {plan?.name || "30Days"}</span>
        </nav>
      </div>

      <div className="bg-white rounded shadow-sm border border-slate-100 p-8">
        <div className="max-w-xl space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <FormGroup label="Plan Name" value={plan?.name || "30Days"} />
            
            <div className="grid grid-cols-2 gap-4">
              <FormGroup label="Price (BDT)" value={plan?.price || "30"} />
              <FormGroup label="OTC (optional)" value="0" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormGroup label="Speed (Mbps)" value="0" />
              <FormGroup label="Data Volume (GB)" placeholder="Enter Volume" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormGroup label="Validity Day" value={plan?.validity.split('d')[0] || "30"} />
              <FormGroup label="Validity Hour (optional)" value="0" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormGroup label="Mikrotik Server" value={plan?.server || "Sb Wi-Fi Zone"} />
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Protocol</label>
                <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600 appearance-none">
                  <option>HOTSPOT</option>
                  <option>PPPoE</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Mikrotik Profile</label>
                <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600">
                  <option>30Day-Pack</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Plan Status</label>
                <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500 block mb-2">Plan Privacy</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm text-slate-500 font-medium cursor-pointer">
                    <input type="radio" name="privacy" className="w-4 h-4 accent-blue-500" /> Private
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-500 font-medium cursor-pointer">
                    <input type="radio" name="privacy" defaultChecked className="w-4 h-4 accent-blue-500" /> Public
                  </label>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500 block">Card color:</label>
                <div className={`w-8 h-8 rounded-sm ${plan?.color || 'bg-purple-700'} mt-1 border border-slate-100 shadow-sm`}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button className="px-8 py-2.5 bg-[#2ecc71] text-white rounded text-sm font-bold shadow-md hover:bg-emerald-600 transition-all active:scale-95 flex items-center gap-2">
              <CheckCircle2 size={18} /> Save
            </button>
            <button onClick={onBack} className="px-8 py-2.5 bg-[#f1f2f6] text-slate-600 rounded text-sm font-bold shadow-sm hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2">
              <X size={18} /> Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PLAN ACCESS VIEW ---
const PlanAccessView = ({ onBack }: { onBack: () => void }) => {
  const accesses = [
    { sl: 1, reseller: 'TNRSOFT-Sb Wi-fi Zone', name: '30Days', speed: 0, price: 30, rprice: 29.4, rprofit: 0.6, rpercent: '2%', clients: 0, status: 'Enabled' },
    { sl: 2, reseller: 'Sb Wifi Zone', name: '30Days', speed: 0, price: 30, rprice: 0, rprofit: 30, rpercent: '100%', clients: 239, status: 'Enabled' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-700">Plan Access</h2>
        <nav className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-500">Plan Access</span>
        </nav>
      </div>

      <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            Show 
            <select className="border border-slate-200 rounded px-2 py-1 text-xs outline-none">
              <option>10</option>
              <option>25</option>
            </select> 
            entries
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 font-medium">Search:</span>
            <input 
              type="text" 
              className="border border-slate-200 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-400 w-48 bg-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
              <tr>
                <th className="px-5 py-4 border-r border-slate-50">SL <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">Reseller <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">P.Name <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">Speed <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">Price <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">R.Price <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">R.Profit <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">R.Percentage <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 border-r border-slate-50">Count Client <span className="text-[10px] opacity-30">↕</span></th>
                <th className="px-5 py-4 text-center">Status <span className="text-[10px] opacity-30">↕</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {accesses.map((acc) => (
                <tr key={acc.sl} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-400">{acc.sl}</td>
                  <td className="px-5 py-4 text-slate-500 font-medium">{acc.reseller}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.name}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.speed}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.price}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.rprice}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.rprofit}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.rpercent}</td>
                  <td className="px-5 py-4 text-slate-500">{acc.clients}</td>
                  <td className="px-5 py-4 text-center">
                    <span className="bg-[#d1f2e1] text-[#27ae60] px-2.5 py-0.5 rounded text-[10px] font-bold">
                      {acc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-5 flex items-center justify-between bg-white border-t border-slate-50">
          <p className="text-xs text-slate-400 font-bold">Showing 1 to 2 of 2 entries</p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 bg-[#3498db] text-white rounded-full text-xs font-bold shadow-md">1</button>
            <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <button onClick={onBack} className="px-6 py-2 bg-slate-800 text-white rounded font-bold text-xs flex items-center gap-2 hover:bg-black transition-all">
         <ArrowLeft size={16} /> Back to List
      </button>
    </div>
  );
};

// --- MIKROTIK LIST VIEW ---
const ServerMikrotikView = ({ onEdit, onOpenSidebar }: { onEdit: (s: any) => void, onOpenSidebar: (s: any) => void }) => {
  const servers = [
    { id: 2000, name: 'Sb Wi-Fi Zone', status: 'Active', ping: '136.7631ms', ip: 'server5.tnrsoft.com', dns: 'sbwifi.login', port: 7838, winPort: 4838, webPort: 0, user: 'tnrsoftApi-swzsm' },
    { id: 2068, name: 'Sb Wi-Fi Zone 2', status: 'Active', ping: '106.8721ms', ip: '38.54.8.24', dns: 'sbwifi.login', port: 7945, winPort: '', webPort: '', user: 'tnrsoftApi' },
    { id: 2072, name: 'Sb Wi-Fi Zone 3', status: 'Active', ping: '106.612ms', ip: '38.54.8.24', dns: 'sbwifi.login', port: 7948, winPort: '', webPort: '', user: 'tnrsoftApi-sbc3' },
  ];

  return (
    <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="p-5 border-b border-slate-50">
        <button className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f42a41] text-white rounded text-sm font-bold shadow-md hover:bg-rose-700 transition-all active:scale-95">
          <PlusCircle size={18} /> Add Server
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">IP</th>
              <th className="px-6 py-4">DNS Name</th>
              <th className="px-6 py-4">Port</th>
              <th className="px-6 py-4">WinPort</th>
              <th className="px-6 py-4">WebPort</th>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Password</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {servers.map((server) => (
              <tr key={server.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 text-slate-400 font-medium">{server.id}</td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700">{server.name}</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                      <span className="text-[10px] font-bold text-slate-400">Online Ping: {server.ping}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="bg-[#2ecc71] text-white px-2.5 py-0.5 rounded text-[10px] font-bold uppercase">
                    {server.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-slate-500 font-medium">{server.ip}</td>
                <td className="px-6 py-5 text-slate-500 font-medium">{server.dns}</td>
                <td className="px-6 py-5 text-slate-500 font-mono">{server.port}</td>
                <td className="px-6 py-5 text-slate-500 font-mono">{server.winPort}</td>
                <td className="px-6 py-5 text-slate-500 font-mono">{server.webPort}</td>
                <td className="px-6 py-5 text-slate-500 font-medium">{server.user}</td>
                <td className="px-6 py-5 text-slate-400">******</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <button onClick={() => onEdit(server)} className="text-slate-400 hover:text-blue-500 transition-colors">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => onOpenSidebar(server)} className="text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- UPDATE SERVER FORM ---
const UpdateServerForm = ({ server, onBack }: { server: any, onBack: () => void }) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-700">Update Server Information</h2>
        <nav className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>Forms</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-500">Update Server Information</span>
        </nav>
      </div>

      <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/20">
          <h3 className="font-bold text-slate-700 text-sm">Server Information</h3>
        </div>
        
        <div className="p-8 space-y-6 max-w-lg">
          <div className="space-y-4">
            <FormGroup label="Name" value={server?.name || "Sb Wi-Fi Zone"} />
            <FormGroup label="IP" value={server?.ip || "server5.tnrsoft.com"} />
            <FormGroup label="DNS" subLabel="Hotspot only" value={server?.dns || "sbwifi.login"} />
            <FormGroup label="ApiPort" value={server?.port || "7838"} />
            <FormGroup label="WinPort" value={server?.winPort || "4838"} />
            <FormGroup label="webPort" value={server?.webPort || "0"} />
            <FormGroup label="Username" value={server?.user || "tnrsoftApi-swzsm"} />
            <FormGroup label="Password" type="password" placeholder="Enter password" />
            
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-500">Payment Allow <span className="text-[10px] text-slate-400 font-normal">v10 Hotspot only</span></label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600">
                <option>Card Only</option>
                <option>All Methods</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Support 1 <span className="text-[10px] text-slate-400 font-normal">v10 Hotspot only</span></label>
                <div className="flex gap-2">
                  <input type="text" defaultValue="Support" className="w-1/3 px-3 py-2 border border-slate-200 rounded text-sm outline-none text-slate-600" />
                  <input type="text" defaultValue="01XXXXXXXXX" className="flex-1 px-3 py-2 border border-slate-200 rounded text-sm outline-none text-slate-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Support 2 <span className="text-[10px] text-slate-400 font-normal">v10 Hotspot only</span></label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Text" className="w-1/3 px-3 py-2 border border-slate-200 rounded text-sm outline-none text-slate-600" />
                  <input type="text" placeholder="Phone No" className="flex-1 px-3 py-2 border border-slate-200 rounded text-sm outline-none text-slate-600" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-500">Status</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-600">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button className="px-8 py-2.5 bg-[#2ecc71] text-white rounded text-sm font-bold shadow-md hover:bg-emerald-600 transition-all active:scale-95">Save</button>
            <button onClick={onBack} className="px-8 py-2.5 bg-[#f42a41] text-white rounded text-sm font-bold shadow-md hover:bg-rose-700 transition-all active:scale-95">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormGroup = ({ label, value, subLabel, type = "text", placeholder }: any) => (
  <div className="space-y-1.5">
    <label className="text-[13px] font-bold text-slate-500 flex items-center gap-1.5">
      {label} {subLabel && <span className="text-[10px] text-slate-400 font-normal">{subLabel}</span>}
    </label>
    <input 
      type={type} 
      defaultValue={value} 
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-slate-200 rounded text-sm outline-none focus:border-blue-400 transition-all text-slate-600 font-medium" 
    />
  </div>
);

const SidebarAction = ({ icon, label, color = "text-slate-500", onClick }: any) => (
  <button onClick={onClick} className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-50 transition-all group text-left">
    <div className={`${color} group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <span className={`${color} font-medium text-[15px] group-hover:text-slate-800`}>{label}</span>
  </button>
);

const DefaultConfigView = ({ title }: any) => (
  <div className="p-24 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300">
    <Database size={80} className="mb-6 opacity-10" />
    <p className="font-black uppercase tracking-widest text-sm text-slate-400">{title} Data Integration Layer Active</p>
    <p className="text-[10px] font-black mt-3 uppercase tracking-[0.2em] text-blue-500 animate-pulse">Establishing Node Connection...</p>
  </div>
);

const ArrowLeft = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);

export default ConfigTable;