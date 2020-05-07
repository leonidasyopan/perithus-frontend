import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  username: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  username: string;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<AuthState>(() => {
    const username = localStorage.getItem('@Perithus:username');

    if (username) {
      return { username: JSON.parse(username) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('usuario/login', {
      email,
      password,
    });

    const { username } = response.data;

    localStorage.setItem('@Perithus:username', JSON.stringify(username));

    setUserData({ username });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@Perithus:username');

    setUserData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ username: userData.username, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
