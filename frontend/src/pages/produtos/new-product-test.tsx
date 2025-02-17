import { useState } from "react";
import { Tabs } from "../../components/custom/tabs";
import { Field, Label, Description } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Select } from "../../components/ui/catalyst/select";
import { Button } from "../../components/ui/catalyst/button";
import SectionText from "../../components/text/section-text";

export default function NewProduct() {
    const [activeTab, setActiveTab] = useState("gerais");

    return (
        <div>
            <SectionText title="Novo Produto" subtitle="Adicione um novo produto ao seu comércio." />

            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tab value="gerais">Dados Gerais</Tab>
                <Tab value="dimensoes">Dimensões e Peso</Tab>
                <Tab value="estoque">Estoque</Tab>
            </Tabs>

            {/* DADOS GERAIS */}
            {activeTab === "gerais" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                    <Field>
                        <Label>Nome do Produto</Label>
                        <Description>Nome que será exibido no sistema.</Description>
                        <Input name="produto_nome" placeholder="Digite o nome do produto..." />
                    </Field>

                    <Field>
                        <Label>Descrição</Label>
                        <Description>Detalhes sobre o produto.</Description>
                        <Input name="produto_descricao" placeholder="Digite uma descrição..." />
                    </Field>

                    <Field>
                        <Label>Código SKU</Label>
                        <Description>Identificação única do produto.</Description>
                        <Input name="produto_sku" placeholder="Ex: SKU123456" />
                    </Field>

                    <Field>
                        <Label>Origem ICMS</Label>
                        <Description>Selecione a origem fiscal do produto.</Description>
                        <Select name="origem_icms">
                            <option value="0">Nacional</option>
                            <option value="1">Importado</option>
                        </Select>
                    </Field>

                    <Field>
                        <Label>NCM</Label>
                        <Description>Nomenclatura Comum do Mercosul.</Description>
                        <Input name="ncm" placeholder="Ex: 1234.56.78" />
                    </Field>

                    <Field>
                        <Label>GTIN/EAN</Label>
                        <Description>Código de barras do produto.</Description>
                        <Input name="gtin_ean" placeholder="Digite o código GTIN/EAN" />
                    </Field>

                    <Field>
                        <Label>Código CEST</Label>
                        <Description>Código Especificador da Substituição Tributária.</Description>
                        <Input name="codigo_cest" placeholder="Digite o código CEST" />
                    </Field>
                </div>
            )}

            {/* DIMENSÕES E PESO */}
            {activeTab === "dimensoes" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                    <Field>
                        <Label>Peso Líquido (kg)</Label>
                        <Description>Peso do produto sem embalagem.</Description>
                        <Input name="peso_liquido" type="number" placeholder="0.00" />
                    </Field>

                    <Field>
                        <Label>Peso Bruto (kg)</Label>
                        <Description>Peso total do produto com embalagem.</Description>
                        <Input name="peso_bruto" type="number" placeholder="0.00" />
                    </Field>

                    <Field>
                        <Label>Largura (cm)</Label>
                        <Description>Medida da largura do produto.</Description>
                        <Input name="largura" type="number" placeholder="0" />
                    </Field>

                    <Field>
                        <Label>Altura (cm)</Label>
                        <Description>Medida da altura do produto.</Description>
                        <Input name="altura" type="number" placeholder="0" />
                    </Field>

                    <Field>
                        <Label>Comprimento (cm)</Label>
                        <Description>Medida do comprimento do produto.</Description>
                        <Input name="comprimento" type="number" placeholder="0" />
                    </Field>

                    <Field>
                        <Label>Tipo de Embalagem</Label>
                        <Description>Forma como o produto será embalado.</Description>
                        <Input name="tipo_embalagem" placeholder="Ex: Caixa, Plástico..." />
                    </Field>
                </div>
            )}

            {/* ESTOQUE */}
            {activeTab === "estoque" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                    <Field>
                        <Label>Controlar Estoque</Label>
                        <Description>Habilita o controle de estoque para o produto.</Description>
                        <Select name="controlar_estoque">
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </Select>
                    </Field>

                    <Field>
                        <Label>Estoque Inicial</Label>
                        <Description>Quantidade disponível no início.</Description>
                        <Input name="estoque_inicial" type="number" placeholder="0" />
                    </Field>

                    <Field>
                        <Label>Estoque Mínimo</Label>
                        <Description>Quantidade mínima antes de alertar reposição.</Description>
                        <Input name="estoque_minimo" type="number" placeholder="0" />
                    </Field>

                    <Field>
                        <Label>Estoque Máximo</Label>
                        <Description>Quantidade máxima a ser mantida.</Description>
                        <Input name="estoque_maximo" type="number" placeholder="0" />
                    </Field>

                    <Field>
                        <Label>Localização</Label>
                        <Description>Onde o produto está armazenado.</Description>
                        <Input name="localizacao" placeholder="Digite a localização..." />
                    </Field>
                </div>
            )}

            {/* BOTÃO DE SALVAR */}
            <div className="flex justify-end mt-6">
                <Button>Salvar Produto</Button>
            </div>
        </div>
    );
}