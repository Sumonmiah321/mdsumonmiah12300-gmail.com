
import React from 'react';
import { 
  Phone, MessageSquare, Shield, Calendar, MapPin, Globe, 
  CreditCard, Clock, HardDrive, List, Flame, ChevronRight, 
  X, AlertCircle, Cpu, Wifi, Smartphone, Monitor, Info,
  History, Settings, Ban, UserCheck, UserX, UserRound, LayoutGrid, ClipboardList
} from 'lucide-react';

interface ClientDetailsProps {
  client: any;
  onBack: () => void;
  onEdit: () => void;
  onInvoices: () => void;
  onLogs: () => void;
  onRenew: () => void;
  onSMS: () => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client, onBack, onEdit, onInvoices, onLogs, onRenew, onSMS }) => {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-700">Client Information</h2>
        <nav className="flex items-center text-xs font-medium text-slate-400">
          <span>SmartISP</span>
          <ChevronRight size={14} className="mx-1" />
          <span>Client</span>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-blue-500">Client Information</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Account Information - Box 1 */}
        <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-center gap-2">
            <h3 className="font-bold text-slate-600 text-sm uppercase tracking-wider">Account Information</h3>
          </div>
          <div className="flex-1 divide-y divide-slate-50">
            <DetailRow label="Client ID:" value={client.id} isBold />
            <DetailRow label="Name:" value={client.name} />
            <DetailRow label="Address:" value="Not Provided" />
            <DetailRow label="Mobile No:" value={
              <div className="flex items-center gap-2">
                <span>{client.mobile}</span>
                <div className="flex gap-1">
                  <div className="p-1 bg-sky-100 text-sky-500 rounded"><Phone size={12} /></div>
                  <div className="p-1 bg-amber-100 text-amber-500 rounded"><MessageSquare size={12} /></div>
                  <div className="p-1 bg-emerald-100 text-emerald-500 rounded">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  </div>
                </div>
              </div>
            } />
            <DetailRow label="Email:" value="---" />
            <DetailRow label="NID No:" value="---" />
            <DetailRow label="Zone:" value="---" />
            <DetailRow label="Sub Zone:" value="---" />
            <DetailRow label="Notes:" value="---" />
            <DetailRow label="Update:" value="18/10/25" valueClass="text-slate-400" />
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-1.5 flex-wrap">
            <button onClick={onEdit} className="px-3 py-1.5 bg-sky-100 text-sky-600 rounded text-[10px] font-bold hover:bg-sky-200">Edit Info</button>
            <button onClick={onSMS} className="px-3 py-1.5 bg-emerald-100 text-emerald-600 rounded text-[10px] font-bold hover:bg-emerald-200">Send SMS</button>
            <button onClick={onLogs} className="px-3 py-1.5 bg-slate-200 text-slate-600 rounded text-[10px] font-bold hover:bg-slate-300">Task Logs</button>
          </div>
        </div>

        {/* Billing Information - Box 2 */}
        <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-center gap-2">
            <h3 className="font-bold text-slate-600 text-sm uppercase tracking-wider">Billing Information</h3>
          </div>
          <div className="flex-1 divide-y divide-slate-50">
            <DetailRow label="Protocol Type:" value="HOTSPOT" isBold />
            <DetailRow label="Package Plan:" value={client.package} isBold />
            <DetailRow label="Balance:" value={
              <div className="flex items-center gap-2">
                <span>{client.balance}</span>
                <div className="flex gap-1">
                  <div className="p-1 bg-sky-500 text-white rounded shadow-sm"><CreditCard size={10} /></div>
                  <div className="p-1 bg-rose-100 text-rose-500 rounded shadow-sm"><ClipboardList size={10} /></div>
                </div>
              </div>
            } />
            <DetailRow label="Plan Price:" value={client.bill} />
            <DetailRow label="Billing Cycle:" value="Plan Validity" />
            <DetailRow label="Billing Type:" value="Prepaid" />
            <DetailRow label="Billing Status:" value={
              <div className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">Expired</span>
                <span className="flex items-center gap-1 text-[10px] text-slate-300 font-bold uppercase"><div className="w-2 h-2 rounded-full bg-amber-400"></div> N/A</span>
              </div>
            } />
            <DetailRow label="Expiry Date:" value={client.expDate} valueClass="text-rose-500 font-bold" />
            <DetailRow label="Connected By:" value="Sb Wifi Zone" />
            <DetailRow label="Location:" value="---" />
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-1.5 flex-wrap">
            <button onClick={onRenew} className="px-4 py-1.5 bg-sky-100 text-sky-600 rounded text-[10px] font-bold hover:bg-sky-200">Renew</button>
            <button className="px-4 py-1.5 bg-amber-100 text-amber-600 rounded text-[10px] font-bold hover:bg-amber-200">Migration</button>
            <button onClick={onInvoices} className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded text-[10px] font-bold hover:bg-emerald-200">Invoices</button>
            <button className="px-4 py-1.5 bg-rose-100 text-rose-600 rounded text-[10px] font-bold hover:bg-rose-200">Suspend</button>
          </div>
        </div>

        {/* Server Information - Box 3 */}
        <div className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-center gap-2">
            <h3 className="font-bold text-slate-600 text-sm uppercase tracking-wider">Server Information</h3>
          </div>
          <div className="flex-1 divide-y divide-slate-50">
            <DetailRow label="Server:" value="Sb Wi-Fi Zone" />
            <DetailRow label="Username:" value={client.cid} isBold />
            <DetailRow label="Password:" value="52535" />
            <DetailRow label="Save Mac:" value={
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-[11px] text-slate-500">A6:C2:48:1D:6E:A8</span>
                <List size={14} className="text-blue-500" />
              </div>
            } />
            <DetailRow label="Device/Vendor:" value="---" />
            <DetailRow label="Active Mac:" value={
              <div className="flex items-center gap-2">
                <span>-</span>
                <List size={12} className="text-blue-500" />
                <Flame size={12} className="text-rose-500" />
              </div>
            } />
            <DetailRow label="IP Address:" value="---" />
            <DetailRow label="Uptime:" value={
              <div className="flex items-center gap-2">
                <span>-</span>
                <span className="flex items-center gap-1 text-[10px] text-slate-300 font-bold uppercase"><div className="w-2 h-2 rounded-full bg-rose-400"></div> Offline</span>
              </div>
            } />
            <DetailRow label="Data Limit:" value="Unlimited" isBold />
            <DetailRow label="Data Used:" value="0Byte" isBold />
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-1.5 flex-wrap">
            <button className="px-6 py-1.5 bg-sky-100 text-sky-600 rounded text-[10px] font-bold hover:bg-sky-200">Bind Mac</button>
            <button className="px-6 py-1.5 bg-rose-100 text-rose-600 rounded text-[10px] font-bold hover:bg-rose-200">Disconnect</button>
          </div>
        </div>
      </div>
      
      <button onClick={onBack} className="fixed bottom-6 right-6 p-4 bg-slate-800 text-white rounded-full shadow-2xl hover:bg-black active:scale-95 transition-all">
        <X size={24} />
      </button>
    </div>
  );
};

const DetailRow = ({ label, value, isBold = false, valueClass = "" }: any) => (
  <div className="grid grid-cols-2 p-3 group hover:bg-slate-50/30 transition-colors">
    <div className="text-slate-500 text-[11px] font-medium flex items-center border-r border-slate-50 pr-4">
      {label}
    </div>
    <div className={`text-slate-800 text-xs ${isBold ? 'font-bold' : ''} ${valueClass} pl-4 flex items-center`}>
      {value}
    </div>
  </div>
);

export default ClientDetails;
