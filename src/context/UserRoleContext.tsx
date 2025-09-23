import React, { createContext, useState, useEffect, ReactNode } from 'react';

type UserRoleContextType = {
  userRole: string | null;
  setUserRole: (role: string) => void;
};

export const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<string | null>(null);

  // Load userRole from localStorage on initial load
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  // Save userRole to localStorage whenever it changes
  const handleSetUserRole = (role: string) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole: handleSetUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};
