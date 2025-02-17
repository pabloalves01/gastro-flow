import { useState } from 'react';
import Tabs from '../../components/custom/tabs/tabs';
import SectionText from '../../components/text/section-text';
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
        {activeTab === 'dados gerais' &&
          <div>
            <div className='pb-4'>
              <SectionText title="Dados Gerais do Produto" subtitle='Preencha as informações para garantir um controle preciso do produto.' />
            </div>
            Começo dos inputs aqui
          </div>}
      </div>

    </div>
  );
}

export default ProductForm; 