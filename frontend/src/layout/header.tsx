import { User, Bell, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [hasNotifications, setHasNotifications] = useState(true); // Simulação de notificação

    return (
        <div className="bg-[#141414] border-b border-[#333333] py-4 px-6 flex justify-between items-center">
            {/* Título */}
            <div className="text-white text-lg font-semibold"></div>

            {/* Campo de busca */}
            {/* <div className="relative w-72">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full bg-[#2A2A2A] text-white text-sm pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF9800]"
                />
            </div> */}

            {/* Notificações e Perfil */}
            <div className="flex items-center space-x-6">
                {/* Notificações */}
                <div className="relative">
                    <Bell className="w-6 h-6 text-white cursor-pointer" />
                    {hasNotifications && (
                        <span className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full border-2 border-[#1E1E1E]"></span>
                    )}
                </div>

                {/* Perfil */}
                <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="w-10 h-10 bg-[#FF9800] rounded-full flex justify-center items-center">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Usuário</span>
                </div>
            </div>
        </div>
    );
}
