import React from "react";
import NavBar from "../components/navBar";
import { Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import './styles/contact.css'
import map from '../images/contact/map.png'
import SendMessage from '../components/contactForm'

function Contact(){
    return(
        <>
            <NavBar/>
            <Row style={{marginTop: "45px", marginBottom: "65px"}}>
                <Col style={{textAlign: 'center'}}>
                    <span className="titleContact">Contacting our team</span>
                </Col>    
            </Row>
            <Row style={{width: "80%", margin: "auto", marginBottom: "60px"}}>
                <Col sm={6}>
                    <img src={map} style={{width: "100%"}}/>
                </Col>
                <Col sm={6} >
                    <Row className="address">
                        <p><strong>Talking with our team</strong></p>
                        <p>Reach Fetchly Labs to discuss your application plans, and find out what we can do for you. Our team is excited to hear about your ambitions and work with you to fulfill them. </p>

                    </Row>
                    <Row className="address">
                        <p><strong>Denver:</strong></p>
                        <p>3575 Ringsby Court</p>
                        <p>Denver, Colorado </p>
                    </Row>
                    <Row className="address">
                        <p><strong>Austin:</strong></p>
                        <p>801 Barton Springs Road, </p>
                        <p>Austin, Texas </p>
                    </Row>
                </Col>
            </Row>
            <Row className=""></Row>
            <SendMessage/>
            <Footer/>
        </>
    )
}

export default Contact