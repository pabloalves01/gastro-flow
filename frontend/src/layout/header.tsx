import { Bell, User, Menu } from "lucide-react";

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
    return (
        <header className="bg-[#141414] border-b border-[#333] text-white py-4 px-6 flex justify-between items-center">
            {/* Botão de menu hambúrguer (aparece só no mobile) */}
            <button onClick={toggleSidebar} className="lg:hidden">
                <Menu className="w-6 h-6" />
            </button>

            {/* Nome do sistema */}
            <h1 className="text-lg font-semibold">Meu Sistema</h1>

            {/* Ícones de notificações e perfil */}
            <div className="flex items-center space-x-6">
                {/* Notificações */}
                <div className="relative">
                    <Bell className="w-6 h-6 cursor-pointer" />
                    <span className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></span>
                </div>

                {/* Perfil */}
                <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="w-10 h-10 bg-[#FF9800] rounded-full flex justify-center items-center">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <span className="hidden lg:block">Usuário</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
