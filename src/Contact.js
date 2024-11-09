import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Logo from './logocom';
import "./logoCom.css";
import './login.css';
import { Link } from 'react-router-dom';
import "./homeapi.css";
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import "./contact.css"
import CopyRight from "./copyRight";
import imgg from "./Image/download1.png"


function TextControlsExample() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0eeea7b5-c3d9-4b15-bc38-19a9261723be");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
      <div className='div14Grid gridding'>
      <div className='onE'>
        <img src={imgg} width="100%"/>
      </div>
      {/* <div className='TWo'> */}
      <form onSubmit={onSubmit} className='TWo'>
        <input type="text" name="name" placeholder="YOUR Name" required/>
        <input type="text" name="From" value="From Quick Shopping" hidden/>
        <input type="email" name="email" placeholder="YOUR EMAIL" required/>
        <textarea name="message" rows="5" placeholder="YOUR MESSAGE" required></textarea>
        <button type="submit" className='btn btn-success'>Submit</button>
      </form>
      {/* </div> */}
      </div>
  );
}










function Contaction(){



  return(
    <>
      <div className="Conn">
        <Container style={{backgroundColor: "rgba(255, 255, 255, 0.572)",borderRadius: "15px",}} >
          <Row>
            <Col sm={8} md={9} >
              <Logo/>
            </Col>
              <Col style={{alignContent:"center",width:"fit-content",direction:"rtl"}}>
              <div className="DivVid">
              {/* <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}> */}
                  {/* Services */}
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
              {/* <Link to="/contact" style={{color:"#75237f",textDecoration: 'none'}}> */}
                  {/* Services */}
                  {/* <i className="fa-solid fa-comment i5i" title="Contact" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i> */}
                  {/* <i class="fa-solid fa-house"></i> */}
                  {/* <i class="fa-solid fa-comment"></i> */}
                {/* </Link> */}
              <Link to="/Login" style={{color:"#75237f",textDecoration: 'none'}}>
                  {/* Services */}
                  <i className="fa-solid fa-right-to-bracket i5i" title="Login" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
              </Link>
              <Link to="/buys" style={{color:"#75237f",textDecoration: 'none'}}>
                  <i className="fa-solid fa-cart-shopping i5i" title="cart" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                </Link>
              <Link to="/product" style={{color:"#75237f",textDecoration: 'none'}}>
                  {/* Services */}
                  <i className="fa-brands fa-product-hunt i5i" title="Product" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                  {/* <i class="fa-brands fa-product-hunt"></i> */}
              </Link>
              <Link to="/" style={{color:"#75237f",textDecoration: 'none'}}>
                  {/* Services */}
                  <i className="fa-solid fa-house i5i" title="Home" style={{cursor:"pointer",fontSize:"25px",margin:"8px"}}></i>
                  {/* <i class="fa-solid fa-house"></i> */}
                  {/* <i class="fa-solid fa-right-to-bracket"></i> */}
                </Link>
              </div>
            </Col>
            {/* </Col> */}
          </Row>
          <div className="divNNone" id="DivPPlus"></div>
    </Container>
    </div>
        <TextControlsExample />
        <CopyRight />
  </ >
  )
}

export default Contaction;