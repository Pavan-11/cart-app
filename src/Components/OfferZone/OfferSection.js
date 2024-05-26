import React from 'react'
import "../OfferZone/OfferSection.css"

const OfferSection = () => {
  return (
    <section>
        <div className='container mt-3 mb-5 banner-section'>
            <div className="row">
                <div className='col-12 col-md-6 mb-3 mb-lg-5'>
                    <div>
                        <div className='py-10 px-8 rounded banner-img'  style={{ backgroundImage: `url(${require("../../Utilities/banner1.png")})`, backgroundSize: "cover", backgroundPosition:"center"}}>
                            <div className='pt-5 ps-5'>
                                <h3 className='fw-bold mb-1'>Fruits & Vegetables</h3>
                                <p className='mb-4'>
                                    "Get Upto"
                                    <span className='fw-bold'>30%</span>
                                    "Off"
                                </p>
                                <a href="#!" className='btn btn-dark'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div>
                        <div className='py-10 px-8 rounded banner-img' style={{ backgroundImage: `url(${require("../../Utilities/banner2.jpg")})`, backgroundSize: "cover", repeat :"no-repeat" , backgroundPosition:"center"}} >
                            <div className='pt-5 ps-5'>
                                <h3 className='fw-bold mb-1 '>Freshly Baked Buns</h3>
                                <p className='mb-4'>
                                    "Get Upto"
                                    <span className='fw-bold'>25%</span>
                                    "Off"
                                </p>
                                <a href="#!" className='btn btn-dark'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OfferSection