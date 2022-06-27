import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import './styles/work.css'

import i25kia from  "../images/work/i25kia.png"
import sift1 from "../images/work/sift1.png"
import sift2 from "../images/work/sift2.png"
import fetchlyJob from '../images/home/fetchlyJob.png'
import datatense from '../images/work/datatense.png'

function Work(){
    return(
        <>
            <NavBar/>
            <Container>
                <Row style={{marginTop: "45px", marginBottom: "35px"}}>
                    <Col style={{textAlign: 'center'}}>
                        <span className="titleWork">Some of our work</span>
                    </Col>
                </Row>
                <Row className="dataBox">
                    <h1>i25 Kia</h1>
                    <Row>
                        <Col lg={8}>
                            <img src={i25kia} style={{width: "100%"}}/>
                        </Col>
                        <Col lg={4} pb={5}>
                           <p>i25 Kia wanted a web app that didn’t just stand out but identified them as a whole new breed of car dealership. We worked with them to create the smoothest car-buying process around. 100% online. </p> 
                           <div className="detailBox"> Roles: Engineering, Project Management, Design </div>
                        </Col>
                    </Row>
                </Row>
                <Row className="dataBox">
                    <h1>Sift Dating</h1>
                    <Row>
                        <Col lg={4} sm={4}>
                            <img src={sift1} style={{width: "78%", float: "right"}}/>
                        </Col>
                        <Col lg={4} sm={4}>
                            <p>Yes we did. We built a dating app. Sift allows singles to sort through potential matches based on the icons that express their interests. This app has an internal chat feature for when the communication really starts to heat up. </p>
                            <div className="detailBox"> Roles: Engineering, Product, Design  </div>
                        </Col>
                        <Col lg={4} sm={4}>
                            <img src={sift2} style={{width: "78%", float: "left"}}/>
                        </Col>
                    </Row>
                </Row>
                <Row className="dataBox">
                    <h1>University of Denver Summer Events</h1>
                    <Col lg={6} sm={6}>
                        <img src={fetchlyJob} style={{width: "78%"}}/>
                    </Col>
                    <Col lg={6} sm={6}>
                        <p>University of Denver wanted a fresh way to inform and connect the people who attended their summer events. We built them an app that both provides detailed information about events and an interactive game using campus-hidden QR Codes. </p>
                        <div className="detailBox"> Roles: Engineering, Design  </div>
                    </Col>
                </Row>
                <Row className="dataBox">
                    <h1>Datatense</h1>
                    <Col lg={5} pb={5}>
                        <p>In the world of clinical trials building new software can be a daunting task. Fetchly built a mobile application and questionnaire designer that needed to comply with a hefty set of FDA regulations and work smoothly for patients. </p>
                        <div className="detailBox"> Roles: Engineering, Quality/Regulation, SDLC, Design </div>
                    </Col>
                    <Col lg={7}>
                        <img src={datatense} style={{width: "100%"}}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Work