"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const login = async (provider: string, options?: Record<string, unknown>) => {
    try {
      await signIn(provider, options);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const requireAuth = (redirectTo = "/auth/signin") => {
    if (status === "unauthenticated") {
      router.push(redirectTo);
      return false;
    }
    return true;
  };

  const requireRole = (requiredRole: string, redirectTo = "/dashboard") => {
    if (!requireAuth()) return false;

    if (session?.user?.role !== requiredRole) {
      router.push(redirectTo);
      return false;
    }

    return true;
  };

  return {
    session,
    status,
    user: session?.user,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
    login,
    logout,
    requireAuth,
    requireRole,
  };
}
