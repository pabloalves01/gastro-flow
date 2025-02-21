// React Router imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layout imports
import AuthenticatedLayout from "../layout/authenticated-layout";

// Authentication and core pages
import Login from "../pages/auth/login";
import SplashScreen from "../pages/splashscreen";
import Home from "../pages/dashboard/home";

// Order related pages
import ManageOrders from "../pages/orders/manage-orders";
import NewOrder from "../pages/orders/new-order";

// PDV (Point of Sale) related pages
import PDV from "../pages/pdv/pdv";
import Checkout from "../pages/pdv/checkout";
import TableManagement from "../pages/pdv/table-management";

// Product related pages
import NewProduct from "../pages/products/new-product";
import Teste from "../pages/home/teste";

// Category management
import ManageCategories from "../pages/categories/manage-categories";

// Client related pages
import NewCliente from "../pages/contacts/new-contact";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes (Using Base Layout) */}
        <Route path="/*" element={<AuthenticatedLayout />}>
          {/* Dashboard */}
          <Route path="home" element={<Home />} />

          {/* Orders */}
          <Route path="pedido/gerenciar" element={<ManageOrders />} />
          <Route path="pedido/novo" element={<NewOrder />} />

          {/* PDV */}
          <Route path="pdv" element={<PDV />} />
          <Route path="pdv/checkout" element={<Checkout />} />
          <Route path="pdv/mesas" element={<TableManagement />} />

          {/* Products */}
          <Route path="produto/novo" element={<NewProduct />} />
          <Route path="produto/teste" element={<Teste />} />

          {/* Categories */}
          <Route path="categoria/gerenciar" element={<ManageCategories />} />

          {/* Clients */}
          <Route path="cliente/novo" element={<NewCliente />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
