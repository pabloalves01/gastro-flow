import { useState } from "react";
import Tabs from "../../components/custom/tabs/tabs";
import SectionText from "../../components/text/section-text";
import { Select } from "../../components/ui/catalyst/select";

import {
  Description,
  Field,
  Label,
} from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";

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
                title="Dados Gerais do Produto"
                subtitle="Preencha as informações para garantir um controle preciso do produto."
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
                <Input name="preco_venda" placeholder="0,00" type="number"/>
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
              <hr className="border-[#333333] border-opacity-50 my-5" />
              <SectionText
                title="Dimensões e Peso"
                subtitle="Preencha as informações de dimensões e peso do produto."
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
                  <Input
                    name="peso_bruto"
                    type="number"
                    placeholder="Em Kg"
                  />
                  <Description>Digite o peso bruto do produto.</Description>
                </Field>
                <Field className="col-span-1">
                  <Label>Número de Volumes</Label>
                  <Input
                    name="numero_volumes"
                    type="number"
                    placeholder="Quantidade de volumes"
                  />
                  <Description>Digite o número de volumes do produto.</Description>
                </Field>
              </div>
            </div>
            <div>
              <hr className="border-[#333333] border-opacity-50 my-5" />
              <SectionText
                title="Estoque"
                subtitle="Preencha as informações de estocagem do produto."
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
                  <Description>Digite o mínimo de estoque desejado.</Description>
                  <Input
                    name="estoque_minimo"
                    placeholder="Digite o estoque mínimo"
                  />
                </Field>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductForm;
