import { Textarea } from "@headlessui/react";
import SectionText from "../../components/text/section-text";
import { Field, Label } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Select } from "../../components/ui/catalyst/select";
import { Button } from "../../components/ui/catalyst/button";

export default function NewProduct() {
  return (
    <div className="">
      <SectionText
        title="Novo Produto"
        subtitle="Adicione um novo produto ao seu comércio."
      />

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Field>
            <Label>Nome do Produto</Label>
            <Input
              name="produto_nome"
              placeholder="Digite o nome do produto..."
            />
          </Field>

        <Field>
          <Label>Categoria</Label>
          <Select name="categoria">
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
        </Field>

        <Field>
          <Label>Preço</Label>
          <Input name="produto_preco" type="number" placeholder="0.00" />
        </Field>

        <Field>
          <Label>Custo</Label>
          <Input name="produto_custo" type="number" placeholder="0.00" />
        </Field>

        {/* <Field className="md:col-span-2 text-sm">
          <Label>Descrição</Label>
          <Textarea
            name="produto_descricao"
            placeholder="Digite uma descrição para o produto..."
            className="w-full bg-[#1a1a1a] border border-[#333333] text-white rounded-md p-2 outline-none focus:ring-2 focus:ring-[#555555]"
          />
        </Field> */}

        <Field>
          <Label>Imagem do Produto</Label>
          <Input name="produto_imagem" type="file" accept="image/*" />
        </Field>

        <Field>
          <Label>Estoque</Label>
          <Input
            name="produto_estoque"
            type="number"
            placeholder="Quantidade em estoque..."
          />
        </Field>
      </div>

      {/* BOTÃO DE SUBMISSÃO */}
      <div className="flex justify-end mt-4">
        <Button>Salvar Produto</Button>
      </div>
    </div>
  );
}
