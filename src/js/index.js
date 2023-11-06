//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Cronometro from "./component/cronometro";

 let counter = 0;
 setInterval(function(timeMachine){
    counter++;
    const six = Math.floor(counter / 100000 % 10);
    const five = Math.floor(counter / 10000 % 10);
    const four = Math.floor(counter / 1000 % 10);
    const three = Math.floor(counter / 100 % 10);
    const two = Math.floor(counter / 10 % 10);
    const one = Math.floor(counter / 1 % 10);
    ReactDOM.render(
        <Cronometro secOne={one} secTwo={two} secThree={three} secFour={four} secFive={five} secSix={six} />,
        document.querySelector("#app")
         );
     },1000);
