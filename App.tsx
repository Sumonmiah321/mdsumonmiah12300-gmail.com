
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BillingTable from './components/BillingTable';
import ReportsTable from './components/ReportsTable';
import SMSTable from './components/SMSTable';
import ClientTable from './components/ClientTable';
import PPPoETable from './components/PPPoETable';
import HotspotTable from './components/HotspotTable';
import CardTable from './components/CardTable';
import OthersTable from './components/OthersTable';
import ManageUsers from './components/ManageUsers';
import ConfigTable from './components/ConfigTable';
import SelfRecharge from './components/SelfRecharge';
import ThemeSettings from './components/ThemeSettings';
import LoginPage from './components/LoginPage';
import ServerLogoConfig from './components/ServerLogoConfig';
import HotspotPortalStudio from './components/HotspotPortalStudio';
import NoticeConfig from './components/NoticeConfig';
import { DB_KEYS } from './constants';
import { ClientAccount } from './types';
import { CheckCircle2, Cloud, CloudOff, RefreshCw } from 'lucide-react';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);
  const [sidebarSize, setSidebarSize] = useState<'default' | 'condensed' | 'compact'>('default');
  const [notification, setNotification] = useState<{msg: string, type: 'success' | 'error' | 'info'} | null>(null);
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [dbStatus, setDbStatus] = useState<'connected' | 'error' | 'syncing'>('syncing');

  // Global Data State
  const [clients, setClients] = useState<ClientAccount[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    // Auth Check
    const savedLogin = localStorage.getItem('sb_isp_logged_in');
    if (savedLogin === 'true') {
      setIsLoggedIn(true);
    }
    
    fetchCloudData();
  }, []);

  const fetchCloudData = async () => {
    setDbStatus('syncing');
    try {
      // 1. Fetch Clients
      const { data: cloudClients, error: clientsError } = await supabase
        .from('clients')
        .select('*');
      
      if (!clientsError && cloudClients) {
        setClients(cloudClients);
      } else if (clientsError && clientsError.code === '42P01') {
        console.warn('Clients table does not exist in Supabase yet. Falling back to local storage.');
        const stored = localStorage.getItem(DB_KEYS.CLIENTS);
        if (stored) setClients(JSON.parse(stored));
      }

      // 2. Fetch Invoices
      const { data: cloudInvoices, error: invError } = await supabase
        .from('invoices')
        .select('*');
      if (!invError && cloudInvoices) setInvoices(cloudInvoices);

      setDbStatus('connected');
    } catch (err) {
      console.error('Supabase connection error:', err);
      setDbStatus('error');
      // Local Fallback
      const stored = localStorage.getItem(DB_KEYS.CLIENTS);
      if (stored) setClients(JSON.parse(stored));
    }
  };

  // Sync back to local storage for offline capability
  useEffect(() => {
    localStorage.setItem(DB_KEYS.CLIENTS, JSON.stringify(clients));
  }, [clients]);

  const showNotification = (msg: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addClient = async (client: ClientAccount) => {
    setClients(prev => [...prev, client]);
    
    // Persist to Supabase
    try {
      const { error } = await supabase
        .from('clients')
        .insert([client]);
      
      if (error) {
        console.error('Failed to sync to cloud:', error);
        showNotification(`Client ${client.name} Registered Locally (Cloud Sync Failed)`, 'info');
      } else {
        showNotification(`Client ${client.name} Registered & Synced to Cloud`);
      }
    } catch (err) {
      showNotification(`Client ${client.name} Registered Locally`, 'info');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('sb_isp_logged_in');
    setActiveMenu('Dashboard');
    showNotification('System Terminated Safely', 'info');
  };

  const renderContent = () => {
    if (activeMenu === 'Notice Config') return <NoticeConfig onNotify={showNotification} />;
    
    // Billing Views
    const billingItems = ['All Accounts', 'Active Accounts', 'Todays Client', 'Expire In 3 Days', 'Expire In 7 Days', 'Expired Accounts', 'Pending Accounts', 'Suspend Accounts', 'Left Accounts'];
    if (billingItems.includes(activeMenu)) {
      return <BillingTable key={activeMenu} title={activeMenu} clients={clients} onNotify={showNotification} setClients={setClients} />;
    }

    // Reports Views
    const reportItems = ['POP Wise Clients', 'Sub Zone Wise Clients', 'Server Wise Online', 'Online Transactions', 'Merchant Payments', 'MonthWise Sales', 'ServerWise Sales', 'Recharge History', 'Invoices', 'Client Growth', 'Revenue Analytics', 'Bandwidth Usage', 'Pop Performance'];
    if (reportItems.includes(activeMenu)) {
      return <ReportsTable key={activeMenu} title={activeMenu} />;
    }

    // SMS Views
    const smsItems = ['SMS History', 'SMS Recharge', 'Send SMS', 'Call Logs'];
    if (smsItems.includes(activeMenu)) {
      return <SMSTable key={activeMenu} title={activeMenu} />;
    }

    // Client Creation & Management
    const clientItems = ['Create New', 'Create Only', 'General Renew', 'View Information', 'Client Search', 'Plan Migration', 'Special Renew', 'Client Date Extend', 'Online Renew'];
    if (clientItems.includes(activeMenu)) {
      return <ClientTable key={activeMenu} title={activeMenu} clients={clients} onAddClient={addClient} onNotify={showNotification} />;
    }

    // PPPoE Views
    const pppoeItems = ['All Users', 'Active Users', 'Online Users', 'Offline Users', 'Sharing Users', 'User Traffic'];
    if (pppoeItems.includes(activeMenu)) {
      return <PPPoETable key={activeMenu} title={activeMenu} />;
    }

    // Hotspot Views
    const hotspotItems = ['Hotspot All Users', 'Hotspot Online Users', 'Log', 'Mac Log'];
    if (hotspotItems.includes(activeMenu)) {
      return <HotspotTable key={activeMenu} title={activeMenu} />;
    }

    // Voucher Cards
    const cardItems = ['Card Search', 'Card Generator', 'Card Generate Excel', 'Card Print', 'Card List', 'Card Report All'];
    if (cardItems.includes(activeMenu)) {
      return <CardTable title={activeMenu} onNotify={showNotification} />;
    }

    // Others
    const otherItems = ['AP Monitor', 'Ticketing', 'Network Diagram', 'My Package Plan', 'Traffic Monitor', 'Server Watcher'];
    if (otherItems.includes(activeMenu)) {
      return <OthersTable title={activeMenu} />;
    }

    switch (activeMenu) {
      case 'Dashboard': return <Dashboard clients={clients} invoices={invoices} onStatClick={setActiveMenu} />;
      case 'Manage Users': return <ManageUsers />;
      case 'Server Logo': return <ServerLogoConfig />;
      case 'Hotspot Login': return <HotspotPortalStudio />;
      case 'Mikrotik':
      case 'Package Plan':
      case 'Zone':
      case 'Sub Zone':
      case 'Setup Settings': return <ConfigTable title={activeMenu} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[80vh] text-slate-400 p-10 text-center">
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter text-slate-300">Module Blank</h2>
            <p className="font-bold max-w-md text-bd-green/50">There is no data to display in this module. Please add data to begin.</p>
          </div>
        );
    }
  };

  if (!isLoggedIn) return <LoginPage onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="flex min-h-screen bg-[#f4f7f6]">
      <Sidebar sidebarSize={sidebarSize} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 relative">
        <Header 
          onSettingsClick={() => setIsThemeSettingsOpen(true)} 
          onMenuClick={() => setSidebarSize(s => s === 'default' ? 'condensed' : 'default')}
          onLogout={handleLogout}
          onCalcClick={() => setIsCalcOpen(true)}
          onMenuSelect={setActiveMenu}
          onRechargeClick={() => setActiveMenu('SMS Recharge')}
        />
        
        {/* Supabase Status Indicator */}
        <div className="absolute top-[60px] right-6 z-30">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm border ${
            dbStatus === 'connected' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
            dbStatus === 'syncing' ? 'bg-blue-50 text-blue-600 border-blue-100' :
            'bg-rose-50 text-rose-600 border-rose-100'
          }`}>
            {dbStatus === 'connected' ? <Cloud size={12} /> : 
             dbStatus === 'syncing' ? <RefreshCw size={12} className="animate-spin" /> : 
             <CloudOff size={12} />}
            {dbStatus === 'connected' ? 'Cloud Secure' : 
             dbStatus === 'syncing' ? 'Syncing...' : 
             'Offline Mode'}
          </div>
        </div>

        <main className="flex-1 overflow-x-hidden">
          {renderContent()}
        </main>

        <footer className="py-8 px-10 border-t border-slate-100 bg-[#f8fafc] text-slate-400 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-medium">2026 © SmartISP By <span className="text-blue-500 font-bold">TNRSOFT</span></p>
          <div className="flex items-center gap-6">
            <button className="hover:text-blue-500 transition-colors">About Us</button>
            <button className="hover:text-blue-500 transition-colors">Help</button>
            <button className="hover:text-blue-500 transition-colors">Contact Us</button>
          </div>
        </footer>

        {notification && (
           <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-10 duration-300 ${
             notification.type === 'success' ? 'bg-bd-green text-white' : 'bg-bd-red text-white'
           }`}>
              <CheckCircle2 size={20} />
              <span className="text-xs font-black uppercase tracking-widest">{notification.msg}</span>
           </div>
        )}
      </div>

      <ThemeSettings isOpen={isThemeSettingsOpen} onClose={() => setIsThemeSettingsOpen(false)} />
    </div>
  );
};

export default App;
