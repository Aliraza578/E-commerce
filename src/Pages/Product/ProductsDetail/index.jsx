import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useContext } from "react";
// import { UserStatusContext } from "../../../App";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { addToCart } from "../../../redux/action";

const ProductsDetail = () => {
  // const { isLoggedIn, setLoggedIn } = useContext(UserStatusContext);
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setDetail(response.data);
      });
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(detail));
    navigate("/cart");
  };

  return (
    <div className="productDetail">
      <div className="productDetailImage">
        <img className="productImage" src={detail.image} alt="" />
      </div>
      <div className="productDetailContainer">
        <h2 className="productName">{detail.title}</h2>
        <h5 className="productPrice">Price: US${detail.price}</h5>
        <h5 className="productCategory">Category: {detail.category}</h5>
        <h6 className="productDescriptionHeader">Description</h6>
        <div className="productDescription">        <p>{detail.description}</p>
</div>
        <div className="btnProductDetailContainer">
          <button className="btnBuyNow">Buy Now</button>
          <button onClick={handleAddToCart} className="btnAddToCart">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
