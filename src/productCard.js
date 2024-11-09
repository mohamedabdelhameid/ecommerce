import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './product.css';
import './homeapi.css';
import { addToCart } from './cartSlice';
import { useDispatch } from 'react-redux'


function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    // <div className="div-0" id="pproducct">
    <>
      {/* {products && products.map((product)=>( */}
        <div class="div-1 bblockk">
          <img src={product.image} onClick={()=>{
            navigate(`/product/${product.id}`)
          }} alt="" />
          <div class="div2flex">
          <p id="title">{product.title}</p>
            <p id="Price">{product.price}</p>
            <div class="btns">
              <button id="btn-1" className='btn btn-primary' style={{width:'100%'}} onClick={()=>{
                dispatch(addToCart(product));
                navigate("/buys")
              }} class="btn btn-primary">إشتري الآن</button>
              {/* <button id="btn-2" onClick={()=>{
                navigate("/favoritesProduct")
              }} class="btn btn-success">إضافة إلى المفضلة</button> */}
            </div>
          </div>
        </div>
    {/* </div> */}
    </>
  );
}

export default ProductCard