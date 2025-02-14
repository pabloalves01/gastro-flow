import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Avatar } from '../components/ui/catalyst/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../components/ui/catalyst/dropdown';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '../components/ui/catalyst/sidebar';
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
  Bars3Icon,
} from '@heroicons/react/16/solid';
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid';

import { Gauge, House, Users, ChevronRight } from 'lucide-react';

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModules, setOpenModules] = useState<{ [key: string]: boolean }>({
    cadastros: false,
  });

  // Alterna a exibição dos submódulos
  const toggleModule = (module: string) => {
    setOpenModules((prev) => ({ ...prev, [module]: !prev[module] }));
  };

  return (
    <>
      {/* Botão de menu hambúrguer */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-[#141414] text-white rounded-lg lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar responsiva */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-[#141414] border-r border-[#333333] transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar>
          <SidebarHeader>
            <SidebarSection>
              <SidebarItem href="/search">
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/home">
                <House />
                <SidebarLabel>Início</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard">
                <Gauge />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>

              {/* Módulo de Cadastros com Submódulos */}
              <div>
                <SidebarItem onClick={() => toggleModule('cadastros')} className="cursor-pointer">
                  <Users />
                  <SidebarLabel>Cadastros</SidebarLabel>
                  {openModules['cadastros'] ? <ChevronDownIcon /> : <ChevronRight />}
                </SidebarItem>

                {openModules['cadastros'] && (
                  <div className="ml-6 border-l border-gray-600">
                    <SidebarItem href="/cadastros/clientes">
                      <SidebarLabel>Clientes</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/cadastros/representantes">
                      <SidebarLabel>Representantes</SidebarLabel>
                    </SidebarItem>
                  </div>
                )}
              </div>

              <SidebarItem href="/events">
                <Square2StackIcon />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <TicketIcon />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/broadcasts">
                <MegaphoneIcon />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />

            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter>
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src="/profile-photo.jpg" className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-white">Erica</span>
                    <span className="block truncate text-xs font-normal text-gray-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>

              {/* DropdownMenu do perfil renderizado no portal */}
              {createPortal(
                <DropdownMenu className="absolute left-0 top-full z-50 min-w-64 bg-white shadow-lg rounded-md">
                  <DropdownItem href="/my-profile">
                    <UserIcon />
                    <DropdownLabel>My profile</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Settings</DropdownLabel>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem href="/privacy-policy">
                    <ShieldCheckIcon />
                    <DropdownLabel>Privacy policy</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/share-feedback">
                    <LightBulbIcon />
                    <DropdownLabel>Share feedback</DropdownLabel>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem href="/logout">
                    <ArrowRightStartOnRectangleIcon />
                    <DropdownLabel>Sign out</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>,
                document.body
              )}
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {isOpen && <div className="fixed inset-0 z-30 lg:hidden bg-black/50" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Sidenav;
