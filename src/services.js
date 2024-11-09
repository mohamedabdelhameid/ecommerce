import "./services.css";
import img2 from "./Image/services/OIP_8_-removebg-preview.png";
import img3 from "./Image/services/OIP__4_-removebg-preview.png";
import img4 from "./Image/services/OIP__3_-removebg-preview.png";
import img5 from "./Image/services/OIF-removebg-preview.png";
import { Col, Container, Row } from "react-bootstrap";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import img1 from "./Image/services/OIP_9_-removebg-preview.png";

function Services(){
  return(
  <>
    <Container className="DivmAin">
      <Row style={{fontSize:"25px",color:'rgba(107, 3, 107, 0.86)'}}>
        <h1>
          <img src={img1} width="80px" />
          SERVICES</h1>
      </Row>
    </Container>
  </>
  )
}


function Sservicess(){
  return(
    <Container id="services">
        <Services />
      <Row>
        <Col className="div-5" xs={3}>
            <img src={img2} alt="" style={{width:"100%"}}/>
        </Col>
        <Col className="div-5" xs={3}>
            <img src={img3} alt="" style={{width:"100%"}}/>
        </Col>
        <Col className="div-5" xs={3}>
            <img src={img4} alt="" style={{width:"100%"}}/>
        </Col>
        <Col className="div-5" xs={3}>
            <img src={img5} alt="" style={{width:"100%"}}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Sservicess;