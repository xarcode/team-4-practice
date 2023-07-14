// import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";



function Login() {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    navigate("/home");
}

  return (
    <form className="container" onSubmit={ handleSubmit }>
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required/>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />
        <button type="submit">Login</button>
    </form>
  );
}

export default Login;
