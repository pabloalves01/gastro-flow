import { useState } from 'react';
import Tabs from '../../components/custom/tabs/tabs';
const productTabs = [
  { name: 'dados gerais', href: '#' },
  { name: 'dados complementares', href: '#' },
  { name: 'ficha técnica', href: '#' },
  { name: 'custos', href: '#' },
  { name: 'outros', href: '#' },
];

function ProductForm() {
  const [activeTab, setActiveTab] = useState('Geral');

  return (
    <div>
      <Tabs tabs={productTabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-4">
        {activeTab === 'Geral' && <div>
        </div>}
      </div>

    </div>
  );
}

export default ProductForm; 