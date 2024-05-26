import React from "react";
import "../Products/Product.css";
import prod1 from "../../Utilities/product1.jpg";
import prod2 from "../../Utilities/product2.jpg";
import prod3 from "../../Utilities/product3.jpg";
import prod4 from "../../Utilities/product4.jpg";
import prod5 from "../../Utilities/product5.jpg";
import prod6 from "../../Utilities/product6.jpg";
import prod7 from "../../Utilities/product7.jpg";
import prod8 from "../../Utilities/product8.jpg";
import prod9 from "../../Utilities/product9.jpg";
import prod10 from "../../Utilities/product10.jpg";
const Product = () => {
  const productData = [
    {
      id: 1,
      description: "Snack & Munchies",
      title: "Haldhiram's Sev Bhujia",
      price: "$18",
      img: prod1,
      orgprice : "$24",
    },
    {
      id: 2,
      description: "Bakery & Biscuits",
      title: "NutriChoice Digestive",
      price: "$24",
      img: prod2,
    //   orgprice : "$24",
    },
    {
      id: 3,
      description: "Bakery & Biscuits",
      title: "Cadbury 5 star Chocolate",
      price: "$32",
      img: prod3,
      orgprice : "$35",
    },
    {
      id: 4,
      description: "Snack & Munchies",
      title: "Onion Flavour Potato",
      price: "$3",
      img: prod4,
      orgprice : "$5",
    },
    {
      id: 5,
      description: "Instant Food",
      title: "Salted Instant Popcorn",
      price: "$13",
      img: prod5,
      orgprice : "$18",
    },
    {
        id: 6,
        description: "Dairy,Bread & Eggs",
        title: "Blurberry Greek Yogurt",
        price: "$18",
        img: prod6,
        orgprice : "$24",
      },
      {
        id: 7,
        description: "Dairy,Bread & Eggs",
        title: "Britannia Cheese Slices",
        price: "$24",
        img: prod7,
        // orgprice : "$24",
      },
      {
        id: 8,
        description: "Instant Food",
        title: "Kellogg's Original Cereals",
        price: "$32",
        img: prod8,
        orgprice : "$35",
      },
      {
        id: 9,
        description: "Snack & Munchies",
        title: "Slurrp Millet Chocolate",
        price: "$3",
        img: prod9,
        orgprice : "$5",
      },
      {
        id: 10,
        description: "Dairy , Bread  & Eggs",
        title: "Amul Butter - 500g",
        price: "$13",
        img: prod10,
        orgprice : "$18",
      }
  ];

  return (
    <section>
      <div className="container mt-3 mb-5">
        <h3 className="mb-4">Popular Products</h3>
        <div className="row">
          {productData.map((prod) => (
            <div key={prod.id} className="col-lg-2_4 col-md-4 col-sm-6 mb-4 d-flex">
              <div className="card w-100">
                <img src={prod.img} alt={prod.title} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{prod.description}</p>
                  <h6 className="card-title">{prod.title}</h6>
                  <div className="text-warning">
                    <small>
                        <i className="bi bi-star-fill">
                            
                        </i>
                        <i className="bi bi-star-fill">
                            
                        </i>
                        <i className="bi bi-star-fill">
                            
                        </i>
                        <i className="bi bi-star-fill">
                            
                        </i>
                        <i className="bi bi-star-half">
                            
                        </i>
                    </small>
                    <span className="text-muted small">4.5 (67)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark mb-0">{prod.price} <span className="price-cut"><strike>{prod.orgprice}</strike></span></p>
                    <button className="btn btn-success btn-sm">+Add</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
