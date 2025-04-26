import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import UsersPage from "../features/users/UsersPage";
import UserDetailPage from "../features/users/UserDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Route>
      
    </Routes>
  );
};

export default AppRoutes;
