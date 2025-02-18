import { useState } from "react";
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
import {
  Receipt,
  CreditCard,
  Wallet,
  QrCode,
  DollarSign,
  Users,
  Calculator,
  PercentSquare,
  MinusCircle,
  PlusCircle,
  ArrowLeft,
  Check,
} from "lucide-react";

export default function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [splitPayment, setSplitPayment] = useState<boolean>(false);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [discount, setDiscount] = useState<number>(0);
  const [additionalCharge, setAdditionalCharge] = useState<number>(0);

  const cartItems = [
    { id: 1, name: "X-Burger", quantity: 2, price: 25.9, total: 51.8 },
    { id: 2, name: "Coca-Cola 350ml", quantity: 2, price: 5.5, total: 11.0 },
    { id: 3, name: "Batata Frita P", quantity: 1, price: 12.9, total: 12.9 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const discountAmount = (subtotal * discount) / 100;
  const totalWithDiscount = subtotal - discountAmount + additionalCharge;
  const amountPerPerson = totalWithDiscount / numberOfPeople;

  const paymentMethods = [
    { id: "credit", icon: <CreditCard />, name: "Cartão de Crédito" },
    { id: "debit", icon: <Wallet />, name: "Cartão de Débito" },
    { id: "pix", icon: <QrCode />, name: "PIX" },
    { id: "cash", icon: <DollarSign />, name: "Dinheiro" },
  ];

  return (
    <div className="container max-w-7xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SectionText
            title="Checkout - Finalizar Venda"
            subtitle="Processe o pagamento e finalize a venda"
          />
          <Button
            className="text-white hover:text-zinc-500"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Order Summary */}
          <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg h-[600px] flex flex-col">
            <div className="flex flex-col gap-4 h-full">
              <div>
                <div className="text-white text-md font-semibold">
                  Resumo do Pedido
                </div>
                <div className="text-[#A1A1A1] text-sm font-regular">
                  Confira os itens e valores
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                <Table dense striped className="w-full">
                  <TableHead className="sticky top-0 bg-[#141414] z-10">
                    <TableRow>
                      <TableHeader>Produto</TableHeader>
                      <TableHeader>Qtd</TableHeader>
                      <TableHeader>Preço Un.</TableHeader>
                      <TableHeader>Total</TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="text-white">
                          {item.name}
                        </TableCell>
                        <TableCell className="text-white">
                          {item.quantity}
                        </TableCell>
                        <TableCell className="text-white">
                          {item.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </TableCell>
                        <TableCell className="text-white">
                          {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="border-t border-[#333333] pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-[#A1A1A1]">Subtotal</div>
                  <div className="text-white">
                    {subtotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center">
                    <div className="text-[#A1A1A1]">Desconto ({discount}%)</div>
                    <div className="text-[#FF9800]">
                      -
                      {discountAmount.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>
                  </div>
                )}
                {additionalCharge > 0 && (
                  <div className="flex justify-between items-center">
                    <div className="text-[#A1A1A1]">Taxa Adicional</div>
                    <div className="text-white">
                      {additionalCharge.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2 border-t border-[#333333]">
                  <div className="text-white font-semibold">Total</div>
                  <div className="text-2xl font-bold text-white">
                    {totalWithDiscount.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </div>
                {splitPayment && (
                  <div className="flex justify-between items-center pt-2">
                    <div className="text-[#A1A1A1]">
                      Valor por pessoa ({numberOfPeople})
                    </div>
                    <div className="text-white font-semibold">
                      {amountPerPerson.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Payment Options */}
          <div className="bg-[#141414] border border-[#333333] p-4 rounded-lg h-[600px] flex flex-col">
            <div className="flex flex-col gap-4 h-full">
              <div>
                <div className="text-white text-md font-semibold">
                  Forma de Pagamento
                </div>
                <div className="text-[#A1A1A1] text-sm font-regular">
                  Escolha como deseja pagar
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.map((method) => (
                  <Button
                    key={method.id}
                    className={`h-20 ${selectedPaymentMethod === method.id
                      ? "bg-[#FF9800] hover:bg-[#F57C00] text-white"
                      : "text-white hover:bg-[#1B1B1B]"
                      }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {method.icon}
                      <span>{method.name}</span>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="border-t border-[#333333] pt-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-white text-md font-semibold mb-2">
                      Opções Adicionais
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className={`flex-1 ${splitPayment
                          ? "bg-[#FF9800] hover:bg-[#F57C00] text-white"
                          : "text-white hover:bg-[#1B1B1B]"
                          }`}
                        onClick={() => setSplitPayment(!splitPayment)}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Dividir Conta
                      </Button>
                      <Button
                        className="flex-1 text-white hover:bg-[#1B1B1B]"
                        onClick={() => setDiscount(0)}
                      >
                        <PercentSquare className="w-4 h-4 mr-2" />
                        Desconto
                      </Button>
                      <Button
                        className="flex-1 text-white hover:bg-[#1B1B1B]"
                        onClick={() => setAdditionalCharge(0)}
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Taxa
                      </Button>
                    </div>
                  </div>

                  {splitPayment && (
                    <div className="flex items-center gap-2">
                      <Button
                        className="text-white"
                        onClick={() =>
                          setNumberOfPeople(Math.max(1, numberOfPeople - 1))
                        }
                      >
                        <MinusCircle />
                      </Button>
                      <Input
                        type="number"
                        min="1"
                        value={numberOfPeople}
                        onChange={(e) =>
                          setNumberOfPeople(
                            Math.max(1, parseInt(e.target.value))
                          )
                        }
                        className="bg-[#1B1B1B] border-[#333333] text-white text-center"
                      />
                      <Button
                        className="text-white"
                        onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                      >
                        <PlusCircle />
                      </Button>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="text-[#A1A1A1] text-sm mb-1 block">
                        Desconto (%)
                      </label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={discount}
                        onChange={(e) =>
                          setDiscount(
                            Math.min(
                              100,
                              Math.max(0, parseFloat(e.target.value))
                            )
                          )
                        }
                        className="bg-[#1B1B1B] border-[#333333] text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[#A1A1A1] text-sm mb-1 block">
                        Taxa Adicional (R$)
                      </label>
                      <Input
                        type="number"
                        min="0"
                        value={additionalCharge}
                        onChange={(e) =>
                          setAdditionalCharge(
                            Math.max(0, parseFloat(e.target.value))
                          )
                        }
                        className="bg-[#1B1B1B] border-[#333333] text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  className="w-full bg-[#FF9800] hover:bg-[#F57C00] text-white"
                  disabled={!selectedPaymentMethod}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Confirmar Pagamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
