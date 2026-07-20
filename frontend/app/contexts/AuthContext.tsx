"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { login as loginRequest, LoginRequest } from "@/services/auth";
import {
  setSession,
  clearSession,
  getToken,
  isTokenValid,
  getCurrentUser,
} from "@/lib/auth";

interface AuthUser {
  email?: string;
  role?: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signIn: (data: LoginRequest) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (isTokenValid(token)) {
      setUser(getCurrentUser());
    } else {
      clearSession();
      setUser(null);
    }
    setLoading(false);

    // Poll the token expiry every 30s so a session that expires
    // *while the tab is open* also gets kicked out, not just on
    // the next API call.
    const interval = setInterval(() => {
      const current = getToken();
      if (!isTokenValid(current)) {
        clearSession();
        setUser(null);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const signIn = async (data: LoginRequest) => {
    const response = await loginRequest(data);
    setSession(response.token);
    setUser(getCurrentUser());
  };

  const signOut = () => {
    clearSession();
    setUser(null);
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
