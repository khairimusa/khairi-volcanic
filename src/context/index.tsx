"use client";
import { createContext, useState, useContext } from "react";

type AppContextType = {
  user: User;
  setUser: any;
};

export type User = {
  appState: string;
  email: string;
  aggregateVerifier: string;
  name: string;
  profileImage: string;
  typeOfLogin: string;
  verifier: string;
  verifierId: string;
  dappShare: string;
  oAuthIdToken: string;
  oAuthAccessToken: string;
  isMfaEnabled: boolean;
  idToken: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    appState: "",
    email: "",
    aggregateVerifier: "",
    name: "",
    profileImage: "",
    typeOfLogin: "",
    verifier: "",
    verifierId: "",
    dappShare: "",
    oAuthIdToken: "",
    oAuthAccessToken: "",
    isMfaEnabled: false,
    idToken: "",
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextWrapper");
  }
  return context;
}
