import RecentSales from "../../components/cards/recent-sales";
import StatusCard from "../../components/cards/stats-card";
import { DollarSign } from "lucide-react";

export default function Dashboard() {

    const sales = [
        {
            image: "/path/to/avatar1.jpg",
            name: "Pablo Alves",
            description: "Descrição da venda",
            email: "cliente1@example.com",
            value: 1200.50,
        },
        {
            image: "/path/to/avatar2.jpg",
            name: "Paulo Sérgio",
            description: "Descrição da venda",
            email: "cliente2@example.com",
            value: 950.00,
        },
        {
            image: "/path/to/avatar2.jpg",
            name: "Paulo Sérgio",
            description: "Descrição da venda",
            email: "cliente2@example.com",
            value: 950.00,
        },
        {
            image: "/path/to/avatar2.jpg",
            name: "Paulo Sérgio",
            description: "Descrição da venda",
            email: "cliente2@example.com",
            value: 950.00,
        },
        {
            image: "/path/to/avatar2.jpg",
            name: "Paulo Sérgio",
            description: "Descrição da venda",
            email: "cliente2@example.com",
            value: 950.00,
        },
    ];

    return (
        <div className="space-y-4">
            {/* Grid dos StatusCards - 4 colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatusCard title="Total Diário" description="+20.1% from last day" value={1200.5} status="up" icon={<DollarSign />} />
                <StatusCard title="Total Semanal" description="+20.1% from last week" value={1200.5} status="up" icon={<DollarSign />} />
                <StatusCard title="Total Mensal" description="+20.1% from last month" value={1200.5} status="up" icon={<DollarSign />} />
                <StatusCard title="Total Anual" description="+20.1% from last year" value={1200.5} status="up" icon={<DollarSign />} />
            </div>

            {/* Grid dos Recent Sales e Gráfico - 2 colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RecentSales sales={sales} />
                <RecentSales sales={sales} />

            </div>
        </div>
    );
}