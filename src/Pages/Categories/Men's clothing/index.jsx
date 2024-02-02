import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MensClothing = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [mensClothingData, setMensClothingData] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const data = await response.json;
      setMensClothingData(response.data);
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
      {mensClothingData.map((entry) => {
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

export default MensClothing;
