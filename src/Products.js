import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
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
import img1 from "./Image/services/OIP_9_-removebg-preview.png";
import Sservicess from "./services";
import { Link, useNavigate } from "react-router-dom";
import "./logoCom.css";
import anime from 'animejs/lib/anime.es.js';
// import CopyRight from './copyRight';
// import CopyRight from "./copyRight";
import './product.css';
// import { useDispatch, useSelector } from "react-redux";



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






export default function Ffetch() {


  // const product = useSelector(state => state.json)
  // console.log("=====================================================");
  // console.log(product);
  // const dispatch = useDispatch(getProducts());
  
  // const [loading, setLoading] = useState(false);
  const [products,getProducts] = useState(null);

  useEffect(()=>{
    // Using fetch to get all products
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
      console.log(json); // Display the fetched product data
      // You can process the data further (e.g., update state in a React component)
      getProducts(json)
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });

  },[])

  const navigate = useNavigate();
  const load=document.getElementById('pproducct');
  if(load === ''){
    var myPath = anime.path('svg path');
    var path = anime.path('.motion-path-demo path');
  
  anime({
    targets: '.motion-path-demo .el',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
    loop: true
  });
  }
  else{
    
  return (
    <Container>
      
            <Prroducct />
          <div className="div-0" id="pproducct">
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
  )
}

//   return (
//     <Container>
      
//             <Prroducct />
//           <div className="div-0" id="pproducct">
//             {products && products.map((product)=>(
//               <div class="div-1">
//                 <img src={product.image} onClick={()=>{
//                   navigate("/productDetails")
//                 }} alt="" />
//                 <div class="div2flex">
//                 <p id="title">{product.title}</p>
//                   <p id="Price">{product.price}</p>
//                   <div class="btns">
//                     <button id="btn-1" onClick={()=>{
//                       navigate("/yourProduct")
//                     }} class="btn btn-primary">إشتري الآن</button>
//                     <button id="btn-2" onClick={()=>{
//                       navigate("/favoritesProduct")
//                     }} class="btn btn-success">إضافة إلى المفضلة</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//             }
//           </div>




// {/* <div class="div-1">
//               <img src="${product.image}" alt="">
//               <div class="div2flex">
//               <p id="title">${product.title}</p>
//                 <p id="Price">${product.price}$</p>
//                 <div class="btns">
//                 <button id="btn-1" onclick="btn10()" class="btn btn-primary">إشتري الآن</button>
//                 <button id="btn-2" onclick="add2()" class="btn btn-success">إضافة إلى المفضلة</button>
//                 </div>
//               </div>
//             </div>
//              */}

//       <CopyRight />
//     </Container>
//   );
}