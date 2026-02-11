
import React, { useState } from 'react';
import { 
  X, MessageSquare, List, Settings, RotateCcw, Save, 
  ShoppingBag, Bell, Clock, ShieldCheck, User, Zap,
  AlertCircle, ChevronRight, LayoutGrid
} from 'lucide-react';

interface ThemeSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'notifications' | 'activity' | 'settings';

const ToggleSwitch = ({ label, checked }: { label: string, checked?: boolean }) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-xs text-slate-600 font-black uppercase tracking-tight">{label}</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={checked} className="sr-only peer" />
      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bd-green"></div>
    </label>
  </div>
);

const RadioItem = ({ label, checked, name }: { label: string, checked?: boolean, name: string }) => (
  <div className="flex items-center gap-3 py-2 group cursor-pointer">
    <input type="radio" name={name} defaultChecked={checked} className="w-4 h-4 text-bd-green bg-slate-100 border-slate-300 focus:ring-bd-green" />
    <span className="text-xs font-bold text-slate-500 group-hover:text-bd-green transition-colors">{label}</span>
  </div>
);

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('settings');

  const notifications = [
    { id: 1, title: 'Radius Sync Successful', time: '2 min ago', type: 'success', icon: <ShieldCheck size={14} /> },
    { id: 2, title: 'High Latency on Node 03', time: '15 min ago', type: 'warning', icon: <AlertCircle size={14} /> },
    { id: 3, title: 'SMS Gateway Balance Low', time: '1 hour ago', type: 'error', icon: <Zap size={14} /> },
  ];

  const activities = [
    { user: 'Admin', action: 'Modified Package Plan', time: '10:45 AM', color: 'bg-bd-green' },
    { user: 'Admin', action: 'New Client Registered', time: '09:12 AM', color: 'bg-bd-red' },
    { user: 'System', action: 'Auto Backup Completed', time: '04:00 AM', color: 'bg-slate-800' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity animate-in fade-in duration-300"
          onClick={onClose}
        />
      )}
      <div className={`fixed right-0 top-0 h-full w-[340px] bg-white shadow-2xl z-[60] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden flex flex-col`}>
        
        {/* Tab Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 flex items-center h-[70px]">
           <button 
              onClick={() => setActiveTab('notifications')}
              className={`flex-1 h-full flex items-center justify-center transition-all relative ${activeTab === 'notifications' ? 'text-bd-red' : 'text-slate-400 hover:text-slate-600'}`}
           >
              <MessageSquare size={22} />
              {activeTab === 'notifications' && <div className="absolute bottom-0 left-0 w-full h-1 bg-bd-red animate-in slide-in-from-bottom-1"></div>}
              <div className="absolute top-4 right-8 w-2 h-2 bg-bd-red rounded-full animate-pulse"></div>
           </button>
           <button 
              onClick={() => setActiveTab('activity')}
              className={`flex-1 h-full flex items-center justify-center transition-all relative ${activeTab === 'activity' ? 'text-bd-red' : 'text-slate-400 hover:text-slate-600'}`}
           >
              <List size={22} />
              {activeTab === 'activity' && <div className="absolute bottom-0 left-0 w-full h-1 bg-bd-red animate-in slide-in-from-bottom-1"></div>}
           </button>
           <button 
              onClick={() => setActiveTab('settings')}
              className={`flex-1 h-full flex items-center justify-center transition-all relative ${activeTab === 'settings' ? 'text-bd-red' : 'text-slate-400 hover:text-slate-600'}`}
           >
              <Settings size={22} />
              {activeTab === 'settings' && <div className="absolute bottom-0 left-0 w-full h-1 bg-bd-red animate-in slide-in-from-bottom-1"></div>}
           </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-black text-bd-green uppercase tracking-[0.2em]">
              {activeTab === 'notifications' && 'System Alerts'}
              {activeTab === 'activity' && 'Event Registry'}
              {activeTab === 'settings' && 'Identity Studio'}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <X size={20} className="text-slate-400" />
            </button>
          </div>

          {/* TAB CONTENT: NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
               {notifications.map((n) => (
                 <div key={n.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-bd-green transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                       <div className={`p-1.5 rounded-lg ${n.type === 'success' ? 'bg-emerald-100 text-bd-green' : n.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-rose-100 text-bd-red'}`}>
                          {n.icon}
                       </div>
                       <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight">{n.title}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold ml-8 flex items-center gap-1">
                       <Clock size={10} /> {n.time}
                    </p>
                 </div>
               ))}
               <button className="w-full py-3 text-[10px] font-black text-bd-red uppercase tracking-widest hover:underline">Clear All Alerts</button>
            </div>
          )}

          {/* TAB CONTENT: ACTIVITY LOG */}
          {activeTab === 'activity' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
               {activities.map((a, i) => (
                 <div key={i} className="flex gap-4 relative">
                    {i !== activities.length - 1 && <div className="absolute left-[7px] top-4 w-0.5 h-full bg-slate-100"></div>}
                    <div className={`w-4 h-4 rounded-full ${a.color} border-4 border-white shadow-sm z-10 mt-1`}></div>
                    <div className="flex-1 pb-6">
                       <p className="text-xs font-black text-slate-800">{a.action}</p>
                       <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase flex items-center gap-2">
                          <User size={10} /> {a.user} • {a.time}
                       </p>
                    </div>
                 </div>
               ))}
               <button className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">View Full Audit Log</button>
            </div>
          )}

          {/* TAB CONTENT: SETTINGS (ORIGINAL) */}
          {activeTab === 'settings' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-bd-green/5 border border-bd-green/10 p-5 rounded-[1.5rem] mb-8">
                <p className="text-[11px] text-bd-green font-bold leading-relaxed">
                  <span className="font-black uppercase tracking-wider text-bd-red">Architect:</span> Customize the visual hierarchy and component behavior of the ISP Radius Dashboard.
                </p>
              </div>

              <section>
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Zap size={14} className="text-amber-500" /> Interaction Mode
                </h3>
                <ToggleSwitch label="Dark Mode Interface" />
                <ToggleSwitch label="Fluid Layout Engine" checked />
                <ToggleSwitch label="Sticky Navigation" checked />
              </section>

              <section>
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                   {/* Fix: Added missing LayoutGrid import from lucide-react */}
                   <LayoutGrid size={14} className="text-blue-500" /> Sidebar Profile
                </h3>
                <div className="space-y-1">
                  <RadioItem label="Light Identity" checked name="sidebar" />
                  <RadioItem label="Dark Professional" name="sidebar" />
                  <RadioItem label="Bangladesh Flag Brand" name="sidebar" />
                  <RadioItem label="Vibrant Gradient" name="sidebar" />
                </div>
              </section>

              <section>
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Sidebar Dimensions</h3>
                <div className="space-y-1">
                  <RadioItem label="Default Hub" checked name="size" />
                  <RadioItem label="Condensed Node" name="size" />
                  <RadioItem label="Compact Terminal" name="size" />
                </div>
              </section>

              <div className="space-y-3 pt-6 border-t border-slate-50">
                 <button className="w-full py-4 bg-bd-green text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-bd-dark transition-all shadow-xl shadow-emerald-900/10 active:scale-95">
                    <Save size={16} /> Deploy UI Changes
                 </button>
                 <button className="w-full py-4 bg-white border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                    <RotateCcw size={16} /> Factory Reset
                 </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer info in Sidebar */}
        <div className="p-6 bg-slate-50 border-t border-slate-100">
           <div className="bg-bd-red/10 p-4 rounded-xl flex items-center gap-4 group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 w-12 h-12 bg-bd-red/10 rounded-bl-[2rem] group-hover:scale-150 transition-transform"></div>
              <div className="p-2 bg-bd-red text-white rounded-lg shadow-lg">
                 <ShoppingBag size={18} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-bd-red uppercase tracking-widest">Enterprise Pro</p>
                 <p className="text-[9px] font-bold text-slate-500 uppercase">Upgrade Radius Engine</p>
              </div>
              <ChevronRight size={16} className="ml-auto text-bd-red group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSettings;
