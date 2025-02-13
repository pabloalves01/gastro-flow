import { FilePlus, ClipboardList, UserPen, Settings2 } from 'lucide-react';

interface Actions {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface QuickActionsProps {
    actions?: Actions[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions = [] }) => {
    const limitedActions = actions.slice(0, 4);

    return (
        <div className="bg-[#1E1E1E] border border-[#333333] p-4 rounded-lg">
            <div className="flex flex-col gap-4">
                {/* TODO: Informações do cabeçalho também devem vir por props */}
                <div className="flex flex-col">
                    <div className="text-white text-md font-semibold">O que você gostaria de fazer?</div>
                    <div className="text-[#A1A1A1] text-sm font-regular">
                        Acompanhe suas vendas recentes
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {limitedActions.map((action, index) => (
                        <div key={index} className="flex items-center hover:bg-[#333333] cursor-pointer p-4 rounded-md text-white gap-2">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#292929] rounded-lg text-[#FF9800]">
                                {action.icon}
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-sm font-semibold text-white'>{action.title}</div>
                                <div className="text-[#A1A1A1] text-sm font-regular">
                                    {action.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickActions;
