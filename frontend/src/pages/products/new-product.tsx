import { useState } from "react";
import Tabs from "../../components/custom/tabs/tabs";
import SectionText from "../../components/text/section-text";
import { Select } from "../../components/ui/catalyst/select";
import { Description, Field, Fieldset, Label } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Checkbox, CheckboxField, CheckboxGroup } from "../../components/ui/catalyst/checkbox";
import { Box, Image, Package, Plus, Ruler, Tags } from "lucide-react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import { Divider } from "../../components/ui/catalyst/divider";
import { Button } from "../../components/ui/catalyst/button";
import { Textarea } from "../../components/ui/catalyst/textarea";
const productTabs = [
  { name: "dados gerais", href: "#" },
  { name: "dados complementares", href: "#" },
  { name: "ficha técnica", href: "#" },
  { name: "custos", href: "#" },
  { name: "outros", href: "#" },
];

function ProductForm() {
  const [activeTab, setActiveTab] = useState("dados gerais");


  return (
    <div>
      <Breadcrumb items={[
        { label: "Início", href: "/home" },
        { label: "Cadastros", href: "/cadastros" },
        { label: "Produtos", href: "/produto/novo" },
      ]} />
      <SectionText className="mb-4" title="Novo Produto" />
      <Tabs
        tabs={productTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-4">
        {activeTab === "dados gerais" && (
          <div>
            <div className="pb-4">
              <SectionText
                className="py-4"
                title="Dados Gerais do Produto"
                subtitle="Preencha as informações para garantir um controle preciso do produto."
                icon={<Package />}

              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                <Label>Nome do Produto</Label>
                <Description>
                  Nome principal para exibição e identificação.
                </Description>
                <Input
                  name="product_name"
                  placeholder="Digite o nome do produto"
                />
              </Field>
              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Código SKU</Label>
                <Description>
                  Necessário para emissão de notas fiscais.
                </Description>
                <Input
                  name="sku"
                  placeholder="Código SKU ou referência (opcional)."
                />
              </Field>

              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Origem</Label>
                <Description>Origem do produto conforme ICMS</Description>
                <Select name="ncm" defaultValue="">
                  <option value="" disabled hidden>
                    ICMS
                  </option>
                  <option value="1">NCM 1</option>
                  <option value="2">NCM 2</option>
                  <option value="3">NCM 3</option>
                  <option value="4">NCM 4</option>
                </Select>
              </Field>

              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Tipo</Label>
                <Description>Selecione o tipo do produto.</Description>
                <Select name="ncm" defaultValue="">
                  <option value="" disabled hidden>
                    Selecione o Tipo
                  </option>
                  <option value="1">Tipo 1</option>
                  <option value="2">Tipo 2</option>
                  <option value="3">Tipo 3</option>
                </Select>
              </Field>

              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>NCM</Label>
                <Description>Nomenclatura comum do Mercosul.</Description>
                <Input name="NCM" placeholder="(Exemplo: 1001.10.10)" />
              </Field>

              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>GTIN/EAN</Label>
                <Description>
                  Código de barras para identificação global.
                </Description>
                <Input name="gtin" placeholder="Digite o código GTIN/EAN" />
              </Field>

              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Código CEST</Label>
                <Description>
                  Código Específico de Substituição Tributária.
                </Description>
                <Select name="ncm" defaultValue="">
                  <option value="" disabled hidden>
                    Selecione um NCM
                  </option>
                  <option value="1">NCM 1</option>
                  <option value="2">NCM 2</option>
                  <option value="3">NCM 3</option>
                  <option value="4">NCM 4</option>
                </Select>
              </Field>
              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Preço de Venda</Label>
                <Description>
                  Preço de venda do produto para o cliente final.
                </Description>
                <Input name="preco_venda" placeholder="0,00" type="number" />
              </Field>
              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Preço Promocional</Label>
                <Description>
                  Preço promocional do produto para o cliente final.
                </Description>
                <Input name="preco_venda" placeholder="0,00" />
              </Field>
              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Unidade</Label>
                <Description>
                  Selecione a unidade de medida do produto.
                </Description>
                <Input name="unidade" placeholder="(Exemplo: Cx, Kg, ...)" />
              </Field>
            </div>

            <div>
              <Divider className="mt-12 mb-7" />
              <SectionText
                className="py-4"
                title="Dimensões e Peso"
                subtitle="Preencha as informações de dimensões e peso do produto."
                icon={<Ruler />}
              />

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Field className="col-span-1">
                  <Label>Peso Líquido</Label>
                  <Input
                    name="peso_liquido"
                    type="number"
                    placeholder="Em Kg"
                  />
                  <Description>Digite o peso líquido do produto.</Description>
                </Field>
                <Field className="col-span-1">
                  <Label>Peso Bruto</Label>
                  <Input name="peso_bruto" type="number" placeholder="Em Kg" />
                  <Description>Digite o peso bruto do produto.</Description>
                </Field>
                <Field className="col-span-1">
                  <Label>Número de Volumes</Label>
                  <Input
                    name="numero_volumes"
                    type="number"
                    placeholder="Quantidade de volumes"
                  />
                  <Description>
                    Digite o número de volumes do produto.
                  </Description>
                </Field>
                <Field className="col-span-1">
                  <Label>Largura</Label>
                  <Input name="largura" type="number" placeholder="0,00" />
                </Field>
                <Field className="col-span-1">
                  <Label>Altura</Label>
                  <Input name="altura" type="number" placeholder="0,00" />
                </Field>
                <Field className="col-span-1">
                  <Label>Comprimento </Label>
                  <Input name="comprimento" type="number" placeholder="0,00" />
                </Field>
              </div>
            </div>
            <div>
              <Divider className="mt-12 mb-7" />
              <SectionText
                className="py-4"
                title="Estoque"
                subtitle="Preencha as informações de estocagem do produto."
                icon={<Box />}
              />

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <Field className="col-span-1">
                  <Label>Estoque Total</Label>
                  <Description>Digite o estoque total.</Description>
                  <Input
                    name="estoque_total"
                    placeholder="Digite o estoque total"
                  />
                </Field>
                <Field className="col-span-1">
                  <Label>Estoque Inicial</Label>
                  <Description>Digite o estoque inicial desejado.</Description>
                  <Input
                    name="estoque_inicial"
                    placeholder="Digite o estoque inicial"
                  />
                </Field>
                <Field className="col-span-1">
                  <Label>Estoque Mínimo</Label>
                  <Description>
                    Digite o mínimo de estoque desejado.
                  </Description>
                  <Input
                    name="estoque_minimo"
                    placeholder="Digite o estoque mínimo"
                  />
                </Field>
                <Fieldset>

                  <CheckboxGroup>
                    <CheckboxField>
                      <Checkbox
                        name="discoverability"
                        value="show_on_events_page"
                        defaultChecked
                      />
                      <Label>Estoque Infinito</Label>
                      <Description>
                        Habilite para manter o estoque sem limite de produtos.
                      </Description>
                    </CheckboxField>
                  </CheckboxGroup>
                </Fieldset>

              </div>
            </div>
          </div>
        )}
      </div>
      {/* DADOS COMPLEMENTARES */}
      <div className="mt-4">
        {activeTab === "dados complementares" && (
          <div>
            <div className="pb-4">
              <SectionText
                className="py-4"
                title="Dados Complementares"
                subtitle="Preencha as informações para garantir um controle preciso do produto."
                icon={<Package />}

              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Field className="col-span-full w-full">
                <Label>Categoria</Label>
                <Description>Identifique a Categoria do Produto.</Description>
                <Input
                  name="product_name"
                  placeholder="Digite a categoria do produto"
                  className="w-full"
                />
              </Field>

              <Field className="col-span-full w-full">
                <Label>Descrição</Label>
                <Description className="mb-4">Uma breve descrição com informações sobre o produto.</Description>
                <Textarea
                  className=""
                  name="name"
                  placeholder="Digite a descrição do produto"
                />
              </Field>

            </div>
            <div>
              <Divider className="mt-12 mb-7" />
              <SectionText
                className="py-4"
                title="Imagem e Anexos"
                subtitle="Preencha as informações de dimensões e peso do produto."
                icon={<Image />}
              />
              <div className="mt-4">
                <div className="bg-white/5 hover:bg-zinc-800 py-10 rounded-lg flex justify-center items-center gap-4 text-white font-semibold cursor-pointer border border-zinc-400/10">
                  <div className="flex items-center justify-center rounded-full bg-zinc-600 w-10 h-10 ">
                    <Plus />
                  </div>
                  <div>Adicionar Imagem ao Produto</div>
                </div>
              </div>
            </div>
            <hr className="border-[#333333] border-opacity-50 my-5" />
            <div>
              <SectionText
                className="py-4"
                title="Tags"
                subtitle="As tags servem para classificar os produtos (Exemplo: Grupo, Cor, etc.)."
                icon={<Tags />}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <Field className="col-span-full w-full">
                  <Label>Tags</Label>
                  <Description>Adicione a tag para identificar o seu produto.</Description>

                  <div className="flex items-center gap-2">
                    <Input
                      name="product_name"
                      placeholder="Digite o nome da Tag e tecle Enter."
                      className="w-full mt-3"
                    />

                    <Button className="flex items-center mt-3 gap-2 px-4 py-1.5 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 cursor-pointer">
                      <Plus className="w-4 h-4" />
                      Adicionar
                    </Button>
                  </div>
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
  );
}

export default ProductForm;
