type Subscription = {
    plan: string;
    status: 'active' | 'inactive' | 'cancelled';
    renewalDate: string;
    price: string;
}

type Activity = {
    id: number;
    action: string;
    date: string;
}

export const subscription: Subscription = {
  plan: 'Pro',
  status: 'active',
  renewalDate: '2025-09-01',
  price: '€19.99/month'
};

export const activities: Activity[] = [
  { id: 1, action: 'Logged in', date: '2025-08-22' },
  { id: 2, action: 'Updated profile picture', date: '2025-08-20' },
  { id: 3, action: 'Changed password', date: '2025-08-18' },
];
