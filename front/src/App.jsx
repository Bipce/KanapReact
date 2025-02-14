import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/confirmation/:orderId"
            element={<Confirmation />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
