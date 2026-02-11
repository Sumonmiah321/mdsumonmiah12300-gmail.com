
import React, { useState } from 'react';
import { Lock, User, ShieldCheck, Zap, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden font-inter bg-[#002b1f]">
      
      {/* --- ANIMATED WAVING BANGLADESH FLAG BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Base Green Layer */}
        <div className="absolute inset-0 bg-[#006a4e]"></div>
        
        {/* Animated Flag Wave Container */}
        <div className="absolute inset-0 opacity-80 mix-blend-overlay pointer-events-none">
           <div className="absolute inset-0 animate-flag-wave bg-gradient-to-r from-black/20 via-transparent to-black/20 bg-[length:200%_100%]"></div>
        </div>

        {/* The Red Circle (National Identity) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-1/2 w-[45vw] h-[45vw] md:w-[350px] md:h-[350px] bg-[#f42a41] rounded-full shadow-[0_0_100px_rgba(244,42,65,0.4)] animate-circle-pulse"></div>
        
        {/* Fabric Texture & Folding Effect */}
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)`,
          backgroundSize: '4px 4px'
        }}></div>

        {/* Dynamic Shadow for Waving Effect */}
        <div className="absolute inset-0 animate-wind-flow overflow-hidden opacity-40 pointer-events-none">
           <div className="absolute inset-0 scale-[2] rotate-[10deg] bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in duration-700">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-[#006a4e] font-black text-4xl shadow-2xl border-4 border-[#f42a41] rotate-6 mb-8 animate-bounce-subtle">
              SB
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter text-center italic">SB POWER ISP</h1>
            <div className="mt-3 bg-[#006a4e]/40 border border-emerald-500/30 px-6 py-1.5 rounded-full">
               <p className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em] animate-pulse">Master Network Authenticator</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">Authorized Identity</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-400 transition-colors">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Master Admin ID"
                  className="w-full bg-white/5 border-2 border-white/5 rounded-2xl py-4 pl-14 pr-4 text-white font-black outline-none focus:border-[#006a4e]/50 focus:bg-white/10 transition-all placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">Access Key</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-400 transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border-2 border-white/5 rounded-2xl py-4 pl-14 pr-14 text-white font-black outline-none focus:border-[#006a4e]/50 focus:bg-white/10 transition-all placeholder:text-white/10"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#f42a41] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-[#f42a41]/20 hover:bg-rose-700 transition-all flex items-center justify-center gap-3 group relative overflow-hidden active:scale-95"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Establish Connection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 flex items-center justify-center gap-6 text-white/20">
             <div className="flex items-center gap-2">
                <Zap size={14} className="text-[#f42a41]" />
                <span className="text-[9px] font-black uppercase tracking-widest">Radius V4.0</span>
             </div>
             <div className="w-1.5 h-1.5 bg-[#006a4e] rounded-full shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
             <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Encryption</span>
             </div>
          </div>
        </div>

        <div className="mt-10 text-center space-y-2">
           <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
             National ISP Management Terminal
           </p>
           <p className="text-emerald-400 font-black text-[8px] uppercase tracking-widest opacity-30">© 2026 Bangladesh Digital Infrastructure</p>
        </div>
      </div>

      <style>{`
        @keyframes flag-wave {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes circle-pulse {
          0%, 100% { transform: translate(-60%, -50%) scale(1); filter: blur(0px); opacity: 0.9; }
          50% { transform: translate(-60%, -50%) scale(1.05); filter: blur(2px); opacity: 1; }
        }
        @keyframes wind-flow {
          0% { transform: translateX(-100%) skewX(45deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%) skewX(45deg); opacity: 0; }
        }
        .animate-flag-wave {
          animation: flag-wave 6s ease-in-out infinite;
        }
        .animate-circle-pulse {
          animation: circle-pulse 4s ease-in-out infinite;
        }
        .animate-wind-flow {
          animation: wind-flow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
