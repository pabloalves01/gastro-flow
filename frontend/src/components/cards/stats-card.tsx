interface StatusCardProps {
    title: string;
    description: string;
    value: number;
    icon?: React.ReactNode;
    status: 'up' | 'down';
}

const StatusCard: React.FC<StatusCardProps> = ({ title, description, value, icon, status }) => {
    return (
        <div className="bg-[#1E1E1E] rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 w-full h-full flex flex-col">
            <div className="flex flex-row items-start sm:items-center gap-36 md:gap-12">
                <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{title}</div>
                    <div className="text-xl font-bold text-[#EDEDED]">
                        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>
                    <div className="text-xs font-regular text-[#A1A1A1]">{description}</div>
                </div>
                <div className="bg-[#333333] text-green-500 rounded-full">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatusCard; 