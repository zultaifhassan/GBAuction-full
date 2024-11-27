import React, { useState } from "react";
// import "./style.css";
import { MdOutlineDashboard } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";
import { MdNetworkPing } from "react-icons/md";
import { GiThrowingBall } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Features/auth/LoginSlice";
import {toast} from "react-toastify"

const AdimSidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("home");
  const  {user}  = useSelector((state) => state.login);

    
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
    toast.success("Logged out successfully", {
      position: "top-center",
      });
    }


  return (
    <div className="dash-sidebar">
      <div className="sidebar-inner">
        <div className="image-and-name">
          <img src="/images/user.png" alt="" />
            <div className="image-and-name">
              <h1>{user.user.name}</h1>
              <p>{user.user.email}</p>
            </div>
        </div>

        <ul className="dashboard-elements">
          <li className={activeLink === "home" ? "active" : ""}>
            <Link to="admin-main" onClick={() => handleLinkClick("home")}>
              <MdOutlineDashboard className="icons" />
              Dashboard
            </Link>
          </li>
          <li className={activeLink === "profile" ? "active" : ""}>
            <Link to="admin-profile" onClick={() => handleLinkClick("profile")}>
              <GiRamProfile className="icons" />
              Personal Profile
            </Link>
          </li>
          <li className={activeLink === "product" ? "active" : ""}>
            <Link to="product-detail" onClick={() => handleLinkClick("product")}>
              <MdNetworkPing className="icons" />
              Products
            </Link>
          </li>
          <li className={activeLink === "contact" ? "active" : ""}>
            <Link to="contact-table" onClick={() => handleLinkClick("contact")}>
              <GiThrowingBall className="icons" />
              Contact
            </Link>
          </li>
          <li className={activeLink === "users" ? "active" : ""}>
            <Link to="admin-tabs" onClick={() => handleLinkClick("users")}>
              <AiFillAlert className="icons" />
              Users
            </Link>
          </li>
          
          <li onClick={handleLogout}>
            <button>
              <CiLogout className="log-icons" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdimSidebar