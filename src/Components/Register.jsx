import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { toast } from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    console.log(username);
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;
      console.log(user)

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef);
      
      uploadTask.on((err) => {
          toast.error(err.message)
          // alert(err.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: username,
            });
// store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
            });
            // console.log(username);
          });
        }
      );
      setLoading(false);
      toast.success(" Account created successfully");

      navigate("/Login");
    } 
catch (error) {
      setLoading(false);
      toast.error("User Already exists");
    }
  }
  return (
    <div>
      <div className="register-bg">
        {loading ? (
          <login lg="12" className="text-center">
            <h6 className="fw-bold">Loading...</h6>
          </login>
        ) : (
          <></>
        )}
        <div>
          <h4 className="fw-bolder text-center  col-18 mb-1 ">
            {" "}
            Create user account - Sign Up{" "}
          </h4>
          <hr />
        </div>
        <form className="container center_div col-md-4" onSubmit={signUp}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              autoComplete="username"
              aria-describedby="userName"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="exampleInputPassword1"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create an Account
          </button>
          <p>
            {" "}
            Already have an account ?
            <NavLink to="/login" className="btn btn-dark ms-2">
              <i className="fa fa-user-plus me-1"></i>
              Log In
            </NavLink>
          </p>
        </form>
        <Contact />
      </div>
    </div>
  );
};

export default Register;
