import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import Sidebar from "../layout/sidebar/sidebar";

function AppRoutes() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen">
              {/* Sidebar */}
              <Sidebar setExpand={setSideMenuIsExpand} />

              {/* Conteúdo Principal */}
              <main
                className={`flex-1 h-full bg-slate-100 transition-all duration-300 ease-in-out p-4 ${sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
                  }`}
              >
                <Routes>
                  <Route path="/teste" element={<h1 className="text-2xl">Dashboard</h1>} />
                  {/* Adicione outras rotas privadas aqui */}
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
