import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from "react-feather";

const Jewelery = () => {
  return (
    <div>
        <div className="max-width home-page-second">
            <div className="head-vehicles">
              <div className="veh-head-title">
                <h1>Jewelery</h1>
                <p>We offer affordable Jewelery</p>
              </div>
              <div className="veh-head-button">
                <button>View All</button>
              </div>
            </div>
            <div className="product-boxes">
              <div className="product-one-home">
                <div className="image-icon-hammer">
                  <div className="star-watch">
                    <Star />
                  </div>
                  <img src="/Images/jew1.jpg" alt="" />
                  <span>
                    <img src="/Images/hammer.png" alt="" />
                  </span>
                </div>
                <div className="product-name">
                  <h2>Diamond Ring</h2>
                  <div className="bidding-information">
                    <div className="current-biding">
                      <img src="/Images/hammer.png" alt="" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" alt="" />
                      <span>
                        <p>Buy Now</p>
                        <h5>$1500.00</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                      <span>0d :</span>
                      <span> 11h :</span>
                      <span> 9m :</span>
                      <span> 0s</span>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                  <Link to="/product">
                    Submit A Bid
                  </Link>
                </div>
              </div>
              <div className="product-one-home">
                <div className="image-icon-hammer">
                  <div className="star-watch">
                    <Star />
                  </div>
                  <img src="/Images/jew2.jpg" alt="" />
                  <span>
                    <img src="/Images/hammer.png" alt="" />
                  </span>
                </div>
                <div className="product-name">
                  <h2>Gold Ring</h2>
                  <div className="bidding-information">
                    <div className="current-biding">
                      <img src="/Images/hammer.png" alt="" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" alt="" />
                      <span>
                        <p>Buy Now</p>
                        <h5>$1500.00</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                      <span>0d :</span>
                      <span> 11h :</span>
                      <span> 9m :</span>
                      <span> 0s</span>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                  <Link to="/">
                    Submit A Bid
                  </Link>
                </div>
              </div>
              <div className="product-one-home">
                <div className="image-icon-hammer">
                  <div className="star-watch">
                    <Star />
                  </div>
                  <img src="/Images/jew3.jpg" alt="" />
                  <span>
                    <img src="/Images/hammer.png" alt="" />
                  </span>
                </div>
                <div className="product-name">
                  <h2>Silver Ring</h2>
                  <div className="bidding-information">
                    <div className="current-biding">
                      <img src="/Images/hammer.png" alt="" />
                      <span>
                        <p>Current Bid</p>
                        <h5>$880.00</h5>
                      </span>
                    </div>
                    <div className="buynow-biding">
                      <img src="/Images/dollar.png" alt="" />
                      <span>
                        <p>Buy Now</p>
                        <h5>$1500.00</h5>
                      </span>
                    </div>
                  </div>
                  <div className="timer-total-bids">
                    <div className="days-hours-min">
                      <span>0d :</span>
                      <span> 11h :</span>
                      <span> 9m :</span>
                      <span> 0s</span>
                    </div>
                    <div className="total-numer-bids">
                      <h3>30 Bids</h3>
                    </div>
                  </div>
                  <Link to="/">
                    Submit A Bid
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Jewelery