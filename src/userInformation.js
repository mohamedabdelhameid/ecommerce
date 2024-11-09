import Logo from "./logocom";
import "./logoCom.css";
import './login.css';
import { Container } from "react-bootstrap";
import CopyRight from "./copyRight";
// import Logo from "./logocom";



function Userinformation(){
  return(
    <>
      <div className='Conn1'>
          <Container style={{backgroundColor:"rgba(255, 255, 255, 0.572)",borderRadius:"15px"}}>
            <Logo />
          </Container>
      </div>
      {/* <Logo /> */}
    </>
  )
}

export default Userinformation;