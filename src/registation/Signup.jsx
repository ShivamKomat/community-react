import React, { useEffect, useState } from 'react';
import { auth, provider } from "../config"; // Assuming your config file exports auth and provider
import { signInWithPopup } from 'firebase/auth';
import style from "./Signup.module.css";
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const signup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(user => console.log(user)).catch(error => console.log(error))
  }

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
        // Add code to handle errors and provide feedback to the user
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add user account creation logic here
  }

  return (
    <div>
      {
        value ? <Home /> :
          <div className={style.container}>
            <div className={style.card}>
              <div className={style.botton}></div>
              <div className={style.right}>
                <h1>SIGNUP</h1>
                <form className={style.signup} onSubmit={handleSubmit}>
                  <input className={style.inp} type="email" name="email" id="username" value={email} placeholder="Email" onChange={changeHandler} />
                  <input className={style.inp} type="password" name="password" id="password" value={password} placeholder="Create password" onChange={changeHandler} />
                  {/* <input type="password" name="confirmpassword" id="confirmpassword" placeholder="re-create password"/> */}
                  <span><p>Already have an account?</p> <Link to='/login'> Sign in?</Link></span>
                  <button onClick={signup} className={style.submit}>Submit</button>
                  <div className={style.google}>
                    <button className={style.btn} onClick={handleClick}>Sign in with Google</button>
                  </div>
                </form>
              </div>
              <div className={style.left}></div>
            </div>
          </div>
      }
    </div>
  )
}

export default Signup;
