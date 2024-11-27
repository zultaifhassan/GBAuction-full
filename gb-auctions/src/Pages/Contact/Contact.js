import React, { useEffect } from "react";
import "./Contact.css";
import { User, Mail, MessageSquare } from "react-feather";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearState, contactMessage } from "../../Features/contact/contactSlice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.contactMessage
  );
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  const handleContact = (values) => {
    dispatch(contactMessage(values));
  };

  useEffect(() => {
    if (error) {
      toast.error("Error Occured", {
        position: "top-right",
      });
      reset(undefined)
      dispatch(clearState());
    }
    if (success) {
      toast.success("submitted", {
        position: "top-right",
      });
      reset(undefined)
      dispatch(clearState());
    }
  }, [dispatch, error, success]);

  

  return (
    <>
      <Navbar />
      <div className="contact-page-outer">
        <div className="max-width contact-page-inner">
              <ToastContainer />
          <div className="contact-page">
            <form onSubmit={handleSubmit(handleContact)}>
              <h2>Contact Us</h2>
              <h1>Get In Touch</h1>
              <p>
                Have inquiries or feedback? We're all ears! Reach out to us and
                let's
                <br /> start a conversation.
              </p>
              <div className="contact-page-inputs">
                <span>
                  <User />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    {...register("name", { required: true })}
                  />
                </span>
                <span>
                  <Mail />
                  <input
                    type="mail"
                    placeholder="Your Mail"
                    required
                    {...register("email", { required: true })}
                  />
                </span>
                <span>
                  <MessageSquare />
                  <input
                    type="text"
                    placeholder="Your Message"
                    required
                    {...register("message", { required: true })}
                  />
                </span>
              </div>
              <button>{loading ? "Loading..." : "Submit"}</button>
            </form>
            <div className="contcat-page-left">
              <img src="/Images/contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
