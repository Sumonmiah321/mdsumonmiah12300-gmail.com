import React, { useState, useMemo } from 'react';
import { 
  Calendar, Download, Printer, FileText, Search, RefreshCw, 
  Filter, List, ChevronRight, BarChart3, Users, DollarSign,
  MapPin, Server, Activity, ArrowUpRight, TrendingUp, Zap, Clock, ShieldCheck,
  ChevronLeft, ChevronDown, Hand, CreditCard, Copy
} from 'lucide-react';

interface ReportsTableProps {
  title: string;
}

const ReportsTable: React.FC<ReportsTableProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // --- SPECIALIZED VIEW FOR INVOICE REPORT (Matching User Screenshot) ---
  if (title === 'Invoices' || title === 'Invoice Report') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        {/* Header & Breadcrumb */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Invoice Report</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Forms</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Invoice Report</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          {/* Panel Header */}
          <div className="p-5 border-b border-slate-100">
            <h3 className="text-[15px] font-bold text-slate-700">Search Information</h3>
          </div>

          <div className="p-8 space-y-8">
            {/* Form Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <ReportFormSelect label="POP In-charge" options={['Choose Pop In-Charge']} />
              <ReportFormSelect label="Server" options={['Choose Server']} />
              <ReportFormSelect label="Zone" options={['Choose Zone']} />
              <ReportFormSelect label="Sub Zone" options={['All']} />
              <ReportFormSelect label="Protocol" options={['All']} isNative />
            </div>

            {/* Form Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <ReportFormSelect label="Status" options={['Success', 'Pending', 'Failed']} isNative />
              <ReportFormSelect label="Pay Method" options={['All']} />
              <ReportFormSelect label="Search By" options={['Invoice Owner']} />
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Date From</label>
                <div className="relative">
                  <input type="text" defaultValue="02/01/2026" className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none focus:border-blue-400 bg-white text-slate-600" />
                  <Calendar size={16} className="absolute right-3 top-2.5 text-slate-800" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-500">Date To</label>
                <div className="relative">
                  <input type="text" defaultValue="02/11/2026" className="w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none focus:border-blue-400 bg-white text-slate-600" />
                  <Calendar size={16} className="absolute right-3 top-2.5 text-slate-800" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button className="px-8 py-2.5 bg-[#3b82f6] text-white rounded text-sm font-bold shadow-md hover:bg-blue-600 transition-all active:scale-95">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SPECIALIZED VIEW FOR RECHARGE HISTORY ---
  if (title === 'Recharge History') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        {/* Header & Breadcrumb */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Recharge History</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Billing</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Recharge History</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          {/* Detailed Filters Panel */}
          <div className="p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Initiator</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded px-3 py-2 text-sm text-slate-400 bg-white focus:outline-none focus:border-blue-400">
                    <option>Choose Ini...</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Pop In-Charge</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded px-3 py-2 text-sm text-slate-400 bg-white focus:outline-none focus:border-blue-400">
                    <option>Choose Po...</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Method</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded px-3 py-2 text-sm text-slate-500 bg-white focus:outline-none focus:border-blue-400">
                    <option>All</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Date From</label>
                <div className="relative">
                  <input type="text" defaultValue="02/04/2026" className="w-full border border-slate-200 rounded px-3 py-2 text-sm text-slate-600 focus:outline-none focus:border-blue-400 bg-white" />
                  <Calendar size={14} className="absolute right-3 top-3 text-slate-800" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Date To</label>
                <div className="relative">
                  <input type="text" defaultValue="02/11/2026" className="w-full border border-slate-200 rounded px-3 py-2 text-sm text-slate-600 focus:outline-none focus:border-blue-400 bg-white" />
                  <Calendar size={14} className="absolute right-3 top-3 text-slate-800" />
                </div>
              </div>

              <div>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#3b82f6] text-white rounded text-sm font-bold hover:bg-blue-600 transition-all shadow-md">
                  <Search size={16} /> Search
                </button>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-50">
            <div className="flex items-center gap-1">
              <button className="px-4 py-1.5 bg-[#eaf2ff] text-[#3b82f6] rounded border border-blue-100 text-[13px] font-medium">
                Show 25 rows
              </button>
              <button className="px-4 py-1.5 bg-[#f0efff] text-[#818cf8] rounded border border-indigo-100 text-[13px] font-medium">
                Export
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500 font-medium">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          {/* Main Table */}
          <div className="overflow-x-auto px-6 pb-6">
            <table className="w-full text-[13px] text-left border-collapse">
              <thead className="text-slate-600 font-bold border-b border-slate-200 bg-white">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">SL</th>
                  <th className="px-4 py-3 whitespace-nowrap">Ref <span className="text-[10px] opacity-20 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap">Initiator <span className="text-[10px] opacity-20 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap">Pop In-charge <span className="text-[10px] opacity-20 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">Debit <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">Credit <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">Balance <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">Time <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-right pr-6">Description <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-slate-400 font-medium bg-slate-50/20 italic">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100">
            <p className="text-sm text-slate-400 font-medium">Showing 0 to 0 of 0 entries</p>
            <div className="flex items-center gap-0 border border-slate-200 rounded overflow-hidden">
              <button className="p-2 text-slate-300 hover:text-slate-500 border-r border-slate-200">
                <ChevronLeft size={16} />
              </button>
              <button className="p-2 text-slate-300 hover:text-slate-500">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="w-full max-w-sm mt-8">
          <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-left duration-500">
            <div className="p-5 border-b border-slate-50">
              <h3 className="font-bold text-slate-700 text-sm">Summary</h3>
            </div>
            <div className="divide-y divide-slate-100">
              <SummaryRow label="Cash:" value="0" />
              <SummaryRow label="Online:" value="0" />
              <SummaryRow label="Webhook:" value="0" />
              <SummaryRow label="Bank:" value="0" />
              <SummaryRow label="Refund:" value="0" />
              <SummaryRow label="Commission:" value="0" />
              <SummaryRow label="Total Credit:" value="0" isBold />
              <SummaryRow label="Cash:" value="0" />
              <SummaryRow label="Online:" value="0" />
              <SummaryRow label="Webhook:" value="0" />
              <SummaryRow label="Bank:" value="0" />
              <SummaryRow label="Refund:" value="0" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SPECIALIZED VIEW FOR SERVER WISE SALES ---
  if (title === 'ServerWise Sales' || title === 'Server Wise Sales') {
    const serverSalesData = [
      { sl: 1, name: 'Sb Wi-Fi Zone', sales: '338', amount: '10290' },
      { sl: 2, name: 'Sb Wi-Fi Zone 2', sales: '463', amount: '14430' },
      { sl: 3, name: 'Sb Wi-Fi Zone 3', sales: '389', amount: '11430' },
    ];

    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Server Wise Sales</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Billing</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Server Wise Sales</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Show</span>
              <div className="relative inline-block">
                <select className="appearance-none border border-slate-300 rounded px-4 py-1.5 pr-8 bg-white focus:outline-none focus:border-blue-400 transition-all text-slate-700 text-xs">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="absolute right-2 top-2 pointer-events-none text-slate-400">
                  <ChevronDown size={14} />
                </div>
              </div>
              <span>entries</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500 font-medium">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          <div className="px-5 pb-4 flex items-center gap-1">
            <button className="px-5 py-1.5 bg-[#f1f2f6] text-slate-600 rounded text-xs font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-all">Copy</button>
            <button className="px-5 py-1.5 bg-[#f1f2f6] text-slate-600 rounded text-xs font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-all">Print</button>
            <button className="px-5 py-1.5 bg-[#f1f2f6] text-slate-600 rounded text-xs font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-all">PDF</button>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-[13px] text-left border-collapse">
              <thead className="text-slate-600 font-bold border-b border-slate-200 bg-white">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">SL <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">Server Name <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">Sales <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap">Amount <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {serverSalesData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white'}>
                    <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.sl}</td>
                    <td className="px-4 py-3 border-r border-slate-50 text-blue-500 font-medium cursor-pointer hover:underline">{row.name}</td>
                    <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.sales}</td>
                    <td className="px-4 py-3 text-slate-500">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-5 flex items-center justify-between border-t border-slate-100">
            <p className="text-sm text-slate-400">Showing 1 to {serverSalesData.length} of {serverSalesData.length} entries</p>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                1
              </button>
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SPECIALIZED VIEW FOR MONTHLY SALES ---
  if (title === 'MonthWise Sales' || title === 'Monthly Sales') {
    const salesData = [
      { sl: 1, year: '2026', month: 'February', sales: '338', amount: '10290' },
      { sl: 2, year: '2026', month: 'January', sales: '463', amount: '14430' },
      { sl: 3, year: '2025', month: 'December', sales: '389', amount: '11430' },
      { sl: 4, year: '2025', month: 'November', sales: '312', amount: '9870' },
      { sl: 5, year: '2025', month: 'October', sales: '298', amount: '7764' },
      { sl: 6, year: '2025', month: 'September', sales: '257', amount: '7460' },
      { sl: 7, year: '2025', month: 'August', sales: '134', amount: '4935' },
      { sl: 8, year: '2025', month: 'July', sales: '116', amount: '3435' },
      { sl: 9, year: '2025', month: 'June', sales: '106', amount: '3180' },
      { sl: 10, year: '2025', month: 'May', sales: '93', amount: '2760' },
    ];

    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Monthly Sales</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Billing</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Monthly Sales</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Show</span>
              <div className="relative inline-block">
                <select className="appearance-none border border-slate-300 rounded px-4 py-1.5 pr-8 bg-white focus:outline-none focus:border-blue-400 transition-all text-slate-700 text-xs">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="absolute right-2 top-2 pointer-events-none text-slate-400">
                  <ChevronDown size={14} />
                </div>
              </div>
              <span>entries</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          <div className="px-5 pb-4 flex items-center gap-1">
            <button className="px-5 py-1.5 bg-[#f1f2f6] text-slate-600 rounded text-xs font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-all">Copy</button>
            <button className="px-5 py-1.5 bg-[#f1f2f6] text-slate-600 rounded text-xs font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-all">Print</button>
            <button className="px-5 py-1.5 bg-[#f1f2f6] text-slate-600 rounded text-xs font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-all">PDF</button>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-[13px] text-left border-collapse">
              <thead className="text-slate-600 font-bold border-b border-slate-200 bg-white">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">SL <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">Year <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">Month <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-50 whitespace-nowrap">Sales <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap">Amount <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {salesData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white'}>
                    <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.sl}</td>
                    <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.year}</td>
                    <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.month}</td>
                    <td className="px-4 py-3 border-r border-slate-50 text-slate-500">{row.sales}</td>
                    <td className="px-4 py-3 text-slate-500">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-5 flex items-center justify-between border-t border-slate-100">
            <p className="text-sm text-slate-400">Showing 1 to 10 of 14 entries</p>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                1
              </button>
              <button className="w-8 h-8 hover:bg-slate-100 text-slate-500 rounded-full flex items-center justify-center text-xs font-bold transition-all">
                2
              </button>
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SPECIALIZED VIEW FOR ONLINE TRANSACTIONS ---
  if (title === 'Online Transactions') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Online Transactions</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Online Transactions</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <OnlineStatCard label="Today" value="0" />
          <OnlineStatCard label="Yesterday" value="0" />
          <OnlineStatCard label="This Month" value="0" />
          <OnlineStatCard label="Last Month" value="0" />
          <OnlineStatCard label="Filtered Total" value="0" />
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 bg-white border-b border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Status</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 bg-white focus:outline-none focus:border-blue-400">
                    <option>Success</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Type</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 bg-white focus:outline-none focus:border-blue-400">
                    <option>All</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Gateway</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 bg-white focus:outline-none focus:border-blue-400">
                    <option>All</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Date From</label>
                <div className="relative">
                  <input type="text" defaultValue="02/01/2026" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:border-blue-400" />
                  <Calendar size={14} className="absolute right-3 top-2.5 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-medium text-slate-500">Date To</label>
                <div className="relative">
                  <input type="text" defaultValue="02/11/2026" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:border-blue-400" />
                  <Calendar size={14} className="absolute right-3 top-2.5 text-slate-400" />
                </div>
              </div>

              <div>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#3b82f6] text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-all">
                  <Search size={16} /> Search
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 bg-[#eaf2ff] text-[#3b82f6] rounded border border-blue-100 text-[13px] font-medium">
                Show 25 rows
              </button>
              <button className="px-4 py-1.5 bg-[#f0efff] text-[#818cf8] rounded border border-indigo-100 text-[13px] font-medium">
                Export
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-[13px] text-left border-collapse border border-slate-100">
              <thead className="bg-[#f8fafc] text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">Invoice ID</th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">Txn ID <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">Payee Name <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">Payee Mobile <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Pay Type <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Req. Time <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Pay Time <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Status <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Total <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Bank Txn <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">Gateway <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={11} className="px-4 py-12 text-center text-slate-400 font-medium bg-slate-50/20">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-5 py-5 flex items-center justify-between border-t border-slate-100">
            <p className="text-sm text-slate-400">Showing 0 to 0 of 0 entries</p>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Specialized view for POP Wise Clients
  if (title === 'POP Wise Clients') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">POP Wise Clients</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Billing</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">POP Wise Clients</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Show</span>
              <div className="relative inline-block">
                <select className="appearance-none border border-slate-300 rounded px-4 py-1.5 pr-8 bg-white focus:outline-none focus:border-blue-400 transition-all text-slate-700">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="absolute right-2 top-2 pointer-events-none text-slate-400">
                  <ChevronDown size={14} />
                </div>
              </div>
              <span>entries</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-[13px] text-left border-collapse border border-slate-100">
              <thead className="bg-[#f8fafc] text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">SL <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">Reseller <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Total <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Active <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Expired <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Left <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Pending <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">PPPOE <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Hotspot <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Free <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">VIP <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-100 text-slate-500">1</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-slate-700 font-medium">Sb Wifi Zone</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-blue-400 text-blue-500 font-bold rounded text-[11px]">534</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-emerald-400 text-emerald-500 font-bold rounded text-[11px]">426</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-rose-400 text-rose-500 font-bold rounded text-[11px]">102</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-amber-400 text-amber-500 font-bold rounded text-[11px]">2</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-indigo-400 text-indigo-500 font-bold rounded text-[11px]">0</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-slate-400 text-slate-500 font-bold rounded text-[11px]">0</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-slate-800 text-slate-800 font-bold rounded text-[11px]">534</span>
                  </td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-cyan-400 text-cyan-500 font-bold rounded text-[11px]">0</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-block min-w-[36px] px-1.5 py-0.5 border border-rose-300 text-rose-400 font-bold rounded text-[11px]">0</span>
                  </td>
                </tr>
                <tr className="bg-[#f8fafc] font-black text-slate-700">
                  <td className="px-4 py-3 border-r border-slate-100"></td>
                  <td className="px-4 py-3 border-r border-slate-100">1</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">534</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">426</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">102</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">2</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">0</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">0</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">534</td>
                  <td className="px-4 py-3 border-r border-slate-100 text-center">0</td>
                  <td className="px-4 py-3 text-center">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-5 py-5 flex items-center justify-between border-t border-slate-100">
            <p className="text-sm text-slate-400">Showing 1 to 1 of 1 entries</p>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                1
              </button>
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Specialized view for Sub Zone Wise Clients
  if (title === 'Sub Zone Wise Clients') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Sub Zone Wise Client</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Billing</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Sub Zone Wise Client</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Show</span>
              <div className="relative inline-block">
                <select className="appearance-none border border-slate-300 rounded px-4 py-1.5 pr-8 bg-white focus:outline-none focus:border-blue-400 transition-all text-slate-700">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="absolute right-2 top-2 pointer-events-none text-slate-400">
                  <ChevronDown size={14} />
                </div>
              </div>
              <span>entries</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-500">Search:</label>
              <input 
                type="text" 
                className="px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-400 text-sm w-48 bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-[13px] text-left border-collapse border border-slate-100">
              <thead className="bg-white text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">SL <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap">SubZone <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Total <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Active <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Expired <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Left <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Pending <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">PPPOE <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Hotspot <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 border-r border-slate-100 whitespace-nowrap text-center">Free <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                  <th className="px-4 py-3 whitespace-nowrap text-center">VIP <span className="text-[10px] opacity-30 ml-1">↕</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-100 text-slate-500">1</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-blue-400 font-medium cursor-pointer hover:underline">None</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-blue-400 font-bold cursor-pointer hover:underline">534</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">426</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">102</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">2</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">0</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">0</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">534</td>
                  <td className="px-4 py-4 border-r border-slate-100 text-center text-[#3498db] font-bold cursor-pointer hover:underline">0</td>
                  <td className="px-4 py-4 text-center text-[#3498db] font-bold cursor-pointer hover:underline">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-5 py-5 flex items-center justify-between border-t border-slate-100">
            <p className="text-sm text-slate-400">Showing 1 to 1 of 1 entries</p>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                1
              </button>
              <button className="p-1.5 text-slate-300 hover:text-slate-500 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- SPECIALIZED VIEW FOR SERVER WISE ONLINE ---
  if (title === 'Server Wise Online') {
    return (
      <div className="p-6 space-y-6 bg-[#f4f7f9] min-h-screen animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-700">Server Wise Online Client</h2>
          <nav className="flex items-center text-[12px] font-medium text-slate-400">
            <span>SmartISP</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span>Billing</span>
            <ChevronRight size={14} className="mx-1 opacity-50" />
            <span className="text-slate-300">Server Wise Online Client</span>
          </nav>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto p-5">
            <table className="w-full text-[13px] text-left border-collapse border border-slate-100">
              <thead className="bg-white text-slate-600 font-bold border-b border-slate-200">
                <tr className="bg-[#f8fafc]/30">
                  <th className="px-5 py-4 border-r border-slate-100 w-24">SL</th>
                  <th className="px-5 py-4 border-r border-slate-100">Server Name</th>
                  <th className="px-5 py-4 border-r border-slate-100">Total</th>
                  <th className="px-5 py-4">Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { sl: 1, name: 'Sb Wi-Fi Zone' },
                  { sl: 2, name: 'Sb Wi-Fi Zone 2' },
                  { sl: 3, name: 'Sb Wi-Fi Zone 3' },
                ].map((server) => (
                  <tr key={server.sl} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 border-r border-slate-100 text-slate-500">{server.sl}</td>
                    <td className="px-5 py-4 border-r border-slate-100 text-[#3498db] font-medium cursor-pointer hover:underline">{server.name}</td>
                    <td className="px-5 py-4 border-r border-slate-100 text-[#3498db] font-bold cursor-pointer hover:underline">0</td>
                    <td className="px-5 py-4 text-[#3498db] font-bold cursor-pointer hover:underline">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // --- Specialized Mock Data Generators for other Reports & Analytics ---
  const reportContent = useMemo(() => {
    // 1. Client Growth Analytics
    if (title === 'Client Growth') {
      return {
        type: 'analytics',
        headers: ['Month', 'New Signups', 'Churned', 'Net Growth', 'Total Base', 'Growth %'],
        data: [
          { col1: 'January 2026', col2: '85', col3: '12', col4: '73', col5: '412', col6: '+18.2%' },
          { col1: 'February 2026', col2: '42', col3: '5', col4: '37', col5: '449', col6: '+8.5%' },
          { col1: 'March 2026 (Est)', col2: '90', col3: '8', col4: '82', col5: '531', col6: '+22.1%' },
        ]
      };
    }

    // 2. Revenue Analytics
    if (title === 'Revenue Analytics') {
      return {
        type: 'revenue',
        headers: ['Period', 'Gross Income', 'Op. Expenses', 'Net Profit', 'ARPU (৳)', 'Tax Status'],
        data: [
          { col1: 'Q4 2025', col2: '৳4,50,000', col3: '৳1,20,000', col4: '৳3,30,000', col5: '৳850', col6: 'Paid' },
          { col1: 'January 2026', col2: '৳1,45,000', col3: '৳35,000', col4: '৳1,10,000', col5: '৳890', col6: 'Pending' },
          { col1: 'February 2026', col2: '৳45,600', col3: '৳12,000', col4: '৳33,600', col5: '৳910', col6: 'Current' },
        ]
      };
    }

    // Default return for other report titles
    return {
      type: 'general',
      headers: ['Time', 'Identity', 'Action Category', 'Value', 'Performed By', 'Remarks'],
      data: [
        { col1: '2026-02-02 14:00', col2: 'System', col3: 'Master Sync', col4: 'Success', col5: 'Admin', col6: 'Auto Backup' },
      ]
    };
  }, [title]);

  const getHeaderIcon = () => {
    if (title === 'Client Growth') return <TrendingUp className="text-blue-500" />;
    if (title === 'Revenue Analytics') return <BarChart3 className="text-emerald-500" />;
    return <FileText className="text-slate-400" />;
  };

  return (
    <div className="p-6 space-y-6 bg-[#f8fafc] min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
           <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
              {getHeaderIcon()}
           </div>
           <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h2>
              <nav className="flex items-center text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
                <span>Enterprise BI</span>
                <ChevronRight size={14} className="mx-1" />
                <span>Reports</span>
                <ChevronRight size={14} className="mx-1" />
                <span className="text-blue-500">{title} Data View</span>
              </nav>
           </div>
        </div>
        <div className="flex gap-2">
           <button className="px-5 py-2.5 bg-[#343a40] text-white rounded-xl text-xs font-black flex items-center gap-2 shadow-lg active:scale-95 transition-all">
              <RefreshCw size={16} /> Data Refresh
           </button>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#343a40] text-white uppercase font-black text-[10px] tracking-[0.15em]">
              <tr>
                {reportContent.headers.map((header, hIdx) => (
                  <th key={hIdx} className="px-6 py-5">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reportContent.data.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5 text-slate-500 font-bold">{row.col1}</td>
                  <td className="px-6 py-5 font-black text-blue-600">{row.col2}</td>
                  <td className="px-6 py-5 font-bold text-slate-700">{row.col3}</td>
                  <td className="px-6 py-5 font-bold text-slate-600">{row.col4}</td>
                  <td className="px-6 py-5 font-black text-slate-800">{row.col5}</td>
                  <td className="px-6 py-5 text-center">{row.col6}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper component for Invoice Report Selects
const ReportFormSelect = ({ label, options, isNative = false }: { label: string, options: string[], isNative?: boolean }) => (
  <div className="space-y-1.5 flex-1">
    <label className="text-[13px] font-bold text-slate-500">{label}</label>
    <div className="relative">
      <select className={`w-full px-3 py-2 border border-slate-200 rounded text-sm outline-none bg-white text-slate-400 font-medium appearance-none ${isNative ? 'pr-8' : 'pr-8'}`}>
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none" />
    </div>
  </div>
);

// Helper component for Summary rows
const SummaryRow = ({ label, value, isBold = false }: { label: string, value: string, isBold?: boolean }) => (
  <div className={`flex items-center justify-between p-3.5 px-5 ${isBold ? 'bg-slate-50/50' : 'bg-white'}`}>
    <span className={`text-[12px] ${isBold ? 'font-black text-slate-700 uppercase tracking-tighter' : 'text-slate-500 font-medium'}`}>{label}</span>
    <span className={`text-[12px] ${isBold ? 'font-black text-slate-800' : 'text-slate-700 font-bold'}`}>{value}</span>
  </div>
);

// Helper component for Online Transactions Stats
const OnlineStatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-white rounded border border-slate-100 p-5 shadow-sm flex items-center justify-between group">
    <div className="p-3 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
      <div className="relative text-emerald-600">
        <Hand size={24} className="transform -rotate-12" />
        <CreditCard size={12} className="absolute top-0 right-0 bg-white rounded-sm" />
      </div>
    </div>
    <div className="text-right">
      <h3 className="text-2xl font-bold text-slate-700 leading-none mb-1">{value}</h3>
      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{label}</p>
    </div>
  </div>
);

export default ReportsTable;
