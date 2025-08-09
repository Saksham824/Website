import { BrowserRouter,Route,Routes } from "react-router-dom";
import ProductsProvider from "./ProductsContext";
import CartProvider from "./CartContext";
import Hero from "./components/Hero";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPanel, { AdminForm } from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App(){
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <Navbar />
            <Routes>
              <Route path="/" element={<><Hero /><ProductsPage /></>} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/admin/new" element={<AdminForm />} />
              <Route path="/admin/edit/:id" element={<AdminForm />} />
            </Routes>
            <Footer/>
          </div>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}