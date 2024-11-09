import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./Image/download-removebg-preview (3).png";
import { Link, useNavigate } from "react-router-dom";


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
                {/* <Link to="/buys" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-cart-shopping i5i" title="product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link> */}
              <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}>
              {/* <i class="fa-brands fa-product-hunt"></i> */}
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


function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <Prroducct />
      <div className="cart">
        {cart.length === 0 ? (
          <h1 className='text-danger p-2'>Your cart is empty</h1>
        ) : (
          <ol type='1'>
            {cart.map(item => (
              <li key={item.id} style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                {item.title} - {item.price}$
                <button onClick={() => handleRemoveFromCart(item.id)} className='btn btn-danger'>Remove</button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Container>
  );
}

export default Cart;