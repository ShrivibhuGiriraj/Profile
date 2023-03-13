import React from "react";
import "./styles.css";
import img from "./vib.png";
import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
export default function Details() {
  let imgItem = useRef();
  let headingOne = useRef();
  let Para = useRef();
  let Line = useRef();
  useEffect(() => {
    gsap.from(imgItem,3, {
      opacity: 0,
      y: -100,
      ease: Power4.easeOut,
    });
  }, []);
  useEffect(() => {
gsap.from(headingOne,3,{opacity:1,y:200,ease:Power4.easeOut}
  )
  },[])
  useEffect(() => {
gsap.from(Para,3,{opacity:1,y:200,ease:Power4.easeOut})
  },[])
  useEffect(() =>{
gsap.from(Line,5,{opacity:0,y:-200,ease:Power4.easeOut})
  },[])

  return (
    <>
      <section id = "/">
        <div className="container">
          <h1 ref = {el =>{headingOne = el}} className="static">
            Hi this is <span className="dyamic">vibhu!</span>
          </h1>
          <p ref={el =>{Para = el}}>MERN full stack developer</p>

          <img className = "profile"
            ref={(el) => {
              imgItem = el;
            }}
            src={img}
            alt="img"
          />
        </div>
        <div className="line" ref = {el => {Line = el}}></div>
      </section>
    </>
  );
}
