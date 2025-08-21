export interface User {
  id: string;
  name: string;
  email: string;
  subscriptionType: string;
  createdAt: Date;
  active: boolean;
  password: string;
}
