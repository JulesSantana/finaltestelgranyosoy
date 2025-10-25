'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface User {
  id: string;
  email: string;
  name: string;
  subscription_status: string;
  current_period_end: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isSubscribed: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        const { data: userData } = await supabase
          .from('subscription_users')
          .select('*')
          .eq('user_id', session.user.id)
          .maybeSingle();

        if (userData) {
          setUser({
            id: userData.id,
            email: userData.email,
            name: userData.name,
            subscription_status: userData.status || 'pending',
            current_period_end: userData.current_period_end
          });
        }
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) throw authError;

      if (authData.user) {
        const { data: userData } = await supabase
          .from('subscription_users')
          .select('*')
          .eq('user_id', authData.user.id)
          .maybeSingle();

        if (userData) {
          setUser({
            id: userData.id,
            email: userData.email,
            name: userData.name,
            subscription_status: userData.status || 'pending',
            current_period_end: userData.current_period_end
          });
          return { success: true };
        }
      }

      return { success: false, error: 'Usuario no encontrado' };
    } catch (error: any) {
      return { success: false, error: error.message || 'Error al iniciar sesión' };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const isSubscribed = () => {
    if (!user) return false;

    const activeStatuses = ['active', 'trialing'];
    if (!activeStatuses.includes(user.subscription_status)) return false;

    if (user.current_period_end) {
      const periodEnd = new Date(user.current_period_end);
      return periodEnd > new Date();
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isSubscribed }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
