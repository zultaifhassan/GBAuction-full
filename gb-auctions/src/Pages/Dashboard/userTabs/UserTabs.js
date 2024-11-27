import React, { useState} from "react";
import ProductForm from "../../Admindashboard/ProductForm/ProductForm";
import "./usertab.css";
import Product from "../../../components/Tables/Product/Product";

const UserTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="user-tabs">
        <h1>Products Detail</h1>
        <div className="tabs">
          <button
            onClick={() => handleTabClick("tab1")}
            className={activeTab === "tab1" ? "active" : ""}>
            Products List
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={activeTab === "tab2" ? "active" : ""}>
            Add Product
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <Product />
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <ProductForm />
            </div>
          )}
        </div>
      </div>
  );
};

export default UserTabs;
