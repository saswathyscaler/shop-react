import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import UserDetails from "./widgets/UserDetails";
import ProductDetails from "./widgets/ProductDetails";
import AddProduct from "./components/AddProduct";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./components/PrivateRoute";
import AdminRoutes from "./components/AdminRoutes";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./widgets/Cart";
function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<PrivateRoutes />}>
          <Route element={<UserDetails />} path="/userdetail" exact></Route>
          <Route element={<Cart/>} path="/cart" exact></Route>

          </Route>
          <Route element={<AdminRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" exact></Route>
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/edit/:id" element={<UpdateProduct />} />
          </Route>
        </Routes>
        <Footer />

        <ToastContainer />
      </>
    </Router>
  );
}

export default App;
