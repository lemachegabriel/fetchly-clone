import React, { useState } from "react";
import NavBar from "../components/navBar"
import { Container, Row, Col, Card } from "react-bootstrap";
import office from '../images/about/office.jpg'
import {FaUserCircle} from 'react-icons/fa'
import './styles/about.css'
import Footer from "../components/footer";

function About(){
    const lines = [1, 2, 3]
    return(
        <>
            <NavBar/>
            <Container>
                <Row style={{marginTop: "45px", marginBottom: "35px"}}>
                    <Col style={{textAlign: 'center'}}>
                        <span className="titleWork">About Fetchly</span>
                    </Col>
                </Row>
                <Row style={{width: "80%", margin: "auto", marginBottom: "60px"}}>
                    <img src={office}/>
                </Row>
                <Row className="dataBox">
                    {lines.map((val, ind) => {
                        return(
                            <Row style={{width: "85%", margin: "auto"}}>
                        <Col className="peoples">
                            <FaUserCircle />
                            <p><strong>Gabriel</strong></p>
                            <p>Software Developer</p>
                        </Col>
                        <Col className="peoples">
                            <FaUserCircle />
                            <p><strong>Gabriel</strong></p>
                            <p>Software Developer</p>
                        </Col>
                        <Col className="peoples">
                        <FaUserCircle />
                        <p><strong>Gabriel</strong></p>
                            <p>Software Developer</p>
                        </Col>
                    </Row>
                        )
                    })}  
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default About