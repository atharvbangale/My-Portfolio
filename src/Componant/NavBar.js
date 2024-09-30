import { useState,useEffect } from "react";
import {Navbar,Container,Nav} from "react-bootstrap";
import logo from '../assets/img/MY_logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'animate.css'
import TrackVisibility from "react-on-screen";




export const NavBar =()=>{
  const handleClick = (id) => {
    onUpdateActiveLink(id);
    scrollToSection(id);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [isHovered, setIsHovered] = useState(false);
  //active link to stay it active on one  browser
const [activeLink,setActiveLink] = useState('home');
//for scrolling use state
const [Scrolled,seScrolled] = useState(false);
//use effect for scrroling lesss 50 leazyer  and event listnner to scroll
useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){
        seScrolled(true);
      }else{
        seScrolled(false);
      }
    }
    window.addEventListener("scroll",onscroll);

    return()=>window.removeEventListener('scroll',onScroll)
},[])
//to get active link uupdate every time

const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
}


    return(
        <Navbar  expand="lg" className={ Scrolled ?"Scrolled" :""}  >
      <Container>
     
        <Navbar.Brand href="#home">
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__rubberBand animate__slow" : ""}>
            <img className="my_logo" src={logo} alt="logo"/>
            </div>}
            </TrackVisibility>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >

         <span className="navbar-toggler-icon"></span>

        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink==='Skills'?'active navbar-link':'navbar-link'} onClick={()=>handleClick('Skills')} >Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink==='Projects'?'active navbar-link':'navbar-link'} onClick={()=>handleClick('Projects')} >Projects</Nav.Link>
          </Nav>
          <span className="navbar-text" >
            <div className="social-icon" >



                <a href="https://www.linkedin.com/in/atharvbangale/"><img src={navIcon1} alt="" /></a>




                <a  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}  href="https://github.com/atharvbangale"><img src={navIcon2}  alt=""   style={{ 
          filter: isHovered ? 'invert(0%)' : 'invert(100%)', 
          width: '40px', 
          height: '40px' 
        }}  /></a>



        
                <a href="https://www.instagram.com/aaaaaa.atharv/"><img src={navIcon3}  alt="" /></a>
            </div>
            <TrackVisibility>
              {({ isVisible }) =>

              /// gajab cheez make animation of bouse 
              <div className={isVisible ? "animate__animated animate__bounceInRight animate__slow" : ""}>
          <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </div>}
                    </TrackVisibility>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )

}

