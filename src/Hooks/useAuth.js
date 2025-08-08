import { useState, useEffect } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsAuthenticated(auth === 'true');
  }, []);

  const login = (email, password) => {
    // Ensure email is trimmed and lowercased for comparison
    const validEmail = 'admin@prestige.com';
    const validPassword = 'clean123';
    if (email.trim().toLowerCase() === validEmail && password === validPassword) {
      localStorage.setItem('auth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}
