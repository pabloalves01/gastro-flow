interface StatusCardProps {
    title: string;
    description: string;
    value: number;
    icon?: React.ReactNode;
    status: 'up' | 'down';
}

const StatusCard: React.FC<StatusCardProps> = ({ title, description, value, icon, status }) => {
    return (
        <div className="bg-[#1E1E1E] border-1 border-[#333333] rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 w-full h-full flex flex-col">
            <div className="flex sm:items-start gap-36 md:gap-12 ">
                <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{title}</div>
                    <div className="text-xl font-semibold text-[#EDEDED]">
                        {value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} BRL
                    </div>

                    <div className="text-xs font-regular text-[#A1A1A1]">{description}</div>
                </div>
                <div className="hidden md:block text-[#FF9800] rounded-full">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatusCard; 