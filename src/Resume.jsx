import { gsap,Power4 } from "gsap";
import { useRef,useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resume(){





    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Shrivibhu-Giriraj.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Shrivibhu-Giriraj.pdf';
                alink.click();
            })
        })
    }
    const div1 = useRef();
    const div2 = useRef();
    useEffect(()=>{
        const el = div1.current;
        gsap.fromTo(el,{y:200},{y:300,duration:3,ease:Power4.easeOut,scrollTrigger:{trigger:el}},)
    },[])
    useEffect(()=>{
        const el = div2.current;
        gsap.from(el,{y:300,duration:3,ease:Power4.easeOut,scrollTrigger:{trigger:el}})
    },[])
    return <><section id="Contact">
<div className="Resume" ref={div1}>
<div>
    <h1>Contact Me</h1>
    <p>Email id : informshrivibhu@gmail.com</p>
    <p ><a href ="https://www.linkedin.com/in/shrivibhu-giriraj-6a342312a" className="link">LinkedIn :ShriVibhu Giriraj</a></p>
</div>
<div className="Resume1" ref = {div2}>
    <h1>Download Resume</h1>
    <button className="btn btn2 but" onClick={onButtonClick}>Download </button>
</div>
</div>
</section>
    </>
}