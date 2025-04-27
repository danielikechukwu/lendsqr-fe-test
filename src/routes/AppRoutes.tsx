import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../features/users/UsersPage";
import UserDetailPage from "../features/users/UserDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<UsersPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />

        <Route path="/guarators" element={<UsersPage />} />
        <Route path="/loans" element={<UsersPage />} />
        <Route path="/decision-models" element={<UsersPage />} />
        <Route path="/savings" element={<UsersPage />} />
        <Route path="/loan-request" element={<UsersPage />} />
        <Route path="/whitelist" element={<UsersPage />} />
        <Route path="/karma" element={<UsersPage />} />
        <Route path="/organization" element={<UsersPage />} />
        <Route path="/loan-products" element={<UsersPage />} />
        <Route path="/savings-products" element={<UsersPage />} />
        <Route path="/fees-and-charges" element={<UsersPage />} />
        <Route path="/transactions" element={<UsersPage />} />

        <Route path="/services" element={<UsersPage />} />
        <Route path="/service-account" element={<UsersPage />} />
        <Route path="/settlements" element={<UsersPage />} />
        <Route path="/reports" element={<UsersPage />} />
        <Route path="/preferences" element={<UsersPage />} />
        <Route path="/fees-and-pricing" element={<UsersPage />} />
        <Route path="/audit-logs" element={<UsersPage />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
