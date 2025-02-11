import { Outlet } from "react-router-dom";
import Sidenav from "./sidenav";

const AuthenticatedLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidenav />

            {/* Conteúdo da página */}
            <div className="flex-1 flex flex-col h-screen">
                <div className="w-full py-4 border border-">teste</div>
                <main className="flex-1 flex justify-center p-6 w-full max-w-7xl mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
