import { useState } from "react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import Tabs from "../../components/custom/tabs/tabs";
import SectionText from "../../components/text/section-text";
import { Description, Field, Label } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Select } from "../../components/ui/catalyst/select";
import { Divider } from "../../components/ui/catalyst/divider";

export default function NewOrder() {

    const productTabs = [
        { name: "informações básicas", href: "#" },
        { name: "dados complementares", href: "#" },
        { name: "ficha técnica", href: "#" },
        { name: "custos", href: "#" },
        { name: "outros", href: "#" },
    ];
    const [activeTab, setActiveTab] = useState("dados gerais");

    const breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Gerenciar Pedidos", href: "/pedido/gerenciar" },
        { label: "Novo Pedido", href: "/pedido/novo" },
    ];

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
            <SectionText className="mb-4" title="Novo Pedido" />
            <Tabs
                tabs={productTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className="mt-4">

                {activeTab === "informações básicas" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Label>Pedido Nº</Label>
                            <Description>Número do pedido em seu estabelecimento.</Description>
                            <Input value={"#0002423"} disabled name="numero_pedido" />
                        </Field>
                        <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Label>Data e Hora</Label>
                            <Description>Registre o momento em que o pedido foi feito.</Description>
                            <Input value={"18/02/2025 19:45"} name="data_pedido" />
                        </Field>
                        <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Label>Status do Pedido</Label>
                            <Description>Registre o status que o pedido se encontra</Description>
                            <Select name="status" defaultValue="">
                                <option value="" disabled hidden>
                                    Selecione o status do pedido.
                                </option>
                                <option value="1">Pendente</option>
                                <option value="2">Em Andamento</option>
                                <option value="3">Finalizado</option>
                            </Select>
                        </Field>
                        <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Label>Nome do Cliente</Label>
                            <Description>Registre o nome do seu cliente.</Description>
                            <Input name="nome_cliente" placeholder="Digite o nome do cliente." />
                        </Field>
                        <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Label>Telefone</Label>
                            <Description>Registre o telefone do seu cliente.</Description>
                            <Input type="tel" name="telefone_cliente" placeholder="Digite o telefone." />
                        </Field>
                        <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Label>Mesa ou Comanda</Label>
                            <Description>Selecione em qual mesa ou comanda seu cliente está.</Description>
                            <Select name="status" defaultValue="">
                                <option value="" disabled hidden>
                                    Selecione a mesa ou comanda.
                                </option>
                                <option value="1">Mesa 1</option>
                                <option value="2">Mesa 1</option>
                                <option value="3">Mesa 3</option>
                            </Select>
                        </Field>
                    </div>



                )}
            </div>
            <Divider className="mt-12 mb-7" />



            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <Label>Pedido Nº</Label>
                    <Description>Número do pedido em seu estabelecimento.</Description>
                    <Input name="NCM" placeholder="(Exemplo: 1001.10.10)" />
                </Field>

            </div> */}
        </div>
    );
}