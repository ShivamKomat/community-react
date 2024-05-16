import React, { useState, useEffect } from 'react';
import "./Features.css";
import { High, Keyboard, Valorant, adjustText1, asphaltNine, playerProfile, screen, title } from '../Home';
import { mario, tutoimg1, tutoimg2, tutoimg3 } from '.';


const Feature = () => {
  const [num, setNum] = useState(0);

  const typing = () => {
    const text = "Features";
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        document.querySelector('.mainTitle').innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  };

  useEffect(() => {
    typing();
  }, []); // Call typing function when component mounts

  const rightSide = () => {
    setNum(num + 1);
    if (num === 0) {
      document.querySelector('#start').style.display = 'flex';
      document.querySelector('#reviewsCont').style.display = 'none';
    } else if (num === 1) {
      document.querySelector('#tutorials').style.display = 'flex';
      document.querySelector('#start').style.display = 'none';
    } else if (num === 2) {
      document.querySelector('#reviewsCont').style.display = 'flex';
      document.querySelector('#tutorials').style.display = 'none'; 
      // num=num-1;
    }
  };

  const leftSide = () => {
    setNum(num - 1);
    if (num === 0) {
      document.querySelector('#start').style.display = 'flex';
      document.querySelector('#reviewsCont').style.display = 'none';
    } else if (num === 1) {
      document.querySelector('#tutorials').style.display = 'flex';
      document.querySelector('#start').style.display = 'none';
    } else if (num === 2) {
      document.querySelector('#reviewsCont').style.display = 'flex';
      document.querySelector('#tutorials').style.display = 'none';
      // num = num-1;

    }
  };

  const sound = () => {
    // let aud = new Audio("../audio/click-button-140881.mp3");
    // aud.play();
  };


  return (
    <div>

      {/* <!-- OfCanvas   -->  */}

    
      <section id="MainCont">
          <div className="topCont" > 
               <div className="topInnerCont">
              <h1 className="mainTitle">Accessibility </h1>
              <p className="mainText">We're committed to making our platform accessible to everyone. Here are some of the features we provide to ensure a great experience for all users.</p> 
              </div> 
          </div>    

          <div className="featureMainCont">
          <div className="featureCont">
            <h1 className="featTitle">High Contrast Mode</h1> 
            <p className="featText">Users who prefer high contrast can easily toggle the high contrast mode on our platform. We ensure that all text and interactive elements maintain their readability and usability in high contrast mode.</p> 
            <video className="vid"  loop muted autoPlay="autoplay"> 
              <source src={High} />
           </video>
          </div> 
          <div className="featureCont"> 
            <h1 className="featTitle">Keyboard Navigation</h1> 
            <p className="featText">We support full keyboard navigation, allowing users to navigate our platform without a mouse. All interactive elements are properly focused, and users can use keyboard shortcuts to access various features</p>
    
          <video className="vid" loop muted autoPlay="autoplay" > 
            <source src={Keyboard} />
          </video>  
          </div>
          <div className="featureCont">
            <h1 className="featTitle title-height">Screen Reader Compatibility</h1> 
            <p className="featText">Our platform is designed to work seamlessly with screen readers. All elements are properly labeled, and we use ARIA attributes to provide additional context for screen reader users.</p>
    
          <video className="vid" loop muted autoPlay="autoplay"> 
            <source src={screen} />
          </video> 
          </div>
          <div className="featureCont">
            <h1 className="featTitle">Adjustable Text Sizes</h1> 
            <p className="featText">Users can customize the text size to their preference. Our platform maintains a responsive design, ensuring that increasing or decreasing the text size does not impact the layout or functionality.</p> 
            <img className="img" src={adjustText1} alt="Adjustable text size" /> 
          </div> 
          </div>
      </section> 


      <section id="head">
          <div className="headDetails">
             <h1 id="str-head1">build a strong</h1> 
             <h1 id="str-head2"> gamming community</h1>
          </div> 
          <div className="headDetails"> 
             <p id="gradeText"> EASY TO USE WITH DOZEN OF FEATURES</p> 
             <p id="gradeDetails">In a few months, morbious has become the must-have theme for Gaming communities or gaming events, gamification and forums websites.</p>
          </div>
      </section> 
      <section className="page2" id="page2">
          <div className="feat"> 
              <div className="featInner"> 
                <span className="circle">
                <i className="fa-solid fa-download"></i>  
                </span>
                 <p className="featDeta">quick and easy to install</p>
              </div>
          </div> 
          <div className="feat">  
                <div className="featInner" > 
                <span className="circle">
             <i className="fa-solid fa-pen-to-square"></i>    
             </span>
            <p className="featDeta">activities wall</p>
          </div> 
          </div>
          <div className="feat"> 
              <div className="featInner"> 
                <span className="circle"> 
                <i className="fa-solid fa-calendar-days"></i>  
                </span>
                <p className="featDeta">event canlender </p>
              </div>
          </div>
          <div className="feat"> 
                <div className="featInner">  
                  <span className="circle">
                  <i className="fa-solid fa-graduation-cap"></i>  
                  </span>
                  <p className="featDeta">gamification integration</p>
                </div>
          </div>
          <div className="feat"> 
            <div className="featInner"> 
              <span className="circle">
              <i className="fa-solid fa-message"></i>  
              </span>
              <p className="featDeta">private message </p>
            </div>
          </div>
          <div className="feat"> 
             <div className="featInner"> 
              <span className="circle">
              <i className="fa-solid fa-file"></i> 
              </span>
              <p className="featDeta">well Documented </p>
             </div>
          </div>
          <div className="feat"> 
             <div className="featInner"> 
               <span className="circle">
              <i className="fa-solid fa-handshake"></i> 
              </span>
              <p className="featDeta">6 months free support</p>
             </div>
          </div>
          <div className="feat"> 
             <div className="featInner">  
              <span className="circle">
              <i className="fa-solid fa-face-smile"></i>  
              </span>
              <p className="featDeta">wordpress blocks editor</p>
             </div>
          </div>
          <div className="feat"> 
             <div className="featInner"> 
              <span className="circle">
                <i className="fa-solid fa-users"></i>
              </span>
                <p className="featDeta">members and group directories </p>
             </div>
          </div>
      </section> 




<section id="resources"> 
    <input className="resourceBtn" type="button" value="<" onClick={leftSide} />
     <div id="start"> '
        <span>
         <h1 className="startTitle">Introduction to the World of Gaming</h1> 
         <p className="startText">Welcome to the ultimate resource for all things gaming. Whether you're a seasoned veteran or a newcomer to the world of gaming, this library has everything you need to level up your gaming experience. From in-depth guides to the latest news and reviews, we've got you covered. So grab your controller, power up your PC, and get ready to dive into the immersive and exciting world of gaming.</p>   
         </span>
         <img id="marioImg" src={mario} alt="" /> 
     </div> 

     <div id="tutorials">  
         <span className='span1'>
           <h1 id="tutoTitle">Tutorials & Guides</h1> 
          <p>Learn from the best. Dive into our collection of tutorials covering everything from speedrunning to easter eggs. </p> 
          </span> 
          <span id="tutoSubCont">
              <div className="tutoCont"> 
                 <img className="tutoImg" src={tutoimg1} alt=""  style={{ width: '200px' }} /> 
                 <h3 className="tutoText">getting started with platforms </h3>
              </div>
              <div className="tutoCont"> 
                  <img className="tutoImg"  src={tutoimg2} alt="" style={{ width: '200px' }} /> 
                  <h3 className="tutoText">matering the double jump</h3>
              </div>
              <div className="tutoCont">
                  <img className="tutoImg"  src={tutoimg3} alt="" style={{ width: '200px' }} /> 
                  <h3 className="tutoText">finding the secret hidden paths as a treasure </h3>
              </div>
          </span>
     </div> 

     <div id="reviewsCont">  

         <div id="revInnerCont"> 
      
       <h1 className="startTitle">Game Reviews</h1>  

        <div className="searchBar"><input className="inp" type="text" placeholder="search here !" /> <i className="fa-solid fa-magnifying-glass"></i></div> 

        <div className="review" id='review1'> 
           <span className="titleCont">
          <h4 className="revSubTitle">Cybernetic Revolution</h4> 
          <p>A fast-paced cybernetic adventure with stunning visuals and intense action.</p>
          <p></p>
        </span>
        <span> 
          <button className="readButton">Read review</button> 
          <p className='date'>September 14, 2023</p>
        </span>
      </div> 
        <div className="review" id='review2'> 
          <span className="titleCont">
            <h4 className="revSubTitle">Galactic Conquest</h4> 
            <p>Command your fleet and conquer the galaxy in this epic strategy game.</p>
            <p></p>
          </span>
          <span> 
            <button className="readButton">Read review</button> 
            <p className='date'>August 26, 2023</p>
          </span>
        </div>
        <div className="review" id='review3'> 
          <span className="titleCont">
            <h4 className="revSubTitle">Dungeon Crawler Legends</h4> 
            <p>Embark on an epic quest through perilous dungeons and ancient ruins.</p>
            <p></p>
          </span>
          <span> 
            <button className="readButton">Read review</button> 
            <p className='date'>July 19, 2023</p>
          </span>
        </div>
        <div className="review" id='review4'> 
          <span className="titleCont">
            <h4 className="revSubTitle">Starlight Adventures</h4> 
            <p>An enchanting journey through whimsical worlds under the light of the stars.</p>
            <p></p>
          </span>
          <span> 
            <button className="readButton">Read review </button> 
            <p className='date'>June 30, 2023</p>
          </span>
        </div>  
      </div>
</div> 
 <input className="resourceBtn" type="button" value=">" onClick={rightSide} />

</section>  

      {/* <!--  footer part  --> */}
      <footer className="footerCont">
        <div className="cont1">
         <img src={title} alt="" style={{ width: '50px' }}/> 
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

export default Feature