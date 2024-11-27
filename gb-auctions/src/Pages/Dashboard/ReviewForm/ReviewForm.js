import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { createReview, clearState } from "../../../Features/review/reviewSlice";
import "./review.css";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.reviews);
  const { user } = useSelector((state) => state.login);

  const { register, handleSubmit, reset } = useForm();

  const handleReviewSubmit = (values) => {
    dispatch(createReview({ token: user.token, data: {...values} }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Review Posted Successfully !", {
        position: "top-right",
      });
    }
    if (error) {
      toast.error(error, {
        position: "top-right",
      });
    }
    reset(undefined);
    dispatch(clearState());
  }, [success, reset, error, dispatch]);

  if (!user?.token) {
    return <p>Please log in to post Review.</p>;
  }

  return (
    <div className="review-form">
      <div className="product-form-outer">
        <ToastContainer />
        <h1>Add Review About Website</h1>
        <form onSubmit={handleSubmit(handleReviewSubmit)}>
          <div className="product-form-inner">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name")}
            />
          </div>
          <div className="product-form-inner">
            <label>Review</label>
            <textarea
              type="text"
              placeholder="Write Review"
              {...register("message")}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
