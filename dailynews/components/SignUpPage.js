import React from 'react'

import { Link, Route, Routes } from "react-router-dom";
import "./login.css";
import LoginPage from "./LoginPage";

function SignUpPage() {
  return (
    <form className="formlogin">
      <div className="logindiv">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label>Surname</label>
          <input
            type="surname"
            className="form-control"
            placeholder="Enter surname"
          />
        </div>
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
     
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>


        <Link to="/LoginPage">Sign In</Link>
       

        <Routes>
        
          <Route path="/loginpage" element={<LoginPage/>} />
        </Routes>
      </div>
    </form>
   
  
  )
}

export default SignUpPage