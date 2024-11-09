import './login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import img from "./Image/img.png"
import { Container } from 'react-bootstrap';
import Logo from './logocom';
import BasicExample1 from './submitt';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './loginPast.css'
// import BasicExample from './logging';
import CopyRight from './copyRight';
import Validation from './validation';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BasicExample } from './logging';
import { useDispatch, useSelector } from 'react-redux';
// import { handleLogin } from './rtk/fuatures/auth';



function LoginPast(){
  const navigate = useNavigate();
  


  // const dispatch = useDispatch();
  // const isLogged = useSelector((state) => state.auth.isLogged)


  const [values,setValues] = useState({
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({})
  const [errorrs,setErrorrs] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}));
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email==='' && errors.password===''){
      navigate('/')
    }
  }
  return(
    <Form action='' onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label><strong>Email <span className='text-danger'>*</span></strong></Form.Label>
            <Form.Control onChange={handleInput} type="email" placeholder="Enter email" name='email' id='inpt7'/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
          </Form.Group>
          <Form.Group>
            <Form.Label><strong>Password <span className='text-danger'>*</span></strong></Form.Label>
            <Form.Control onChange={handleInput} type="password" minLength='8' maxLength='15' placeholder="Password" name='password' id='inpt8'/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
          </Form.Group>
        </Row>
        <Button type='submit' variant='success'>
          {/* <Link to="/" className='Linkk2' type='submit'>Log in</Link> */}
          Login
        </Button>
        {/* {errorrs && <span className='text-danger'>{errorrs}</span>} */}
    </Form>
  )
}


function Logging1(){
  return(
    <>
      <div className='Conn1'>
          <Container style={{backgroundColor:"rgba(255, 255, 255, 0.572)",borderRadius:"15px"}}>
            <Logo />
          </Container>
      </div>
      <div className='mainDiv'>
        <div className="mainDiv2login">
          <LoginPast />
        </div>
          <img src={img} alt='noImg' className='None' width="100%" height="70%"/>
      </div>
      <CopyRight />
    </>
  )
}
export default Logging1;
