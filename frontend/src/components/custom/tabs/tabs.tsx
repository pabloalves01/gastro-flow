import React from 'react';

interface Tab {
    name: string;
    href: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange?: (tabName: string) => void;
}

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div>
            <div className="overflow-x-auto scrollbar-hide">
                <nav aria-label="Tabs" className="flex space-x-4 border-b border-[#333333] border-opacity-50 whitespace-nowrap overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => onTabChange && onTabChange(tab.name)}
                            className={classNames(
                                tab.name === activeTab ? 'bg-zinc-800 text-white' : 'text-[#A1A1A1] hover:text-[#525252]',
                                'text-sm p-2 rounded-t-lg font-medium cursor-pointer'
                            )}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Tabs;
