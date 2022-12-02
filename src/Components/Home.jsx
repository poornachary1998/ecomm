import React from 'react'
import { useEffect, useState } from 'react'
// import { auth } from '../firebase.config'
// import { db } from '../firebase.config'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import { getAuth } from "firebase/auth";


const Home = () => {

    //  getting current user function

    const auth = getAuth();
    const GetCurrentUser = () => {
        const [user, setUser] = useState(null);
        // const[ isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    // db.collection('users').doc(user.uid).get().then(snapshot => {
                    //     setUser(snapshot.data().email)
                    // })
                    const uid = user.uid;
                            console.log(uid)
                            setUser(user.email);
                            console.log(setUser)  
                            // setIsLoggedIn(true); 
                }
                else {
                    setUser(null)
                    // setIsLoggedIn(false);
                }
            })

            }, [])
            return user;
        }

    const user = GetCurrentUser();
        console.log(user)

        return (
            <div className='hero'>
                <Navbar user={user}/>
                        <div className="card bg-dark text-white border-0">
                    <img src="/Assest/bg.jpg" className="card-img" alt="Back Ground Image" height='850px' />
                    <div className="card-img-overlay">
                        <div className="container">
                            <h5 className="card-title display-1 text-black fw-bolder mb-0 "> WINTER ARRIVALS </h5>
                            <p className="card-text lead fs-2  text-black"> Whoever said money can’t buy happiness clearly didn’t know where to shop!  </p>
                        </div>

                    </div>
                </div>

                <Products />
                <About />
                <Contact />
            </div>
        )
    }

    export default Home