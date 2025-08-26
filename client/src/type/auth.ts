import type { SubscriptionPlan } from "../data/dashboardData";
import type { User } from "./user";

export type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
  chosenPlan: SubscriptionPlan;
};

export type AuthAction =
  | { type: 'LOGIN'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'SET_PLAN'; payload: SubscriptionPlan };
