/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css'
import TrackVisibility from "react-on-screen";



export const Banner=()=>{
    //lopp for evry word come and delete with words 
    const [loopNum,setLoopNum]= useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Full Stack Developer","UI/UX Designer","MERN Developer"];
    const [text,setText]=useState('');
    //time for every word to come front
    const [delta,setDelta]= useState(300-Math.random()* 100);
    const period=2000;
//use effect for that
    
useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  

  }, [text])



    const tick=()=>{
        // to go back and start from loop
        let i=loopNum % toRotate.length
        let fullText=toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }

    }


    return(
        //banner main 
        <div className="banner" >
        
              <section className="Banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >


                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                    <span className="tag" > Welcome to Innovative Solutions, Inspiring Designs</span>
                    <h1>{ `Hiee I'm Atharv, a  `} <span className="wrap" >{text} </span> </h1>
                    <p className="p">As a Full Stack Developer, I specialize in React.js and Tailwind CSS for front-end development, and Node.js and Express for back-end solutions. I am proficient in MongoDB and SQL for data management.

Additionally, I have strong skills in Python, Java, and JavaScript, alongside a solid understanding of Data Structures & Algorithms. I also work with Solidity for smart contracts and have a passion for Data Visualization and Machine Learning.</p>
                 
</div>}
</TrackVisibility>
<TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeftBig animate__slow" : ""}>
                 <button className="btn-l"  onClick={()=>console.log('connect')} >Let's Connect <ArrowRightCircle size={25} /> </button>
                 </div>}
                 </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} > 

                 <img className="updown" src={headerImg} alt="Hedder Img" />

                    </Col>
                </Row>

            </Container>

        </section>
        </div>
       
      
    )

}
