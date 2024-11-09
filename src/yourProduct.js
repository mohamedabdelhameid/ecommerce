import Logo from "./logocom";
import "./logoCom.css"
import './login.css';
import { Container } from "react-bootstrap";
import CopyRight from "./copyRight";
import { Ffetch } from "./homeApi";
import { Prroducct } from "./homeApi";



export function Buys(data){
  return(
    <>
      <div>
        <img src={this.image}/>
      </div>
    </>
  )
}

function YourProduct(){
  return(
    <>
      <div className='Conn1'>
      <Container style={{backgroundColor:"rgba(255, 255, 255, 0.572)",borderRadius:"15px"}}>
            <Logo />
      </Container>
      {/* <Container style={{backgroundColor:"rgba(255, 255, 255, 0.572)",borderRadius:"15px"}}>
        <CopyRight />
      </Container> */}
        {/* <Buys /> */}
      </div>
      {/* <Logo /> */}
    </>
  )
}


export default YourProduct;