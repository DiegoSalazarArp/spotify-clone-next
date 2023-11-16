"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { User } from "@supabase/auth-helpers-nextjs";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
