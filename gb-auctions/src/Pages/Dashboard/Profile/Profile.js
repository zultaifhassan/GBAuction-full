import React from "react";
import "./Profile.css";
import { Edit2 } from "react-feather";
import { useSelector } from "react-redux";

const Profile = () => {
  const  {user}  = useSelector((state) => state.login);
  return (
    <div className="profile-main-div">
      <div className="head-edit-dash">
        <h1>Personal Details</h1>
        <button><Edit2 fontSize={10} /> Edit</button>
      </div>
      <div className="personal-details-div">
        <h2>Name</h2>
        <h2>{user.user.name}</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Date of Birth</h2>
        <h2>15-03-1974</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Email Address</h2>
        <h2>{user.user.email}</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Phone</h2>
        <h2>{user.user.phone}</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Role</h2>
        <h2>{user.user.role}</h2>
      </div>
      <div className="personal-details-mail">
        <h2>CNIC Number</h2>
        <h2>{user.user.cnic}</h2>
      </div>
      <div className="personal-details-mail">
        <h2>Address</h2>
        <h2>{user.user.address}</h2>
      </div>
    </div>
  );
};

export default Profile;
