
import React, { useState } from 'react';
import { 
  Filter, PlusCircle, Search, MoreHorizontal, User, 
  ChevronRight, ChevronLeft, LayoutGrid,
  Download, LogIn, ShieldCheck, Monitor, Edit, Trash2, 
  X, CreditCard, UserCheck, Key, Settings, UserRound,
  FileText, ClipboardList, MapPin
} from 'lucide-react';

const ManageUsers: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const users = [
    {
      id: 2880,
      name: 'Sb Wifi Zone',
      email: 'mdsumon12300@gmail.com',
      avatar: 'https://picsum.photos/seed/sbwifi/40/40',
      role: 'Admin',
      balance: 0,
      limit: 0,
      phone: '66552705496',
      status: 'Active',
      joinDate: '2024-07-30 23:26:42'
    },
    {
      id: 2881,
      name: 'TNRSOFT-Sb Wi-Fi Zone',
      email: 'client1514@tnrsoft.com',
      avatar: 'https://picsum.photos/seed/tnrsoft/40/40',
      role: 'Admin',
      balance: 0,
      limit: 0,
      phone: '01792426831',
      status: 'Active',
      joinDate: '2024-08-05 12:10:15'
    }
  ];

  const handleOpenDetails = (user: any) => {
    setSelectedUser(user);
    setIsSidebarOpen(true);
  };

  return (
    <div className="p-6 space-y-4 bg-[#f8fafc] min-h-screen relative">
      {/* Breadcrumb & Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold text-slate-700">Manage Users</h2>
        <nav className="flex items-center text-sm font-medium text-slate-400">
          <span>SmartISP</span>
          <ChevronRight size={16} className="mx-1 opacity-50" />
          <span className="text-slate-300">Manage Users</span>
        </nav>
      </div>

      {/* Main Container with Blue Border as per image */}
      <div className="bg-white rounded border border-blue-400 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
        
        {/* Top Buttons Bar */}
        <div className="p-5">
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-4 py-1.5 border border-[#2ecc71] text-[#2ecc71] rounded text-sm font-semibold hover:bg-emerald-50 transition-colors">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 border border-[#f39c12] text-[#f39c12] rounded text-sm font-semibold hover:bg-amber-50 transition-colors">
              <PlusCircle size={16} /> Add User
            </button>
          </div>
        </div>

        <div className="border-t border-slate-100 mx-5 mb-5"></div>

        {/* Search & Rows Bar */}
        <div className="px-5 pb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <div className="inline-flex rounded overflow-hidden">
              <button className="px-4 py-2 bg-[#eaf2ff] text-[#3498db] border border-blue-100 rounded-l text-xs font-bold hover:bg-blue-100 transition-colors">
                Show 20 rows ▼
              </button>
              <button className="px-4 py-2 bg-[#f0efff] text-[#6c5ce7] border border-indigo-100 border-l-0 rounded-r text-xs font-bold flex items-center gap-1.5 hover:bg-indigo-100 transition-colors">
                Export
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-500 font-medium">Search:</label>
            <input 
              type="text" 
              className="px-3 py-1.5 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm w-56"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-white text-slate-500 font-bold border-b border-slate-100">
              <tr>
                <th className="px-5 py-3 border-r border-slate-50">ID</th>
                <th className="px-5 py-3 border-r border-slate-50">User</th>
                <th className="px-5 py-3 border-r border-slate-50">Username</th>
                <th className="px-5 py-3 border-r border-slate-50">Role <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                <th className="px-5 py-3 border-r border-slate-50 text-center">Balance <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                <th className="px-5 py-3 border-r border-slate-50 text-center">Limit <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                <th className="px-5 py-3 border-r border-slate-50 text-center">Phone <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                <th className="px-5 py-3 border-r border-slate-50 text-center">Status <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                <th className="px-5 py-3 text-center">Action <span className="text-[10px] opacity-30 ml-1">↕</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-4 text-slate-400">{user.id}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-slate-100" />
                      <span className="font-semibold text-slate-700">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{user.email}</td>
                  <td className="px-5 py-4">
                    <span className="bg-[#2ecc71] text-white px-2.5 py-0.5 rounded text-[10px] font-bold">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center text-slate-500 font-medium">{user.balance}</td>
                  <td className="px-5 py-4 text-center text-slate-500 font-medium">{user.limit}</td>
                  <td className="px-5 py-4 text-center text-slate-500 font-mono">{user.phone}</td>
                  <td className="px-5 py-4 text-center">
                    <span className="bg-[#2ecc71] text-white px-2.5 py-0.5 rounded text-[10px] font-bold">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <button 
                        className="p-1.5 bg-[#d1f0ff] text-[#3498db] border border-blue-100 rounded hover:bg-[#bde7ff] transition-colors"
                        title="Quick View"
                      >
                        <LayoutGrid size={14} />
                      </button>
                      <button 
                        className="p-1.5 bg-[#ffd1d1] text-[#f42a41] border border-rose-100 rounded hover:bg-[#ffbebe] transition-colors"
                        title="User Details"
                      >
                        <User size={14} />
                      </button>
                      <button 
                        onClick={() => handleOpenDetails(user)}
                        className="p-1.5 bg-[#f1f2f6] text-slate-500 border border-slate-200 rounded hover:bg-slate-200 transition-colors"
                        title="Options"
                      >
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-5 py-5 flex items-center justify-between bg-white">
          <p className="text-xs text-slate-400 font-bold">Showing 1 to 2 of 2 entries</p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 bg-[#3498db] text-white rounded-full text-xs font-bold shadow-md">1</button>
            <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Detail Sidebar Modal (from Image 2) */}
      {isSidebarOpen && selectedUser && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-[60] animate-in fade-in duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-[360px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 animate-in slide-in-from-right overflow-y-auto custom-scrollbar">
            
            {/* Sidebar Header */}
            <div className="p-6 flex flex-col items-center border-b border-slate-50 relative">
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 self-start">
                <img src={selectedUser.avatar} className="w-14 h-14 rounded-md border border-slate-100 shadow-sm" alt="Profile" />
                <div className="flex flex-col">
                   <h3 className="font-bold text-slate-700 text-lg">{selectedUser.name}</h3>
                   <span className="bg-[#2ecc71] text-white px-2 py-0.5 rounded text-[10px] font-bold w-fit mt-1 uppercase">
                    {selectedUser.role}
                   </span>
                </div>
              </div>

              <div className="w-full mt-6 space-y-3">
                <InfoItem label="Mobile" value={selectedUser.phone} />
                <InfoItem label="Email" value={selectedUser.email} />
                <InfoItem label="Balance" value={selectedUser.balance} />
                <InfoItem label="Credit Limit" value="000" />
                <InfoItem label="Owner" value="N/A" />
                <InfoItem label="Join Date" value={selectedUser.joinDate} />
              </div>
            </div>

            {/* Sidebar Operations List */}
            <div className="p-6 space-y-1">
               <SidebarAction icon={<CreditCard size={18} className="text-slate-400" />} label="Recharge" />
               <SidebarAction icon={<LogIn size={18} className="text-slate-400" />} label="Login" />
               <SidebarAction icon={<ShieldCheck size={18} className="text-slate-400" />} label="Edit Permission" />
               <SidebarAction icon={<ClipboardList size={18} className="text-slate-400" />} label="Plan Permission" />
               <SidebarAction icon={<MapPin size={18} className="text-slate-400" />} label="Zone Permission" />
               <SidebarAction icon={<Monitor size={18} className="text-slate-400" />} label="Login Log" />
               <SidebarAction icon={<UserRound size={18} className="text-slate-400" />} label="Edit Information" />
               <SidebarAction icon={<Trash2 size={18} className="text-slate-400" />} label="Delete" />
            </div>

            {/* Sidebar Close Button */}
            <div className="p-6 mt-4">
               <button 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full py-2.5 bg-[#f42a41] text-white rounded font-bold text-sm shadow-lg shadow-rose-100 hover:bg-rose-700 transition-colors uppercase tracking-widest"
               >
                 Close
               </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper Components for Sidebar
const InfoItem = ({ label, value }: { label: string, value: string | number }) => (
  <div className="flex items-center text-xs font-medium">
    <span className="text-slate-400 w-24">{label} :</span>
    <span className="text-slate-500 font-semibold">{value}</span>
  </div>
);

const SidebarAction = ({ icon, label }: { icon: any, label: string }) => (
  <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors group text-left">
     <div className="group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <span className="text-slate-500 font-semibold text-sm group-hover:text-slate-700">{label}</span>
  </button>
);

export default ManageUsers;
