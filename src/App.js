import "./App.css";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pay from "./Components/Pay";
import Success from "./Pages/Success";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/products/:cat" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
