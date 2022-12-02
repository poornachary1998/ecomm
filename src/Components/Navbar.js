import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../src/customhooks/useAuth";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../src/firebase.config";
import toast from "react-hot-toast";

export default function Navbar({ user }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const {isAuth} = useAuth();
  const profileActionRef = useRef(null);
  const toggleProfileActions = () => {
    profileActionRef.current.classList.toggle("show__profileActions");
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
        navigate("/");
      })
      .catch((err) => {
        toast.err(err.message);
      });
  };

const UserLoggedIn = () =>{
return(
  <>
  <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4" to="/home">
            React Collections
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
  <div className="buttons"></div> 
                  
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>
                    Cart ({state.length})
                  </NavLink>
                  <div className="profile btn btn-dark ms-2" >
                    {user}
                  </div>
                  <div className="profile btn btn-outline-dark ms-2" onClick={logout}>
                    <i class="fa fa-sign-in me-1"></i>
                    Log out
                  </div>
                  </div>
        </div>
      </nav>
                
  </>
)
}

const UserNotLoggedIn = () =>{
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4" to="/home">
            React Collections
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
    <div className="buttons"></div>
                  <div> <NavLink to="/login"  className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1" ></i>
                    Login</NavLink></div>  
                    </div>
        </div>
      </nav>
    </>
  )
}

  {/* // console.log(user) */}

  return (
    <div>

{{user}===null ? <UserNotLoggedIn/>:<UserLoggedIn/>}

            {/* <div
              className="profile__actions"
              ref={profileActionRef}
              onClick={toggleProfileActions}
            >
              <div className="buttons">

          
                {!user && <>
                  <div> <NavLink to="/login"  className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1" ></i>
                    Login</NavLink></div>
                </>}


                {user && <>
                  
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>
                    Cart ({state.length})
                  </NavLink>

                  <div className="profile btn btn-dark ms-2" >
                    {user}
                  </div>
                  <div className="profile btn btn-outline-dark ms-2" onClick={logout}>
                    <i class="fa fa-sign-in me-1"></i>
                    Log out
                  </div>
                </>}
              </div>
            </div> */}
    </div>
  );
}
              
