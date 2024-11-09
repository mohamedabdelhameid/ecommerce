import imgg from "./Image/logo.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';

// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./logoCom.css"
import Userinformation from "./userInformation";


function Logo(){
  return(
    <>
      <Container>
        <Row>
              <Col sm={8} md={9} style={{width:"fit-content"}}>
                <img src={imgg} width="80px" className="imgggg"/>
                <h2 style={{display:'inline-block',color:"rgba(107, 3, 107, 0.86)",width:"fit-content"}}>
                        <span>Quick Shopping</span>
                </h2>
              </Col>
              {/* <Col style={{alignContent:"center",width:"fit-content",direction:"rtl"}}> */}
                {/* <i className="fa-solid fa-bars i1i" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                {/* <Link to="/Userinformation" style={{color:"#75237f"}}> */}
                  {/* user information */}
                  {/* <i className="fa-solid fa-user i2i" title="User Information" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                {/* </Link> */}
                {/* <Link to="/FavoritesProduct" style={{color:"#75237f"}}> */}
                  {/* Favorites */}
                  {/* <i className="fa-solid fa-star i3i" title="Favorites Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                {/* </Link> */}
                {/* <Link to="/YourProduct" style={{color:"#75237f"}}> */}
                  {/* Your Product */}
                  {/* <i className="fa-solid fa-cart-shopping i4i" title="Your Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                {/* </Link> */}
                {/* <Link style={{color:"#75237f"}}> */}
                  {/* Services */}
                  {/* <i className="fa-brands fa-servicestack i5i" title="Services" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}} onClick={()=>{ */}
                     {/* window.scroll({ */}
                      {/* // top:10000, */}
                      {/* // behavior:"smooth" */}
                    {/* // }) */}
                  {/* }}></i> */}
                {/* </Link> */}
              {/* </Col>
              {/* <Col style={{alignContent:"center",width:"fit-content"}}>
                <Link>
                </Link>
              </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default Logo;