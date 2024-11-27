import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMails } from "../../../Features/email/emailSlice";

const EmailTab = () => {
    const dispatch = useDispatch();
  const { emails } = useSelector((state) => state.emails);;

  useEffect(() => {
    dispatch(getAllMails());
  }, [dispatch]);

  if (!Array.isArray(emails)) {
    return <div className="max-width">No emails available</div>;
  }


  return (
    <div className="current-table product-table">
    <h1>Contact Form Details</h1>
    <table>
      <thead>
        <tr>
          <th>Emails</th>
        </tr>
      </thead>
      <tbody>
        {emails?.map((user) => (
          <tr>
            <td>{user.email}</td>
            {/* <td><AiTwotoneDelete fontSize={25} /></td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default EmailTab