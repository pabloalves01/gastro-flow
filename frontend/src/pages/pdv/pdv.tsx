import { useState } from "react";
import QuickActions from "../../components/cards/quick-actions";
import SectionText from "../../components/text/section-text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/catalyst/table";
import { Input } from "../../components/ui/catalyst/input";
import { Button } from "../../components/ui/catalyst/button";
import { Badge } from "../../components/ui/catalyst/badge";
import { Cog, Plus, Search, Receipt, Trash2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PDV() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const actions = [
    {
      icon: <Plus />,
      title: "Novo Item",
      description: "Adicionar produto (F2)",
      href: "/pdv/novo-item",
    },
    {
      icon: <Search />,
      title: "Buscar Produto",
      description: "Pesquisar no catálogo (F3)",
      href: "/pdv/buscar",
    },

    {
      icon: <Receipt />,
      title: "Finalizar",
      description: "Concluir venda (F5)",
      href: "/pdv/finalizar",
    },
    {
      icon: <Users />,
      title: "Mesas",
      description: "Gerenciar mesas",
      href: "/pdv/mesas",
    },
  ];

  // Mock products for demonstration
  const products = [
    { id: 1, name: "X-Burger", price: 25.9, category: "Lanches", stock: 50 },
    { id: 2, name: "X-Salada", price: 27.9, category: "Lanches", stock: 45 },
    {
      id: 3,
      name: "Coca-Cola 350ml",
      price: 5.5,
      category: "Bebidas",
      stock: 100,
    },
    {
      id: 4,
      name: "Batata Frita P",
      price: 12.9,
      category: "Acompanhamentos",
      stock: 30,
    },
    {
      id: 5,
      name: "Batata Frita G",
      price: 15.9,
      category: "Acompanhamentos",
      stock: 25,
    },
    {
      id: 6,
      name: "Batata Frita GG",
      price: 18.9,
      category: "Acompanhamentos",
      stock: 20,
    },
    {
      id: 7,
      name: "Batata Frita GGG",
      price: 21.9,
      category: "Acompanhamentos",
      stock: 15,
    },
    {
      id: 8,
      name: "Batata Frita GGGG",
      price: 24.9,
      category: "Acompanhamentos",
      stock: 10,
    },
    {
      id: 9,
      name: "Batata Frita GGGGG",
      price: 27.9,
      category: "Acompanhamentos",
      stock: 5,
    },
    {
      id: 10,
      name: "Batata Frita GGGGGG",
      price: 30.9,
      category: "Acompanhamentos",
      stock: 0,
    },
    {
      id: 11,
      name: "Batata Frita GGGGGG",
      price: 33.9,
      category: "Acompanhamentos",
      stock: 0,
    },
    {
      id: 12,
      name: "Batata Frita GGGGGG",
      price: 36.9,
      category: "Acompanhamentos",
      stock: 0,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container max-w-7xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SectionText
            title="PDV - Ponto de Venda"
            subtitle="Gerencie suas vendas e produtos"
          />
          <div className="group">
            <Cog
              className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
              strokeWidth={1}
            />
          </div>
        </div>

        <QuickActions actions={actions} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg h-[600px] flex flex-col">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-md font-semibold">
                    Produtos
                  </div>
                  <div className="text-[#A1A1A1] text-sm font-regular">
                    Lista de produtos disponíveis
                  </div>
                </div>
                <div className="w-64">
                  <Input
                    type="text"
                    placeholder="Buscar produto... (F3)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-[#1B1B1B] border-[#333333] text-white"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                <Table dense striped className="w-full">
                  <TableHead className="sticky top-0 bg-[#141414] z-10">
                    <TableRow>
                      <TableHeader>Nome</TableHeader>
                      <TableHeader>Categoria</TableHeader>
                      <TableHeader>Preço</TableHeader>
                      <TableHeader>Estoque</TableHeader>
                      <TableHeader>Ações</TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="text-white">
                          {product.name}
                        </TableCell>
                        <TableCell>
                          <Badge color="orange">{product.category}</Badge>
                        </TableCell>
                        <TableCell className="text-white">
                          {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </TableCell>
                        <TableCell className="text-white">
                          {product.stock}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[#FF9800] hover:text-[#FF9800] hover:bg-[#1B1B1B]"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg h-[600px] flex flex-col">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-md font-semibold">
                    Carrinho Atual
                  </div>
                  <div className="text-[#A1A1A1] text-sm font-regular">
                    Itens da venda atual
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-[#FF9800] hover:text-[#FF9800] hover:bg-[#1B1B1B]"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="flex-1 overflow-auto">
                <Table dense striped className="w-full">
                  <TableHead className="sticky top-0 bg-[#141414] z-10">
                    <TableRow>
                      <TableHeader>Produto</TableHeader>
                      <TableHeader>Qtd</TableHeader>
                      <TableHeader>Preço Un.</TableHeader>
                      <TableHeader>Total</TableHeader>
                      <TableHeader>Ações</TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center py-8 text-[#A1A1A1]"
                        >
                          Nenhum item no carrinho
                        </TableCell>
                      </TableRow>
                    ) : (
                      cartItems.map((item) => (
                        <TableRow key={item.id}>
                          {/* Cart item rows will be added here */}
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="border-t border-[#333333] pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <div className="text-[#A1A1A1]">Total do Pedido</div>
                  <div className="text-2xl font-bold text-white">
                    {(0).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </div>

                <Button
                  className="w-full bg-[#FF9800] hover:bg-[#F57C00] text-white mt-4"
                  onClick={() => navigate("/pdv/checkout")}
                >
                  <Receipt className="w-4 h-4 mr-2" />
                  Finalizar Venda (F5)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
