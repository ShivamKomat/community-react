
import React from 'react';
import { useEffect } from 'react';
import "./Home.css"
import {adjustText1, asphalt9 , asphaltNine , cogo, first, fortnite, gta, pubg, title, Valorant, warcraft, warface ,High, home , clickbutton} from './index.js'
import { Link } from 'react-router-dom';

const Home = () => { 
  useEffect(() => {
    window.addEventListener("scroll", reveal);
    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener("scroll", reveal);
    };
}, []); // Empty dependency array ensures the effect runs only once after the component mounts

const reveal = () => {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

//live stream 
 
let liveStream=()=>{
    window.location.href=` https://www.youtube.com/results?search_query=live+Streaming+of+games+`
} 
//  get the app button 

let getApp=()=> { window.alert("currently not Avalibale!")} 
let join=()=>{window.alert('Groups are not yet Created ! Visit Again .. ')}

// Auto typing
var text = `Share your epic wins, hilarious fails, and everything in between. Connect with fellow gamers through videos, screenshots, artwork, and more.`;
var i = 0;

const typing = () => {
    var weDetElement = document.querySelector('#weDet');
    if (weDetElement) {
        if (i < text.length) {
            weDetElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
};

useEffect(() => {
    setTimeout(typing, 2500);
}, []); // Run typing function after 2500 milliseconds once after the component mounts


  return (
    <div className='body'> 
{/* <!--  background video --> */}
<div className="bgVideo">
   <video className="backVID" loop muted autoPlay="autoplay"> 
    {/* <source  src="./videos/homeBackground.webm " type="video/mp4"/>   */}
    <source  src={home} type="video/mp4"/>  
     </video>
</div> 








 {/* <!-- Content and Sharing   -->   */}
<section className="welcomePage">
    <div className="welCont"> 
      <h1 className="welTitle">Welcome, gamers!</h1> 
      <p id="weDet"></p> 
       <button id="getAppBtn" onClick={getApp}>get the app</button>   
  </div>
</section>  
<section className="welcomePage "> 
  <div id="welFirstPage">
    <div className="wel"> 
       <h3 className="weltop">Create</h3> 
       <p className="welTopText">Share your best moments with the world. Whether it's a heart-pounding victory or a hilarious glitch, show off your gaming skills.
       </p> 
       <Link to="/create">
       <button className="contBtn">Create</button> 
       </Link>
    </div>
    <div className="wel"> 
      <h3 className="weltop">Discover</h3> 
       <p className="welTopText">Dive into a world of gaming content. Discover epic battles, hidden easter eggs, and the creativity of the gaming community.</p> 
       <button className="contBtn">Explore</button>
    </div>
    <div className="wel"> 
      <h3 className="weltop">Connect </h3> 
       <p className="welTopText">Join the conversation. Discuss strategies, share tips, and make friends who love gaming as much as you do.</p> 
       <button className="contBtn" onClick={join}>Join</button> 
       
    </div>  
  </div>
</section>
{/* <!-- Home page 2 --> */}
<section>
 <div className="PlayerCont">
       <img className="PlayerImg reveal" src={first}  alt=""/>  
    
       <div className="content reveal">
           <h1 className="title"> Team morbius</h1> 
           <p className="titleContent">We are a gammimg team , Owening anyone and anything in our way in the field of FPS Shooter games .Join us in Our Way to glory! </p> 
           <button id="StreamBtn" onClick={liveStream}>Watch out Stream</button>
       </div>
 </div>
</section> 
{/* <!-- popular  games   -->  */}

<section className="gameContainer">
       <h1 className="Title reveal">most popular Right now </h1> 
       <div className="game">
        <img className="gameImg" src={fortnite} alt=""/>  
        <div  className="gameDetails">
        <span className="gameName">Fortnite</span>
        <span>sandbox</span>
        <span><i className="fa-solid fa-star"></i>4.8</span>
        <span><i className="fa-solid fa-download"></i>23M</span> 
        </div>
       </div> 
       <div className="game">
        <img className="gameImg" src={pubg} alt=""/>  
        <div className="gameDetails">
        <span className="gameName">PUBG</span>
        <span>Battle-s</span>
        <span><i className="fa-solid fa-star"></i>4.2</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div>
       </div><div className="game">
        <img className="gameImg" src={asphaltNine} alt=""/>  
        <div className="gameDetails">
        <span className="gameName">asphalt9</span>
        <span>Stream-X</span>
        <span><i className="fa-solid fa-star"></i>4.9</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div>
       </div><div className="game">
        <img className="gameImg" src={cogo} alt=""/>  
        <div className="gameDetails">
        <span className="gameName">CO_GO</span>
        <span>Legendary</span>
        <span><i className="fa-solid fa-star"></i>3.4</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div>
       </div><div className="game">
        <img className="gameImg" src={gta} alt=""/>  
        <div className="gameDetails">
        <span className="gameName">GTA_VI</span>
        <span>Legendary</span>
        <span><i className="fa-solid fa-star"></i>3.6</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div>
       </div><div className="game">
        <img className="gameImg" src={Valorant} alt=""/>  
        <div className="gameDetails">
        <span className="gameName">Valorant</span>
        <span>Matrix games</span>
        <span><i className="fa-solid fa-star"></i>4.0</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div>
       </div>
       <div className="game">
        <img className="gameImg" src={warcraft} alt=""/>  
         <div className="gameDetails">
        <span className="gameName">War Carft</span>
        <span>MAX 3D</span>
        <span><i className="fa-solid fa-star"></i>4.3</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div>
       </div>
       <div className="game">
        <img className="gameImg" src={warface} alt=""/>  
        <div className="gameDetails">
        <span className="gameName">Warface</span>
        <span>Max 3D</span>
        <span><i className="fa-solid fa-star"></i>2.8</span>
        <span><i className="fa-solid fa-download"></i>23M</span>  
        </div> 
       </div> 
       {/* <!-- <button className="DownBtn bg-color">Discover popular</button> --> */}
</section>  

{/* <!--  Gamming library  -->  */}

<section id="LibParent">
     <h1 id="libTitle"> Your gamming Library</h1>  
     <div className="LibContainer">
         <div className="lib"> 
           <img src={pubg} style={{ height: '70px', width: '70px', borderRadius: '15px' }} alt=""/> 
           <span>
               <h3 className="libName">PUBG</h3>
               <p>sandbox</p>
           </span> 
           <span>
            <h3 className="libName">Date Added </h3>
            <p> 24/08/2023</p>
           </span> 
           <span> 
              <h3 className="libName">Hour Played</h3>
              <p>658 H  22 min</p>
           </span> 
           <span>
            <h3 className="libName">Currently</h3> 
            <p>Downloaded </p>
           </span> 
           <button className="DownBtn">Downloaded</button>
         </div>
         <div className="lib"> 
          <img src={fortnite} style={{ height: '70px', width: '70px', borderRadius: '15px' }} alt=""/> 
          <span>
              <h3 className="libName">Fortnite</h3>
              <p>sandbox</p>
          </span> 
          <span>
           <h3 className="libName">Date Added </h3>
           <p> 24/08/2023</p>
          </span>
          <span> 
             <h3 className="libName">Hour Played</h3>
             <p>558 H  2 min</p>
          </span>
          <span>
           <h3 className="libName">Currently</h3> 
           <p>Downloaded </p>
          </span> 
          <button className="DownBtn">Downloaded</button>
        </div>
         <div className="lib">  
          <img src={cogo} style={{ height: '70px', width: '70px', borderRadius: '15px' }} alt="" /> 
          <span>
              <h4 className="libName">CS_GO</h4>
              <p>sandbox</p>
          </span>
          <span>
           <h3 className="libName">Date Added </h3>
           <p> 02/12/2023</p>
          </span>
          <span> 
             <h3 className="libName">Hour Played</h3>
             <p>681 H  32 min</p>
          </span>
          <span>
           <h3 className="libName">Currently</h3> 
           <p>Downloaded </p>
          </span> 
          <button className="DownBtn">Downloaded</button>
        </div> 
        <button className="DownBtn bg-color" id='btn' >View Your Library</button>
     </div>
</section>  

{/* <!--  footer  -->  */}

<footer className="footerCont">
         <div className="cont1" id="footer1" >
          <img src={title} alt="" width="50px"/> 
          <h1>Team Morbius</h1>
         </div> 
         <div className="cont2">
            <p className="text1">support</p> *
            <p className="text1">Documentation</p>*
            <p className="text1">themeForest</p>
         </div> 
         <div className="cont3">
          <i className="fa-brands fa-instagram"></i> 
          <i className="fa-brands fa-facebook"></i> 
          <i className="fa-brands fa-twitter"></i> 
          <i className="fa-brands fa-github"></i> 
          <i className="fa-brands fa-discord"></i> 
          <i className="fa-brands fa-linkedin"></i>
         </div>
  </footer>
    </div>
  )
}

export default Home;
