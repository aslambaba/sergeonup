import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // Check for existing session on load
    const adminSession = Cookies.get('admin_session');
    const adminInfo = Cookies.get('admin_info');
    
    if (adminSession && adminInfo) {
      setIsAuthenticated(true);
      setAdminData(JSON.parse(adminInfo));
    }
    setIsLoading(false);
  }, []);

  const login = (adminInfo) => {
    // Set authentication cookies (expires in 24 hours)
    Cookies.set('admin_session', 'true', { expires: 1 });
    Cookies.set('admin_info', JSON.stringify(adminInfo), { expires: 1 });
    
    setIsAuthenticated(true);
    setAdminData(adminInfo);
  };

  const logout = () => {
    // Remove cookies
    Cookies.remove('admin_session');
    Cookies.remove('admin_info');
    
    setIsAuthenticated(false);
    setAdminData(null);
  };

  const value = {
    isAuthenticated,
    isLoading,
    adminData,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};