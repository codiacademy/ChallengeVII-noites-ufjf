import { Route, Routes } from "react-router-dom";
import { OverviewPage } from "./pages/OverviewPage";
import { ExpensesPage } from "./pages/ExpensesPage";
import { SalesPage } from "./pages/SalesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { LoginPage } from "./pages/LoginPage";
import SidebarLayout from "./components/common/SidebarLayout";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Background */}
      <div className="fixed inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* <Sidebar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes> */}

      <Routes>
        <Route element={<SidebarLayout />}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
}
