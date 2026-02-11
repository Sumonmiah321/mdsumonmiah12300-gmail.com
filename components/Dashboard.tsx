import React from 'react';
import { 
  Users, UserCheck, UserX, UserPlus, UserMinus, Clock, Calendar, 
  DollarSign, CreditCard, ShoppingCart, Wallet, Receipt, 
  Wifi, Network, Router, Server, Activity, Monitor, 
  MessageSquare, Mail, Phone, Ticket, Share2, Package, 
  Database, ShieldCheck, ShieldAlert, Zap, Globe, 
  TrendingUp, BarChart3, List, RefreshCw, Layers, MapPin, 
  Cpu, HardDrive, Settings, UserRound, Home, PieChart, Tablet,
  ChevronDown, Minus, RefreshCcw
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ClientAccount } from '../types';

interface DashboardProps {
  clients: ClientAccount[];
  invoices: any[];
  onStatClick: (menuName: string) => void;
}

const chartData = [
  { name: '2026-02-01', Sales: 200, User: 20 },
  { name: '2026-02-02', Sales: 800, User: 35 },
  { name: '2026-02-03', Sales: 1400, User: 50 },
  { name: '2026-02-04', Sales: 1800, User: 25 },
  { name: '2026-02-05', Sales: 1300, User: 60 },
  { name: '2026-02-06', Sales: 1200, User: 45 },
  { name: '2026-02-07', Sales: 500, User: 15 },
  { name: '2026-02-08', Sales: 1000, User: 30 },
  { name: '2026-02-09', Sales: 400, User: 10 },
  { name: '2026-02-10', Sales: 700, User: 20 },
  { name: '2026-02-11', Sales: 600, User: 18 },
];

