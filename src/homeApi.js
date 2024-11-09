import { Col, Container, Row } from "react-bootstrap";
import Logging from "./logging";
import Logo from "./logocom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./homeapi.css";
import Button from "react-bootstrap/Button";
import CopyRight from './copyRight';
import Plus from "./plus";
// import { Container, Row } from "react-bootstrap";
// import "./copyRight.css"
import img from "./Image/download-removebg-preview (3).png";
import Sservicess from "./services";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./logoCom.css"
// import Ffetch from "./Products";
// import YourProduct, { Buys } from "./yourProduct";
// import { useDispatch, useSelector } from "react-redux";
// import  Users  from "./rtk/slices/slice";
// import { configureStore, Tuple } from '@reduxjs/toolkit'
// import getProducts from './redux/features/userSlice';


// let product;




// function Search(data){
//   if(product.category){

//   }
// }




function FetchApi() {
  // const dispatch = useDispatch(getProducts());
  // const products = useSelector((state) => state.product.data)
  const navigate = useNavigate();

  return (
    <>
      {/* <Logging /> */}
      <div className="Conn">
        <Container
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.572)",
            borderRadius: "15px",
          }}
        >
          <Row>
            <Col sm={8} md={9} >
              <Logo/>
            </Col>
            {/* <Col> */}
            {/* <Col style={{alignContent:"center",width:"fit-content",direction:"rtl"}}> */}
                {/* <i className="fa-solid fa-bars i1i" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                {/* <Link to="/Userinformation" style={{color:"#75237f"}}>
                  {/* user information */}
                  {/* <i className="fa-solid fa-user i2i" title="User Information" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                {/* </Link> */}
                {/* <Link to="/FavoritesProduct" style={{color:"#75237f"}}> */}
                  {/* Favorites */}
                  {/* <i className="fa-solid fa-star i3i" title="Favorites Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}> */}
                  {/* {/* <span className="numberofproduct">0</span> */}
                  {/* </i> */}
                {/* </Link> */}
                {/* <Link to="/YourProduct" style={{color:"#75237f"}}> */}
                  {/* Your Product */}
                  {/* <i className="fa-solid fa-cart-shopping i4i" title="Your Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}> */}
                    {/* <span className="numberofproduct">0</span> */}
                  {/* </i> */}
                {/* </Link> */}
                {/* <Link to="/login" style={{color:"#75237f",textDecoration: 'none'}}> */}
                  {/* Services */}
                  {/* <i className="fa-solid fa-right-to-bracket i4i" title="Login" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
                  {/* <i class="fa-solid fa-right-to-bracket"></i> */}
              {/* </Link> */}
                {/* <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}> */}
                  {/* Services */}
                  {/* <i className="fa-brands fa-product-hunt i5i" title="Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
                {/* </Link> */}
                {/* <Link to="/" style={{color:"#75237f"}}>
                  {/* Services */}
                  {/* <i className="fa-solid fa-house i5i" title="Home" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                  {/* <i class="fa-solid fa-house"></i> */}
                {/* </Link>  */}
              {/* </Col> */}
              <Col style={{alignContent:"center",width:"fit-content",direction:"rtl"}}>
              <div className="DivVid">
              {/* <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}> */}
                  {/* Services */}
                  <i className="fa-solid fa-bars i5i i2nonnne" id="Closse" title="Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px",color:"#75237f"}} onClick={()=>{
                    let plus=document.getElementById('DivPPlus');
                    let closeE=document.getElementById('Closse');
                    
                      if(plus.innerHTML === ''){

                        plus.innerHTML = `
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

                  {/* <i class=""></i> */}
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
              {/* </Link> */}
              <Link to="/Login" style={{color:"#75237f",textDecoration: 'none'}}>
                  {/* Services */}
                  <i className="fa-solid fa-right-to-bracket i5i" title="Login" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
              </Link>
              <Link to="/contact" style={{color:"#75237f",textDecoration: 'none'}}>
                  {/* Services */}
                  <i className="fa-solid fa-comment i5i" title="Contact" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                  {/* <i class="fa-solid fa-house"></i> */}
                  {/* <i class="fa-solid fa-comment"></i> */}
                </Link>
                <Link to="/buys" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-cart-shopping i5i" title="cart" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link>
              <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}>
                  {/* Services */}
                  <i className="fa-brands fa-product-hunt i5i" title="Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
              </Link>
              </div>
            </Col>
            {/* </Col> */}
          </Row>
          <div className="divNNone" id="DivPPlus"></div>
        </Container>
        <Plus />
        {/* <Ffetch /> */}
        {/* <Sservicess /> */}
        <CopyRight />
      </div>
    </>
  );
}

export default FetchApi;
