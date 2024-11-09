import './login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import img from "./Image/login-removebg-preview.png"
import { Container, FormGroup } from 'react-bootstrap';
import Logo from './logocom';
import BasicExample1 from './submitt';
import { BrowserRouter, Link, navigate, Route, Routes } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logging1 from './loginPast';
import CopyRight from './copyRight';
import { useState } from 'react';
// import './validation'
import Validation from './validation';
import { useNavigate } from "react-router-dom";

export function BasicExample() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}));
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email==='' && errors.password===''){
      navigate('/login')
    }
  }
  return (
    <Form action='' onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} className="mb-3">
        <Form.Label><strong>First Name</strong></Form.Label>
        <Form.Control type="text" placeholder="First Name" id='inpt1' required />
      </Form.Group>

      <Form.Group as={Col} className="mb-3" >
        <Form.Label><strong>Last Name</strong></Form.Label>
        <Form.Control type="text" placeholder="Last Name" id='inpt2' required />
      </Form.Group>

        <Form.Group>
          <Form.Label><strong>Email <span className='text-danger'>*</span></strong></Form.Label>
          <Form.Control onChange={handleInput} type="email" name='email' placeholder="Enter email" id='inpt3'/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Password <span className='text-danger'>*</span></strong></Form.Label>
          <Form.Control onChange={handleInput} type="password" minLength='8' maxLength='15' placeholder="Password" name='password' id='inpt4'/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </Form.Group>

      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label><strong>Country</strong></Form.Label>
          <Form.Control placeholder="Egypt" id='inpt5' required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label><strong>Gender</strong></Form.Label>
          <Form.Select defaultValue="Gender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>

      </Row>

    {/* <FormGroup> */}
    <Button variant='success' type='submit'>
      {/* {<Link to="/login" className='Linkk1' type='submit' onClick={()=>{
        
      }}>Login</Link>} */}
      Login
    </Button>
    <Link to="/login" className='Linkk1'>
      <Button variant='success' style={{marginLeft:"5px"}}>
        Have an account
      </Button>
    </Link>
{/* </FormGroup> */}
      {/* <Button variant="success" style={{padding:"10px 20px"}} onClick={()=>{
        let fName = document.getElementById("inpt1");
        let lName = document.getElementById("inpt2");
        let email = document.getElementById("inpt3");
        let pass = document.getElementById("inpt4");
        let country = document.getElementById("inpt5");

        let arrProject;
          if(localStorage.product != null){
            arrProject = JSON.parse(localStorage.product);
          }else{
            arrProject = [];
          }
          
          let opProject = {
            firstName: fName.value,
            lastName: lName.value,
            Email: email.value,
            Password: pass.value,
            Country: country.value,
          }
          arrProject.push(opProject);
          localStorage.setItem("product",JSON.stringify(arrProject))
          console.log(arrProject);

        console.log(fName.value);
        console.log(lName.value);
        console.log(email.value);
        console.log(pass.value);
        console.log(country.value);
      }}>
        Login
      </Button> */}
      {/* <Button variant="success" type="submit" style={{padding:"10px 10px",marginLeft:"5px"}}>
                    Have an account
      </Button> */}
    </Form>
  );
}

function Logging(){
  return(
    <>
      <div className='Conn1'>
          <Container style={{backgroundColor:"rgba(255, 255, 255, 0.572)",borderRadius:"15px"}}>
            <Logo />
          </Container>
      </div>
      <div className='mainDiv'>
        <div className="mainDiv2login">
          <BasicExample />
        </div>
          <img src={img} alt='noImg' className='None' width="95%" height="70%"/>
      </div>
      <CopyRight />
    </>
  )
}

export default Logging;