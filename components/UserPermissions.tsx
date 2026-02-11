
import React from 'react';
import { ShieldCheck, ArrowLeft, Save, LayoutGrid } from 'lucide-react';

interface UserPermissionsProps {
  user: any;
  onBack: () => void;
}

const UserPermissions: React.FC<UserPermissionsProps> = ({ user, onBack }) => {
  const modules = [
    { name: 'Dashboard', permissions: ['View', 'Refresh'] },
    { name: 'Billing', permissions: ['View', 'Renew', 'SMS', 'Activate', 'Left'] },
    { name: 'Reports', permissions: ['Sales', 'Transactions', 'POP Report', 'Invoices'] },
    { name: 'Clients', permissions: ['Create', 'Edit', 'Delete', 'Search', 'Migration'] },
    { name: 'Hotspot', permissions: ['View', 'Logs', 'Kick User', 'Profiles'] },
    { name: 'PPPoE', permissions: ['View', 'Disconnect', 'Traffic Monitor'] },
    { name: 'SMS & Call', permissions: ['History', 'Recharge', 'Send SMS'] },
    { name: 'Configuration', permissions: ['Users', 'Mikrotik', 'Package Plans', 'Zone Setup'] },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft size={20} className="text-slate-500" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-slate-700">Module Permissions: {user.name}</h2>
            <p className="text-xs text-slate-400">Manage what this user can access and modify</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded font-bold text-sm shadow-lg shadow-emerald-100 active:scale-95 transition-all">
          <Save size={16} /> Save Permissions
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
              <LayoutGrid size={16} className="text-blue-500" />
              <span className="font-bold text-slate-700 text-sm">{mod.name} Module</span>
            </div>
            <div className="p-4 space-y-3">
              {mod.permissions.map((perm, pIdx) => (
                <div key={pIdx} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{perm}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPermissions;
