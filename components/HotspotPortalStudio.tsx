
import React, { useState, useRef } from 'react';
import { 
  Globe, Layout, Type, Palette, Smartphone, Monitor, Tablet, 
  Upload, Save, RefreshCw, ChevronRight, CheckCircle2, X,
  Code2, Sparkles, Image as ImageIcon, ShieldCheck, Zap
} from 'lucide-react';

const HotspotPortalStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'design' | 'code'>('design');
  const [previewMode, setPreviewMode] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [isDeploying, setIsDeploying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Configuration States - Defaulting to BD Theme
  const [portalLogo, setPortalLogo] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState('#006a4e'); // BD Green
  const [bgColor, setBgColor] = useState('#f8fafc');
  const [welcomeText, setWelcomeText] = useState('Welcome to Sb Wifi Zone');
  const [btnText, setBtnText] = useState('Connect Now');
  const [selectedTemplate, setSelectedTemplate] = useState('Glassmorphism');
  const [customHTML, setCustomHTML] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotspot Login</title>
</head>
<body style="margin: 0; padding: 0; font-family: sans-serif; background: {{bg_color}};">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 20px;">
        <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); width: 100%; max-width: 400px; text-align: center;">
            {{logo_html}}
            <h1 style="color: #1e293b; font-size: 24px; margin-bottom: 30px;">{{welcome_text}}</h1>
            <form>
                <input type="text" placeholder="Voucher PIN / Username" style="width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 10px; box-sizing: border-box;">
                <button type="submit" style="width: 100%; padding: 15px; background: {{primary_color}}; color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">{{button_text}}</button>
            </form>
            <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">&copy; 2026 Powered by SB POWER ISP</p>
        </div>
    </div>
