interface CashFlowProps {
  value: number;
}

const CashFlow: React.FC<CashFlowProps> = ({ value }) => {
  return (
    <div className="flex flex-col gap-4 min-h-[300px] bg-[#1E1E1E] border-1 border-[#333333]  p-4 rounded-lg">
      <div>
        <div className="text-white text-md font-semibold">Fluxo de Caixa</div>
        <div className="text-[#A1A1A1] text-sm font-regular">
          Acompanhe suas transações recentes
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
