
export interface StatItem {
  label: string;
  value: string | number;
  icon: any;
  color: string;
}

export interface Invoice {
  invNo: string;
  user: string;
  amount: number;
}

export interface Expiry {
  username: string;
  bill: number;
  expireTime: string;
}

export interface ClientAccount {
  id: string;
  cid: string;
  name: string;
  mobile: string;
  package: string;
  protocol: string;
  bill: number;
  balance: number;
  expDate: string;
  lastPayDate: string;
  status: 'Exp' | 'Act';
}

export type ThemeMode = 'light' | 'dark';
export type SidebarColor = 'light' | 'dark' | 'brand' | 'gradient';
export type SidebarSize = 'default' | 'condensed' | 'compact';
