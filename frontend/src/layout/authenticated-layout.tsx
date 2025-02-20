import { Avatar } from "../components/ui/catalyst/avatar";
import { Outlet, useNavigate } from "react-router-dom";

import { House, ScrollText, Cog, Headset, Store, InboxIcon, HandPlatter, Tag, User } from "lucide-react";

import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "../components/ui/catalyst/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "../components/ui/catalyst/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "../components/ui/catalyst/sidebar";
import { SidebarLayout } from "../components/ui/catalyst/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  MagnifyingGlassIcon,
  MegaphoneIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

function AuthenticatedLayout() {
  const navigate = useNavigate();

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem onClick={() => navigate("/search")} aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem onClick={() => navigate("/inbox")} aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem onClick={() => navigate("/my-profile")}>
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/settings")}>
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => navigate("/privacy-policy")}>
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/share-feedback")}>
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => navigate("/logout")}>
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                <Avatar src="/tailwind-logo.svg" />
                <SidebarLabel>Emitente 1</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu
                className="min-w-80 lg:min-w-64"
                anchor="bottom start"
              >
                <DropdownItem onClick={() => navigate("/teams/1/settings")}>
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => navigate("/teams/1")}>
                  <Avatar slot="icon" src="/tailwind-logo.svg" />
                  <DropdownLabel>Tailwind Labs</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/teams/2")}>
                  <Avatar
                    slot="icon"
                    initials="WC"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Workcation</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => navigate("/teams/create")}>
                  <PlusIcon />
                  <DropdownLabel>New team&hellip;</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <SidebarSection className="max-lg:hidden">
              <SidebarItem onClick={() => navigate("/search")}>
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/inbox")}>
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem onClick={() => navigate("/home")}>
                <House />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              {/* <SidebarItem onClick={() => navigate("/dashboard")}>
                <Gauge />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem> */}
              <SidebarItem onClick={() => navigate("/pdv")}>
                <Store />
                <SidebarLabel>PDV</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/pedido/gerenciar")}>
                <HandPlatter />
                <SidebarLabel>Pedidos</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/produto/novo")}>
                <ScrollText />
                <SidebarLabel>Produto</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/categoria/gerenciar")}>
                <Tag />
                <SidebarLabel>Categorias</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/cliente/novo")}>
                <User />
                <SidebarLabel>Clientes</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/settings")}>
                <Cog />
                <SidebarLabel>Configurações</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/broadcasts")}>
                <MegaphoneIcon />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem onClick={() => navigate("/events/1")}>
                Bear Hug: Live in Concert
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/events/2")}>Viking People</SidebarItem>
              <SidebarItem onClick={() => navigate("/events/3")}>Six Fingers — DJ Set</SidebarItem>
              <SidebarItem onClick={() => navigate("/events/4")}>We All Look The Same</SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem onClick={() => navigate("/suporte")}>
                <Headset />
                <SidebarLabel>Suporte</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/changelog")}>
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="/profile-photo.jpg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem onClick={() => navigate("/my-profile")}>
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/settings")}>
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => navigate("/privacy-policy")}>
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/share-feedback")}>
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => navigate("/logout")}>
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      <Outlet />
    </SidebarLayout>
  );
}

export default AuthenticatedLayout;
