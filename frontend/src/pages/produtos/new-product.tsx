import { useState } from 'react';
import Tabs from '../../components/custom/tabs/tabs';
import SectionText from '../../components/text/section-text';
import { Description, Field, Label } from '../../components/ui/catalyst/fieldset';
import { Input } from '../../components/ui/catalyst/input';

const productTabs = [
  { name: 'dados gerais', href: '#' },
  { name: 'dados complementares', href: '#' },
  { name: 'ficha técnica', href: '#' },
  { name: 'custos', href: '#' },
  { name: 'outros', href: '#' },
];

function ProductForm() {
  const [activeTab, setActiveTab] = useState('dados gerais');

  return (
    <div>
      <Tabs tabs={productTabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-4">
        {activeTab === 'dados gerais' && (
          <div>
            <div className='pb-4'>
              <SectionText title="Dados Gerais do Produto" subtitle='Preencha as informações para garantir um controle preciso do produto.' />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Field>
                <Label>Nome do Produto</Label>
                <Input name="product_name" placeholder="Digite o nome" />
                <Description>Nome principal para exibição e identificação.</Description>
              </Field>
              <Field>
                <Label>Código SKU</Label>
                <Input name="sku" placeholder="Digite o código SKU" />
                <Description>Código interno único para controle de estoque.</Description>
              </Field>
              <Field>
                <Label>GTIN/EAN</Label>
                <Input name="gtin" placeholder="Digite o código GTIN/EAN" />
                <Description>Código de barras para identificação global.</Description>
              </Field>
              <Field>
                <Label>NCM</Label>
                <Input name="ncm" placeholder="Digite o NCM" />
                <Description>Código fiscal do produto conforme a tabela oficial.</Description>
              </Field>

            </div>
            <div>
              <hr className="border-[#333333] border-opacity-50 my-5" />
              <SectionText title="Estoque" subtitle='Preencha as informações de estocagem do produto.' />

              <div className='mt-4 grid grid-cols-3 gap-4'>
                <Field>
                  <Label>Estoque Inicial</Label>
                  <Input name="estoque_inicial" placeholder="Digite o estoque inicial" />
                  <Description>Digite o estoque inicial desejado.</Description>
                </Field>
                <Field>
                  <Label>Estoque Mínimo</Label>
                  <Input name="estoque_inicial" placeholder="Digite o estoque mínimo" />
                  <Description>Digite o mínimo de estoque desejado.</Description>
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
