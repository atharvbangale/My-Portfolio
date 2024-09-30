 import { Col, Row ,Container, Tab  } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.webp'
import projImg5 from '../assets/img/project-img5.jpg'





export const Projects = ()=>{
    const projects = [
        {
            title: "METAMASK",
            description: "Blokchain Based E-Valut System",
            imgUrl: projImg1,
            links: [
              'https://metavaultstorage.netlify.app/'
              
            ],
          },
          {
            title: "Railway Reservation",
            description: "IRCTC SITE",
            imgUrl: projImg2,
            links: [
             "https://github.com/atharvbangale/irctc"
              
            ],
          },
          {
            title: "DATE ME",
            description: "Dating site",
            imgUrl: projImg3,
            links: [
             "https://github.com/atharvbangale/Date_Eye"
              
            ],
          },
          {
            title: "Contra",
            description: "GAME BY UNITY",
            imgUrl: projImg4,
            links: [
             "https://github.com/atharvbangale/contra"
              
            ],
          },
          {
            title: "BRAIN TUMOR DETECTION ",
            description: "Machine Learning Program to Detect Tumor By MRI",
            imgUrl: projImg5,
            links: [
             
              "https://github.com/atharvbangale/brain-tumor-detection-and-classification"
            ],
          },
     
       
        
      ];
      return (
        <section className="project" id="Projects">
          <Container>
            <Row>
              <Col size={12}>

               < ithun bagh></ithun>
              <TrackVisibility>
              {({ isVisible }) =>

              /// gajab cheez make animation of bouse 
              <div className={isVisible ? "animate__animated animate__bounce " : ""}>
                    <h2>Projects</h2>
                    <p></p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                     
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                  
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>                .</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>                  .</p>
                        </Tab.Pane>
                    </Tab.Container>
                
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}alt="none" ></img>
        </section>
      )
}