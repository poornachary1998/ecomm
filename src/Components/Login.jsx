import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from "react-hot-toast"
import Contact from "./Contact";
import handleClick from '../../src/Components/Navbar'
import Navbar from "../../src/Components/Navbar";

function Login({user}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const userCredential = await signInWithEmailAndPassword(auth,  email, password)
      const user = userCredential.user
      console.log(user);
      console.log(user.email)
      setLoading(false)
      toast.success("Successfully logged in")
      navigate('/home')
    }
    catch (error) {
      setLoading(false)
      toast.error("In correct credentials, Please try again")
    }
  }

  return (

    <div className="container-bg" >
      {/* <Navbar user = {user}/> */}
      <div>
        <h4 className="fw-bolder text-center mt-4"> Log-in your Account ! </h4>
        <hr />
      </div>
      {loading ? <login lg="12" className="text-center"><h6 className="fw-bold" onLoadStart={() => { toast.warning("Loading") }} >Loading...</h6></login> : <></>}
      <form className="login-form container center_div col-md-4 mt-4ii" onSubmit={signIn} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="indian@gmail.com"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            autoComplete="off"
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
        <p>
          {" "}
          Don't have an account ?
          <NavLink to="/register" className="btn btn-warning ms-2">
            <i className="fa fa-user-plus me-1"></i>
            Register
          </NavLink>
        </p>
      </form>
      <Contact />
    </div>
  );
}
export default Login;
