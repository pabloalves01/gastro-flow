import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import SplashScreen from "../pages/splashscreen";
import Dashboard from "../pages/dashboard/dashboard";
import AuthenticatedLayout from "../layout/authenticated-layout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas (Usando o Layout Base) */}
        <Route path="/*" element={<AuthenticatedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
