import { Outlet } from "react-router-dom";
import Sidenav from "./sidenav";
import Header from "./header";

const AuthenticatedLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar fixa à esquerda */}
            <div className="fixed left-0 top-0 h-full w-64">
                <Sidenav />
            </div>

            {/* Área de conteúdo principal */}
            <div className="flex-1 flex flex-col h-screen">                {/* Cabeçalho fixo no topo */}
                <div className="w-full">
                    <Header />
                </div>

                {/* Conteúdo centralizado */}
                <main className="flex-1 flex justify-center items-center p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
