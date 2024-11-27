import React, { useEffect, useState } from "react";
import "./Login.css";
import { User, Lock } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { clearState, login } from "../../Features/auth/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, user, success, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (user) {
      // navigate("/dashboard/dash-main");

      if (user?.user?.role === "user") {
        navigate("/dashboard/dash-main");
      }
      if (user?.user?.role === "admin") {
        navigate("/admin/admin-main");
      }
      // if (user?.user?.role === "user") {
      //   navigate("/dashboard");
      // }
    }
    if (success) {
      toast.success("Success Notification !", {
        position: "top-right",
      });
      dispatch(clearState());
    }
    if (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: true,
      });
      dispatch(clearState());
    }
  }, [user, error, navigate, dispatch, success]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <>
      <Navbar />
      <div className="login-page-outer">
        <ToastContainer />
        <div class="max-width">
          <div className="login-page-inner">
            <div className="login-account">
              <form onSubmit={handleLogin}>
                <h1>Get Started Now</h1>
                <p>We're happy you're here!</p>
                <h2>Login To GB Auction</h2>
                <div className="login-inputs">
                  <span>
                    <User />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </span>
                  <span>
                    <Lock />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter password"
                    />
                  </span>
                  <button>{loading ? "Loading..." : "Log In"}</button>
                </div>
              </form>
              <div className="login-left-side">
                <div className="login-left-text">
                  <img src="/Images/logo-02 (1).svg" />
                  <h1>
                    IF NEW CREATE <br /> ACCOUNT?
                  </h1>
                  <Link to="/signup">
                    <button>Sign Up</button>
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

export default Login;
