
import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface SMSSenderProps {
  isOpen: boolean;
  onClose: () => void;
}

const SMSSender: React.FC<SMSSenderProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-700">SMS Sender</h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded text-slate-400">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase">Channel</label>
            <select className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none bg-white">
              <option>SMS</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase">Message</label>
            <textarea 
              rows={6}
              className="w-full px-3 py-2 border border-slate-200 rounded text-xs outline-none focus:ring-1 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <div className="text-[10px] text-slate-400 leading-relaxed font-mono">
            {'{ClientName}'} , {'{ClientUsername}'}, {'{ClientPassword}'}, {'{MobileNumber}'},
            {'{ClientExpireDate}'}, {'{BillAmount}'}, {'{Balance}'}, {'{ACNumber}'},
            {'{ISPNickName}'}, {'{ISPFullName}'}, {'{ISPSupportNumber}'}
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
          <button className="px-6 py-2 bg-[#2ecc71] text-white rounded font-bold text-xs hover:bg-[#27ae60] flex items-center gap-1.5 shadow-md active:scale-95 transition-all">
            Send
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-rose-500 text-white rounded font-bold text-xs hover:bg-rose-600 shadow-md active:scale-95 transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SMSSender;
