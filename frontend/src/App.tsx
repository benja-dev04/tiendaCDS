import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ScrollToTop from "./components/ScrollToTop";
import Ofertas from "./pages/Ofertas";
import Rock from "./pages/Rock";
import Electronica from "./pages/Electronica";
import Jazz from "./pages/Jazz";
import Nosotros from "./pages/Nosotros";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home"; 
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[var(--vinyl-black)]">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/electronica" element={<Electronica />} />
            <Route path="/jazz" element={<Jazz />} />
            <Route path="/rock" element={<Rock />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>

          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
