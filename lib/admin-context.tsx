import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TIERS, INITIAL_PROXY_TIERS, INITIAL_SERVER_DEV_TIERS, INITIAL_FEATURES, INITIAL_FAQS } from './initial-data';

// Define Types
export interface AdminContextType {
  // Data
  tiers: any[];
  proxyTiers: any[];
  serverDevTiers: any[];
  features: any[];
  faqs: any[];
  
  // Actions
  updateTiers: (newTiers: any[]) => void;
  updateProxyTiers: (newTiers: any[]) => void;
  updateServerDevTiers: (newTiers: any[]) => void;
  updateFaqs: (newFaqs: any[]) => void;
  
  // Auth
  isAuthenticated: boolean;
  login: (id: string, pass: string) => boolean;
  logout: () => void;
  updateCredentials: (newId: string, newPass: string) => void;
  resetCredentials: (recoveryKey: string, newId: string, newPass: string) => boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- DATA STATE ---
  const [tiers, setTiers] = useState(INITIAL_TIERS);
  const [proxyTiers, setProxyTiers] = useState(INITIAL_PROXY_TIERS);
  const [serverDevTiers, setServerDevTiers] = useState(INITIAL_SERVER_DEV_TIERS);
  const [features, setFeatures] = useState(INITIAL_FEATURES);
  const [faqs, setFaqs] = useState(INITIAL_FAQS);

  // --- AUTH STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ id: 'moradosolution1122', pass: 'Shivnath#12' });
  const RECOVERY_KEY = 'MoradoRoot'; // Simple recovery key for the demo

  // --- PERSISTENCE ---
  useEffect(() => {
    // Load Data
    const storedData = localStorage.getItem('morado_data');
    if (storedData) {
      const data = JSON.parse(storedData);
      if (data.tiers) setTiers(data.tiers);
      if (data.proxyTiers) setProxyTiers(data.proxyTiers);
      if (data.serverDevTiers) setServerDevTiers(data.serverDevTiers);
      if (data.faqs) setFaqs(data.faqs);
    }

    // Load Credentials
    const storedCreds = localStorage.getItem('morado_admin_creds');
    if (storedCreds) {
      setCredentials(JSON.parse(storedCreds));
    }
    
    // Check Session
    const session = sessionStorage.getItem('morado_admin_session');
    if (session === 'true') {
        setIsAuthenticated(true);
    }
  }, []);

  const saveData = (newData: any) => {
    // Merge current state with new data to save complete object
    const currentData = {
        tiers,
        proxyTiers,
        serverDevTiers,
        features,
        faqs,
        ...newData
    };
    localStorage.setItem('morado_data', JSON.stringify(currentData));
  };

  // --- ACTIONS ---
  const updateTiers = (newTiers: any[]) => {
    setTiers(newTiers);
    saveData({ tiers: newTiers });
  };

  const updateProxyTiers = (newTiers: any[]) => {
    setProxyTiers(newTiers);
    saveData({ proxyTiers: newTiers });
  };

  const updateServerDevTiers = (newTiers: any[]) => {
    setServerDevTiers(newTiers);
    saveData({ serverDevTiers: newTiers });
  };
  
  const updateFaqs = (newFaqs: any[]) => {
      setFaqs(newFaqs);
      saveData({ faqs: newFaqs });
  };

  // --- AUTH ACTIONS ---
  const login = (id: string, pass: string) => {
    if (id === credentials.id && pass === credentials.pass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('morado_admin_session', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('morado_admin_session');
  };

  const updateCredentials = (newId: string, newPass: string) => {
    const newCreds = { id: newId, pass: newPass };
    setCredentials(newCreds);
    localStorage.setItem('morado_admin_creds', JSON.stringify(newCreds));
  };

  const resetCredentials = (recoveryKey: string, newId: string, newPass: string) => {
    if (recoveryKey === RECOVERY_KEY) {
        updateCredentials(newId, newPass);
        return true;
    }
    return false;
  };

  return (
    <AdminContext.Provider value={{
      tiers, proxyTiers, serverDevTiers, features, faqs,
      updateTiers, updateProxyTiers, updateServerDevTiers, updateFaqs,
      isAuthenticated, login, logout, updateCredentials, resetCredentials
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
