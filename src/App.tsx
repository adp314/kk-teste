import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CheckoutPage } from "./pages/checkoutPage";
import { ProductsPage } from "./pages/productsPage";
import { CheckoutContext } from "./contexts/CheckoutContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <CheckoutContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CheckoutContext>
    </>
  );
}

export default App;
