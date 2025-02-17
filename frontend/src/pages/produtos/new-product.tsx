import { useState } from "react";
import { Field, Label, Description } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Textarea } from "../../components/ui/catalyst/textarea";
import { Button } from "../../components/ui/catalyst/button"; // Importando o botão do Catalyst
// import { Card } from "@/components/card";
import Tabs from "../../components/custom/tabs/tabs"; // Mantendo suas Tabs personalizadas
import SectionText from "../../components/text/section-text";
import { Upload } from "lucide-react";

const productTabs = [
  { name: "Dados Gerais", href: "#" },
  { name: "Dados Complementares", href: "#" },
  { name: "Ficha Técnica", href: "#" },
  { name: "Custos", href: "#" },
  { name: "Outros", href: "#" },
];

function ProductForm() {
  const [activeTab, setActiveTab] = useState("dados gerais");

  return (
    <div className="p-6 bg-transparent shadow-md rounded-lg">
      {/* Título e descrição */}
      <SectionText title="Cadastro de Produto" subtitle="Preencha as informações para garantir um controle preciso do produto." />

      {/* Tabs movidas para baixo do título */}
      <Tabs tabs={productTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Conteúdo do formulário */}
      {activeTab === "dados gerais" && (
        <div className="mt-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Upload de Imagem */}
            {/* <Card className="col-span-1 flex items-center justify-center p-4">
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-500" />
                <p className="text-sm text-gray-600 mt-2">Clique para enviar imagem</p>
                <Button variant="outline" className="mt-2">Upload</Button>
              </div>
            </Card> */}

            {/* Inputs do formulário */}
            <div className="col-span-2 grid grid-cols-3 gap-4">
              <Field>
                <Label>Nome do Produto</Label>
                <Description>Nome principal para exibição e identificação.</Description>
                <Input name="product_name" placeholder="Digite o nome" />
              </Field>

              <Field>
                <Label>Código SKU</Label>
                <Description>Código interno único para controle de estoque.</Description>
                <Input name="sku" placeholder="Ex: 12345-ABC" />
              </Field>

              <Field>
                <Label>GTIN/EAN</Label>
                <Description>Código de barras para identificação global.</Description>
                <Input name="gtin" placeholder="Digite o código de barras" />
              </Field>

              <Field>
                <Label>NCM</Label>
                <Description>Código fiscal do produto conforme a tabela oficial.</Description>
                <Input name="ncm" placeholder="Digite o NCM" />
              </Field>

              <Field>
                <Label>Código CEST</Label>
                <Description>Obrigatório para produtos sujeitos à substituição tributária.</Description>
                <Input name="cest" placeholder="Digite o CEST" />
              </Field>

              <Field>
                <Label>Tipo de Produto</Label>
                <Description>Defina se é físico, digital ou serviço.</Description>
                <Input name="type" placeholder="Ex: Físico ou Digital" />
              </Field>

              <Field>
                <Label>Categoria</Label>
                <Description>Categoria principal do produto.</Description>
                <Input name="category" placeholder="Digite a categoria" />
              </Field>

              <Field>
                <Label>Preço de Venda</Label>
                <Description>Valor regular do produto para venda.</Description>
                <Input name="price" type="number" placeholder="R$ 00,00" />
              </Field>

              <Field>
                <Label>Preço Promocional</Label>
                <Description>Preço com desconto, se houver promoção.</Description>
                <Input name="promo_price" type="number" placeholder="R$ 00,00" />
              </Field>

              <Field>
                <Label>Unidade de Medida</Label>
                <Description>Exemplo: Unidade, Kg, Litro.</Description>
                <Input name="unit" placeholder="Ex: Unidade, Kg, Litro" />
              </Field>
            </div>
          </div>

          {/* Descrição do Produto */}
          <div className="mt-6">
            <Field>
              <Label>Descrição do Produto</Label>
              <Description>Adicione detalhes adicionais sobre o produto.</Description>
              <Textarea name="description" placeholder="Digite detalhes sobre o produto" rows={4} />
            </Field>
          </div>

          {/* Botão de salvar */}
          <div className="mt-6 flex justify-end">
            <Button>Salvar Produto</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
