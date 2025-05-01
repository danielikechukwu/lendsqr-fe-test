import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../features/users/UsersPage";
import UserDetailPage from "../features/users/UserDetailPage";
import UserGeneralDetails from "../features/users/UserGeneralDetails";
import Document from "../features/users/Document";
import BankDetails from "../features/users/BankDetails";
import Loans from "../features/users/Loans";
import Savings from "../features/users/Savings";
import AppAndSystems from "../features/users/AppAndSystems";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<UsersPage />} />
        <Route path="/users" element={<UsersPage />} />

        <Route path="/users/:id" element={<UserDetailPage />}>
          <Route path="/users/:id/general-details" element={<UserGeneralDetails />} />
          <Route path="/users/:id/documents" element={<Document />} />
          <Route path="/users/:id/bank-details" element={<BankDetails />} />
          <Route path="/users/:id/loans" element={<Loans />} />
          <Route path="/users/:id/savings" element={<Savings />} />
          <Route path="/users/:id/app-and-system" element={<AppAndSystems />} />
        </Route>

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
