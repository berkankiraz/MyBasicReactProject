import React, { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Adminpanel from "./Adminpanel";
function LoginPage() {
  

  let activeuser = false;
  const [admininfo, setAdmininfo] = useState({ email: "", password: "" });
  const [auth, setauth] = useState({ email: "", password: "" });

  const handleadmininfochange = (event) => {
    event.preventDefault();

    const inputname = event.target.getAttribute("name");
    const inputvalue = event.target.value;
    const inputform = { ...admininfo };
    inputform[inputname] = inputvalue;
    setAdmininfo(inputform);
    console.log(inputform);
  };

  const handleSubmit = () => {
    setauth(admininfo)
    console.log(auth)
   
    if(admininfo.email!="admin" || admininfo.password!="admin"){
        alert("this is wrong ")
    }
  };

  return (

    <Fragment>
        {(auth.email==="admin" && auth.password==="admin")?(
            <Adminpanel
            activeuser={activeuser}
            user={auth.email}/>
        ):(
    <form onSubmit={handleSubmit}>
      <div className="logindiv">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter email"
            required="required"
            value={admininfo.email}
            onChange={handleadmininfochange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="text"
            name="password"
            className="form-control"
            required="required"
            placeholder="Enter password"
            value={admininfo.password}
            onChange={handleadmininfochange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>

       <Link to="/LoginPage">Sign In</Link>
       

        <Routes>
        
          <Route path="/loginpage" element={<LoginPage/>} />
        </Routes>
      </div>
    </form>)}
    </Fragment>



  );
}

export default LoginPage;
