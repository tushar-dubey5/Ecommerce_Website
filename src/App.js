import "./App.css";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pay from "./Payment/pay";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
