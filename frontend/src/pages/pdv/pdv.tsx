import { useEffect, useState, useRef } from "react";
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
import { Cog, Plus, Search, Receipt, Trash2, Users, Barcode } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PDV() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; category: string; stock: number; quantity: number }[]>([]);
  const totalCartValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  // Filtrar produtos
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Adicionar produtos no carrinho
  const addToCart = (product: { id: number; name: string; price: number; category: string; stock: number }) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item // Se ja tem o produto no carrinho, aumenta a quantidade, se nao adiciona o produto
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  // Limpa TODOS os items do carrinho

  const clearCart = () => {
    setCartItems([]);
  };

  // Atalhos teclado para o PDV
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { // Vai pra cima nos produtos
        setSelectedIndex((prev) => {
          if (prev === null) return 0;
          return Math.min(prev + 1, filteredProducts.length - 1);
        });
      } else if (e.key === "ArrowUp") { // Vai pra baixo nos produtos
        setSelectedIndex((prev) => {
          if (filteredProducts.length === 0) return prev;
          if (prev === null) return filteredProducts.length - 1;
          return Math.max(prev - 1, 0);
        });
      } else if (e.key === "F5") { // Finaliza a venda
        e.preventDefault();
        navigate("/pdv/checkout");
      } else if (e.key === "F3") { // Abre o Input de busca de produtos
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "Enter" && selectedIndex !== null) { // Adiciona o produto selecionado produto no carrinho
        addToCart(filteredProducts[selectedIndex]);
      } else if (e.key === "Backspace") {
        setCartItems((prev) => {
          if (prev.length === 0) return prev; // Evita erro se o carrinho estiver vazio

          if (typeof selectedIndex === "number" && selectedIndex >= 0 && selectedIndex < prev.length) {
            if (prev[selectedIndex].quantity > 1) {
              return prev.map((item, index) =>
                index === selectedIndex ? { ...item, quantity: item.quantity - 1 } : item
              );
            } else {
              return prev.filter((_, index) => index !== selectedIndex);
            }
          }
          return prev.slice(0, -1); // Remove o último item se nenhum estiver selecionado
        });
      }
      else if (e.key === "Backspace" && e.ctrlKey) {
        e.preventDefault();
        clearCart();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [filteredProducts, selectedIndex]);

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
          <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg flex flex-col">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between ">
                <div>
                  <div className="text-white text-md font-semibold">
                    Produtos
                  </div>
                  <div className="text-[#A1A1A1] text-sm font-regular">
                    Lista de produtos disponíveis
                  </div>
                </div>
                <Button className="cursor-pointer" onClick={clearCart}>
                  <Barcode className=" w-4 h-4" /> Código de Barras (F12)
                </Button>

              </div>
              <div className="w-full">
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Digite o nome do produto.. (F3)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-[#1B1B1B] border-[#333333] text-white"
                />
              </div>
              <div className="flex-1 overflow-auto">
                <Table dense className="w-full">
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
                    {filteredProducts.map((product, index) => (
                      <TableRow key={product.id} className={selectedIndex === index ? "bg-[#FF9800] text-white" : ""}>
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

          <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg  flex flex-col">
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
                  className="text-[#FF9800] hover:text-[#FF9800] hover:bg-[#1B1B1B]"
                  onClick={clearCart}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
              </div>

              <div className="flex-1 overflow-auto">
                <Table dense className="w-full">
                  <TableHead className="sticky top-0 bg-[#141414] z-10">
                    <TableRow>
                      <TableHeader>Produto</TableHeader>
                      <TableHeader>Quantidade</TableHeader>
                      <TableHeader>Preço Un.</TableHeader>
                      <TableHeader>Total</TableHeader>
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
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.price}</TableCell>
                          <TableCell>{(item.price * item.quantity).toFixed(2)}</TableCell>
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
                    {totalCartValue.toFixed(2)}
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
