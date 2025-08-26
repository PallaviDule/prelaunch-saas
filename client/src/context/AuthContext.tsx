import { createContext, useContext, type ReactNode, useReducer } from 'react';
import { reducer } from './reducer';
import type { AuthAction, AuthState } from '../type/auth';
import { subscriptionPlans } from '../data/dashboardData';

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isLoggedIn: false,
  chosenPlan: subscriptionPlans[0]
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
