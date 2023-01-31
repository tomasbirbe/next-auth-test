import { Dispatch, SetStateAction, createContext, useState } from "react";

export const AuthContext = createContext<any>([]);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authState = useState({ token: "" });

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};
