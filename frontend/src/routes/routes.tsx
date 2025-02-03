import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import SidebarLayout from "../layout/sidebar/sidebar";

function AppRoutes() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <SidebarLayout />

        {/* Conteúdo Principal */}
        <main className="w-full flex-1 bg-slate-100 p-4">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teste" element={<h1 className="text-2xl">Dashboard</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;
