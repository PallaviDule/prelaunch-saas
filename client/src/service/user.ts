import type { User } from "../type/user";
const BASE_URL = 'http://localhost:3000';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(BASE_URL+'/users');

    if (!response.ok) throw new Error('Failed to fetch users');
    const users:User[] = await response.json();

    return users;
}

export const OnboardUser = async(user: Omit<User, 'createdAt' | 'id'>): Promise<User> => {
    const response = await fetch(`${BASE_URL}/users/onboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
        
    if (!response.ok) throw new Error('Failed to fetch users');

    return response.json();
}