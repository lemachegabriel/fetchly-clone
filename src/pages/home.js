import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBar from "../components/navBar";
import backImage from '../images/home/backImageHome.png'
import handCell from '../images/home/handCell.png'
import worksDat from '../images/home/works_dat.png'
import partners from '../images/home/partners.png'
import fetchlyJob from '../images/home/fetchlyJob.png'
import {BsPerson} from 'react-icons/bs'
import {MdMonitor} from 'react-icons/md'
import {VscCircuitBoard} from 'react-icons/vsc'
import {GrCompliance} from 'react-icons/gr'
import "./styles/home.css"
import Footer from "../components/footer";

function Home(){
    return(
        <>
            <NavBar/>
            <Container>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <h1 className="titleHome">Fetchly Labs</h1>
                        <a style={{color: "#1D87DE"}}>Web & Mobile App Development</a> for startups, enterprises and small businesses
                    </Col>
                </Row>
                <Row style={{marginTop: '7px', margin: 'auto', width: "50%"}}>
                    <img src={backImage} style={{marginBottom: "-50%", zIndex: "-1"}} />
                </Row>
                <Row className="dataBox">
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row>
                            <Col sm={5} style={{textAlign: "center"}} >
                                <img src={handCell} style={{maxWidth: "170px", }}/>
                            </Col>     
                            <Col sm={7}>
                                <div className="title">Services</div>
                                <div><b>Product</b> Planning</div>
                                <div><b>User Acquisition</b> (Audience Development)</div>
                                <div style={{marginBottom: "40px"}}><b>Full Platform</b> (Web + API + Mobile) Development</div>
                                <div className="title">Focuses</div>
                                <div>Heavy <b>Data-Driven</b> Projects</div>
                                <div><b>High Regulation</b> Industries (Medical)</div>
                                <div><b>Design-Centric</b> Development</div>
                                <div>Smooth <b>Enjoyable User Experiences</b></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row className="dataBox">
                    <Col lg={7}>
                        <img style={{width: "100%"}} src={worksDat}/>
                    </Col>
                    <Col lg={5} className="textDat">
                        <p> We've been working hard for our clients, great products are all we make.</p>
                        <Row>
                            <Col>
                                <h1>60+</h1>
                                <span>Team members – across development, design/ux, product & project management, quality assurance and support</span>
                            </Col>
                            <Col>
                                <h1>5+yrs</h1>
                                <span>old and running profitably since day 1</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>7 yrs</h1>
                                <span> Average team member experience in the industry </span>
                            </Col>
                            <Col>
                                <h1>18690</h1>
                                <span>Cups of coffee, tea and kumbucha or at least that is our (under) estimate</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="dataBox">
                    <Row style={{textAlign: "center", fontSize: "18px", marginBottom: "30px"}}>
                        <p><b>When you partner with Fetchly Labs,</b>creating a splendid app is just a few taps away.</p>
                    </Row>
                    <Row>
                        <Col sm={6} className="featList">
                            <Row style={{marginBottom: "35px"}}>
                                <Col xs={6} md={2}><BsPerson/></Col>
                                <Col xs={12} md={10}>
                                    <p><strong>Design + Marketing + Engineering</strong></p>
                                    <p>An integrated team with many disciplines:<b> software, user experience, advertising and product development</b> allows you to direct the right expertise for your project’s success. </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={2}><MdMonitor/></Col>
                                <Col xs={12} md={10}>
                                    <p><strong>Monitoring and TDD</strong></p>
                                    <p>We combine the strengths of best-in-class monitoring and (TDD) test-driven development, so your solution is robust and predictable on launch day and 3,652.5 days later (ten years plus leap days). </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6} className="featList">
                            <Row style={{marginBottom: "35px"}}>
                                    <Col xs={6} md={2}><VscCircuitBoard/></Col>
                                    <Col xs={12} md={10}>
                                        <p><strong>We Are Nerds</strong></p>
                                        <p>And we love technology. Here are some of our favorites right now: <b> Ruby on Rails, Node.js, React Native, Android, iOS, React.js, C#, Java, Postgres (and other SQL), NoSQL</b></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2}><GrCompliance/></Col>
                                    <Col xs={12} md={10}>
                                        <p><strong>Compliance</strong></p>
                                        <p>We happen to be very good at projects with a high level of compliance requirements. We have built software for medical/scientific application that handle and succeed audit for 21 CFR Part 11, GCP, GDPR, ALCOA, ISO9001 (and others).  </p>
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </Row>
                <Row className="dataBox">
                    <Row style={{justifyContent: "center"}}>
                        <Col md={7} style={{textAlign: "center", fontSize: "20px"}}>
                            <p>Instead of worrying about how your vision will come to life, why not team up with an industry trusted partner? <b>Fetchly brings you seasoned talent for both consumer and enterprise applications.</b></p>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "40px"}}>
                        <img src={partners}/> 
                    </Row>
                    <Row>
                        <Col sm={6} >
                            <h1 style={{fontSize: "77px", fontWeight: "600", color: "#ff6043", lineHeight: "75px"}}>Perfection Matters</h1>
                            <p> Whether your application aims to please your customers, business partners or world-wide citizens of the internet, finding the right balance between robust engineering and beauty is a worthwhile pursuit </p>
                        </Col>
                        <Col sm={6}>
                            <img src={fetchlyJob} style={{width: "78%"}}/>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Home