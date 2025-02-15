import { useState } from "react";
import SectionText from "../../components/text/section-text";
import { Button } from "../../components/ui/catalyst/button";
import { Badge } from "../../components/ui/catalyst/badge";
import { Cog, Plus, Clock, Users, Receipt, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/catalyst/table";

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
  const [tables, setTables] = useState<TableItem[]>([
    { id: 1, number: 1, status: "available" },
    {
      id: 2,
      number: 2,
      status: "occupied",
      guests: 4,
      startTime: "14:30",
      total: 156.8,
    },
    { id: 3, number: 3, status: "reserved" },
    { id: 4, number: 4, status: "available" },
    {
      id: 5,
      number: 5,
      status: "occupied",
      guests: 2,
      startTime: "15:45",
      total: 89.9,
    },
    { id: 6, number: 6, status: "available" },
    {
      id: 7,
      number: 7,
      status: "occupied",
      guests: 6,
      startTime: "13:15",
      total: 345.6,
    },
    { id: 8, number: 8, status: "available" },
  ]);

  const [activeOrders, setActiveOrders] = useState<Order[]>([
    {
      id: 1,
      table: 2,
      items: [
        { id: 1, name: "X-Burger", quantity: 2, price: 25.9 },
        { id: 2, name: "Coca-Cola 350ml", quantity: 2, price: 5.5 },
      ],
      total: 62.8,
      startTime: "14:30",
    },
    {
      id: 2,
      table: 5,
      items: [
        { id: 3, name: "X-Salada", quantity: 1, price: 27.9 },
        { id: 4, name: "Água Mineral", quantity: 1, price: 4.0 },
      ],
      total: 31.9,
      startTime: "15:45",
    },
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

  return (
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
                  <div className="text-white text-md font-semibold">Mesas</div>
                  <div className="text-[#A1A1A1] text-sm font-regular">
                    Visão geral das mesas
                  </div>
                </div>
                <Button className="text-white hover:bg-[#FF9800] hover:bg-[#1B1B1B] cursor-pointer">
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
                        <span className="text-white text-lg font-semibold">
                          Mesa {table.number}
                        </span>
                        <Badge color={getStatusColor(table.status)}>
                          {getStatusText(table.status)}
                        </Badge>
                      </div>
                      {table.status === "occupied" && (
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
                      )}
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
                    {activeOrders.map((order) => (
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
                              size="sm"
                              variant="ghost"
                              className="text-[#FF9800] hover:text-[#FF9800] hover:bg-[#1B1B1B]"
                            >
                              <Receipt className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-red-500 hover:text-red-500 hover:bg-[#1B1B1B]"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
