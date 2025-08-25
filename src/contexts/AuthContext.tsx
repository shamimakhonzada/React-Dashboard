import { createContext, useContext, useState, useEffect } from "react";
import { login, signup } from "../api/auth";
import { getProfile } from "../api/user";

type AuthContextType = {
  user: any;
  loading: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
  signupUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // try to fetch profile on mount if token exists
    const fetchUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const loginUser = async (email: string, password: string) => {
    const res = await login(email, password);
    localStorage.setItem("token", res.data.token);
    const profile = await getProfile();
    setUser(profile.data);
  };

  const signupUser = async (email: string, password: string) => {
    const res = await signup(email, password);
    localStorage.setItem("token", res.data.token);
    const profile = await getProfile();
    setUser(profile.data);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, loginUser, signupUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