</body>
</html>`);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPortalLogo(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const getPreviewWidth = () => {
    if (previewMode === 'mobile') return '375px';
    if (previewMode === 'tablet') return '768px';
    return '100%';
  };

  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
            <Globe className="text-bd-green" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Captive Portal Studio</h2>
            <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
              <span>Hotspot Configuration</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-bd-red">Login Page Designer</span>
            </nav>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-xs font-black flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
            <RefreshCw size={16} /> Reset
          </button>
          <button 
            onClick={handleDeploy}
            disabled={isDeploying}
            className={`px-8 py-3 rounded-xl text-xs font-black flex items-center gap-3 shadow-xl transition-all active:scale-95 ${
               isDeploying ? 'bg-slate-400 cursor-not-allowed' : 'bg-bd-green text-white shadow-emerald-100 hover:bg-emerald-900'
            }`}
          >
            {isDeploying ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
            {isDeploying ? 'Processing...' : 'Deploy Portal UI'}
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="bg-emerald-600 text-white p-4 rounded-2xl flex items-center gap-3 animate-in zoom-in duration-300">
           <CheckCircle2 size={20} />
           <span className="text-xs font-black uppercase tracking-widest">Portal UI deployed and synced with all network nodes!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* DESIGN PANEL (LEFT) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 sticky top-24 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
               <button 
                  onClick={() => setActiveTab('design')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === 'design' ? 'bg-white shadow-sm text-bd-green' : 'text-slate-400'}`}
               >
                  <Layout size={14} /> UI Designer
               </button>
               <button 
                  onClick={() => setActiveTab('code')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === 'code' ? 'bg-white shadow-sm text-bd-green' : 'text-slate-400'}`}
               >
                  <Code2 size={14} /> Custom HTML
               </button>
            </div>

            {activeTab === 'design' ? (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={14} /> Portal Brand Logo
                  </label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full aspect-[3/1] bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-all overflow-hidden"
                  >
                    {portalLogo ? (
                      <img src={portalLogo} className="max-h-full max-w-full object-contain p-4" />
                    ) : (
                      <>
                        <Upload size={24} className="text-slate-300 mb-2" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Select Portal Logo</span>
                      </>
                    )}
                  </div>
                  <input ref={fileInputRef} type="file" hidden accept="image/*" onChange={handleLogoUpload} />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles size={14} /> Layout Theme
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Glassmorphism', 'Minimalist', 'Corporate', 'Night Mode'].map(t => (
                      <button 
                        key={t}
                        onClick={() => setSelectedTemplate(t)}
                        className={`py-3.5 px-3 rounded-2xl text-[10px] font-black uppercase border-2 transition-all ${
                          selectedTemplate === t ? 'bg-bd-green text-white border-bd-green shadow-lg' : 'bg-slate-50 text-slate-400 border-slate-100 hover:border-emerald-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visual Palette</label>
                  <div className="space-y-3">
                    <ColorControl label="Primary Brand Color" value={primaryColor} onChange={setPrimaryColor} />
                    <ColorControl label="Portal Background" value={bgColor} onChange={setBgColor} />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Type size={14} /> Portal Content
                  </label>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-black text-slate-400 uppercase">Welcome Greeting</span>
                      <input 
                        type="text" 
                        value={welcomeText} 
                        onChange={(e) => setWelcomeText(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-black outline-none focus:border-bd-green transition-all" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Portal HTML (Jinja2 Support)</label>
                  <textarea 
                    value={customHTML}
                    onChange={(e) => setCustomHTML(e.target.value)}
                    className="w-full h-[400px] p-4 bg-slate-900 text-emerald-400 font-mono text-[10px] rounded-2xl border-none focus:ring-2 focus:ring-bd-green custom-scrollbar"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PREVIEW PANEL (RIGHT) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-bd-dark rounded-[3rem] p-8 lg:p-12 min-h-[600px] flex flex-col items-center">
            <div className="flex items-center gap-4 bg-white/10 p-1.5 rounded-2xl mb-12">
               {(['mobile', 'tablet', 'desktop'] as const).map(mode => (
                 <button 
                  key={mode}
                  onClick={() => setPreviewMode(mode)}
                  className={`p-3 rounded-xl transition-all ${previewMode === mode ? 'bg-white text-bd-green shadow-xl' : 'text-white/40 hover:text-white'}`}
                 >
                  {mode === 'mobile' ? <Smartphone size={20} /> : mode === 'tablet' ? <Tablet size={20} /> : <Monitor size={20} />}
                 </button>
               ))}
            </div>

            <div 
               className="bg-white rounded-[2.5rem] shadow-2xl transition-all duration-500 overflow-hidden relative"
               style={{ 
                  width: getPreviewWidth(), 
                  height: previewMode === 'desktop' ? '500px' : '650px',
                  maxWidth: '100%'
               }}
            >
               <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-3 py-1 text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">
                    hotspot.sbpowerisp.net/login
                  </div>
               </div>

               <div 
                  className="w-full h-full overflow-y-auto custom-scrollbar flex flex-col items-center justify-center p-8 transition-all duration-500"
                  style={{ backgroundColor: bgColor }}
               >
                  <div 
                    className={`w-full max-w-[320px] transition-all duration-500 p-8 flex flex-col items-center text-center ${
                      selectedTemplate === 'Glassmorphism' 
                        ? 'bg-white/40 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl shadow-black/5' 
                        : selectedTemplate === 'Corporate'
                        ? 'bg-white rounded-none border-t-[8px] shadow-2xl border-slate-200'
                        : selectedTemplate === 'Night Mode'
                        ? 'bg-slate-800 text-white rounded-3xl shadow-2xl'
                        : 'bg-white rounded-3xl shadow-xl'
                    }`}
                    style={{ 
                       borderTopColor: selectedTemplate === 'Corporate' ? primaryColor : undefined 
                    }}
                  >
                    {portalLogo ? (
                      <img src={portalLogo} className="h-12 w-auto mb-6 drop-shadow-sm" />
                    ) : (
                      <div className="w-14 h-14 bg-bd-red rounded-full flex items-center justify-center text-white mb-6 font-black italic shadow-lg shadow-bd-red/30">SB</div>
                    )}

                    <h3 className={`text-xl font-black mb-8 leading-tight tracking-tighter ${selectedTemplate === 'Night Mode' ? 'text-white' : 'text-slate-800'}`}>
                      {welcomeText}
                    </h3>

                    <div className="w-full space-y-4">
                       <div className="space-y-1 text-left">
                          <span className={`text-[8px] font-black uppercase tracking-widest ml-1 ${selectedTemplate === 'Night Mode' ? 'text-white/40' : 'text-slate-400'}`}>Access Key</span>
                          <input 
                            type="text" 
                            disabled 
                            placeholder="Enter Voucher Code" 
                            className={`w-full px-5 py-3.5 rounded-2xl text-xs font-black transition-all ${
                               selectedTemplate === 'Night Mode' 
                               ? 'bg-slate-700 border-none text-white placeholder:text-white/20' 
                               : 'bg-slate-50 border-2 border-slate-100 placeholder:text-slate-300'
                            }`} 
                          />
                       </div>
                       
                       <button 
                          className="w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95"
                          style={{ backgroundColor: primaryColor, color: '#fff' }}
                       >
                          {btnText}
                       </button>

                       <div className="flex items-center gap-2 justify-center py-2 opacity-40">
                          <CheckCircle2 size={12} className="text-bd-green" />
                          <span className="text-[8px] font-black uppercase tracking-widest">Radius Secured Connection</span>
                       </div>
                    </div>
                  </div>

                  <p className={`mt-8 text-[8px] font-black uppercase tracking-widest ${selectedTemplate === 'Night Mode' ? 'text-white/20' : 'text-slate-300'}`}>
                    &copy; 2026 SB POWER ISP NETWORK
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColorControl = ({ label, value, onChange }: any) => (
  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-bd-green transition-all">
    <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{label}</span>
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-mono font-bold text-slate-400">{value.toUpperCase()}</span>
      <input 
        type="color" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-none" 
      />
    </div>
  </div>
);

export default HotspotPortalStudio;