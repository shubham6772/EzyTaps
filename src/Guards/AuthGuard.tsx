import React from "react";
import { useAppSelector } from "../Redux/Hooks/hooks";
import { useLocation, Navigate } from "react-router-dom";
import { KeyMapper } from "../KeyMapper/KeyMapper";

const publicRoutes = [
  KeyMapper.Pages.Landing,
  KeyMapper.Pages.Pricing,
  KeyMapper.Pages.Auth,
];

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.AuthSlice);
  const location = useLocation();

  // 🔹 Error page is always available
  if (location.pathname === KeyMapper.Pages.Error) {
    return <>{children}</>;
  }

  // 🔹 Not authenticated: allow only public routes
  if (!isAuthenticated) {
    if (!publicRoutes.includes(location.pathname)) {
      return <Navigate to={KeyMapper.Pages.Landing} replace />;
    }
    return <>{children}</>;
  }

  // 🔹 Authenticated: allow `/dashboard` and all children
  if (isAuthenticated) {
    if (location.pathname.startsWith(KeyMapper.Pages.Dashboard)) {
      return <>{children}</>;
    }
    // redirect anything else to dashboard root
    return <Navigate to={KeyMapper.Pages.Dashboard} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
