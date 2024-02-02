import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./Pages/Product";
import Categories from "./pages/Categories";
import ProductsDetail from "./pages/Product/ProductsDetail";
import PageContainer from "./components/PageContainer";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Electronics from "./Pages/Categories/Electronics";
import Jewelery from "./Pages/Categories/Jewelery";
import WomensClothing from "./Pages/Categories/Women's clothing";
import MensClothing from "./Pages/Categories/Men's clothing";
import { createContext } from "react";
import { useState } from "react";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const UserStatusContext = createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {
        <UserStatusContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <Routes>
            <Route path="/" element={<PageContainer />}>
              <Route index element={<Home />} />
              <Route path="product">
                <Route index element={<Product />} />
                <Route
                  path="product-details/:id"
                  element={<ProductsDetail />}
                />
              </Route>
              <Route path="categories">
                <Route index element={<Categories />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="jewelery" element={<Jewelery />} />
                <Route path="mensClothing" element={<MensClothing />} />
                <Route path="womensClothing" element={<WomensClothing />} />
              </Route>
              <Route
                path="cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="loginPage" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />

            {/* <Route path="*" element = {<ErrorPage />}></Route> */}
          </Routes>
        </UserStatusContext.Provider>
      }
    </>
  );
}

export default App;
