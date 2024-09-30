import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react";
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/MY_logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'animate.css'
import TrackVisibility from "react-on-screen";


export const Footer =()=>{
    const [isHovered, setIsHovered] = useState(false);
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center" >
                    <MailchimpForm/>
                    <Col  >
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__rubberBand animate__slow" : ""}>
            <img className="my_logo" src={logo} alt="logo"/>
            </div>}
            </TrackVisibility>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end" >
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

                    
                    </Col>

                </Row>
            </Container>

        </footer>
    )
}