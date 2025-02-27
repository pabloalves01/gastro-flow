import { useState } from "react";
import SectionText from "../../components/text/section-text";
import { Button } from "../../components/ui/catalyst/button";
import { Badge } from "../../components/ui/catalyst/badge";
import { ClipboardList, Cog, Plus, Receipt, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/catalyst/table";
import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/catalyst/alert";

interface TableItem {
  id: number;
  number: number;
  status: "available" | "occupied" | "reserved";
  guests?: number;
  startTime?: string;
  total?: number;
}

interface Order {
  id: number;
  table: number;
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  startTime: string;
}

export default function TableManagement() {
  const [tables] = useState<TableItem[]>([
    {
      id: 1,
      number: 1,
      status: "occupied",
      guests: 4,
      startTime: "14:30",
      total: 156.8,
    },
    {
      id: 2,
      number: 2,
      status: "reserved",
      guests: 4,
      startTime: "14:30",
      total: 156.8,
    },
    {
      id: 3,
      number: 3,
      status: "available",
      guests: 4,
      startTime: "14:30",
      total: 156.8,
    },
    {
      id: 4,
      number: 4,
      status: "occupied",
      guests: 4,
      startTime: "14:30",
      total: 156.8,
    },
  ]);

  const [activeOrders] = useState<Order[]>([
    // {
    //   id: 1,
    //   table: 2,
    //   items: [
    //     { id: 1, name: "X-Burger", quantity: 2, price: 25.9 },
    //     { id: 2, name: "Coca-Cola 350ml", quantity: 2, price: 5.5 },
    //   ],
    //   total: 62.8,
    //   startTime: "14:30",
    // },
    // {
    //   id: 2,
    //   table: 5,
    //   items: [
    //     { id: 3, name: "X-Salada", quantity: 1, price: 27.9 },
    //     { id: 4, name: "Água Mineral", quantity: 1, price: 4.0 },
    //   ],
    //   total: 31.9,
    //   startTime: "15:45",
    // },
  ]);

  const getStatusColor = (status: TableItem["status"]) => {
    switch (status) {
      case "available":
        return "green";
      case "occupied":
        return "orange";
      case "reserved":
        return "sky";
      default:
        return "zinc";
    }
  };

  const getStatusText = (status: TableItem["status"]) => {
    switch (status) {
      case "available":
        return "Disponível";
      case "occupied":
        return "Ocupada";
      case "reserved":
        return "Reservada";
      default:
        return "";
    }
  };

  const [isOpenNewTable, setIsOpenNewTable] = useState(false);

  return (
    <div>
      <div className="container max-w-7xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SectionText
              title="Gerenciamento de Mesas"
              subtitle="Controle suas mesas e comandas"
            />
            <div className="group">
              <Cog
                className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
                strokeWidth={1}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Tables Grid */}
            <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg flex flex-col max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-md font-semibold">
                      Mesas
                    </div>
                    <div className="text-[#A1A1A1] text-sm font-regular">
                      Visão geral das mesas
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsOpenNewTable(true)}
                    className="text-white hover:bg-[#FF9800] cursor-pointer"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Mesa
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pb-4">
                  {tables.map((table) => (
                    <div
                      key={table.id}
                      className="bg-[#1B1B1B] p-6 rounded-lg cursor-pointer hover:bg-[#242424] transition-all ease-in-out duration-200 transform hover:scale-105"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <span className=" text-lg font-semibold text-white">
                            Mesa {table.number}
                          </span>
                          <Badge color={getStatusColor(table.status)}>
                            {getStatusText(table.status)}
                          </Badge>
                        </div>

                        {/* TODO: Melhorar Layout */}
                        {/* {table.status === "occupied" && (
                        <>
                          <div className="flex items-center gap-3 text-[#A1A1A1]">
                            <Users className="w-5 h-5" />
                            <span>{table.guests} pessoas</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#A1A1A1]">
                            <Clock className="w-5 h-5" />
                            <span>Desde {table.startTime}</span>
                          </div>
                          <div className="text-white text-lg font-semibold">
                            {table.total?.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </div>
                        </>
                      )} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Orders */}
            <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg max-h-[80vh] flex flex-col">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-md font-semibold">
                      Comandas Ativas
                    </div>
                    <div className="text-[#A1A1A1] text-sm font-regular">
                      Pedidos em andamento
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-auto">
                  <Table dense striped className="w-full">
                    <TableHead className="sticky top-0 bg-[#141414] z-10">
                      <TableRow>
                        <TableHeader>Mesa</TableHeader>
                        <TableHeader>Horário</TableHeader>
                        <TableHeader>Itens</TableHeader>
                        <TableHeader>Total</TableHeader>
                        <TableHeader>Ações</TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {activeOrders.length === 0 ? (
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            className="py-12 text-center text-[#A1A1A1]"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <ClipboardList className="w-14 h-14 " />
                              <div className="text-lg font-semibold">
                                Nenhuma comanda em andamento
                              </div>
                              <p className="text-sm text-center">
                                No momento não há pedidos ativos, por favor inicie uma nova comanda
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        activeOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="text-white">
                              Mesa {order.table}
                            </TableCell>
                            <TableCell className="text-white">
                              {order.startTime}
                            </TableCell>
                            <TableCell className="text-white">
                              {order.items.length} itens
                            </TableCell>
                            <TableCell className="text-white">
                              {order.total.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  className="text-[#FF9800] hover:text-[#FF9800] hover:bg-[#1B1B1B]"
                                >
                                  <Receipt className="w-4 h-4" />
                                </Button>
                                <Button className="text-red-500 hover:text-red-500 hover:bg-[#1B1B1B]">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Alert open={isOpenNewTable} onClose={setIsOpenNewTable}>
        <AlertTitle>Nova Mesa</AlertTitle>
        <AlertDescription>Adicionar nova mesa</AlertDescription>
        <AlertActions>
          <Button plain onClick={() => setIsOpenNewTable(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setIsOpenNewTable(false)}>Buscar</Button>
        </AlertActions>
      </Alert>
    </div>
  );
}
