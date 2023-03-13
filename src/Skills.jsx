import React from "react";
import Rea from "./react.png";
import htm from "./html.png";
import Css from "./css.png";
import Nodej from "./nodejs.png";
import Js from "./js.png";
import Boot from "./bootstrap.png";
import { gsap,Power4 } from "gsap";
import { useRef,useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
 const contain = useRef();
 const contain1 = useRef();
 const contain2= useRef();
 const contain3 = useRef();
 const contain4 = useRef();
 const contain5 = useRef();
 useEffect(() => {
  const el = contain.current;
  gsap.from(el,{autoAlpha:0,y:300,duration:3,delay:0.5,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
 },[])
 useEffect(() => {
  const el = contain1.current;
  gsap.from(el,{autoAlpha:0,y:-300,duration:3,delay:0.5,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
 },[])
 useEffect(() => {
  const el = contain2.current;
  gsap.from(el,{autoAlpha:0,y:300,duration:3,delay:0.5,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
 },[])
 useEffect(() => {
  const el = contain3.current;
  gsap.from(el,{autoAlpha:0,y:-300,duration:3,delay:0.5,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
 },[])
 useEffect(() => {
  const el = contain4.current;
  gsap.from(el,{autoAlpha:0,y:300,duration:3,delay:0.5,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
 },[])
 useEffect(() => {
  const el = contain5.current;
  gsap.from(el,{autoAlpha:0,y:-300,duration:3,delay:0.5,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
 },[])
  
    return<>
    <section className = "Skill-sec" >
  
    <div className="container d-flex flex-wrap align-items-center" >
  
  <div className="m-2 card" ref = {contain1}><img src={Rea} alt = "" classNameName = "card-img-overlay react"/></div>
  <div className="m-2 card "  ref = {contain2}><img src={htm} alt = "" classNameName = "card-img-overlay html"/></div>
  <div className="m-2 card" ref = {contain3}><img src={Css} alt = "" classNameName = "card-img-overlay "/></div>
  <div className="m-2 card" ref = {contain4}><img src={Nodej} alt = "" classNameName = "card-img-overlay "/></div>
  <div className="m-2 card" ref = {contain5}><img src={Js} alt = "" classNameName = "card-img-overlay "/></div>
  <div className="m-2 card" ref = {contain}><img src={Boot} alt = "" classNameName = "card-img-overlay "/></div>
  </div>
</section>
    </>
}