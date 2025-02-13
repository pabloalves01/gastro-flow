import QuickActions from "../../components/cards/quick-actions";
import RecentSales from "../../components/cards/recent-sales";
import StatusCard from "../../components/cards/stats-card";
import CashFlow from "../../components/cards/cash-flow";
import { DollarSign, Cog, FilePlus, ClipboardList, UserPen, ScrollText } from "lucide-react";

export default function Dashboard() {

  const actions = [
    {
      icon: <FilePlus />,
      title: "Adicionar Novo Pedido",
      description: "Crie um novo pedido",
    },
    {
      icon: <ScrollText />,
      title: "Gerenciar Pedido",
      description: "Acompanhe seus pedidos",
    },
    {
      icon: <UserPen />,
      title: "Gerenciar Funcionários",
      description: "Adicione ou remova funcionários",
    },
    {
      icon: <ClipboardList />,
      title: "Configurações",
      description: "Configure sua conta",
    },
  ];

  const sales = [
    {
      image: "/path/to/avatar1.jpg",
      name: "Pablo Alves",
      description: "Descrição da venda",
      email: "cliente1@example.com",
      value: 1200.5,
      payment_id: 1,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.5,
      payment_id: 2,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.79,
      payment_id: 3,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.0,
      payment_id: 4,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.0,
      payment_id: 1,
    },
  ];

  const cashFlow = [
    {
      title: "Salário",
      date: "13 de Março, às 13h30",
      value: 2500,
      operation_id: 2,
    },
    {
      title: "Dividendos",
      date: "13 de Março, às 13h30",
      value: 3500.5,
      operation_id: 1,
    },
    {
      title: "Aluguel",
      date: "13 de Março, às 13h30",
      value: 1000,
      operation_id: 3,
    },
    {
      title: "Combustível",
      date: "13 de Março, às 13h30",
      value: 350,
      operation_id: 2,
    },
    {
      title: "Criptomoedas",
      date: "13 de Março, às 13h30",
      value: 100,
      operation_id: 1,
    },
  ];

  return (
    <div className="container max-w-7xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col py-4">
            <div className="text-white text-md font-semibold">
              Bom dia, Pablo Alves! ☀️
            </div>
            <div className="text-[#A1A1A1] text-sm font-regular">
              Como podemos ajudá-lo hoje?
            </div>
          </div>
          <div className="group">
            <Cog
              className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
              strokeWidth={1}
            />
          </div>
          {" "}
        </div>

        <QuickActions actions={actions} />

        {/* Grid dos StatusCards - 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard
            title="Total Diário"
            description="+20.1% from last day"
            value={1200.5}
            status="up"
            icon={<DollarSign />}
          />
          <StatusCard
            title="Total Semanal"
            description="+20.1% from last week"
            value={1200.5}
            status="up"
            icon={<DollarSign />}
          />
          <StatusCard
            title="Total Mensal"
            description="+20.1% from last month"
            value={1200.5}
            status="up"
            icon={<DollarSign />}
          />
          <StatusCard
            title="Total Anual"
            description="+20.1% from last year"
            value={1200.5}
            status="up"
            icon={<DollarSign />}
          />
        </div>

        {/* Grid dos Recent Sales e Gráfico - 2 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RecentSales sales={sales} />
          <CashFlow flows={cashFlow} />
        </div>
      </div>
    </div>
  );
}
