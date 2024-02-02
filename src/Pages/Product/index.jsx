import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import "./styles.css";

function Product() {
  const [loading, setLoading] = useState(true);
  const [allItems, setAllItems] = useState([]);
  const [searchItems, setsearchItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data)
      setAllItems(response.data);
      setsearchItems(response.data);
      setSortedItems(response.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      setLoading(false); // Set loading to false even if there's an error
    }
  };
  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products").then((response) => {
  //     setAllItems(response.data);
  //     setsearchItems(response.data);
  //     setSortedItems(response.data);
  //   });
  // }, []);

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (event) => {
    const searchString = event.target.value;

    const filterItems = allItems.filter((item) => {
      return item.title.toLowerCase().includes(searchString.toLowerCase());
    });
    setsearchItems(filterItems);
  };

  const handleSort = (option) => {
    let sorted = [];

    if (option === "sort") {
      sorted = [...sortedItems];
    } else if (option === "ascending") {
      sorted = [...searchItems].sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "descending") {
      sorted = [...searchItems].sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === "price-low-to-high") {
      sorted = [...searchItems].sort((a, b) => a.price - b.price);
    } else if (option === "price-high-to-low") {
      sorted = [...searchItems].sort((a, b) => b.price - a.price);
    }

    setsearchItems(sorted);
    setAllItems(sorted);
  };

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
    <div>
      <div className="searchContainer">
        <input
          className="inputField"
          onChange={handleChange}
          type="search"
          placeholder=" Search Items..."
        />

        <select className="sort" onChange={(e) => handleSort(e.target.value)}>
          <option value="sort">Sort By</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="flex-main-container">
        {searchItems.map((itemsEntry, index) => {
          return (
            <div className="products-container">
              <Card
               key={index}
                id={itemsEntry.id}
                image={itemsEntry.image}
                title={itemsEntry.title}
                price={itemsEntry.price}
                rating={itemsEntry.rating.rate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
