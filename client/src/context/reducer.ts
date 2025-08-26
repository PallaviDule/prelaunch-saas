import type { AuthAction, AuthState } from "../type/auth";

export const reducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type) {
        case 'LOGIN' : 
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true
            }
        case 'LOGOUT': 
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
        case 'SET_PLAN':
            return { ...state, chosenPlan: action.payload }
    }
}