import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Jewelery = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [jeweleryData, setJeweleryData] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const data = await response.json;
      setJeweleryData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          Loading...
          <span></span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-main-container">
      {jeweleryData.map((entry) => {
        return (
          <div className="products-container">
            <div
              onClick={() => navigate(`/product/product-details/${entry.id}`)}
              className="cart-container"
            >
              <img className="productPageImges" src={entry.image} alt="" />
              <div className="titleManage">
                <h6>{entry.title}</h6>
              </div>
              <div className="price-rating-container">
                <h6>Price: US${entry.price}</h6>
                <button
                  onClick={() =>
                    navigate(`/product/product-details/${entry.id}`)
                  }
                >
                  Product Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jewelery;
