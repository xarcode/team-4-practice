import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        navigate("/")
    }
    return (
     <form className="container" onSubmit={ handleSubmit }>
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required/>
        <label for="username"><b>Email</b></label>
        <input type="text" placeholder="Enter email" name="email" required/>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />
        <label for="c_password"><b>Confirm password</b></label>
        <input type="password" placeholder="Confirm Password" name="password" required />
        <button type="submit">Register</button>
        <Link className="link" to="/">Login</Link>
    </form>
  )
}

export default Registration;
