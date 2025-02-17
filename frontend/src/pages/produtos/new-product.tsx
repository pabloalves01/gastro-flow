import { useState } from 'react';
import Tabs from '../../components/custom/tabs/tabs';
const productTabs = [
  { name: 'Geral', href: '#' },
  { name: 'Imagens', href: '#' },
  { name: 'Estoque', href: '#' },
  { name: 'Preços', href: '#' },
];

function ProductForm() {
  const [activeTab, setActiveTab] = useState('Geral');

  return (
    <div>
      <Tabs tabs={productTabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-4">
        {activeTab === 'Geral' && <div>Conteúdo da aba Geral</div>}
        {activeTab === 'Imagens' && <div>Conteúdo da aba Imagens</div>}
        {activeTab === 'Estoque' && <div>Conteúdo da aba Estoque</div>}
        {activeTab === 'Preços' && <div>Conteúdo da aba Preços</div>}
      </div>
    </div>
  );
}

export default ProductForm; 