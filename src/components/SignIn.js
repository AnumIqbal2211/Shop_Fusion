import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../components/AdminPanel/images/logo_transparent.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === 'admin123@gmail.com' && password === 'admin123') {
      navigate("/admindashboard");
    } else 
    navigate('/UserDashboard')
  };
  return (
    <div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <img src={logo} alt=""/>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"> Sign In</button>
        <p>
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
