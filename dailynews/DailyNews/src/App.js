import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./Home";
import DailyNews from "./components/DailyNews";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";



function App() {

  return (
    <div className="container" style={{height:"100%"}}>
      <div class="header">
        <Link to="/">Daily News</Link>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/LoginPage">Login</Link>
      
      </div>
        <Routes>
          <Route path="/" element={<DailyNews />}>
           
          </Route>
          <Route path="/home" element={<Home />}>
            
          </Route>
          <Route path="/about" element={<About />} />
         
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
         
          
        
        </Routes>
      
    </div>
  );
}

export default App;
