import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import SplashScreen from "../pages/splashscreen";
import Dashboard from "../pages/dashboard/dashboard";
import Sidenav from "../layout/sidenav";

function AppRoutes() {
  return (


    <Router>
      <Routes>
        { /* Rotas Sem Altenticação*/}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        { /* Rotas Privadas*/}
        <Route path="/*" element={
          <div className="flex h-screen">
            <Sidenav />
            <div className="flex-1">
              <main className="flex-1">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </main>
            </div>
          </div>
        } />
      </Routes>
    </Router>

  );
}

export default AppRoutes;
