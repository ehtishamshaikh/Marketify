import React from 'react'
import styled from 'styled-components'

const Login = () => {
 const Wrapper = styled.section`
font-size: 50px;
 * {
   box-sizing: border-box;
 }
 body {
   background: #985bda !important;
   min-height: 100vh;
   display: flex;
   font-weight: 400;
   font-family: "Fira Sans", sans-serif;
 }
 
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 label,
 span {
   font-weight: 500;
   font-family: "Fira Sans", sans-serif;
 }
 
 body,
 html,
 .App,
 #root,
 .auth-wrapper {
   width: 100%;
   height: 100%;
 }
 
 .navbar-light {
   background-color: #ffffff;
   box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
 }
 
 .auth-wrapper {
   display: flex;
   justify-content: center;
   flex-direction: column;
   text-align: left;
 }
 
 .auth-inner {
   width: 450px;
   margin: auto;
   background: #ffffff;
   box-shadow: 0px 14px 80px rgba(0, 1, 13, 0.2);
   padding: 40px 55px 45px 55px;
   border-radius: 15px;
   transition: all 0.3s;
 }
 
 .auth-wrapper .form-control:focus {
   border-color: #00214c;
   box-shadow: none;
 }
 
 .auth-wrapper h3 {
   text-align: center;
   margin: 0;
   line-height: 1;
   padding-bottom: 20px;
 }
 
 .custom-control-label {
   font-weight: 400;
 }
 
 .forgot-password,
 .forgot-password a {
   text-align: right;
   font-size: 13px;
   padding-top: 10px;
   color: #0b0b0b;
   margin: 0;
 }
 
 .forgot-password a {
   color: #0a0478;
 }
 `;
  return (
    <Wrapper>
    <form>
    <h3>Sign In</h3>

    <div className="mb-3">
        <label>Email address</label>
        <input
            type="email"
            className="form-control"
            placeholder="Enter email"
        />
    </div>
    <div className="mb-3">
        <label>Password</label>
        <input
            type="password"
            className="form-control"
            placeholder="Enter password"
        />
    </div>
    <div className="mb-3">
        <div className="custom-control custom-checkbox">
            <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>
    <div className="d-grid">
        <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
    </p>
</form>
</Wrapper>
  )


}

export default Login