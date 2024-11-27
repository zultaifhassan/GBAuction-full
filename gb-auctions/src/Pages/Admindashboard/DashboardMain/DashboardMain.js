import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getTotalEmails } from "../../../Features/email/emailSlice";
import { getTotalUsers } from "../../../Features/user/userSlice";
import { PiUsersThreeLight } from "react-icons/pi";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { CiShoppingCart } from "react-icons/ci";
import { getTotalProducts } from "../../../Features/product/productSlice";
import { TbMessageSearch } from "react-icons/tb";
import { getTotalContacts } from "../../../Features/contact/contactSlice";
import { getTotalReviews } from "../../../Features/review/reviewSlice";
import { GoCodeReview } from "react-icons/go";

const DashboardMain = () => {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { total } = useSelector((state) => state.emails);
  const { numberU } = useSelector((state) => state.fetchUsers);
  const { totalP } = useSelector((state) => state.products);
  const { totalC } = useSelector((state) => state.contactMessage);
  const { totalR } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getTotalEmails());
    dispatch(getTotalUsers());
    dispatch(getTotalProducts());
    dispatch(getTotalContacts());
    dispatch(getTotalReviews());
  }, [dispatch]);

  return (
    <div>
      <div className="user-dash-welcome">
        <Link to="/">
          <IoIosArrowRoundBack fontSize={30} color="palevioletred" />
          Back To Home
        </Link>
        <h2>
          Wellcome <span>{user.user.name}</span> to Admin Dashboard
        </h2>
      </div>
      <div className="main-page-dash-boxes">
        <div className="main-page-box1">
          <SiAmazonsimpleemailservice fontSize={80} color="palevioletred" />
          <h2>{total}</h2>
          <h3>Total Mails</h3>
        </div>
        <div className="main-page-box1">
          <PiUsersThreeLight fontSize={80} color="palevioletred" />
          <h2>{numberU}</h2>
          <h3>Total Users</h3>
        </div>
        <div className="main-page-box1">
          <CiShoppingCart fontSize={80} color="palevioletred" />
          <h2>{totalP}</h2>
          <h3>Total Products</h3>
        </div>
        <div className="main-page-box1">
          <TbMessageSearch fontSize={80} color="palevioletred" />
          <h2>{totalC}</h2>
          <h3>Total Messages</h3>
        </div>
        <div className="main-page-box1">
          <GoCodeReview  fontSize={80} color="palevioletred" />
          <h2>{totalR}</h2>
          <h3>Total Reviews</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
