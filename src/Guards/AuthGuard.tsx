import React, { useEffect } from "react";
import { useAppSelector } from "../Redux/Hooks/hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { KeyMapper } from "../KeyMapper/KeyMapper";

const publicRoutes = [
  KeyMapper.Pages.Landing,
  KeyMapper.Pages.Pricing,
  KeyMapper.Pages.Error,
];

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.AuthSlice);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      if (
        location.pathname !== KeyMapper.Pages.Auth &&
        !publicRoutes.includes(location.pathname)
      ) {
        navigate(KeyMapper.Pages.Auth, { replace: true });
      }
    } else {
      if (location.pathname === KeyMapper.Pages.Auth) {
        navigate(KeyMapper.Pages.Dashboard, { replace: true });
      }
    }
  }, [isAuthenticated, navigate, location.pathname]);

  return <>{children}</>;
};

export default AuthGuard;
