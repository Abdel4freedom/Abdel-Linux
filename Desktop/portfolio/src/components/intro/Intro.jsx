import "./intro.scss";
import { init } from 'ityped';  //https://www.npmjs.com/package/ityped
import { useEffect, useRef } from "react";



const Intro = () => {

    const textRef = useRef();


    useEffect(() => {
    // https://www.npmjs.com/package/ityped
        init(textRef.current, { 
            showCursor: true, 
            backDelay:  1500,
            backSpeed: 60,
            
            strings: ['Developer', 'Designer', 'Content Creator' ],
         });
    }
       
    , [])






    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Abdel.JPG" alt="my id" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There, I am</h2>
                    <h1>Abdelilah Chamati</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
           
        </div>
    )
}

export default Intro;
