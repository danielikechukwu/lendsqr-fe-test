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

        <Route path="/guarators" element={<Dashboard />} />
        <Route path="/loans" element={<UsersPage />} />
        <Route path="/decision-models" element={<Dashboard />} />
        <Route path="/savings" element={<UsersPage />} />
        <Route path="/loan-request" element={<Dashboard />} />
        <Route path="/whitelist" element={<UsersPage />} />
        <Route path="/karma" element={<Dashboard />} />
        <Route path="/organization" element={<UsersPage />} />
        <Route path="/loan-products" element={<Dashboard />} />
        <Route path="/savings-products" element={<UsersPage />} />
        <Route path="/fees-and-charges" element={<Dashboard />} />
        <Route path="/transactions" element={<UsersPage />} />

        <Route path="/services" element={<UsersPage />} />
        <Route path="/service-account" element={<Dashboard />} />
        <Route path="/settlements" element={<UsersPage />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/preferences" element={<UsersPage />} />
        <Route path="/fees-and-pricing" element={<Dashboard />} />
        <Route path="/audit-logs" element={<UsersPage />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
