
import React, { useState } from 'react';
import { 
  BellRing, Save, Trash2, Edit, PlusCircle, RefreshCw, 
  ChevronRight, Layout, Palette, Zap, CheckCircle2, AlertCircle
} from 'lucide-react';

interface NoticeConfigProps {
  onNotify?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const NoticeConfig: React.FC<NoticeConfigProps> = ({ onNotify }) => {
  const [notices, setNotices] = useState([
    { 
      id: 1, 
      text: 'সবাই ভালো ও সুস্থ আছেন। আমাদের সফটওয়্যারটি অবিচ্ছিন্ন ভাবে ব্যবহার করার জন্য আপনার ISP Short Name রেফারেন্স দিয়ে মাসিক বিল প্রদান করুন। ধন্যবাদ।', 
      bgColor: '#fff3cd', 
      textColor: '#856404', 
      speed: '25s', 
      status: 'Active' 
    },
    { 
      id: 2, 
      text: 'পেমেন্ট গেটওয়ে মেইনটেনেন্স এর কাজ চলছে। অনুগ্রহ করে বিকল্প হিসেবে বিকাশে সরাসরি পেমেন্ট করুন।', 
      bgColor: '#f8d7da', 
      textColor: '#721c24', 
      speed: '20s', 
      status: 'Inactive' 
    }
  ]);

  const [activeTab, setActiveTab] = useState<'list' | 'editor'>('list');
  const [editingNotice, setEditingNotice] = useState<any>(null);

  const handleEdit = (notice: any) => {
    setEditingNotice(notice);
    setActiveTab('editor');
  };

  const handleSave = () => {
    onNotify?.("Notice settings updated successfully!", "success");
    setActiveTab('list');
  };

  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
            <BellRing className="text-bd-red animate-pulse" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Notice Configuration</h2>
            <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
              <span>Core Engine</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-bd-green">Marquee Settings</span>
            </nav>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
             onClick={() => { setEditingNotice(null); setActiveTab('editor'); }}
             className="px-6 py-3 bg-bd-green text-white rounded-xl text-xs font-black flex items-center gap-2 hover:bg-emerald-900 transition-all active:scale-95 shadow-lg"
          >
            <PlusCircle size={16} /> Create New Notice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {activeTab === 'list' ? (
          <div className="lg:col-span-12 space-y-6">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                   <Layout size={18} className="text-blue-500" /> Notice Registry
                </h3>
                <RefreshCw size={16} className="text-slate-400 cursor-pointer hover:rotate-180 transition-all duration-500" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#343a40] text-white uppercase font-black text-[10px] tracking-[0.15em]">
                    <tr>
                      <th className="px-8 py-5">Preview</th>
                      <th className="px-6 py-5">Notice Content</th>
                      <th className="px-6 py-5">Speed</th>
                      <th className="px-6 py-5 text-center">Status</th>
                      <th className="px-8 py-5 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {notices.map((n) => (
                      <tr key={n.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-5">
                           <div className="w-12 h-8 rounded border" style={{ backgroundColor: n.bgColor }}></div>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-xs font-bold text-slate-700 max-w-md line-clamp-2" style={{ color: n.textColor }}>{n.text}</p>
                        </td>
                        <td className="px-6 py-5 font-black text-blue-500 uppercase text-[10px]">{n.speed}</td>
                        <td className="px-6 py-5 text-center">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border ${
                            n.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'
                          }`}>
                            {n.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <div className="flex justify-center gap-2">
                             <button onClick={() => handleEdit(n)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Edit size={16} /></button>
                             <button className="p-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-12 space-y-6">
             <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                   <h3 className="text-xl font-black text-slate-800 tracking-tighter">Notice Editor</h3>
                   <button onClick={() => setActiveTab('list')} className="text-xs font-black text-slate-400 hover:text-bd-red uppercase tracking-widest">Discard Changes</button>
                </div>
                <div className="p-10 space-y-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block flex items-center gap-2">
                        <MessageSquareIcon size={14} /> Marquee Message (Bangla/English)
                      </label>
                      <textarea 
                         className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] text-sm font-bold text-slate-800 outline-none focus:border-bd-green focus:bg-white transition-all shadow-inner min-h-[120px]"
                         defaultValue={editingNotice?.text || ''}
                         placeholder="এখানে আপনার নোটিশ লিখুন..."
                      ></textarea>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block flex items-center gap-2">
                            <Palette size={14} /> Colors
                         </label>
                         <div className="space-y-3">
                            <ColorInput label="Background" value={editingNotice?.bgColor || '#fff3cd'} />
                            <ColorInput label="Text Color" value={editingNotice?.textColor || '#856404'} />
                         </div>
                      </div>

                      <div className="space-y-4">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block flex items-center gap-2">
                            <Zap size={14} /> Performance
                         </label>
                         <div className="space-y-3">
                            <div className="space-y-1">
                               <span className="text-[9px] font-black text-slate-400 uppercase">Scrolling Speed (Seconds)</span>
                               <input type="text" defaultValue={editingNotice?.speed || '25s'} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black outline-none" />
                            </div>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">System Visibility</label>
                         <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <span className="text-[11px] font-black text-slate-600 uppercase">Publish Status</span>
                           <label className="relative inline-flex items-center cursor-pointer">
                             <input type="checkbox" defaultChecked={editingNotice?.status === 'Active'} className="sr-only peer" />
                             <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bd-green"></div>
                           </label>
                         </div>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-slate-100 flex gap-4">
                      <button onClick={handleSave} className="px-10 py-4 bg-bd-green text-white rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-emerald-100 hover:bg-emerald-900 transition-all flex items-center gap-3">
                         <Save size={20} /> Update Master Notice
                      </button>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Preview Section */}
      <div className="bg-bd-dark rounded-[2.5rem] p-8 border-l-[12px] border-bd-red shadow-2xl flex items-center gap-8 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[8rem]"></div>
         <div className="p-4 bg-white/10 rounded-2xl text-white">
            <CheckCircle2 size={32} />
         </div>
         <div>
            <h4 className="text-xl font-black text-white tracking-tighter">Master Synchronization</h4>
            <p className="text-slate-400 text-xs font-bold leading-relaxed mt-1">এখানে নোটিশ পরিবর্তন করলে সেটি সাথে সাথে ড্যাশবোর্ডের টপ প্যানেলে আপডেট হয়ে যাবে।</p>
         </div>
      </div>
    </div>
  );
};

const ColorInput = ({ label, value }: any) => (
  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-bd-green transition-all">
    <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{label}</span>
    <div className="flex items-center gap-3">
      <input 
        type="color" 
        defaultValue={value}
        className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-none" 
      />
    </div>
  </div>
);

const MessageSquareIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);

export default NoticeConfig;
