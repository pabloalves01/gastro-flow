import { User } from 'lucide-react';
interface Sale {
    name: string;
    description: string;
    email: string;
    value: number;
}

interface RecentSalesProps {
    sales?: Sale[];
}

const RecentSales: React.FC<RecentSalesProps> = ({ sales = [] }) => {
    const limitedSales = sales.slice(0, 5);

    return (
        <div className="flex flex-col gap-4 min-h-[300px] bg-[#1E1E1E] border-1 border-[#333333]  p-4 rounded-lg">
            <div>
                <div className="text-white text-md font-semibold">Vendas Recentes</div>
                <div className="text-[#A1A1A1] text-sm font-regular">Acompanhe suas vendas recentes</div>
            </div>
            {limitedSales.length === 0 ? (
                <div className="text-center text-white">Não há vendas recentes.</div>
            ) : (
                <div className="flex flex-col gap-2">
                    {limitedSales.map((sale, index) => (
                        <div key={index} className="flex justify-between items-center px-4 py-2 rounded-lg hover:bg-[#333333]">
                            <div className="flex items-center gap-4 ">
                                <div className="w-10 h-10 rounded-full bg-[#FF9800] flex justify-center items-center">
                                    <User className="text-white w-6 h-6" />
                                </div>                                <div className="flex flex-col">
                                    <div className="text-sm font-semibold text-white">{sale.name}</div>
                                    <div className="text-xs font-regular text-[#A1A1A1]">{sale.email}</div>
                                </div>
                            </div>
                            <div className="text-base font-semibold text-white">
                                {sale.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex justify-center pt-2">
                <button className="text-[#FF9800] text-sm font-semibold cursor-pointer">Ver mais...</button>
            </div>
        </div>
    );
};

export default RecentSales;