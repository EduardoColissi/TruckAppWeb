import { LoginPage } from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShippingPage } from "./pages/Shipping/ShippingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
