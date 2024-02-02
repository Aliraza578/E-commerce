import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="categoriesFlex">
      <div className="categories" onClick={()=>navigate('/categories/electronics')}>
        <img className="categoriesImg" src="src\images\electronics.jpg" alt="" />
        <h3>Electronics</h3>
      </div>
      <div className="categories" onClick={()=>navigate('/categories/jewelery')}>
        <img className="categoriesImg" src="src\images\jewelery.jpg" alt="" />
        <h3>Jewelery</h3>
      </div>
      <div className="categories" onClick={()=>navigate('/categories/mensClothing')}>
        <img className="categoriesImg" src="src\images\mensClothing.jpg" alt="" />
        <h3>Men's Clothing</h3>
      </div>
      <div className="categories" onClick={()=>navigate('/categories/womensClothing')}>
      <img className="categoriesImg" src="src\images\womensClothing.jpg" alt="" />
        <h3>Women's Clothing</h3>
      </div>
    </div>
  );
}

export default Categories;
