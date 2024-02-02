import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className="home">
        <div className="heading-hero">
          <h3>Discover the perfect blend of elegance and comfort with our enchanting Fall Collection</h3>
          <h5>Shop Smart, Shop with Us</h5>
          <div>
            <button className="btn btn-primary button" onClick={()=>navigate('/product')}>Shop Now</button>
            <button className="btn btn-secondary button">Learn More</button>
          </div>
        </div>
        <div className="image-hero">
          <img className="header-image" src="https://assets.website-files.com/6493dcfff5da93a7486cd781/6494062b71fbb5f238835e71_Hero.png" alt="" />
        </div>
      </div>

      {/* Section 2 */}
      <h2 className="text-center mt-5">Top Choices</h2>
      <div className="section-2">
        <div className="box box-1"></div>
        <div className="box box-2"></div>
        <div className="box box-3"></div>
        <div className="box box-4"></div>
        <div className="box box-5"></div>
        <div className="box box-6"></div>
        <div className="box box-7"></div>
        <div className="box box-8"></div>
        <div className="box box-9"></div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img className="pic" src="src\images\shopping-logo.png" alt="Your Store Logo" />
            <p>Your Choice is our priority</p>
          </div>
          <div className="footer-links">
            <div className="section">
              <h3>Shop</h3>
              <ul>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Special Offers</a>
                </li>
              </ul>
            </div>
            <div className="section">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="section">
              <h3>Customer Service</h3>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
                <li>
                  <a href="#">Return & Exchange Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
