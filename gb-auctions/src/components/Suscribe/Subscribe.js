import React, { useEffect } from "react";
import "./Subscribe.css";
import { useDispatch, useSelector } from "react-redux";
import { createEmails, clearState } from "../../Features/email/emailSlice";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loader2 from "../Loader/Loader2";

const Subscribe = () => {

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.emails);

  const handleEmail = (values) => {
    dispatch(createEmails(values));
  };

  useEffect(() => {
    if (error) {
      toast.error("Error Occured", {
        position: "top-right",
      });
    }
    if (success) {
      toast.success("Subscribe Successfully", {
        position: "top-right",
      });
      reset(undefined);
      dispatch(clearState());
    }
  }, [dispatch, error, success, reset]);

  
  return (
    <>
    <ToastContainer />
      <div className="max-width subscribe-inner">
        <div className="subscribe-inner-content">
          <div className="subscribe-image-side">
            <img src="/Images/cat/newslater.png" alt="" />
          </div>
          <div className="subscribe-text-side">
            <form onSubmit={handleSubmit(handleEmail)}>
              <h2>Suscribe to Bid Auction</h2>
              <h1>To Get Exclusive Benefits</h1>
              <span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  {...register("email", { required: true })}
                />
                <button type="submit">
                  {loading ? "Submitting" : "Subscribe"}
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
