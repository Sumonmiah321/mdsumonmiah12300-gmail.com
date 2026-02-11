
import React, { useState, useMemo } from 'react';
import { 
  Wifi, Search, Filter, RefreshCw, ChevronRight, ChevronLeft,
  Users, UserCheck, UserMinus, XCircle, CheckCircle, MessageSquare, 
  UserPlus, ChevronDown, Download, Printer, Copy, FileText
} from 'lucide-react';

interface HotspotTableProps {
  title: string;
}

const HotspotTable: React.FC<HotspotTableProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const isLogView = title === 'Log' || title === 'Mac Log';

  // Mock data for User Lists based on Screenshot
  const userListData = [
    { id: '506282', cid: '0599552535', name: 'Ahmed Shadi', mobile: '0599552535', package: '15Days', rdays: '0', uptime: '-', ip: '-', mac: 'A6:C2:48:1D:6E:A8', up: '-', down: '-', lastOffline: '-', status: 'grey' },
    { id: '533800', cid: '0557281610', name: 'Hamza Khan', mobile: '0557281610', package: '30Days', rdays: '0', uptime: '-', ip: '-', mac: '72:10:02:81:11:52', up: '-', down: '-', lastOffline: '-', status: 'grey' },
    { id: '491709', cid: '0572064541', name: 'Shitha', mobile: '0572064541', package: '15Days', rdays: '0', uptime: '-', ip: '-', mac: 'A0:D8:07:6D:5F:43', up: '-', down: '-', lastOffline: '-', status: 'grey' },
    { id: '502775', cid: '0540585076', name: 'Muhammad Abd Al-mutajli', mobile: '0540585076', package: '30Days', rdays: '0', uptime: '-', ip: '-', mac: '5A:EB:18:45:38:DE', up: '-', down: '-', lastOffline: '-', status: 'grey' },
    { id: '534696', cid: '0536733596', name: 'Yakub', mobile: '0536733596', package: '30Days', rdays: '0', uptime: '1:40:20', ip: '10.10.1.68', mac: '70:52:D8:2B:C6:82', up: '35.02MB', down: '849.15MB', lastOffline: '-', status: 'green' },
    { id: '515191', cid: '0550796902', name: 'Masud', mobile: '0550796902', package: '30Days', rdays: '1', uptime: '-', ip: '-', mac: 'DA:EF:97:BB:7D:76', up: '-', down: '-', lastOffline: '-', status: 'red' },
    { id: '512174', cid: '0536865524', name: 'Surjeet Gautam', mobile: '0536865524', package: '30Days', rdays: '0', uptime: '-', ip: '-', mac: '7A:2E:F4:4E:36:73', up: '-', down: '-', lastOffline: '-', status: 'grey', highlight: true },
  ];

  // Mock data for Log based on Screenshot
  const logData = [];
  
  // Mock data for Mac Log based on Screenshot
  const macLogData = [
    { user: 'Jamatul', mac: 'C6:CB:A9:97:97:9E', device: '', ip: '10.10.0.75', time: '16:52:16', server: 'Sb Wi-Fi Zone' },
    { user: 'Rasel', mac: 'FA:50:32:4C:81:A3', device: '', ip: '10.10.0.76', time: '16:57:48', server: 'Sb Wi-Fi Zone' },
    { user: 'Rasel', mac: 'FA:50:32:4C:81:A3', device: '', ip: '10.10.0.76', time: '16:51:26', server: 'Sb Wi-Fi Zone' },
  ];

  if (isLogView) {
    const activeData = title === 'Log' ? logData : macLogData;
    return (
      <div className="p-4 space-y-4 bg-[#f8fafc] min-h-screen">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-700">Hotspot {title}</h2>
          <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1" />
            <span>Tables</span>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-blue-500">Hotspot {title}</span>
          </nav>
        </div>

        <div className="bg-white rounded border border-slate-100 shadow-sm p-4 space-y-4">
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <RefreshCw size={18} className="animate-spin-slow" />
          </button>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              Show 
              <select className="border border-slate-200 rounded px-2 py-1 outline-none">
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

          <div className="flex items-center gap-1">
            <button className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded text-xs font-bold border border-slate-100 flex items-center gap-1.5 hover:bg-slate-100 transition-all"><Copy size={14} /> Copy</button>
            <button className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded text-xs font-bold border border-slate-100 flex items-center gap-1.5 hover:bg-slate-100 transition-all"><Printer size={14} /> Print</button>
            <button className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded text-xs font-bold border border-slate-100 flex items-center gap-1.5 hover:bg-slate-100 transition-all"><FileText size={14} /> PDF</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[12px] text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-slate-100 text-slate-600 font-bold">
                  {title === 'Log' ? (
                    <>
                      <th className="px-4 py-3 border-r border-slate-50">User ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">IP ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">Time ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">Server ↕</th>
                      <th className="px-4 py-3">Messages ↕</th>
                    </>
                  ) : (
                    <>
                      <th className="px-4 py-3 border-r border-slate-50">User ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">Mac ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">Device ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">IP ↕</th>
                      <th className="px-4 py-3 border-r border-slate-50">Time ↕</th>
                      <th className="px-4 py-3">Server ↕</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {activeData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-slate-400 bg-slate-50/30">
                      No data available in table
                    </td>
                  </tr>
                ) : (
                  activeData.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-slate-600 font-medium">{row.user}</td>
                      {title === 'Mac Log' && <td className="px-4 py-3 text-slate-500 font-mono">{row.mac}</td>}
                      {title === 'Mac Log' && <td className="px-4 py-3 text-slate-500">{row.device}</td>}
                      <td className="px-4 py-3 text-slate-500">{row.ip}</td>
                      <td className="px-4 py-3 text-slate-500">{row.time}</td>
                      <td className="px-4 py-3 text-slate-500">{row.server}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-400 font-medium pt-2">
            <span>Showing {activeData.length === 0 ? '0 to 0 of 0' : `1 to ${activeData.length} of ${activeData.length}`} entries</span>
            <div className="flex items-center gap-1">
              <button className="p-1 text-slate-300"><ChevronLeft size={16} /></button>
              {activeData.length > 0 && <button className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</button>}
              <button className="p-1 text-slate-300"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- USER LIST VIEW (All, Active, Online, Offline Users) ---
  return (
    <div className="p-4 space-y-4 bg-[#f8fafc] min-h-screen">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-slate-700">Client List</h2>
        <nav className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>Client List</span>
        </nav>
      </div>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Total User" value="528" color="bg-indigo-500" icon={<Users size={20} />} />
        <StatCard label="Online User" value="77" color="bg-emerald-400" icon={<UserCheck size={20} />} />
        <StatCard label="Offline" value="344" color="bg-rose-500" icon={<UserMinus size={20} />} />
        <StatCard label="Blocked User" value="0" color="bg-amber-500" icon={<XCircle size={20} />} />
      </div>

      <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden mt-6">
        {/* Action Buttons Bar */}
        <div className="p-4 flex flex-wrap items-center gap-2 border-b border-slate-100">
          <ActionButton label="Filter" color="border-[#2ecc71] text-[#2ecc71]" icon={<Filter size={14} />} />
          <ActionButton label="Bulk Renew" color="border-[#f39c12] text-[#f39c12]" icon={<CheckCircle size={14} />} />
          <ActionButton label="Bulk SMS" color="border-[#3498db] text-[#3498db]" icon={<MessageSquare size={14} />} />
          <ActionButton label="Left" color="border-[#e74c3c] text-[#e74c3c]" icon={<UserMinus size={14} />} />
          <ActionButton label="Activate" color="border-[#3498db] text-[#3498db]" icon={<UserPlus size={14} />} />
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2ecc71] text-[#2ecc71] rounded text-[11px] font-bold hover:bg-emerald-50 transition-all">
              More <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Search & Export Bar */}
        <div className="p-4 flex items-center justify-between bg-white border-b border-slate-50">
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 bg-[#eaf2ff] text-[#3498db] rounded text-[11px] font-bold border border-blue-100 hover:bg-blue-100">Show 25 rows</button>
            <button className="px-3 py-1.5 bg-[#f0efff] text-[#6c5ce7] rounded text-[11px] font-bold border border-indigo-100 hover:bg-indigo-100">Export</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-bold">Search:</span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-slate-200 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-400 w-48 bg-white"
            />
          </div>
        </div>

        {/* User Data Table */}
        <div className="overflow-x-auto relative">
          <table className="w-full text-[11px] text-left border-collapse">
            <thead className="bg-white text-slate-600 font-bold border-b border-slate-100">
              <tr>
                <th className="p-4 w-4 border-r border-slate-50"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="px-4 py-3 border-r border-slate-50">ID ↕</th>
                <th className="px-4 py-3 border-r border-slate-50">C.ID ↕</th>
                <th className="px-4 py-3 border-r border-slate-50">Name ↕</th>
                <th className="px-4 py-3 border-r border-slate-50">Mobile ↕</th>
                <th className="px-4 py-3 border-r border-slate-50">Package ↕</th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">R.Days ↕</th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">Uptime ↕</th>
                <th className="px-4 py-3 border-r border-slate-50">IP ↕</th>
                <th className="px-4 py-3 border-r border-slate-50">Mac Address ↕</th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">Up ↕</th>
                <th className="px-4 py-3 border-r border-slate-50 text-center">Down ↕</th>
                <th className="px-4 py-3 text-center">Last Offline ↕</th>
              </tr>
            </thead>
            <tbody>
              {userListData.map((row, i) => (
                <tr key={i} className={`border-b border-slate-50 hover:bg-blue-50/50 transition-colors ${row.highlight ? 'bg-[#fff9e6]' : ''}`}>
                  <td className="p-4 border-r border-slate-50"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="px-4 py-3 border-r border-slate-50 text-slate-400">{row.id}</td>
                  <td className="px-4 py-3 border-r border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${row.status === 'green' ? 'bg-emerald-400' : row.status === 'red' ? 'bg-rose-400' : 'bg-slate-300'}`}></div>
                      <span className="text-blue-500 font-bold cursor-pointer hover:underline">{row.cid}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 border-r border-slate-50 text-slate-700 font-medium">{row.name}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-slate-500 font-mono">{row.mobile}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.package}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-center text-slate-500">{row.rdays}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-center text-slate-500">{row.uptime}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-slate-500 font-mono">{row.ip}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-slate-500 font-mono uppercase">{row.mac}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-center text-slate-400 font-bold">{row.up}</td>
                  <td className="px-4 py-3 border-r border-slate-50 text-center text-slate-400 font-bold">{row.down}</td>
                  <td className="px-4 py-3 text-center text-slate-400">{row.lastOffline}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Horizontal Scroll Progress Shadow (as seen in image) */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#dfdfdf] rounded-full">
            <div className="h-full bg-slate-400 w-full rounded-full"></div>
          </div>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 bg-white flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase">
          <span>Showing 1 to 25 of 528 entries</span>
          <div className="flex items-center gap-1">
            <button className="p-1 text-slate-300"><ChevronLeft size={16} /></button>
            <button className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px]">1</button>
            <button className="w-6 h-6 hover:bg-slate-100 rounded-full flex items-center justify-center text-[10px]">2</button>
            <button className="w-6 h-6 hover:bg-slate-100 rounded-full flex items-center justify-center text-[10px]">3</button>
            <span className="px-1 text-[10px]">...</span>
            <button className="w-6 h-6 hover:bg-slate-100 rounded-full flex items-center justify-center text-[10px]">22</button>
            <button className="p-1 text-slate-300 hover:text-slate-500"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal components
const StatCard = ({ label, value, color, icon }: any) => (
  <div className="bg-white rounded shadow-sm border border-slate-100 p-5 flex items-center justify-between group overflow-hidden relative">
     <div className="absolute top-0 right-0 h-full w-24 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className={color.replace('bg-', 'text-')} /></svg>
     </div>
     <div className={`w-12 h-12 ${color} text-white rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
        {icon}
     </div>
     <div className="text-right">
        <h3 className="text-2xl font-black text-slate-700 leading-none mb-1">{value}</h3>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{label}</p>
     </div>
  </div>
);

const ActionButton = ({ label, icon, color }: any) => (
  <button className={`flex items-center gap-1.5 px-3 py-1.5 border rounded text-[11px] font-bold hover:bg-slate-50 transition-all ${color}`}>
    {icon} {label}
  </button>
);

export default HotspotTable;
