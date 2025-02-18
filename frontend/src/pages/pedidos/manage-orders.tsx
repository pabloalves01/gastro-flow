import { useState } from "react";
import { Button } from "../../components/ui/catalyst/button";
import { Heading } from "../../components/ui/catalyst/heading";

import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "../../components/ui/catalyst/description-list";
import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/catalyst/alert";
import StatusCard from "../../components/cards/stats-card";
import SectionText from "../../components/text/section-text";
import { Avatar } from "../../components/ui/catalyst/avatar";
import { Badge } from "../../components/ui/catalyst/badge";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../../components/ui/catalyst/dropdown";
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
import {
  Check,
  Cog,
  Hourglass,
  Inbox,
  Loader2,
  Package,
  Eye,
  Pencil,
  Printer,
} from "lucide-react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";

interface User {
  avatarUrl: string;
  name: string;
  email: string;
  access: string;
  status: string;
  handle: string;
}

const users = [
  {
    avatarUrl: "/path/to/avatar1.jpg",
    name: "Pablo Alves",
    email: "pablo.alves@example.com",
    access: "Admin",
    status: "Em andamento",
    handle: "pablo.alves",
  },
  {
    avatarUrl: "/path/to/avatar2.jpg",
    name: "Mariana Souza",
    email: "mariana.souza@example.com",
    access: "Editor",
    status: "Finalizado",
    handle: "mariana.souza",
  },
  {
    avatarUrl: "/path/to/avatar3.jpg",
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    access: "Editor",
    status: "Pendente",
    handle: "carlos.oliveira",
  },

];

export function ManageOrders() {
  //   Abrir Modal de Visualização de Pedido
  const [isOpenView, setIsOpenView] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  //   Abrir Modal de Filtros
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const handleView = (user: User) => {
    setSelectedUser(user);
    setIsOpenView(true);
  };

  return (
    <div>
      <Breadcrumb items={[
        { label: "Início", href: "/home" },
        { label: "Pedidos", href: "/pedidos" },
        { label: "Gerenciar Pedidos", href: "/pedido/gerenciar" }
      ]} />
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
            onClick={() => setIsOpenFilters(true)}
            className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
            strokeWidth={1}
          />
        </div>
      </div>

      <Table dense striped className="w-full">
        <TableHead>
          <TableRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Função</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="py-24 text-center text-[#A1A1A1]"
              >
                <div className="flex flex-col items-center justify-center">
                  <Inbox className="w-14 h-14" />
                  <div className="text-lg font-semibold">
                    Nenhum resultado encontrado
                  </div>
                  <p className="text-sm text-center">
                    Você pode configurar as opções no menu acima clicando em
                    <i className="inline-flex items-center">
                      <Cog className="w-4 h-4 mx-1" />
                    </i>
                    no menu acima.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
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
                  {user.status === "Em andamento" ? (
                    <Badge color="blue">Em andamento</Badge>
                  ) : user.status === "Finalizado" ? (
                    <Badge color="green">Finalizado</Badge>
                  ) : (
                    <Badge color="yellow">Pendente</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisHorizontalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem onClick={() => handleView(user)}>
                        <Eye className="w-4 h-4 mr-2" />
                        Visualizar
                      </DropdownItem>
                      <DropdownItem>
                        <Pencil className="w-4 h-4 mr-2" />
                        Editar
                      </DropdownItem>
                      <DropdownItem>
                        <Printer className="w-4 h-4 mr-2" />
                        Imprimir
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))
          )}
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

      {/* Alert para exibir detalhes do pedido selecionado */}
      <Alert open={isOpenView} onClose={() => setIsOpenView(false)}>
        <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-4 dark:border-white/10">
          <Heading>Pedido #00001</Heading>
          {/* <div className="flex gap-4">
            <Button outline>Refund</Button>
            <Button>Resend invoice</Button>
          </div> */}
        </div>
        {/* <AlertTitle>Detalhes do Pedido</AlertTitle> */}
        {selectedUser && (
          <AlertDescription>
            <DescriptionList>
              <DescriptionTerm>Nome</DescriptionTerm>
              <DescriptionDetails>{selectedUser.name}</DescriptionDetails>

              <DescriptionTerm>Função</DescriptionTerm>
              <DescriptionDetails>{selectedUser.access}</DescriptionDetails>

              <DescriptionTerm>Amount</DescriptionTerm>
              <DescriptionDetails>$150.00 USD</DescriptionDetails>

              <DescriptionTerm>Amount after exchange rate</DescriptionTerm>
              <DescriptionDetails>
                US$150.00 &rarr; CA$199.79
              </DescriptionDetails>

              <DescriptionTerm>Fee</DescriptionTerm>
              <DescriptionDetails>$4.79 USD</DescriptionDetails>

              <DescriptionTerm>Net</DescriptionTerm>
              <DescriptionDetails>$1,955.00</DescriptionDetails>
            </DescriptionList>
          </AlertDescription>
        )}
        <AlertActions>
          <Button plain onClick={() => setIsOpenView(false)}>
            Fechar
          </Button>
        </AlertActions>
      </Alert>

      <Alert open={isOpenFilters} onClose={setIsOpenFilters}>
        <AlertTitle>Aplicar Filtros</AlertTitle>
        <AlertDescription>
          Os filtros serão aplicados para exibir apenas os pedidos que atendem
          aos critérios selecionados.
        </AlertDescription>
        <AlertActions>
          <Button plain onClick={() => setIsOpenFilters(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setIsOpenFilters(false)}>Buscar</Button>
        </AlertActions>
      </Alert>
    </div>
  );
}

export default ManageOrders;
