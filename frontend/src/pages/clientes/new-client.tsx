import { useState } from "react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb"
import Tabs from "../../components/custom/tabs/tabs"
import SectionText from "../../components/text/section-text"
import { Description, Field, Label } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Select } from "../../components/ui/catalyst/select";
import { Divider } from "../../components/ui/catalyst/divider";
import { Checkbox, CheckboxField } from "../../components/ui/catalyst/checkbox";
import { Button } from "../../components/ui/catalyst/button";

export default function NewCliente() {
    const [activeTab, setActiveTab] = useState("dados gerais");
    const [mostrarEnderecoCobranca, setMostrarEnderecoCobranca] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setMostrarEnderecoCobranca(checked);
    };

    const BreadcrumbItems = [
        { label: "Início", href: "/home" },
        { label: "Cadastros", href: "/cadastros" },
        { label: "Clientes", href: "/cliente/novo" },
    ]
    const clientTabs = [
        { name: "dados gerais", href: "#" },
        { name: "dados complementares", href: "#" },
        { name: "anexos", href: "#" },
        { name: "observações", href: "#" },
    ];

    return (
        <div>
            <Breadcrumb items={BreadcrumbItems} />
            <SectionText className="mb-4" title="Novo Cliente" />
            <Tabs
                tabs={clientTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <div className="mt-4">
                {activeTab === 'dados gerais' && (
                    <div>
                        <div className="pb-4">

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                                <Label>Nome</Label>
                                <Description>
                                    Nome principal para exibição e identificação.
                                </Description>
                                <Input
                                    name="name"
                                    placeholder="Nome ou Razão Social do contato"
                                    autoComplete="off"
                                />
                            </Field>
                            <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                <Label>Fantasia</Label>
                                <Description>
                                    Nome fantasia para exibição e identificação.
                                </Description>
                                <Input
                                    name="fantasia"
                                    autoComplete="off"
                                />
                            </Field>
                            <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                <Label>Código</Label>
                                <Description>
                                    Código interno para referência.
                                </Description>
                                <Input
                                    name="contact_code"
                                    type="number"
                                    placeholder="Opcional"
                                    autoComplete="off"
                                />
                            </Field>
                            <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                                <Label>Tipo de Pessoa</Label>
                                <Description>
                                    Tipo de pessoa física ou jurídica.
                                </Description>
                                <Select name="tipo_pessoa" defaultValue="">
                                    <option value="" disabled hidden>
                                        Selecione um tipo
                                    </option>
                                    <option value="1">Pessoa Física</option>
                                    <option value="2">Pessoa Júridica</option>
                                </Select>
                            </Field>
                            <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                <Label>CNPJ</Label>
                                <Description>
                                    CNPJ da pessoa jurídica.
                                </Description>
                                <Input
                                    name="cnpj"
                                    placeholder="Opcional"
                                    type="number"
                                    autoComplete="off"
                                />
                            </Field>
                            <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                                <Label>Contribuinte</Label>
                                <Description>
                                    Tipo de pessoa física ou jurídica.
                                </Description>
                                <Select name="contribuinte" defaultValue="">
                                    <option value="" disabled hidden>
                                        Selecione um tipo de contribuinte
                                    </option>
                                    <option value="1">0 - Não infomado</option>
                                    <option value="2">1 - Contribuinte </option>
                                    <option value="2">2 - Não Contribuinte</option>
                                </Select>
                            </Field>
                            <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                <Label>Inscrição Estadual</Label>
                                <Description>
                                    IE do cliente ou fornecedor
                                </Description>
                                <Input
                                    name="inscricao_estadual"
                                    type="number"
                                    autoComplete="off"
                                />
                            </Field>
                            <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                <Label>Inscrição Municipal</Label>
                                <Description>
                                    IM do cliente ou fornecedor
                                </Description>
                                <Input
                                    name="inscricao_municipal"
                                    type="number"
                                    autoComplete="off"
                                />
                            </Field>
                            <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                                <Label>Tipo de Contato</Label>
                                <Description>
                                    Selecione o tipo de contato
                                </Description>
                                <Select name="contact_type" defaultValue="">
                                    <option value="" disabled hidden>
                                        Selecione um tipo de contato
                                    </option>
                                    <option value="1">Cliente</option>
                                    <option value="2">Fornecedor</option>
                                    <option value="2">Cliente e Fornecedor</option>
                                </Select>
                            </Field>


                        </div>
                        <Divider className="mt-12 mb-7" />
                        <div>
                            <SectionText
                                className="py-4"
                                title="Endereço"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>CEP</Label>
                                    <Description>
                                        CEP do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="cep"
                                        type="number"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                                    <Label>Município</Label>
                                    <Description>
                                        CEP do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="municipio"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>UF</Label>
                                    <Description>
                                        UF do cliente ou fornecedor
                                    </Description>
                                    <Select name="estado" defaultValue="">
                                        <option value="" disabled hidden>
                                            Selecione a UF
                                        </option>
                                        <option value="1">Estado 1</option>
                                        <option value="2">Estado 2</option>
                                        <option value="2">Estado 3</option>
                                    </Select>
                                </Field>
                                <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                                    <Label>Endereço</Label>
                                    <Description>
                                        Endereço do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="endereco"
                                        autoComplete="off"

                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>Bairro</Label>
                                    <Description>
                                        Bairro do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="bairro"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>Número</Label>
                                    <Description>
                                        Número do estabelecimento
                                    </Description>
                                    <Input
                                        name="numero"
                                        type="number"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                                    <Label>Complemento</Label>
                                    <Description>
                                        Complemento do endereço
                                    </Description>
                                    <Input
                                        name="complemento"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                                    <CheckboxField className="mt-6">
                                        <Checkbox
                                            name="check_endereco_cobranca"
                                            checked={mostrarEnderecoCobranca}
                                            onChange={handleCheckboxChange}
                                        />
                                        <Label className="font-semibold">Possui endereço de cobrança diferente do endereço principal.</Label>
                                    </CheckboxField>
                                </Field>
                                {mostrarEnderecoCobranca && (
                                    <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                                        <Label>Endereoço de Cobrança</Label>
                                        <Description>
                                            Endereço de cobrança do cliente ou fornecedor
                                        </Description>
                                        <Input
                                            name="enedereco_cobranca"
                                            autoComplete="off"
                                        />
                                    </Field>
                                )}
                            </div>
                        </div>
                        <Divider className="mt-12 mb-7" />
                        <div>
                            <SectionText
                                className="py-4"
                                title="Contato"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>Telefone</Label>
                                    <Description>
                                        Telefone do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="telefone"
                                        type="number"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>Telefone Adicional</Label>
                                    <Description>
                                        Telefone Adicional do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="telefone_adicional"
                                        type="number"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>Celular</Label>
                                    <Description>
                                        Celular do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="celular"
                                        type="number"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field></Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>Website</Label>
                                    <Description>
                                        Website do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="website"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                                    <Label>E-mail</Label>
                                    <Description>
                                        E-mail do cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="email"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                                    <Label>E-mail para envio da NFE</Label>
                                    <Description>
                                        E-mail para enviar a NFE
                                    </Description>
                                    <Input
                                        name="email"
                                        autoComplete="off"
                                    />
                                </Field>
                                <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                                    <Label>Observações do Contato</Label>
                                    <Description>
                                        Observações sobre o cliente ou fornecedor
                                    </Description>
                                    <Input
                                        name="email"
                                        autoComplete="off"
                                    />
                                </Field>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Divider className="mt-12 mb-8" />

            <div className="flex justify-end mt-4">
                <Button className="hover:bg-[#FF9800] cursor-pointer">
                    Salvar Informações
                </Button>
            </div>
        </div >
    )
}