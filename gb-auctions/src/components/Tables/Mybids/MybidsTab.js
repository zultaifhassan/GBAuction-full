import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  clearState,
} from "../../../Features/product/productSlice";
import { toast } from "react-toastify";
import "./bids.css";
import { getProductBids } from "../../../Features/bidding/biddingSlice"
import Popup from "../../../components/Popup/Popup"

const MybidsTab = () => {
  const dispatch = useDispatch();
  const { products, loading, error, delSuccess, delError } = useSelector(
    (state) => state.products
  );
  const { bids, getLoading, getError } = useSelector((state) => state.bids);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
    if (delSuccess) {
      console.log("here");
      toast.success("Product Deleted Successfully !", {
        position: "top-right",
      });
      dispatch(clearState());
    }
    if (delError) {
      toast.error(delError, {
        position: "top-right",
      });
    }
  }, [dispatch, delSuccess, delError]);

  if (!Array.isArray(products)) {
    return <div className="max-width">No products available</div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="product-table bids-tables">
      <h1>Bids Details</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {/* <th>Description</th> */}
            <th>Total Bids</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr>
              <td>
                <img src={item.image} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              {/* <td>{item.description}</td> */}
              <td>{item.totalBids}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(getProductBids({ id: item._id }));
                    setPopup(true);
                  }}>View Bids</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popup && (
        <Popup popUp={popup} setPopUp={setPopup}>
          <div className="pop-up-users">
            {getLoading ? (
              <h1>Loading</h1>
            ) : !getError ? (
              <table>
                <thead>
                  <tr>
                    <th>Bidder Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>CNIC</th>
                    <th>Bid Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bids?.map((bid) => (
                    <tr>
                      <td>{bid.user_id.name}</td>
                      <td>{bid.user_id.email}</td>
                      <td>{bid.user_id.phone}</td>
                      <td>{bid.user_id.cnic}</td>
                      <td>${bid.bid_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1>{getError}</h1>
            )}
          </div>
        </Popup>
      )}
    </div>
  );
};

export default MybidsTab;
