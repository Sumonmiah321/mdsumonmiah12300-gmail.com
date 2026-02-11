
import React from 'react';
import { ArrowLeft, Mail, Phone, Calendar, Clock, History, UserCheck, Shield } from 'lucide-react';

interface UserProfileProps {
  user: any;
  onBack: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onBack }) => {
  const loginLogs = [
    { ip: '103.144.201.22', time: '02-02-26 21:55:10', device: 'Chrome / Windows', status: 'Success' },
    { ip: '103.144.201.22', time: '01-02-26 09:12:05', device: 'Chrome / Windows', status: 'Success' },
    { ip: '103.144.201.22', time: '31-01-26 18:30:44', device: 'Safari / iPhone', status: 'Success' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft size={20} className="text-slate-500" />
        </button>
        <h2 className="text-xl font-bold text-slate-700">User Profile Details</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center h-fit">
          <img src={user.avatar} className="w-24 h-24 rounded-full border-4 border-slate-50 shadow-md mb-4" />
          <h3 className="text-lg font-bold text-slate-800">{user.name}</h3>
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6">{user.role}</span>
          
          <div className="w-full space-y-4 text-left">
            <div className="flex items-center gap-3 text-slate-600">
              <Mail size={16} className="text-slate-400" />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Phone size={16} className="text-slate-400" />
              <span className="text-sm">{user.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Calendar size={16} className="text-slate-400" />
              <span className="text-sm">Joined Feb 2026</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50 w-full grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Balance</p>
              <p className="text-lg font-bold text-slate-700">৳{user.balance}</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
              <p className="text-lg font-bold text-emerald-600">{user.status}</p>
            </div>
          </div>
        </div>

        {/* Login Logs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center gap-2 font-bold text-slate-700">
              <History size={18} className="text-indigo-500" />
              Recent Login History
            </div>
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-left uppercase text-[10px] font-bold">
                <tr>
                  <th className="px-5 py-3">IP Address</th>
                  <th className="px-5 py-3">Time</th>
                  <th className="px-5 py-3">Device / OS</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loginLogs.map((log, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">{log.ip}</td>
                    <td className="px-5 py-4 text-slate-500 text-xs">{log.time}</td>
                    <td className="px-5 py-4 text-slate-500 text-xs">{log.device}</td>
                    <td className="px-5 py-4">
                      <span className="text-emerald-500 font-bold flex items-center gap-1 text-[11px]">
                        <UserCheck size={12} /> {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center gap-2 font-bold text-slate-700 mb-4">
              <Shield size={18} className="text-amber-500" />
              Security Settings
            </div>
            <div className="space-y-4">
              <button className="w-full py-2 bg-slate-50 border border-slate-200 rounded text-slate-600 text-sm font-bold hover:bg-slate-100 transition-colors">
                Force Logout from All Devices
              </button>
              <button className="w-full py-2 bg-slate-50 border border-slate-200 rounded text-slate-600 text-sm font-bold hover:bg-slate-100 transition-colors">
                View Account API Keys
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
