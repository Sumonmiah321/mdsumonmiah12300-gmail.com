
import React from 'react';
import { 
  Users, UserPlus, UserCheck, CreditCard, DollarSign, UserX
} from 'lucide-react';
import { StatItem, Invoice, Expiry, ClientAccount } from './types';

export const INITIAL_STATS: StatItem[] = [
  { label: 'Total Client', value: 0, icon: <Users size={24} />, color: 'bg-[#ff4d94]' },
  { label: 'This Month Join', value: 0, icon: <UserPlus size={24} />, color: 'bg-[#4fc3f7]' },
  { label: 'Total Active Now', value: 0, icon: <UserCheck size={24} />, color: 'bg-[#4db6ac]' },
  { label: 'Total Expired', value: 0, icon: <UserX size={24} />, color: 'bg-[#ffb300]' },
  { label: 'Today Hotspot Sales', value: 0, icon: <DollarSign size={24} />, color: 'bg-[#4db6ac]' },
  { label: 'Sold Card', value: 0, icon: <CreditCard size={24} />, color: 'bg-[#ef5350]' },
];

export const DB_KEYS = {
  CLIENTS: 'sb_isp_clients_db',
  INVOICES: 'sb_isp_invoices_db',
  CARDS: 'sb_isp_cards_db',
  NOTICES: 'sb_isp_notices_db'
};

export const MOCK_INVOICES: Invoice[] = [];
export const MOCK_EXPIRIES: Expiry[] = [];
export const MOCK_CLIENTS: ClientAccount[] = [];
