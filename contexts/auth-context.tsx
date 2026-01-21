"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { logout as logoutAction } from "@/actions";
import { getUser } from "@/actions/auth/user";
import { User } from "@/types/api-schema/schema";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  avatarUrl: string;
  login: (user: User) => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
  setAvatarUrl: (url: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_AVATAR = "https://github.com/shadcn.png";
const AVATAR_STORAGE_KEY = "mexico777_avatar";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [avatarUrl, setAvatarUrlState] = useState(DEFAULT_AVATAR);
  const router = useRouter();

  // Load avatar and user from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAvatar = localStorage.getItem(AVATAR_STORAGE_KEY);
      if (savedAvatar) {
        setAvatarUrlState(savedAvatar);
      }

      const savedUser = localStorage.getItem("user_data");
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          if (parsedUser) {
            setUser(parsedUser);
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Failed to parse user data from local storage", error);
        }
      }
    }
  }, []);

  // Wrapper to persist avatar to localStorage
  const setAvatarUrl = useCallback((url: string) => {
    setAvatarUrlState(url);
    if (typeof window !== "undefined") {
      localStorage.setItem(AVATAR_STORAGE_KEY, url);
    }
  }, []);

  const refreshSession = useCallback(async () => {
    try {
      setIsLoading(true);

      // Fetch User
      const userResult = await getUser({});

      if (userResult.data) {
        setUser(userResult.data);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  const login = useCallback(
    (userData: User) => {
      setUser(userData);
      setIsAuthenticated(true);
      refreshSession();
    },
    [refreshSession],
  );

  const logout = useCallback(async () => {
    try {
      await logoutAction();
      setUser(null);
      setIsAuthenticated(false);
      router.push("/");
      router.refresh();
    } catch {
      console.error("Logout failed");
    }
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        avatarUrl,
        login,
        logout,
        refreshSession,
        setAvatarUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
