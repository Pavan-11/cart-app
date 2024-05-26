import React from 'react';
import "../Category/CardData.css";
import img1 from "../../Utilities/baby-care.jpg";
import img2 from "../../Utilities/bakery.jpg";
import img3 from "../../Utilities/chicken.jpg";
import img4 from "../../Utilities/instant.jpg";
import img5 from "../../Utilities/rice.jpg";
import img6 from "../../Utilities/drinks.jpg";


const CardCarousel = () => {
    const cardData = [
        {id : 1, title : "Baby-Care",img:img1},
        {id : 2, title : "Bakery & Biscuits",img:img2},
        {id : 3, title : "Chicken & Meat",img:img3},
        {id : 4, title : "Instant Food",img:img4},
        {id : 5, title : "Rice & Wheat",img:img5},
        {id : 6, title : "Drinks and Teas",img:img6}
        // {id : 7, title : "Bread & Egg",img:img7},
        // {id : 8, title : "Cleaning",img:img8}
    ];
  return (
        <div className='container mt-3 mb-3'>
            <div className='row'>
                {cardData.map((card) => (
                    <a href='#' key={card.id} className='col-lg-2 col-md-3 col-sm-12 mb-4 '>
                        <div className='card d-flex align-items-center pt-5 pb-4 card-data-link'>
                            <img src={card.img} className='card-img-top w-50 ' alt="" />
                            <div className='card-body'>
                                <h6 className='card-text no-underline'>{card.title}</h6>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;