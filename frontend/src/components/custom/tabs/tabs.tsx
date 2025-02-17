import { ChevronDownIcon } from '@heroicons/react/16/solid';
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
            <div className="hidden sm:block">
                <nav aria-label="Tabs" className="flex space-x-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => onTabChange && onTabChange(tab.name)}
                            className={classNames(
                                tab.name === activeTab ? 'bg-transparent text-white' : 'text-gray-500 hover:text-gray-700',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Tabs;
