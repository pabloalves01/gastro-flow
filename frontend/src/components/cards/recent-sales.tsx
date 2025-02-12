import { Badge } from "../ui/catalyst/badge";
import { User } from "lucide-react";

interface Sale {
  name: string;
  description: string;
  email: string;
  value: number;
  payment_id: number;
}

interface RecentSalesProps {
  sales?: Sale[];
}

const RecentSales: React.FC<RecentSalesProps> = ({ sales = [] }) => {
  const limitedSales = sales.slice(0, 5);

  const renderPaymentBadge = (paymentId: number) => {
    switch (paymentId) {
      case 1:
        return <Badge color="yellow">Pix</Badge>;
      case 2:
        return <Badge color="red">Boleto</Badge>;
      case 3:
        return <Badge color="green">Cartão</Badge>;
      case 4:
        return <Badge color="zinc">Transferência Bancária</Badge>;
      default:
        return <Badge color="sky">Outros</Badge>;
    }
  };


  return (
    <div className="flex flex-col gap-4 min-h-[300px] bg-[#1E1E1E] border-1 border-[#333333] p-4 rounded-lg">
      <div>
        <div className="text-white text-md font-semibold">Vendas Recentes</div>
        <div className="text-[#A1A1A1] text-sm font-regular">
          Acompanhe suas vendas recentes
        </div>
      </div>
      {limitedSales.length === 0 ? (
        <div className="text-center text-white">Não há vendas recentes.</div>
      ) : (
        <div className="flex flex-col gap-2">
          {limitedSales.map((sale, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-2 rounded-lg hover:bg-[#333333]"
            >
              <div className="flex items-center gap-4 ">
                <div className="w-10 h-10 rounded-full bg-[#FF9800] flex justify-center items-center">
                  <User className="text-white w-6 h-6" />
                </div>{" "}
                <div className="flex flex-col">
                  <div className="text-sm font-semibold text-white">
                    {sale.name}
                  </div>
                  <div className="text-xs font-regular text-[#A1A1A1]">
                    {sale.email}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 text-base font-semibold text-white">
                <div>
                  {" "}
                  {renderPaymentBadge(sale.payment_id)}
                </div>
                {sale.value} BRL
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center pt-2">
        <button className="text-[#FF9800] text-sm font-semibold cursor-pointer">
          Ver mais...
        </button>
      </div>
    </div>
  );
};

export default RecentSales;
