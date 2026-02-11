
import React, { useState } from 'react';
import { 
  Ticket, Share2, Package, Activity, Monitor, Search, Filter, RefreshCw, 
  PlusCircle, MoreHorizontal, MessageSquare, AlertCircle, CheckCircle2,
  ArrowUp, ArrowDown, Cpu, HardDrive, Globe, Zap, Settings,
  Router, Wifi, SignalHigh, ChevronRight, FileText, Download, LayoutGrid, Clock, ShieldCheck,
  ChevronDown, Menu, Tag, Trash2, CheckCircle, Plus, Settings2, FileUp, FileDown
} from 'lucide-react';

interface OthersTableProps {
  title: string;
}

const OthersTable: React.FC<OthersTableProps> = ({ title }) => {
  const isTicketing = title === 'Ticketing';
  const isNetworkDiagram = title === 'Network Diagram';

  const getHeaderIcon = () => {
    switch (title) {
      case 'AP Monitor': return <Wifi className="text-emerald-500" />;
      case 'Ticketing': return <Ticket className="text-blue-500" />;
      case 'Network Diagram': return <Share2 className="text-indigo-500" />;
      case 'My Package Plan': return <Package className="text-amber-500" />;
      case 'Traffic Monitor': return <Activity className="text-rose-500" />;
      case 'Server Watcher': return <Monitor className="text-indigo-600" />;
      default: return <Settings className="text-slate-400" />;
    }
  };

  // --- TICKETING PAGE ---
  if (isTicketing) {
    return (
      <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-700">Tickets</h2>
          <nav className="flex items-center text-[11px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Apps</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Tickets</span>
          </nav>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <TicketStatCard label="Total Tickets" value="0" color="bg-blue-500" icon={<Tag size={20} />} />
          <TicketStatCard label="Pending Tickets" value="0" color="bg-amber-400" icon={<Clock size={20} />} />
          <TicketStatCard label="Closed Tickets" value="0" color="bg-emerald-400" icon={<CheckCircle size={20} />} />
          <TicketStatCard label="Deleted Tickets" value="0" color="bg-rose-400" icon={<Trash2 size={20} />} />
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 mt-6 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-700 text-[15px]">Manage Tickets</h3>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#7e57c2] text-white rounded text-[12px] font-bold shadow-md hover:bg-[#6c48b1] transition-all">
              <Plus size={16} /> Add Ticket
            </button>
          </div>

          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Show</span>
              <select className="border border-slate-200 rounded px-2 py-1 text-sm outline-none bg-white">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-sm text-slate-400">entries</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-400">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-200 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
                <tr>
                  <th className="px-5 py-4 border-r border-slate-50">ID <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 border-r border-slate-50">Subject <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 border-r border-slate-50">Requested By <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 border-r border-slate-50">Assigned To <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 border-r border-slate-50">Priority <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 border-r border-slate-50">Status <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 border-r border-slate-50">Created Date <span className="opacity-30">↕</span></th>
                  <th className="px-5 py-4 text-center">Action <span className="opacity-30">↕</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="px-5 py-10 text-center text-slate-400 bg-slate-50/20 italic">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
            <p className="text-sm text-slate-400">No records available - Got it?</p>
            <div className="flex items-center gap-0 border border-slate-200 rounded overflow-hidden">
              <button className="px-4 py-2 text-sm text-slate-300 font-medium hover:bg-slate-50 border-r border-slate-200 transition-colors">Previous</button>
              <button className="px-4 py-2 text-sm text-slate-300 font-medium hover:bg-slate-50 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- NETWORK DIAGRAM PAGE ---
  if (isNetworkDiagram) {
    return (
      <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-700">Network Diagram List</h2>
          <nav className="flex items-center text-[11px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Server</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Network Diagram List</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 flex items-center justify-between">
            <button className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f42a41] text-white rounded text-[12px] font-bold shadow-md hover:bg-rose-700 transition-all">
              <PlusCircle size={16} /> Add Diagram
            </button>
            
            <div className="flex items-center gap-2">
              <button className="p-2.5 bg-[#2ecc71] text-white rounded hover:bg-emerald-600 transition-all shadow-sm">
                <Settings2 size={18} />
              </button>
              <button className="px-5 py-2.5 bg-slate-50 border border-slate-100 text-slate-600 text-[12px] font-bold rounded hover:bg-slate-100 transition-all">
                Import
              </button>
              <button className="px-5 py-2.5 bg-slate-50 border border-slate-100 text-slate-600 text-[12px] font-bold rounded hover:bg-slate-100 transition-all">
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead className="bg-white text-slate-400 font-bold border-y border-slate-100">
                <tr>
                  <th className="px-5 py-3 w-16">SL</th>
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Type</th>
                  <th className="px-5 py-3">Description</th>
                  <th className="px-5 py-3 text-right pr-10">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="py-20"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for other "Others" views
  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">{getHeaderIcon()}</div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h2>
            <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
              <span>Network Operations</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-blue-500">Node Management</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          {title === 'AP Monitor' && <APMonitorView />}
          {title === 'My Package Plan' && <PackagePlanView />}
          {title === 'Traffic Monitor' && <TrafficMonitorView />}
          {title === 'Server Watcher' && <ServerWatcherView />}
        </div>
      </div>
    </div>
  );
};

const TicketStatCard = ({ label, value, color, icon }: any) => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 flex items-center justify-between relative group overflow-hidden h-32">
     <div className="flex items-center gap-6">
        <div className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
           {icon}
        </div>
        <div className="flex flex-col items-end">
           <h3 className="text-3xl font-bold text-slate-700 leading-none mb-2">{value}</h3>
           <p className="text-[12px] text-slate-400 font-medium uppercase tracking-wider">{label}</p>
        </div>
     </div>
  </div>
);

// --- OTHER VIEWS ---

const TrafficMonitorView = () => {
  return (
    <div className="p-8 space-y-6">
       <div className="flex gap-8">
          <div className="relative w-64 group">
             <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded text-slate-500 text-[13px] outline-none appearance-none focus:border-blue-400">
                <option>Select Server</option>
             </select>
             <ChevronDown size={14} className="absolute right-3 top-3.5 text-slate-300" />
          </div>
          <div className="relative w-64 group">
             <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded text-slate-500 text-[13px] outline-none appearance-none focus:border-blue-400">
                <option>Select Server First</option>
             </select>
             <ChevronDown size={14} className="absolute right-3 top-3.5 text-slate-300" />
          </div>
       </div>

       <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-6">
          <h4 className="text-sm font-bold text-slate-700">Traffic Monitor:</h4>
       </div>

       <div className="relative bg-white border-t border-slate-100 min-h-[400px]">
          <div className="absolute top-4 left-6 flex flex-col gap-2 p-3 border border-slate-200 rounded bg-white shadow-sm z-10">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Tx</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Rx</span>
             </div>
          </div>

          <div className="absolute top-4 right-6 text-slate-400 hover:text-slate-800 cursor-pointer">
             <Menu size={20} />
          </div>

          <div className="h-[350px] w-full flex items-center justify-center">
             <p className="text-slate-200 font-black text-2xl uppercase tracking-widest opacity-30 select-none">Live Data Stream Pending...</p>
          </div>
       </div>
    </div>
  );
};

const APMonitorView = () => (
  <div className="p-20 text-center">No AP Data Sync</div>
);

const PackagePlanView = () => (
  <div className="p-20 text-center">No Plan Sync</div>
);

const ServerWatcherView = () => (
  <div className="p-20 text-center">No Server Data Sync</div>
);

export default OthersTable;
