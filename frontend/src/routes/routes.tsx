import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import SplashScreen from "../pages/splashscreen";
import Home from "../pages/dashboard/home";
import AuthenticatedLayout from "../layout/authenticated-layout";
import ManageOrders from "../pages/orders/manage-orders";
import PDV from "../pages/pdv/pdv";
import Checkout from "../pages/pdv/checkout";
import TableManagement from "../pages/pdv/table-management";
import NewProduct from "../pages/products/new-product";
import NewOrder from "../pages/orders/new-order";
import ManageCategories from "../pages/categories/manage-categories";
import Teste from "../pages/home/teste";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas (Usando o Layout Base) */}
        <Route path="/*" element={<AuthenticatedLayout />}>
          <Route path="home" element={<Home />} />

          {/* PEDIDOS */}
          <Route path="pedido/gerenciar" element={<ManageOrders />} />
          <Route path="pedido/novo" element={<NewOrder />} />

          {/* PDV */}
          <Route path="pdv" element={<PDV />} />
          <Route path="pdv/checkout" element={<Checkout />} />
          <Route path="pdv/mesas" element={<TableManagement />} />

          {/* CADASTROS */}
          <Route path="produto/novo" element={<NewProduct />} />

          <Route path="produto/teste" element={<Teste />} />

          {/* GERENCIAR */}
          <Route path="categoria/gerenciar" element={<ManageCategories />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
