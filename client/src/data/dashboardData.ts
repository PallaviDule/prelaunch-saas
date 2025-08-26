export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled';
type SubscriptionPlanType = 'Free' | 'Pro' | 'Premium';

type Subscription = {
    plan: SubscriptionPlanType;
    status: SubscriptionStatus;
    renewalDate: string;
    price: string;
}

type Activity = {
    id: number;
    action: string;
    date: string;
}
export type SubscriptionPlan = {
  type: SubscriptionPlanType;
  price: string;
  features: string[];
};

export const subscription: Subscription = {
  plan: 'Pro',
  status: 'active',
  renewalDate: '2025-09-01',
  price: '€19.99/month'
}

export const subscriptionPlans: SubscriptionPlan[] = [
  { type: 'Free', price: '€0', features: ['Basic usage', 'Limited support'] },
  { type: 'Pro', price: '€29', features: ['Priority support', 'Advanced features'] },
  { type: 'Premium', price: '€99', features: ['All features', 'Dedicated support'] },
];

export const activities: Activity[] = [
  { id: 1, action: 'Logged in', date: '2025-08-22' },
  { id: 2, action: 'Updated profile picture', date: '2025-08-20' },
  { id: 3, action: 'Changed password', date: '2025-08-18' },
];
