import React, { useState } from "react";
import "./Dashboard.css";
import Current from "../../components/Tables/current/Current";
import Pending from "../../components/Tables/pending/Pending";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("tab1"); // Initial active tab state
  const {user} = useSelector((state) => state.login)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
        <div className="user-dash-welcome">
          <Link to="/"><IoIosArrowRoundBack fontSize={30} />Back To Home</Link>
            <h2>Wellcome <span>{user.user.name}</span> to User Dashboard</h2>
        </div>
      <div className="main-page-dash">
        <h1>My Activity</h1>
        <div className="main-page-dash-boxes">
          <div className="main-page-box1">
            <img src="/Images/dash/bid01.png" alt="" />
            <h2>80</h2>
            <h3>Active Bids</h3>
          </div>
          <div className="main-page-box1">
            <img src="/Images/dash/bid02.png" alt="" />
            <h2>100</h2>
            <h3>Items Won</h3>
          </div>
          <div className="main-page-box1">
            <img src="/Images/dash/bid03.png" alt="" />
            <h2>45</h2>
            <h3>Favorites</h3>
          </div>
        </div>
      </div>
      <div className="dashboard-tabs">
        <h1>Biding History</h1>
        <div className="tabs">
          <button
            onClick={() => handleTabClick("tab1")}
            className={activeTab === "tab1" ? "active" : ""}>
            Current
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={activeTab === "tab2" ? "active" : ""}>
            Pending
          </button>
          <button
            onClick={() => handleTabClick("tab3")}
            className={activeTab === "tab3" ? "active" : ""}>
            History
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <Current />
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <Pending />
            </div>
          )}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
