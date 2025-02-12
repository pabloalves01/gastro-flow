import { ArrowDown, ArrowUp, RefreshCcw } from "lucide-react";

interface Flow {
  title: string;
  date: string;
  value: number;
  operation_id: number;
}

interface RecentSalesProps {
  flows?: Flow[];
}

const CashFlow: React.FC<RecentSalesProps> = ({ flows = [] }) => {
  const limitedFlows = flows.slice(0, 5);

  const renderArrowIcon = (operationId: number) => {
    switch (operationId) {
      case 1:
        return <ArrowUp className="text-green-500 w-6 h-6" strokeWidth={1} />;
      case 2:
        return <ArrowDown className="text-red-500 w-6 h-6" strokeWidth={1} />;
      case 3:
        return <RefreshCcw className="text-zinc-500 w-6 h-6" strokeWidth={1} />;
      default:
        return <RefreshCcw className="text-white w-6 h-6" strokeWidth={1} />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="flex flex-col gap-4 min-h-[300px] bg-[#1E1E1E] border border-[#333333] p-4 rounded-lg">
      <div>
        <div className="text-white text-md font-semibold">Fluxo de Caixa</div>
        <div className="text-[#A1A1A1] text-sm font-regular">
          Acompanhe suas transações recentes
        </div>
      </div>
      {limitedFlows.length === 0 ? (
        <div className="text-center text-white">Não há transações recentes.</div>
      ) : (
        <div className="flex flex-col gap-2">
          {limitedFlows.map((flow, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-2 rounded-lg hover:bg-[#333333]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#292929] flex justify-center items-center">
                  {renderArrowIcon(flow.operation_id)}
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-semibold text-white">
                    {flow.title}
                  </div>
                  <div className="text-xs font-regular text-[#A1A1A1]">
                    {flow.date}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 text-base font-semibold text-white">
                {formatCurrency(flow.value)}
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

export default CashFlow;
