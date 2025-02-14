import StatusCard from "../../components/cards/stats-card";
import SectionText from "../../components/text/section-text";
import { Avatar } from "../../components/ui/catalyst/avatar";
import { Badge } from "../../components/ui/catalyst/badge";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../../components/ui/catalyst/dropdown";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "../../components/ui/catalyst/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/catalyst/table";
import { Check, Cog, Hourglass, Inbox, Loader2, Package } from "lucide-react";

const users = [
  {
      avatarUrl: "/path/to/avatar1.jpg",
      name: "Pablo Alves",
      email: "pablo.alves@example.com",
      access: "Admin",
      online: true,
      handle: "pablo.alves",
  },
  {
      avatarUrl: "/path/to/avatar2.jpg",
      name: "Mariana Souza",
      email: "mariana.souza@example.com",
      access: "Editor",
      online: false,
      handle: "mariana.souza",
  },
  {
      avatarUrl: "/path/to/avatar3.jpg",
      name: "Carlos Oliveira",
      email: "carlos.oliveira@example.com",
      access: "Viewer",
      online: true,
      handle: "carlos.oliveira",
  },
  {
      avatarUrl: "/path/to/avatar4.jpg",
      name: "Ana Lima",
      email: "ana.lima@example.com",
      access: "Editor",
      online: true,
      handle: "ana.lima",
  },
  {
      avatarUrl: "/path/to/avatar5.jpg",
      name: "Rafael Mendes",
      email: "rafael.mendes@example.com",
      access: "Admin",
      online: false,
      handle: "rafael.mendes",
  }
];

export function ManageOrders() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatusCard
          title="Pedidos"
          description="Total de pedidos realizados"
          number={58}
          icon={<Package />}
        />
        <StatusCard
          title="Aguardado Resposta"
          description="Pedidos aguardando resposta"
          number={3}
          icon={<Hourglass />}
        />
        <StatusCard
          title="Em Produção"
          description="Total de pedidos realizados"
          number={18}
          icon={<Loader2 />}
        />
        <StatusCard
          title="Finalizados"
          description="Total de Pedidos Entregues"
          number={5}
          icon={<Check />}
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <SectionText
          title="Gerenciar Pedidos"
          subtitle="Gerencie seus pedidos, crie novos ou edite."
        />
        <div className="group">
          <Cog
            className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
            strokeWidth={1}
          />
        </div>
      </div>
      <Table dense striped className="w-full [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={3}
                className="py-24 text-center text-[#A1A1A1]"
              >
                <div className="flex flex-col items-center justify-center">
                  <Inbox className="w-14 h-14" />
                  <div className="text-lg font-semibold">
                    Nenhum resultado encontrado
                  </div>
                  <p className="text-sm text-center">
                    Você pode configurar as opções no menu acima clicando em{" "}
                    <i className="inline-flex items-center">
                      <Cog className="w-4 h-4 mx-1" />
                    </i>
                    no menu acima.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : null}

          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar src={user.avatarUrl} className="size-12" />
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-zinc-500">
                      <a href="#" className="hover:text-zinc-700">
                        {user.email}
                      </a>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
              <TableCell>
                {user.online ? (
                  <Badge color="lime">Online</Badge>
                ) : (
                  <Badge color="zinc">Offline</Badge>
                )}
              </TableCell>
              <TableCell>
              <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                <Dropdown>
                  <DropdownButton plain aria-label="More options">
                    <EllipsisHorizontalIcon />
                  </DropdownButton>
                  <DropdownMenu anchor="bottom end">
                    <DropdownItem>Visualizar</DropdownItem>
                    <DropdownItem>Editar</DropdownItem>
                    <DropdownItem>Imprimir</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="flex w-full justify-center mt-6">
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
    </div>
  );
}

export default ManageOrders;
