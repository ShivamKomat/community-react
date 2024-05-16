

import React, { useState, useEffect } from 'react';
import style from "./Login.module.css";
import { auth, provider } from "../config";
import { signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Login = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setValue(email);
    }
  }, []);

  const handleClick = () => {
    console.log("Attempting Google sign-in...");
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log("Successfully signed in with Google:", data.user.email);
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.left}></div>
          <div className={style.right}>
            <h1>LOGIN</h1>
            <form className={style.signinform} action="">
              <input className={style.inp}  type="text" placeholder="username"/>
              <input className={style.inp} type="password" placeholder="password"/>
              <span><p>Forgot Password?</p> <Link to='/signup'> Signin?</Link></span>
              <button className={style.submit}>Submit</button>
              <div className={style.google}>
                <button className={style.btn} onClick={handleClick}>Continue With Google</button>
              </div>
            </form>
          </div>
          <div className={style.botton}></div>
        </div>
      </div>
    </div>
  )
}

export default Login;
