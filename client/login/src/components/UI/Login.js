import './Login.css';
function Login()
{
  return(
  <div className="container">
    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required />
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required />
    <button type="submit">Login</button>
  </div>
  );
}
export default Login;