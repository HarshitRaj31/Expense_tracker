import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
function Login() {
   const [email,setEmail]=useState("");
   const  [password,setPassword]=useState("");
    const handleOk =()=>{
if(!email||!password){
  alert("Not login");
}
else{
  alert("login");
}
  };
  return (
    <div className="login-container">
      <div className="Border">
        <h1 className="Login">
          Login
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
       <Link
          to="/dashboard"
          className="btn login-btn"
        > 
  <button className="btn"onClick={handleOk}>Login</button></Link>
      </div>
 <Link
          to="/dashboard"
          className="btn login-btn"
        >
          Enter App
        </Link>
    </div>

  );
}

export default Login;