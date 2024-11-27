import React from "react";
import "./About.css";
import Review from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page-first-outer">
        <div className="max-width about-pagr-inner">
          <div className="about-right-side">
            <h1>About Us</h1>
            <h2>GB Auction</h2>
            <p>
              At Gb Auction, we're passionate about creating an electrifying
              bidding experience where every bid counts. Our platform brings
              together buyers and sellers in a dynamic marketplace, offering a
              diverse range of items up for auction. With a commitment to
              transparency, fairness, and customer satisfaction, we strive to
              make bidding not just a transaction, but an exhilarating journey.
              Join us and discover the thrill of winning at Bid Auctions.
            </p>
          </div>
          <div className="about-left-side">
            <img src="/Images/about.png" alt="" />
          </div>
        </div>
      </div>
      <div className="max-width about-page-second">
        <div className="second-about-head">
          <h1>Meet With Our Team</h1>
          <p>
            Our team consists of passionate and talented individuals invested in
            your success.
          </p>
        </div>
        <div className="teams-cards">
          <div className="team-card-one">
            <img src="/Images/z3.png" alt="" />
            <div className="team-member-detail">
              <h3>Zultaif Hassan</h3>
              <h4>CEO & Founder</h4>
              <p>Zultaifhassan110@gmail.com</p>
            </div>
          </div>
          <div className="team-card-one">
            <img src="/Images/sdsds.jpg" alt="" />
            <div className="team-member-detail">
              <h3>Zultaif Hassan</h3>
              <h4>CTO & Founder</h4>
              <p>Zultaifhassan110@gmail.com</p>
            </div>
          </div>
          <div className="team-card-one">
            <img src="/Images/ansar.jpeg" alt="" />
            <div className="team-member-detail">
              <h3>Ansar Ali</h3>
              <h4>COO</h4>
              <p>ansaralyh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <Footer />
    </>
  );
};

export default About;
