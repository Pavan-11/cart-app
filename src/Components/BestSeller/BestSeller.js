import React from "react";
import "../BestSeller/BestSeller.css";
import bannerSell from "../../Utilities/banner-seller.jpg";
import bannerSell1 from "../../Utilities/product11.jpg";
import bannerSell2 from "../../Utilities/product12.jpg";
import bannerSell3 from "../../Utilities/product13.jpg";

const BestSeller = () => {
  return (
    <div className="container mt-3">
      <h3 className="mb-3">Daily Best Sells</h3>
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-2">
          <img src={bannerSell} alt="" className="rounded w-100" />
          <h4 className="banner-title fw-bold mb-1">
            100% Organic Coffee Beans
          </h4>
          <p className="mb-4 banner-text">Get the best deal before close</p>
          <button className="btn btn-success rounded banner-btn">
            Shop Now <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>

        <div className="col-lg-3 col-md-4 mb-2">
          <div className="card card1">
            <img src={bannerSell1} alt="" className="card-img-top " />
            <div className="card-body">
              <p className="card-text">Tea, Coffee & Drinks</p>
              <h6 className="card-title">Roast Ground Coffee</h6>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="text-dark mb-0">
                  $13{" "}
                  <span className="price-cut">
                    <strike>$18</strike>
                  </span>
                </p>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>
                  <span className="text-muted small">4.5</span>
                </div>
              </div>
              <button className="btn btn-success w-100 mt-2">+ Add to cart</button>
              <div className="w-100 timmer-span">
                <span className=" time bordered" ></span>
                <span className=" time bordered"></span>
                <span className=" time bordered"></span>
                <span className=" time bordered"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mb-2">
          <div className="card card1">
            <img src={bannerSell2} alt="" className="card-img-top " />
            <div className="card-body">
              <p className="card-text">Fruits & Vegetables</p>
              <h6 className="card-title">Crushed Tomatoes</h6>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="text-dark mb-0">
                  $13{" "}
                  <span className="price-cut">
                    <strike>$18</strike>
                  </span>
                </p>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>
                  <span className="text-muted small">4.5</span>
                </div>
              </div>
              <button className="btn btn-success w-100 mt-2">+ Add to cart</button>
              <div className="w-100 timmer-span">
                <span className=" time bordered" ></span>
                <span className=" time bordered"></span>
                <span className=" time bordered"></span>
                <span className=" time bordered"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mb-2">
          <div className="card card1">
            <img src={bannerSell3} alt="" className="card-img-top " />
            <div className="card-body">
              <p className="card-text">Fruits & Vegetables</p>
              <h6 className="card-title">Golden Pineapple</h6>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="text-dark mb-0">
                  $13{" "}
                  <span className="price-cut">
                    <strike>$18</strike>
                  </span>
                </p>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>
                  <span className="text-muted small">4.5</span>
                </div>
              </div>
              <button className="btn btn-success w-100 mt-2">+ Add cart</button>
              <div className="w-100 timmer-span">
                <span className=" time bordered" ></span>
                <span className=" time bordered"></span>
                <span className=" time bordered"></span>
                <span className=" time bordered"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BestSeller;
