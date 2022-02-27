import React from "react";
import { Row, Col} from "reactstrap";
import { HiUsers, HiLightBulb, HiClipboardCheck } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import "./home.css";

const Main = (props) => {
    return (
        <div className="typewrite">
            <Row noGutters className="text-center align-items-center seat-row">
                <Col>
                {/* <h1>Are you still worried about COVID-19?</h1> */}
                <Typewriter onInit={(typewriter) => {
                    typewriter.typeString("Are you looking for a safe seat? ").pauseFor(2000).start()
                 }} />
                <button color="none" className="book-table-btn" onClick={() => {
                    props.setPage(1)
                }
                }> Book Your Seat</button>
                </Col>
            </Row>
            <Row noGutters className="text-center big-img-container">
                <Col>
                < img src={require("../../images/home.png")} alt="cafe" className="big-img"/>
                </Col>
            </Row>
            <Row className="description">
                <Col className="column">
                    <Col style={{color: 'rgb(236, 221, 152)', display: 'flex', justifyContent: 'center', paddingBottom: '35px'}} >
                        <HiLightBulb size={50}></HiLightBulb>
                    </Col>
                    <div>
                        <h3 style={{display: 'flex', justifyContent: 'center'}}className="text">Better Visualisation</h3>
                        <p style={{display: 'flex', justifyContent: 'center'}}className="text-p">Use our AR technology to look through the study space to find your sweet spot.</p >
                    </div>
                </Col>
                <Col className="column">
                    <Col style={{color: 'rgb(236, 221, 152)', display: 'flex', justifyContent: 'center', paddingBottom: '35px'}} >
                        <HiClipboardCheck size={50}></HiClipboardCheck>
                    </Col>
                    <div>
                        <h3 style={{display: 'flex', justifyContent: 'center'}}className="text">Goodbye Covid-19</h3>
                        <p style={{display: 'flex', justifyContent: 'center'}}className="text-p">Our system automatically block out the seat besides you to keep you safe and healthy.</p >
                    </div>
                </Col>
                <Col className="column">
                    <Col style={{color: 'rgb(236, 221, 152)',display: 'flex', justifyContent: 'center', paddingBottom: '35px'}} >
                        <HiUsers size={50}></HiUsers>
                    </Col>
                    <div>
                        <h3 style={{display: 'flex', justifyContent: 'center',}}className="text">Long Time No See</h3>
                        <p style={{display: 'flex', justifyContent: 'center'}}className="text-p">We know quarantine time is hard, we made this to support your space booking at your preferred office.</p >
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Main;