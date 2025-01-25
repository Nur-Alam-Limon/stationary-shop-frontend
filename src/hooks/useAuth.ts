// src/hooks/useAuth.ts
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../features/auth/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access user data and token from the Redux store
  const { user, token } = useSelector((state: RootState) => state.auth);

  // Check if the user is authenticated
  const isAuthenticated = !!token;

  // Check the role of the user
  const isAdmin = user?.role === "admin";

  // Login handler (can integrate API call here)
  const login = (token: string, user: any) => {
    // Typically, you'd dispatch an action to save the token and user
    // Example:
    // dispatch(setAuth({ token, user }));
    localStorage.setItem("authToken", token); // Save token to localStorage for persistence
    navigate("/");
  };

  // Logout handler
  const logout = () => {
    dispatch(logoutAction()); // Clear Redux auth state
    localStorage.removeItem("authToken"); // Remove token from localStorage
    navigate("/login");
  };

  return { user, isAuthenticated, isAdmin, login, logout };
};

export default useAuth;
