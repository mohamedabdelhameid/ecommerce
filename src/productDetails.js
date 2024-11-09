// import Logo from "./logocom";
// import "./logoCom.css";
// import './login.css';
// import { Container } from "react-bootstrap";
// import CopyRight from "./copyRight";
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from './productSlice';
// import ProductCard from './productCard';
// // import React from 'react';
// // import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// function ProductDetails() {
//   const { id } = useParams();
//   const product = useSelector(state => state.products.items.find(p => p.id === parseInt(id)));

//   if (!product) {
//     return (
//       <Container>
//         <h1 style={{padding:'15px',color:"red"}}>Product not found</h1>
//       </Container>
//   )}
//   // products.map(product
//   return (
//     <Container>
//       <div className="product-details">
//         <img src={product.image} alt="" />
//         <p>{product.price}</p>
//         <p>{product.description}</p>
//         {/* Add more details as needed */}
//       </div>
//     </Container>
//   );
// }

// function Productdetails() {
//   return(
//     <>
//       <div className='Conn1'>
//         <Container style={{backgroundColor:"rgba(255, 255, 255, 0.572)",borderRadius:"15px"}}>
//           <Logo />
//         </Container>
//             <ProductDetails />
//       </div>
//     </>
//   )
// }


// export default Productdetails;


// import Logo from "./logocom";
// import "./logoCom.css";
// import './login.css';
import CopyRight from "./copyRight";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productSlice';
import ProductCard from './productCard';
import { useParams } from 'react-router-dom';
import './productDetail.css';
import './product.css';
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Logging from "./logging";
import Logo from "./logocom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
import "./homeapi.css";
import Button from "react-bootstrap/Button";
// import CopyRight from './copyRight';
import img from "./Image/download-removebg-preview (3).png";
import img1 from "./Image/services/OIP_9_-removebg-preview.png";
import Sservicess from "./services";
import { Link, useNavigate } from "react-router-dom";
import "./logoCom.css";
import anime from 'animejs/lib/anime.es.js';


export function Prroducct(){
  return(
    <Container className="divmAin">
      <Row style={{width:"100%",color:"#f6f6f6"}}>
            <Col sm={8} md={7}>
              <h1 className="h12centert" style={{color:"rgba(107, 3, 107, 0.86)"}}>
                <img src={img} width="50px"/>
                Product</h1>
            </Col>
            <Col style={{alignContent:"center",width:"fit-content",direction:"rtl"}}>
              <div className="DivVid">
                  <i className="fa-solid fa-bars i5i i2nonnne" id="Closse" title="Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px",color:"#75237f"}} onClick={()=>{
                    let plus=document.getElementById('DivPPlus');
                    let closeE=document.getElementById('Closse');
                    
                      if(plus.innerHTML === ''){

                        plus.innerHTML = `
                        <a href="/" style={color: #75237f; text-decoration: none;}>
                              <h5>Home</h5>
                        </a>
                        <a href="/product" style={color: #75237f; text-decoration: none;}>
                              <h5>Product</h5>
                        </a>
                        <a href="/buys" style={color: #75237f; text-decoration: none;}>
                              <h5>Cart</h5>
                        </a>
                        <a href="/contact" style={color: #75237f; text-decoration: none;}>
                              <h5>Contact</h5>
                        </a>
                        <a href="/Login" style={color: #75237f; text-decoration: none;}>
                              <h5>Login</h5>
                        </a>
                        `
                      closeE.setAttribute('class','fa-solid fa-xmark i5i');
                      plus.setAttribute('class','divNNone2')
                      }
                      else{
                        plus.innerHTML = '';
                        closeE.setAttribute('class','fa-solid fa-bars i5i');
                      }

                  }} ></i>


              <Link to="/Login" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-right-to-bracket i5i" title="Login" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
              </Link>
              <Link to="/contact" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-comment i5i" title="Contact" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link>
              <Link to="/buys" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-cart-shopping i5i" title="cart" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link>
              <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-brands fa-product-hunt i5i" title="product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link>
              <Link to="/" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-house i5i" title="Home" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="divNNone" id="DivPPlus"></div>
    </Container>
  )
}




function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const product = useSelector(state => state.products?.items?.find(p => p.id === parseInt(id)) || []);

  // const product = useSelector(state => state.products?.items?.find(p => p.id === parseInt(id)));

  if (!product) {
    return (
      <Container>
        <h1 style={{ padding: '15px', color: "red" }}>Product not found</h1>
      </Container>
    );
  }

  return (
    <Container>
      <div className="product-details">
        <div>
          <img src={product.image} alt={product.name || "Product Image"} />
        </div>
        <div style={{alignContent:'center'}} className="vover">
          <h3>{product.category}</h3>
          <h4 style={{paddingLeft:"10px"}}>{product.title}</h4>
          <p style={{paddingLeft:"15px"}}>{product.description}</p>
          <span style={{fontSize:'40px'}}>Price : </span>
          <p className="pricing">{product.price}$</p>
        </div>
      </div>
    </Container>
  );
}

function ProductDetailsContainer() {
  return (
    <>
      <div className='Con'>
        <Container style={{ backgroundColor: "rgba(255, 255, 255, 0.572)", borderRadius: "15px" }}>
          <Prroducct />
        </Container>
      </div>
        <ProductDetails />
    </>
  );
}

export default ProductDetailsContainer;
