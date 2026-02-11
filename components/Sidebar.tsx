
import React, { useState } from 'react';
import { 
  LayoutGrid, Users, FileText, BarChart3, Smartphone, Wallet, 
  Target, Wifi, CreditCard, Mail, Network, Package, Activity, 
  Monitor, UserRound, Settings, ShoppingCart, ChevronRight, ChevronDown,
  Database, Server, MapPin, CloudUpload, Link as LinkIcon, Image as ImageIcon,
  BellRing, Ticket, Share2, ClipboardList
} from 'lucide-react';

interface SidebarProps {
  sidebarSize: 'default' | 'condensed' | 'compact';
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarSize, activeMenu, setActiveMenu }) => {
  const isCollapsed = sidebarSize === 'condensed';

  return (
    <aside 
      className={`bg-white h-screen sticky top-0 border-r border-slate-200 overflow-y-auto custom-scrollbar flex flex-col z-40 transition-all duration-300 ${
        isCollapsed ? 'w-[70px]' : 'w-[260px]'
      }`}
    >
      {/* Branding */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-50">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg">SB</div>
        {!isCollapsed && <span className="text-blue-600 font-black tracking-tighter text-lg">SmartISP</span>}
      </div>

      <div className="flex-1 py-4 space-y-1">
        <NavItem 
          icon={<LayoutGrid size={18} />} 
          label="Dashboard" 
          isActive={activeMenu === 'Dashboard'} 
          onClick={() => setActiveMenu('Dashboard')}
          isCollapsed={isCollapsed}
        />
        
        {/* Sections based on Images */}
        <NavGroup label="BILLING" icon={<Users size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'All Accounts', 'Active Accounts', 'Todays Client', 'Expire In 3 Days', 'Expire In 7 Days', 'Expired Accounts', 'Pending Accounts', 'Suspend Accounts', 'Left Accounts'
        ]} onSelect={setActiveMenu} />

        <NavGroup label="Reports" icon={<FileText size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'POP Wise Clients', 'Sub Zone Wise Clients', 'Server Wise Online', 'Online Transactions', 'Merchant Payments', 'MonthWise Sales', 'ServerWise Sales', 'Recharge History', 'Invoices'
        ]} onSelect={setActiveMenu} />

        <NavGroup label="Client" icon={<UserRound size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'Create New', 'Create Only', 'General Renew', 'View Information', 'Client Search', 'Plan Migration', 'Special Renew', 'Client Date Extend', 'Online Renew'
        ]} onSelect={setActiveMenu} />

        <NavGroup label="PPPoE" icon={<Network size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'All Users', 'Active Users', 'Online Users', 'Offline Users', 'Sharing Users', 'User Traffic'
        ]} onSelect={setActiveMenu} />

        <NavGroup label="Hotspot" icon={<Wifi size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'All Users', 'Active Users', 'Online Users', 'Offline Users', 'Log', 'Mac Log'
        ]} onSelect={setActiveMenu} />

        <NavGroup label="Card" icon={<CreditCard size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'Card Search', 'Card Generator', 'Card Generate Excel', 'Card Print', 'Card List', 'Card Report All'
        ]} onSelect={setActiveMenu} />

        <NavItem 
          icon={<Ticket size={18} />} 
          label="Ticketing" 
          badge="New"
          isActive={activeMenu === 'Ticketing'} 
          onClick={() => setActiveMenu('Ticketing')}
          isCollapsed={isCollapsed}
        />

        <NavItem icon={<Share2 size={18} />} label="Network Diagram" onClick={() => setActiveMenu('Network Diagram')} isActive={activeMenu === 'Network Diagram'} isCollapsed={isCollapsed} />
        <NavItem icon={<Package size={18} />} label="My Package Plan" onClick={() => setActiveMenu('My Package Plan')} isActive={activeMenu === 'My Package Plan'} isCollapsed={isCollapsed} />
        <NavItem icon={<Activity size={18} />} label="Traffic Monitor" onClick={() => setActiveMenu('Traffic Monitor')} isActive={activeMenu === 'Traffic Monitor'} isCollapsed={isCollapsed} />
        <NavItem icon={<Monitor size={18} />} label="Server Watcher" onClick={() => setActiveMenu('Server Watcher')} isActive={activeMenu === 'Server Watcher'} isCollapsed={isCollapsed} />

        {!isCollapsed && <div className="px-6 pt-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Configuration</div>}
        
        <NavItem icon={<UserRound size={18} />} label="Manage Users" onClick={() => setActiveMenu('Manage Users')} isActive={activeMenu === 'Manage Users'} isCollapsed={isCollapsed} />
        
        <NavGroup label="Config" icon={<Settings size={18} />} activeMenu={activeMenu} isCollapsed={isCollapsed} items={[
          'Mikrotik', 'Package Plan', 'Zone', 'Sub Zone', 'Import Client', 'Server Bind', 'Setup Settings'
        ]} onSelect={setActiveMenu} />
      </div>
    </aside>
  );
};

const NavGroup = ({ label, icon, items, activeMenu, isCollapsed, onSelect }: any) => {
  const [isOpen, setIsOpen] = useState(items.some((i: string) => activeMenu === i));
  return (
    <div className="px-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${items.includes(activeMenu) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
      >
        <div className="flex items-center gap-3">
          <span className={items.includes(activeMenu) ? 'text-blue-600' : 'text-slate-400'}>{icon}</span>
          {!isCollapsed && <span className="text-[13px] font-bold">{label}</span>}
        </div>
        {!isCollapsed && (isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
      </button>
      {isOpen && !isCollapsed && (
        <div className="ml-9 mt-1 space-y-0.5 border-l-2 border-slate-100 pl-3">
          {items.map((item: string) => (
            <button 
              key={item}
              onClick={() => onSelect(item)}
              className={`w-full text-left py-2 text-[12px] font-medium transition-colors ${activeMenu === item ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, label, isActive, onClick, badge, isCollapsed }: any) => (
  <div className="px-3">
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${isActive ? 'text-blue-600 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
    >
      <div className="flex items-center gap-3">
        <span className={isActive ? 'text-blue-600' : 'text-slate-400'}>{icon}</span>
        {!isCollapsed && <span className="text-[13px] font-bold">{label}</span>}
      </div>
      {!isCollapsed && badge && <span className="bg-indigo-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">{badge}</span>}
    </button>
  </div>
);

export default Sidebar;
