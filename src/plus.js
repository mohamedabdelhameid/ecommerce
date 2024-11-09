import { Container } from "react-bootstrap";
// import imgg from "./Image/OIP.jpeg"
// import imgg2 from "./Image/OIP (1).jpeg"
import imgg from "./Image/logo.png"
import imggjp from "./Image/rolling-jackass.gif"
import imgg3 from "./Image/OIP__2_-removebg-preview.png"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./plus.css";

function Plus(){
  return(
    <div className="Div2Home">
      <Container className="Cont2HomePlus">
        <div className="Div52plus">
          <h1>
            <img src={imggjp} width="100px" className="Lologo"/>
            Quick Shopping
            </h1>
          <p>Grow Your Business With Our Unified Platform. Start Your Free Trial Now. Quick & Easy Setup - Everything You Need To Start Selling Online Today.</p>
          <p>You have to Login to make what you want in Quick Shopping.</p>
          <Link to="/newlogin" className='Linkk1'>
            <Button variant='success' style={{marginLeft:"5px"}}>
              ADD NEW CLIENT
            </Button>
          </Link>
          <Link to="/product" className='Linkk1'>
            <Button variant='success' style={{marginLeft:"5px"}}>
              GO TO PRODUCTS
            </Button>
          </Link>
        </div>
        <img src={imgg3} width="100%" className="img2none"/>
      </Container>
    </div>
  )
}

export default Plus;