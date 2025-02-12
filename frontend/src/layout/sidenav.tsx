import { useState } from 'react';
import { Home, Settings, Folder, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidenav() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleModuleClick = (module: string) => {
    setSelectedModule(selectedModule === module ? null : module);
  };

  const modules = [
    {
      name: 'Dashboard',
      icon: <Home className="w-6 h-6" />,
      subModules: ['Overview', 'Analytics', 'Reports'],
    },
    {
      name: 'Projects',
      icon: <Folder className="w-6 h-6" />,
      subModules: ['Current', 'Archived', 'Templates'],
    },
    {
      name: 'Team',
      icon: <Users className="w-6 h-6" />,
      subModules: ['Members', 'Roles', 'Permissions'],
    },
    {
      name: 'Settings',
      icon: <Settings className="w-6 h-6" />,
      subModules: ['General', 'Security', 'Notifications'],
    },
  ];

  return (
    <div
      className={`h-screen bg-[#1E1E1E] text-white transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-700">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            {isExpanded ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {modules.map((module) => (
            <div key={module.name}>
              <div
                onClick={() => handleModuleClick(module.name)}
                className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
              >
                <div className="mr-3">{module.icon}</div>
                {isExpanded && <span>{module.name}</span>}
              </div>

              {isExpanded && selectedModule === module.name && (
                <div className="pl-8">
                  {module.subModules.map((subModule) => (
                    <div
                      key={subModule}
                      className="p-2 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                    >
                      {subModule}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}