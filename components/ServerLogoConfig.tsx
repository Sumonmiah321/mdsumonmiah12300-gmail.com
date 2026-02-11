
import React, { useState, useEffect } from 'react';
import { 
  Image as ImageIcon, Upload, Save, Palette, Type, RefreshCw, 
  ChevronRight, Layout, Sparkles, ShieldCheck, Monitor, Smartphone, Globe,
  CheckCircle2
} from 'lucide-react';

const ServerLogoConfig: React.FC = () => {
  const [logoText, setLogoText] = useState('SBWIFIZONE');
  const [primaryColor, setPrimaryColor] = useState('#ffffff');
  const [shadowColor, setShadowColor] = useState('#f42a41'); // Default BD Red
  const [strokeColor, setStrokeColor] = useState('#006a4e'); // Default BD Green
  const [isRounded, setIsRounded] = useState(true);
  const [activePreset, setActivePreset] = useState('Standard');
  const [isDeploying, setIsDeploying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const presets: any = {
    'Standard': { primary: '#ffffff', shadow: '#f42a41', stroke: '#006a4e' },
    'Neon': { primary: '#00ffcc', shadow: '#ff00ff', stroke: '#ffffff' },
    'Cyber': { primary: '#fbbf24', shadow: '#1e1e1e', stroke: '#3b82f6' },
  };

  const applyPreset = (name: string) => {
    setActivePreset(name);
    setPrimaryColor(presets[name].primary);
    setShadowColor(presets[name].shadow);
    setStrokeColor(presets[name].stroke);
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    // Simulate API persistence
    setTimeout(() => {
      setIsDeploying(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
            <ImageIcon className="text-blue-600" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight text-center lg:text-left">Logo & Identity Studio</h2>
            <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest justify-center lg:justify-start">
              <span>System Orchestrator</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-blue-500">Corporate Branding</span>
            </nav>
          </div>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button 
             onClick={() => applyPreset('Standard')}
             className="flex-1 lg:flex-none px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-xs font-black flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
          >
            <RefreshCw size={16} /> Reset Default
          </button>
          <button 
            onClick={handleDeploy}
            disabled={isDeploying}
            className={`flex-1 lg:flex-none px-8 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 ${
               isDeploying ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700'
            }`}
          >
            {isDeploying ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
            {isDeploying ? 'Syncing...' : 'Deploy Identity'}
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="bg-emerald-500 text-white p-5 rounded-[1.5rem] flex items-center gap-4 animate-in zoom-in duration-300 shadow-xl shadow-emerald-200">
           <div className="bg-white/20 p-2 rounded-xl"><CheckCircle2 size={24} /></div>
           <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-widest">Master Synchronizer: Success</p>
              <p className="text-[10px] opacity-80 font-bold">New branding has been pushed to all active network terminals and public login pages.</p>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Control Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 sticky top-24">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50">
              <Palette className="text-indigo-600" size={20} />
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Brand Orchestrator</h3>
            </div>

            <div className="space-y-6">
              {/* Logo Text */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block flex items-center gap-2">
                  <Type size={14} /> Brand Label (displayed on routers)
                </label>
                <input 
                  type="text"
                  value={logoText}
                  onChange={(e) => setLogoText(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-black outline-none focus:border-blue-400 focus:bg-white transition-all shadow-inner uppercase text-slate-700"
                  placeholder="e.g. SB POWER"
                />
              </div>

              {/* Presets */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block flex items-center gap-2">
                  <Sparkles size={14} /> Identity Presets
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(presets).map(p => (
                    <button 
                      key={p}
                      onClick={() => applyPreset(p)}
                      className={`py-2.5 rounded-xl text-[10px] font-black uppercase transition-all border-2 ${
                        activePreset === p ? 'bg-slate-800 text-white border-slate-800 shadow-lg' : 'bg-slate-50 text-slate-400 border-slate-100 hover:border-blue-200'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Core Color Palette</label>
                <div className="space-y-3">
                  <ColorControl label="Main Surface" value={primaryColor} onChange={setPrimaryColor} />
                  <ColorControl label="Secondary / Shadow" value={shadowColor} onChange={setShadowColor} />
                  <ColorControl label="Outline / Vector" value={strokeColor} onChange={setStrokeColor} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Preview Panel */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#111827] rounded-[3rem] p-12 lg:p-24 flex flex-col items-center justify-center min-h-[500px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[140px] group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600 rounded-full blur-[140px] group-hover:scale-110 transition-transform duration-1000"></div>
            </div>

            <div className="text-center relative z-10 space-y-16 w-full">
               <div className="flex flex-col items-center">
                  <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-12">Hardware Display Rendering</h4>
                  
                  <div className="relative p-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in duration-1000 w-full max-w-2xl overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20"></div>
                     <div 
                       className="text-6xl md:text-9xl font-black italic tracking-tighter transition-all duration-500 select-none transform group-hover:scale-[1.02]"
                       style={{
                         color: primaryColor,
                         textShadow: `
                           4px 4px 0px #000,
                           -3px -3px 0px ${shadowColor}, 
                           3px -3px 0px ${shadowColor}, 
                           -3px 3px 0px ${shadowColor}, 
                           3px 3px 0px ${shadowColor}
                         `,
                         WebkitTextStroke: `3px ${strokeColor}`,
                         fontFamily: 'Inter, sans-serif'
                       }}
                     >
                       {logoText || 'SBWIFIZONE'}
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto">
                  <DeviceIndicator icon={<Monitor size={24} />} label="Web App" />
                  <DeviceIndicator icon={<Smartphone size={24} />} label="Mobile" />
                  <DeviceIndicator icon={<Globe size={24} />} label="Public" />
               </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-8 flex items-center gap-6 shadow-sm">
             <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-500"><ShieldCheck size={32} /></div>
             <div>
                <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-1">Corporate Identity Protection</h4>
                <p className="text-xs text-blue-700 font-bold leading-relaxed">
                  The generated identity is injected into the Radius Engine. This logo will appear on all client notification emails, SMS headers, and hotspot captive portals across the entire SB POWER network.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColorControl = ({ label, value, onChange }: any) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all cursor-pointer">
    <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{label}</span>
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-mono font-bold text-slate-400">{value.toUpperCase()}</span>
      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
        <input 
          type="color" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-[-10px] w-[200%] h-[200%] cursor-pointer bg-transparent border-none" 
        />
      </div>
    </div>
  </div>
);

const DeviceIndicator = ({ icon, label }: any) => (
  <div className="flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-all cursor-help group/dev">
    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover/dev:bg-white/10 group-hover/dev:border-white/20 transition-all text-white">
      {icon}
    </div>
    <span className="text-[9px] font-black text-white uppercase tracking-widest">{label}</span>
  </div>
);

export default ServerLogoConfig;
