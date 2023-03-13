import React from "react";
import Logo from "./Logo.png";
import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import {Link} from "react-router-dom";
export default function Navbar(){
    let LoGo = useRef();
    let stag = useRef();
    useEffect(()=>{
        gsap.from(LoGo,3,{rotation:360, ease:Power4.easeOut})
    },[])
    useEffect(()=>{
    gsap.from(stag,3,{opacity:1,y:-50,stagger:0.2,ease:Power4.easeOut})
    },[])
    return <>
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="/#" >
    <img ref = {el => {LoGo = el}} classNameName= "logo"src={Logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
   
    </a>
 
    <div class="collapse navbar-collapse" id="navbarNav" ref = {el => {stag = el}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/#">Projects</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact" smooth>Contact</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">About Me</a>
        </li>
      
      </ul>
    </div>
  </div>

    
  
</nav>
    </>
}