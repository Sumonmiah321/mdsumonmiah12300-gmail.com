
import React from 'react';
import { ArrowLeft, Lock, Trash2, Ban, ShieldAlert, Key, Settings } from 'lucide-react';

interface UserOptionsProps {
  user: any;
  onBack: () => void;
}

const UserOptions: React.FC<UserOptionsProps> = ({ user, onBack }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft size={20} className="text-slate-500" />
        </button>
        <h2 className="text-xl font-bold text-slate-700">Account Management: {user.name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Change Password */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2 font-bold text-slate-700">
            <Key size={18} className="text-blue-500" />
            Update Password
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Confirm New Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100">
              Change Password
            </button>
          </div>
        </div>

        {/* Account Status */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2 font-bold text-slate-700">
            <Settings size={18} className="text-amber-500" />
            Account Control
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700">Temporary Suspend</p>
                <p className="text-xs text-slate-400">User won't be able to login</p>
              </div>
              <button className="px-4 py-2 bg-amber-50 text-amber-600 border border-amber-200 rounded text-xs font-bold hover:bg-amber-100">
                Suspend Now
              </button>
            </div>
            
            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <div>
                <p className="font-bold text-red-600">Delete Account</p>
                <p className="text-xs text-slate-400">Permanently remove user data</p>
              </div>
              <button className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded text-xs font-bold hover:bg-red-100 flex items-center gap-2">
                <Trash2 size={14} /> Delete User
              </button>
            </div>

            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700">Reset Balance</p>
                <p className="text-xs text-slate-400">Current Balance: ৳{user.balance}</p>
              </div>
              <button className="px-4 py-2 bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-bold hover:bg-slate-200">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOptions;
