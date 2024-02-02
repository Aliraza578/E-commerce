import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserStatusContext } from "../../App";
import "./styles.css";
import { AiOutlineHome } from "react-icons/ai";
import { LiaProductHunt } from "react-icons/lia";
import { BiCategory } from "react-icons/bi";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const { isLoggedIn, setLoggedIn } = useContext(UserStatusContext);

  return (
    <div className="navContainer navbar header">
      <div className="logoDiv">
        <img className="logoImg" src="src\images\shopping-logo.png" alt="" />
      </div>
      <div className="navLinksContainer">
        <div>
          <NavLink className="m-4 navColour" to="/">
            <AiOutlineHome />
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="m-4 navColour" to="product">
            <LiaProductHunt />
            Product
          </NavLink>
        </div>
        <div>
          <NavLink className="m-4 navColour" to="categories">
            <BiCategory />
            Categories
          </NavLink>
        </div>
        <div>
          <NavLink className="m-4 navColour" to="cart">
            <AiOutlineShoppingCart />
            Cart
          </NavLink>
        </div>
        <div>
          {isLoggedIn ? (
            <>
              <NavLink
                className="navColour"
                to="/"
                onClick={() => {
                  setLoggedIn(!isLoggedIn);
                }}
              >
                <IoIosLogIn />
                LogOut
              </NavLink>
            </>
          ) : (
            <></>
          )}
          {isLoggedIn ? (
            <></>
          ) : (
            <>
              <NavLink className="navColour" to="/loginPage">
                <IoIosLogIn />
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
