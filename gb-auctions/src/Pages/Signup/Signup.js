import React, { useEffect } from "react";
import "../Login/Login.css";
import { User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Features/auth/SignupSlice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.signUp);

  const handleSignup = (values) => {
    dispatch(signup(values));
  };
  useEffect(() => {
    if (error) {
      toast.error("Error Occured", {
        position: "top-right",
      });
    }
    if (success) {
      toast.success("Signup successfully!", {
        position: "top-right",
      });
      navigate("/login");
      reset(undefined);
    }
  }, [error, success, navigate, reset]);

  return (
    <>
      <Navbar />
      <div className="login-page-outer">
        <div class="max-width">
          <div className="login-page-inner">
            <ToastContainer />
            <div className="login-account">
              <form onSubmit={handleSubmit(handleSignup)}>
                {/* {error && <div className="error-message">{error}</div>} */}
                <h1>Create Account Now</h1>
                <p>We're happy you're here!</p>
                <h2>Signup To GB Auction</h2>
                <div className="login-inputs">
                  <span>
                    <User fontSize={30} />
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      required
                      {...register("name", { required: true })}
                    />
                  </span>
                  <span>
                    <IoMailOutline fontSize={25} />
                    <input
                      type="email"
                      placeholder="Enter your Mail"
                      required
                      {...register("email", { required: true })}
                    />
                  </span>
                  <span>
                    <CiPhone fontSize={30} />
                    <input
                      type="number"
                      placeholder="Enter your Phone"
                      required
                      {...register("phone", { required: true })}
                    />
                  </span>
                  <span>
                    <HiOutlineIdentification fontSize={30} />
                    <input
                      type="number"
                      placeholder="Enter your CNIC"
                      required
                      {...register("cnic", { required: true })}
                    />
                  </span>
                  <span>
                    <FiMapPin fontSize={30} />
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      required
                      {...register("address", { required: true })}
                    />
                  </span>
                  <span>
                    <FiLock fontSize={30} />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      minLength={8}
                      {...register("password", { required: true })}
                    />
                  </span>
                  <button>{loading ? "Loading..." : "Signup"}</button>
                </div>
              </form>
              <div className="login-left-side">
                <div className="login-left-text">
                  <img src="/Images/logo-02 (1).svg" alt="" />
                  <h1>ALREADY HAVE AN ACCOUNT?</h1>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
