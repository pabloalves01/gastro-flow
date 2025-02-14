import { Home, Users, Settings, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SidenavProps {
  isOpen: boolean;
  isMobileOpen: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
}

const Sidenav = ({ isOpen, isMobileOpen, toggleSidebar, toggleMobileSidebar }: SidenavProps) => {
  const [collapsed, setCollapsed] = useState(false); // Estado de colapso da sidebar no desktop

  return (
    <>
      {/* Sidebar no Desktop */}
      <div
        className={`hidden lg:flex flex-col h-screen bg-[#141414] text-white border-r border-[#333] transition-all duration-300 ${collapsed ? "w-16" : "w-64"
          }`}
      >
        {/* Botão de expandir/retrair a sidebar */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 mt-4 mx-auto bg-[#222] rounded-full hover:bg-[#333] transition"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>

        {/* Navegação */}
        <nav className="flex flex-col mt-8 space-y-4">
          <Link to="/home" className="flex items-center px-4 py-3 hover:bg-[#222]">
            <Home className="w-5 h-5" />
            {!collapsed && <span className="ml-4">Início</span>}
          </Link>
          <Link to="/users" className="flex items-center px-4 py-3 hover:bg-[#222]">
            <Users className="w-5 h-5" />
            {!collapsed && <span className="ml-4">Usuários</span>}
          </Link>
          <Link to="/settings" className="flex items-center px-4 py-3 hover:bg-[#222]">
            <Settings className="w-5 h-5" />
            {!collapsed && <span className="ml-4">Configurações</span>}
          </Link>
        </nav>
      </div>

      {/* Sidebar no Mobile */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={toggleMobileSidebar}>
          <div className="fixed left-0 top-0 w-64 h-full bg-[#141414] text-white shadow-lg">
            {/* Botão para fechar */}
            <button onClick={toggleMobileSidebar} className="absolute top-4 right-4 text-white">
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col mt-16 space-y-4">
              <Link to="/home" className="flex items-center px-4 py-3 hover:bg-[#222]">
                <Home className="w-5 h-5" />
                <span className="ml-4">Início</span>
              </Link>
              <Link to="/users" className="flex items-center px-4 py-3 hover:bg-[#222]">
                <Users className="w-5 h-5" />
                <span className="ml-4">Usuários</span>
              </Link>
              <Link to="/settings" className="flex items-center px-4 py-3 hover:bg-[#222]">
                <Settings className="w-5 h-5" />
                <span className="ml-4">Configurações</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidenav;