const Dashboard: React.FC<DashboardProps> = ({ clients, invoices, onStatClick }) => {
  // Mock calculations for visual consistency with screenshot values
  const dashboardItems = [
    { label: 'Total Client', value: '534', icon: <Users size={22} />, color: 'bg-[#ec407a]', menu: 'All Accounts' },
    { label: 'This Month Join', value: '54', icon: <UserPlus size={22} />, color: 'bg-[#29b6f6]', menu: 'Todays Client' },
    { label: 'Last Month Join', value: '71', icon: <UserPlus size={22} />, color: 'bg-[#ec407a]', menu: 'Reports' },
    { label: 'This Month Active', value: '336', icon: <UserCheck size={22} />, color: 'bg-[#26a69a]', menu: 'Active Accounts' },
    
    { label: 'Last Month Active', value: '456', icon: <UserCheck size={22} />, color: 'bg-[#ec407a]', menu: 'Reports' },
    { label: 'Home Client', value: '0', icon: <Home size={22} />, color: 'bg-[#29b6f6]', menu: 'PPPoE' },
    { label: 'Hotspot Client', value: '534', icon: <Wifi size={22} />, color: 'bg-[#29b6f6]', menu: 'Hotspot' },
    { label: 'Total Active Now', value: '425', icon: <UserCheck size={22} />, color: 'bg-[#ec407a]', menu: 'Active Accounts' },
    
    { label: 'Home Active Now', value: '0', icon: <Home size={22} />, color: 'bg-[#26a69a]', menu: 'PPPoE' },
    { label: 'Hotspot Active Now', value: '425', icon: <Wifi size={22} />, color: 'bg-[#26a69a]', menu: 'Hotspot' },
    { label: 'Total Expired', value: '103', icon: <UserX size={22} />, color: 'bg-[#f39c12]', menu: 'Expired Accounts' },
    { label: 'Home Expired', value: '0', icon: <Home size={22} />, color: 'bg-[#f39c12]', menu: 'PPPoE' },
    
    { label: 'Hotspot Expired', value: '103', icon: <Wifi size={22} />, color: 'bg-[#f39c12]', menu: 'Hotspot' },
    { label: 'Pending Client', value: '0', icon: <UserPlus size={22} />, color: 'bg-[#3b82f6]', menu: 'Pending Accounts' },
    { label: 'Left Client', value: '2', icon: <UserMinus size={22} />, color: 'bg-[#f42a41]', menu: 'Left Accounts' },
    { label: 'Valid Card', value: '316', icon: <CreditCard size={22} />, color: 'bg-[#26a69a]', menu: 'Card List' },
    
    { label: 'Sold Card', value: '5697', icon: <CreditCard size={22} />, color: 'bg-[#f42a41]', menu: 'Card List' },
    { label: 'Extended Client', value: '0', icon: <UserPlus size={22} />, color: 'bg-[#f39c12]', menu: 'Client' },
    { label: 'Grace Client', value: '0', icon: <Users size={22} />, color: 'bg-[#29b6f6]', menu: 'Billing' },
    { label: 'Due Client', value: '0', icon: <Users size={22} />, color: 'bg-[#f39c12]', menu: 'Billing' },
    
    { label: 'Suspend Client', value: '4', icon: <UserX size={22} />, color: 'bg-[#f42a41]', menu: 'Suspend Accounts' },
    { label: 'Today Hotspot Sales', value: '545', icon: <DollarSign size={22} />, color: 'bg-[#26a69a]', menu: 'ServerWise Sales' },
    { label: 'Yesterday Hotspot Sales', value: '710', icon: <DollarSign size={22} />, color: 'bg-[#ec407a]', menu: 'ServerWise Sales' },
    { label: 'Today Home Sales', value: '0', icon: <DollarSign size={22} />, color: 'bg-[#26a69a]', menu: 'MonthWise Sales' },
    
    { label: 'Yesterday Home Sales', value: '0', icon: <DollarSign size={22} />, color: 'bg-[#ec407a]', menu: 'MonthWise Sales' },
    { label: 'This Month Sales', value: '10230', icon: <DollarSign size={22} />, color: 'bg-[#26a69a]', menu: 'MonthWise Sales' },
    { label: 'This Month Profit', value: '0', icon: <PieChart size={22} />, color: 'bg-[#ec407a]', menu: 'Revenue Analytics' },
    { label: 'Last Month Profit', value: '0', icon: <PieChart size={22} />, color: 'bg-[#ec407a]', menu: 'Revenue Analytics' },
    
    { label: 'Merchant In This Month', value: '0', icon: <Tablet size={22} />, color: 'bg-[#ec407a]', menu: 'Merchant Payments' },
    { label: 'Online In This Month', value: '0', icon: <Tablet size={22} />, color: 'bg-[#ec407a]', menu: 'Online Transactions' },
    { label: 'Total POP', value: '0', icon: <Users size={22} />, color: 'bg-[#ec407a]', menu: 'POP Wise Clients' },
    { label: 'Last Month Sales', value: '14430', icon: <DollarSign size={22} />, color: 'bg-[#ec407a]', menu: 'MonthWise Sales' },
  ];

  return (
    <div className="p-4 bg-[#f1f2f6] min-h-screen space-y-4 font-inter">
      {/* Dashboard Header Bar */}
      <div className="flex items-center justify-between bg-[#f8fafc] p-3 rounded shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-700">Dashboard</h2>
        <div className="flex items-center gap-2">
           <div className="bg-slate-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-bold shadow-sm">
             ID: <span className="bg-white text-slate-700 px-1.5 rounded">P2880</span>
           </div>
           <div className="bg-amber-400 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-bold shadow-sm">
             SMS: <span className="bg-white text-amber-500 px-1.5 rounded">--</span>
           </div>
           <div className="bg-[#29b6f6] text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-bold shadow-sm">
             Balance: <span className="bg-white text-[#29b6f6] px-1.5 rounded">0</span>
           </div>
           <button className="p-1.5 bg-[#4285f4] text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
             <RefreshCcw size={16} />
           </button>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="bg-[#fff3cd] border border-[#ffeeba] rounded p-3 flex items-center gap-3 shadow-sm overflow-hidden">
        <div className="text-[#856404] text-xs font-bold leading-relaxed whitespace-nowrap">
          জানাইছি। আশা করি সবাই ভালো ও সুস্থ আছেন। আমাদের সফটওয়্যারটি অবিচ্ছিন্ন ভাবে ব্যবহার করার জন্য আপনার ISP Short Name রেফারেন্স দিয়ে মাসিক বিল 01894523353 (Bkash
        </div>
      </div>

      {/* Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardItems.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => onStatClick(item.menu)}
            className="bg-white rounded-lg border border-slate-200 shadow-sm flex items-stretch hover:shadow-md transition-all cursor-pointer group"
          >
            <div className={`w-16 ${item.color} flex items-center justify-center text-white rounded-l-lg transition-transform group-hover:scale-[1.02]`}>
               {item.icon}
            </div>
            <div className="flex-1 p-4 flex flex-col items-end justify-center text-right">
              <h3 className="text-2xl font-black text-slate-700 leading-none mb-1">{item.value}</h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tables Section - Invoices & Upcoming Expire */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DashboardTable 
          title="Latest Invoices" 
          headers={['Inv No', 'User', 'Amount']} 
          data={[
            { c1: '2374104', c2: '05025943339', c3: '30' },
            { c1: '2374074', c2: '00966590249428', c3: '30' },
            { c1: '2374072', c2: '0576772038', c3: '30' },
            { c1: '2374068', c2: '0546787867', c3: '30' },
            { c1: '2374061', c2: '0556199309', c3: '30' },
          ]}
          blueLink
        />
        <DashboardTable 
          title="Upcoming Expire" 
          headers={['Username', 'Bill', 'Expire Time']} 
          data={[
            { c1: '0551667203', c2: '30', c3: '11-02-26 23:03' },
            { c1: '0554817873', c2: '30', c3: '11-02-26 23:20' },
            { c1: '0572823449', c2: '30', c3: '11-02-26 23:32' },
            { c1: '0576589649', c2: '30', c3: '12-02-26 02:12' },
            { c1: '0570704957', c2: '30', c3: '12-02-26 07:50' },
          ]}
          blueLink
          highlightRow={3}
        />
      </div>

      {/* Sales Analytics & Latest Expired */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5 space-y-4">
          <DashboardTable 
            title="Latest Expired" 
            headers={['Username', 'Bill', 'Expire Time']} 
            data={[
              { c1: '0572883829', c2: '30', c3: '11-02-26 21:34' },
              { c1: '0536733596', c2: '30', c3: '11-02-26 21:30' },
              { c1: '0538370307', c2: '15', c3: '11-02-26 19:40' },
              { c1: '0597927268', c2: '30', c3: '11-02-26 18:31' },
              { c1: '0571625843', c2: '30', c3: '11-02-26 16:35' },
            ]}
            blueLink
          />
          <DashboardTable 
            title="Top Due" 
            headers={['Username', 'M.Bill', 'Due']} 
            data={[]}
            emptyMessage="No data available in table"
          />
        </div>

        {/* Recharts Analytics */}
        <div className="lg:col-span-7 bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
             <h3 className="font-bold text-slate-700 text-sm">Sales Analytics</h3>
             <button className="p-1 hover:bg-slate-50 rounded"><Settings size={14} className="text-slate-400" /></button>
          </div>
          <div className="p-6 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  interval={0}
                  tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }} 
                />
                <YAxis 
                  tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
                />
                <Legend verticalAlign="top" align="center" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} />
                <Bar dataKey="Sales" fill="#29b6f6" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="User" fill="#f42a41" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-[-30px]">
               <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper table component
const DashboardTable = ({ title, headers, data, blueLink, highlightRow, emptyMessage }: any) => (
  <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
      <h3 className="font-bold text-slate-700 text-sm">{title}</h3>
      <div className="flex gap-2">
         <button className="text-slate-300 hover:text-slate-500"><RefreshCw size={14} /></button>
         <button className="text-slate-300 hover:text-slate-500"><Minus size={14} /></button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-[12px] text-left">
        <thead className="bg-white border-b border-slate-100">
          <tr>
            {headers.map((h: string, i: number) => (
              <th key={i} className="px-4 py-2.5 font-bold text-slate-500">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.length > 0 ? (
            data.map((row: any, i: number) => (
              <tr key={i} className={`hover:bg-slate-50/50 transition-colors ${highlightRow === i + 1 ? 'bg-[#f8fafc]' : ''}`}>
                <td className="px-4 py-3 text-slate-500">{row.c1}</td>
                <td className={`px-4 py-3 font-semibold ${blueLink ? 'text-blue-500 cursor-pointer hover:underline' : 'text-slate-700'}`}>
                  {row.c2}
                </td>
                <td className="px-4 py-3 text-slate-500">{row.c3}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-4 py-10 text-center text-slate-300 italic font-medium uppercase tracking-widest">
                {emptyMessage || 'Establishing connection...'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default Dashboard;
