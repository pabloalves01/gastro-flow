import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import Header from "./Header";
import { useState } from "react";

const AuthenticatedLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidenav
                isOpen={sidebarOpen}
                isMobileOpen={mobileSidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                toggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />

            {/* Conteúdo Principal */}
            <div className="flex flex-col flex-1">
                <Header toggleSidebar={() => setMobileSidebarOpen(true)} />

                {/* 🛠️ Garantindo rolagem e espaçamento adequado */}
                <main className="flex-1 overflow-auto p-6 h-full">
                    <div className="max-w-7xl w-full mx-auto"> {/* Define um limite para não ficar muito largo */}
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
