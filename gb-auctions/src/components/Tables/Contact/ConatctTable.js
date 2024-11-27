import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact, clearState, deleteContact } from "../../../Features/contact/contactSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import "./contact.css"
import { toast } from "react-toastify";

const ConatctTable = () => {
  const dispatch = useDispatch();
  const { contacts, delError, delSuccess } = useSelector((state) => state.contactMessage);

  useEffect(() => {
    dispatch(getAllContact());
    if(delSuccess) {
      toast.success("Contact Deleted Successfully !", {
        position: "top-right",
      });
      dispatch(clearState());
    }
    if(delError) {
      toast.error(delError, {
        position: "top-right",
      });
      dispatch(clearState());
    }
  }, [dispatch, delSuccess, delError]);

  if (!Array.isArray(contacts)) {
    return <div className="max-width">No contacts available</div>;
  }

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="current-table contact-table">
      <h1>Contact Form Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.message}</td>
              <td><AiTwotoneDelete fontSize={25} onClick={()=> dispatch(deleteContact({ id :user._id}))} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConatctTable;
