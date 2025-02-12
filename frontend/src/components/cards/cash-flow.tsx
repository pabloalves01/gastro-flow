import { ChevronsUp  } from "lucide-react";

interface CashFlowProps {
  value: number;
}

const CashFlow: React.FC<CashFlowProps> = ({ value }) => {
  return (
    <div className="flex flex-col gap-4 min-h-[300px] bg-[#1E1E1E] border-1 border-[#333333] p-4 rounded-lg">
      <div>
        <div className="text-white text-md font-semibold">Fluxo de Caixa</div>
        <div className="text-[#A1A1A1] text-sm font-regular">
          Acompanhe suas transações recentes
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center text-green-500">
            <ChevronsUp  className="w-8 h-8" strokeWidth={1} />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-white">Salário</div>
            <div className="text-xs font-regular text-[#A1A1A1]">27 March 2020, at 12:30 PM</div>
          </div>
        </div>
        <div>teste3</div>
      </div>
    </div>
  );
};

export default CashFlow;
