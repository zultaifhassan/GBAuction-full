import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, clearState } from "../../../Features/product/productSlice";
import { toast, ToastContainer } from "react-toastify";
import {useForm} from 'react-hook-form'
const ProductForm = () => {
  const dispatch = useDispatch();
  const { loading, success } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.login);
  const [image,setImage] = useState(null)



  const {register,handleSubmit, reset} = useForm()
  const handleProductSubmit = (values) => {
    // e.preventDefault();
    const formData = new FormData();

    formData.append('title',values.name)
    formData.append('price',values.price)
    formData.append('description',values.description)
    formData.append('image',image)
    formData.append('category',values.category)
    formData.append('date',values.date)
    dispatch(createProduct({ token: user.token, data: formData }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Product Added Successfully !", {
        position: "top-right",
      });
      reset(undefined);
      dispatch(clearState());
    }
  }, [success, reset, dispatch]);

  if (!user?.token) {
    return <p>Please log in to create a product.</p>;
  }

  return (
    <div className="product-form-outer">
      <ToastContainer />
      <h1>Product Details</h1>
      <form onSubmit={handleSubmit(handleProductSubmit)}>
        <div className="product-form-inner">
          <label>Product Name</label>
          <input type="text" placeholder="Product Name" required {...register('name')} />
        </div>
        <div className="price-category">
          <div className="product-form-inner">
            <label>Price</label>
            <input type="number" placeholder="Price" required {...register('price')}/>
          </div>
          <div className="product-form-inner">
            <label>Category</label>
            <select name="category" required {...register('category')}>
              <option disabledy>Select Category</option>
              <option value="Vehicles">Vehicle</option>
              <option value="Jewelery">Jewelry</option>
              <option value="Real Estate">Real Estate</option>
            </select>
          </div>
        </div>
        <div className="product-form-inner">
          <label>Description</label>
          <textarea type="text" placeholder="Description" required {...register('description')} />
        </div>
        <div className="price-category">
          <div className="product-form-inner">
            <label>Picture</label>
            <input type="file" name="image" required onChange={(e)=>{
              setImage(e.target.files[0])
            }}/>
          </div>
          <div className="product-form-inner">
            <label>Select End Date</label>
            <input type="date" placeholder="Select End Date" required {...register('date')}/>
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
