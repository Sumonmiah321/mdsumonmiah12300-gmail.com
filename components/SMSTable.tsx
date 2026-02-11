
import React, { useState, useMemo } from 'react';
import { 
  Calendar, Download, Printer, FileText, Search, RefreshCw, 
  Filter, Smartphone, MessageCircle, CreditCard, Send, 
  User, PhoneCall, PhoneIncoming, PhoneOutgoing, Clock, CheckCircle2,
  ChevronRight, AlertCircle, Trash2, LayoutGrid
} from 'lucide-react';

interface SMSTableProps {
  title: string;
}

const SMSTable: React.FC<SMSTableProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [smsText, setSmsText] = useState('');

  // Specialized Mock Data
  const tableContent = useMemo(() => {
    if (title === 'SMS History') {
      return {
        headers: ['Date Time', 'Mobile Number', 'Message Body', 'Cost (৳)', 'Status'],
        data: [
          { col1: '2026-02-02 14:22', col2: '01712345678', col3: 'Your account has been expired. Please recharge.', col4: '0.40', col5: 'Sent' },
          { col1: '2026-02-02 12:10', col2: '01987654321', col3: 'Welcome to SB WIFI ZONE. Your ID is P2880.', col4: '0.40', col5: 'Sent' },
        ]
      };
    }
    if (title === 'SMS Recharge') {
      return {
        headers: ['Recharge Date', 'Amount (৳)', 'Payment Method', 'TRX ID', 'Status'],
        data: [
          { col1: '2026-02-01 18:30', col2: '200', col3: 'Nagad', col4: 'NXH7722PP', col5: 'Success' },
          { col1: '2026-01-25 11:20', col2: '500', col3: 'bKash', col4: 'BKL0011QX', col5: 'Success' },
        ]
      };
    }
    if (title === 'Call Logs') {
      return {
        headers: ['Call Start', 'Caller ID', 'Type', 'Duration', 'Agent', 'Status'],
        data: [
          { col1: '2026-02-02 11:00', col2: '01552705496', col3: 'Incoming', col4: '02:45', col5: 'Sumon', col6: 'Connected' },
          { col1: '2026-02-02 09:30', col2: '01303102455', col3: 'Outgoing', col4: '00:12', col5: 'Auto-Bot', col6: 'No Answer' },
        ]
      };
    }
    return null;
  }, [title]);

  const getHeaderIcon = () => {
    switch (title) {
      case 'SMS History': return <MessageCircle className="text-blue-500" />;
      case 'SMS Recharge': return <CreditCard className="text-emerald-500" />;
      case 'Send SMS': return <Send className="text-indigo-500" />;
      case 'Call Logs': return <PhoneCall className="text-rose-500" />;
      default: return <Smartphone className="text-slate-400" />;
    }
  };

  // Content for "Send SMS" Page
  if (title === 'Send SMS') {
    return (
      <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">{getHeaderIcon()}</div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Compose Broadcast</h2>
              <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
                <span>Enterprise SMS</span>
                <ChevronRight size={14} className="mx-1" />
                <span className="text-blue-500">New Campaign</span>
              </nav>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Recipient Number(s)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="e.g. 01712XXXXXX, 019XXXXXXXX" 
                      className="w-full pl-10 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                    <User className="absolute left-3.5 top-4 text-slate-400" size={18} />
                  </div>
                  <p className="text-[9px] text-slate-400 mt-2 font-bold uppercase">Separate multiple numbers with a comma</p>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Message Body</label>
                  <textarea 
                    rows={6}
                    value={smsText}
                    onChange={(e) => setSmsText(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
                  ></textarea>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Characters: {smsText.length} | Parts: {Math.ceil(smsText.length / 160) || 0}</span>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest cursor-pointer hover:underline">Select Template</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-100 flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-95 transition-all">
                    <Send size={20} /> Launch Campaign
                  </button>
                  <button className="px-8 bg-slate-100 text-slate-500 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all">
                    Draft
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-xl p-6">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <LayoutGrid size={16} className="text-blue-500" /> Smart Tags
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {['ClientName', 'ID', 'ExpDate', 'Bill', 'Balance', 'Mobile'].map(tag => (
                  <button key={tag} onClick={() => setSmsText(prev => prev + ` {${tag}}`)} className="p-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                    {`{${tag}}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-[1.5rem] p-6">
              <div className="flex items-center gap-3 text-amber-600 mb-3">
                <AlertCircle size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Compliance Notice</span>
              </div>
              <p className="text-[11px] text-amber-700 leading-relaxed font-bold">
                By sending this broadcast, you agree to our anti-spam policy. Promotional messages must be sent within 9 AM to 9 PM only.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Content for Table-based Pages
  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
           <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">{getHeaderIcon()}</div>
           <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">{title} Control</h2>
              <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
                <span>Enterprise Comms</span>
                <ChevronRight size={14} className="mx-1" />
                <span className="text-blue-500">{title} Archive</span>
              </nav>
           </div>
        </div>
        <div className="flex gap-2">
           <button className="px-5 py-2.5 bg-[#343a40] text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg active:scale-95 transition-all">
              <RefreshCw size={16} /> Data Refresh
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Advanced Filters */}
        <div className="p-6 bg-slate-50/50 border-b border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Time Frame Start</label>
              <div className="relative">
                <input type="date" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none focus:border-blue-400" />
                <Calendar className="absolute left-3.5 top-3 text-slate-400" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Target Identity</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Mobile / Username..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none focus:border-blue-400" 
                />
                <Search className="absolute left-3.5 top-3 text-slate-400" size={16} />
              </div>
            </div>
            {title === 'Call Logs' && (
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Call Type</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none focus:border-blue-400">
                  <option>All Calls</option>
                  <option>Incoming</option>
                  <option>Outgoing</option>
                </select>
              </div>
            )}
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg active:scale-95 transition-all">
                <Filter size={16} /> Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* Action Header */}
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Master Node: Radius_SMS_GW</span>
           </div>
           <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl text-[11px] font-black hover:bg-emerald-100 transition-all uppercase tracking-widest">
              <FileText size={16} /> Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-[11px] font-black hover:bg-rose-100 transition-all uppercase tracking-widest">
              <Download size={16} /> PDF
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#343a40] text-white uppercase font-black text-[10px] tracking-[0.15em]">
              <tr>
                {tableContent?.headers.map((header, hIdx) => (
                  <th key={hIdx} className="px-6 py-5">{header}</th>
                ))}
                <th className="px-6 py-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableContent?.data.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-5 text-slate-500 font-bold">{row.col1}</td>
                  <td className="px-6 py-5 font-black text-blue-600">{row.col2}</td>
                  <td className="px-6 py-5 font-bold text-slate-700">
                    {title === 'Call Logs' ? (
                      <span className="flex items-center gap-2">
                        {row.col3 === 'Incoming' ? <PhoneIncoming size={14} className="text-emerald-500" /> : <PhoneOutgoing size={14} className="text-blue-500" />}
                        {row.col3}
                      </span>
                    ) : (
                      <span className="max-w-xs block truncate">{row.col3}</span>
                    )}
                  </td>
                  <td className={`px-6 py-5 font-black ${title === 'SMS Recharge' ? 'text-slate-800' : 'text-slate-500'}`}>{row.col4}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border ${
                      row.col5 === 'Sent' || row.col5 === 'Success' || row.col5 === 'Connected' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : 'bg-rose-50 text-rose-600 border-rose-100'
                    }`}>
                      {row.col5}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="p-2 text-slate-300 hover:text-rose-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
           <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" /> Gateway Sync: <span className="text-blue-500">ONLINE</span>
           </div>
           <div className="flex gap-1">
              <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg text-xs font-black shadow-lg">1</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SMSTable;
