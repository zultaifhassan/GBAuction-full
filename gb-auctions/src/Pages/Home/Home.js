import React, { useState, useEffect } from "react";
import "./Home.css";
import Review from "../../components/Review/Review";
import Category from "../../components/CategoriesSlider/Category";
import Loader from "../../components/Loader/Loader";
import Vehicle from "./Vehicle/Vehicle";
// import Jewelery from "./Jewelery/Jewelery";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className="home-page-outer">
            <div className="max-width home-page-content">
              <div className="homepage-left">
                <h2>Enjoy Exclusive</h2>
                <h1>
                  Find Your <br /> Next Deal!
                </h1>
                <p>
                  Online Auction is where everyone goes to shop, sell and give,
                  while discovering variety and affordability.
                </p>
                <button>Get Started</button>
              </div>
              <div className="homepage-right">
                <img src="/Images/bidhome.png" alt="" />
              </div>
            </div>
          </div>
          <Category />
          <Vehicle />
          {/* <Jewelery /> */}
          <Review />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
