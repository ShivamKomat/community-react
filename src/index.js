import React from "react";

import  ReactDOM  from "react-dom/client";
import Router from "./Router";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Dynamicprofile from "./CreateProfile/Dynamicprofile";
import Login from "./login/Login";




ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Router/>
    </>
)