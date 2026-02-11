
import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, Menu, Calculator, RefreshCw, Settings, ChevronDown, 
  LogOut, Server, Package, MapPin, ShieldLock, User, 
  Settings2, Activity, Database
} from 'lucide-react';

interface HeaderProps {
  onSettingsClick: () => void;
  onMenuClick: () => void;
  onRechargeClick: () => void;
  onLogout: () => void;
  onCalcClick: () => void;
  onMenuSelect: (menu: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSettingsClick, 
  onMenuClick, 
  onRechargeClick, 
  onLogout, 
  onCalcClick,
  onMenuSelect 
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const quickLinks = [
    { label: 'Mikrotik Config', icon: <Server size={14} />, menu: 'Mikrotik' },
    { label: 'Package Plans', icon: <Package size={14} />, menu: 'Package Plan' },
    { label: 'Zone Setup', icon: <MapPin size={14} />, menu: 'Zone' },
    { label: 'System Settings', icon: <Settings2 size={14} />, menu: 'Setup Settings' },
    { label: 'User Directory', icon: <User size={14} />, menu: 'Manage Users' },
  ];

  return (
    <header className="h-[55px] bg-[#006a4e] text-white flex items-center justify-between px-6 sticky top-0 z-50 border-t-4 border-b-4 border-[#f42a41] shadow-2xl overflow-hidden">
      {/* Animated Shine Effect */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-flag-wave-subtle pointer-events-none"></div>

      <div className="flex items-center gap-4 relative z-10">
        <button 
          onClick={onMenuClick}
          className="p-1.5 hover:bg-white/10 rounded-xl transition-all active:scale-90 border border-white/5"
        >
          <Menu size={20} />
        </button>
        
        <div className="hidden sm:flex flex-col">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300 leading-none">National Radius</span>
           <span className="text-[8px] font-bold text-white/50">ISP Master v4.0</span>
        </div>
      </div>

      <div className="flex items-center gap-6 relative z-10">
        <div className="relative hidden md:block group">
          <input 
            type="text" 
            placeholder="Identity search..." 
            className="bg-[#004d39]/80 border border-white/10 rounded-xl py-1.5 px-4 pl-9 text-[11px] focus:ring-2 focus:ring-[#f42a41]/50 w-64 text-white placeholder:text-emerald-200 transition-all font-bold outline-none"
          />
          <Search className="absolute left-3 top-2 text-emerald-300" size={14} />
        </div>

        <div className="flex items-center gap-3">
           <button 
             onClick={onCalcClick}
             className="p-2 hover:bg-[#f42a41] rounded-xl transition-all hover:shadow-[0_0_15px_rgba(244,42,65,0.4)]"
             title="Network Calculator"
           >
              <Calculator size={18} />
           </button>
        </div>

        <div className="relative" ref={dropdownRef}>
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 border-l border-white/10 pl-5 cursor-pointer group"
          >
             <div className="relative">
                <img src="https://picsum.photos/seed/sbuser/32/32" alt="Avatar" className="w-8 h-8 rounded-xl border-2 border-[#f42a41] shadow-xl transition-transform group-hover:scale-105" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f42a41] rounded-full border-2 border-[#006a4e] status-pulse-red"></div>
             </div>
             <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black leading-tight text-white uppercase">Sb Wifi Zone</span>
                  <span className="text-[8px] text-emerald-300 font-black uppercase tracking-widest">Admin</span>
                </div>
                <ChevronDown size={12} className={`text-emerald-300 transition-transform duration-300 ${isProfileOpen ? 'rotate-180 text-[#f42a41]' : ''}`} />
             </div>
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-[100]">
               <div className="p-6 bg-[#006a4e] text-white relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f42a41] rounded-full opacity-20"></div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Administrative Center</p>
                  <h4 className="font-black text-lg tracking-tight italic">SB POWER ISP</h4>
               </div>
               
               <div className="p-4 bg-slate-50 border-b border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-3">Critical Nodes</p>
                  <div className="space-y-1">
                     {quickLinks.map((link, i) => (
                       <button 
                         key={i}
                         onClick={() => {
                           onMenuSelect(link.menu);
                           setIsProfileOpen(false);
                         }}
                         className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-[#006a4e]/5 hover:text-[#006a4e] transition-all group"
                       >
                          <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-emerald-200 group-hover:text-[#f42a41] transition-all">
                             {link.icon}
                          </div>
                          {link.label}
                       </button>
                     ))}
                  </div>
               </div>

               <div className="p-3 space-y-1">
                  <button 
                    onClick={onSettingsClick}
                    className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-slate-100 transition-all"
                  >
                     <Settings size={16} className="text-slate-400" /> Identity Theme Studio
                  </button>
                  <button 
                    onClick={() => {
                      onLogout();
                      setIsProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[11px] font-black text-[#f42a41] hover:bg-rose-50 transition-all border-t border-slate-50"
                  >
                     <LogOut size={16} /> Terminate Master Link
                  </button>
               </div>

               <div className="p-5 bg-emerald-50/50 text-center">
                  <p className="text-[9px] font-black text-[#006a4e] uppercase tracking-[0.25em]">Radius Core v4.0.5 National</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
