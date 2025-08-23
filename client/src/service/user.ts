import type { User } from '../type/user';
const BASE_URL = 'http://localhost:3000';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(BASE_URL+'/users');

    if (!response.ok) throw new Error('Failed to fetch users');
    const users:User[] = await response.json();

    return users;
}

export const onboardUser = async(user: Omit<User, 'createdAt' | 'id' | 'active'>): Promise<User> => {
    const response = await fetch(`${BASE_URL}/users/onboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
        
    if (!response.ok) throw new Error('Failed to fetch users');

    return await response.json();
}

export const loginUser = async(user: Pick<User , 'email'| 'password'>) => {
    const {email, password} = user;
    const res = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Login failed');

      return await res.json();
}