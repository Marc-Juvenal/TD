import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/false";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                <h3>Designed and Developed By Marc-Juvénal</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                <h3>Copywright ² {year} MJ</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="footer-icons">
                            <a 
                            href="https://github.com/Marc-Juvénal"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                            href="https:https://www.linkedin.com/in/"
                            style={{ color: "white "}}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;