import React from 'react'
import Clock from "../../Utilities/clock.svg";
import Gift from "../../Utilities/gift.svg";
import Package from "../../Utilities/package.svg";
import "../Policy/Policy.css";
const Policy = () => {
  return (
    <section className='mt-5 mb-5 pb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-3 mt-only-sm-3'>
                    <div className='mb-8 mb-xl-0'>
                        <div className='mb-6 '>
                            <img src={Clock} alt=""  />
                        </div>
                        <h3 className='h5 mb-3'>10 minute grocery now</h3>
                        <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup store near you.</p>
                    </div>
                </div>

                <div className='col-md-6 col-lg-3'>
                    <div className='mb-8 mb-xl-0'>
                        <div className='mb-6'>
                            <img src={Gift} alt="" />
                        </div>
                        <h3 className='h5 mb-3'>Best Prices & Offers</h3>
                        <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers</p>
                    </div>
                </div>

                <div className='col-md-6 col-lg-3'>
                    <div className='mb-8 mb-xl-0'>
                        <div className='mb-6'>
                            <img src={Package} alt="" />
                        </div>
                        <h3 className='h5 mb-3'>Wide Assortment</h3>
                        <p>Choose from 5000+ products across food, personal care, household, bakery , veg and non-veg & other categories.</p>
                    </div>
                </div>

                <div className='col-md-6 col-lg-3'>
                    <div className='mb-8 mb-xl-0'>
                        <div className='mb-6'>
                            <img src={Gift} alt="" />
                        </div>
                        <h3 className='h5 mb-3'>Easy Returns</h3>
                        <p>Not satisfied with a product? Return it at the doorsetp & get a refund within hours. No questions asked 
                            <a href="#!"> policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Policy