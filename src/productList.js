import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productSlice';
import ProductCard from './productCard';
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./homeapi.css";
import Button from "react-bootstrap/Button";
import CopyRight from './copyRight';
import img from "./Image/download-removebg-preview (3).png";
import Sservicess from "./services";
import { Link, useNavigate } from "react-router-dom";
import "./logoCom.css";
import './product.css';
import { Prroducct } from './Products';
import './product.css';
import './homeapi.css';
import Spinner from 'react-bootstrap/Spinner';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const productStatus = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  const navigate = useNavigate();
  const load=document.getElementById('pproducct');

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = <div style={{width:"100%",margin:'auto',textAlign:'center',gridColumn:'1/5',padding:'15px'}}>
      <Spinner animation="border" variant="success" />
    </div>;
  } else if (productStatus === 'succeeded') {
    content = products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));
  } else if (productStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="product-list">
      <Container>
      
      <Prroducct />
    {/* <div className="div-0" id="pproducct">
      {products && products.map((product)=>(
        <div class="div-1 bblockk">
          <img src={product.image} onClick={()=>{
            navigate("/productDetails")
          }} alt="" />
          <div class="div2flex">
          <p id="title">{product.title}</p>
            <p id="Price">{product.price}</p>
            <div class="btns">
              <button id="btn-1" onClick={()=>{
                navigate("/yourProduct")
              }} class="btn btn-primary">إشتري الآن</button>
              <button id="btn-2" onClick={()=>{
                navigate("/favoritesProduct")
              }} class="btn btn-success">إضافة إلى المفضلة</button>
            </div>
          </div>
        </div>
      ))
      }
    </div> */}
    <div className="div-0" id="pproducct">
      {content}
    </div>



{/* <div class="div-1">
        <img src="${product.image}" alt="">
        <div class="div2flex">
        <p id="title">${product.title}</p>
          <p id="Price">${product.price}$</p>
          <div class="btns">
          <button id="btn-1" onclick="btn10()" class="btn btn-primary">إشتري الآن</button>
          <button id="btn-2" onclick="add2()" class="btn btn-success">إضافة إلى المفضلة</button>
          </div>
        </div>
      </div>
       */}

<CopyRight />
</Container>
    </div>
  );
}

export default ProductList;