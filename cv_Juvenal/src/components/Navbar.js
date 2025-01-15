import React, { useState } from "react";
import Navbar from "react-bootsrap/Navbar";
import nav from "react-bootsrap/Nav";
import container from "react-bootsrap/container";
import logo from "../assets/Images/logo.png";
import Button from "react-boostrap/Button";
import { Link } from "react-router-dom";
import { cgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AioutlineUser,
} from "react-icons/ai";

import { cgFileDocument } from "react-icons/cg";

function Navbar() {
    const [expand, updateExpanded] = useState(false);
    const [navcolour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

        window.addEventListener("scroll", scrollHandler);

        return (
            <Navbar
                expanded={expand}
                fixed="top"
                expand="md"
                className={Navcolour ? "sticky" : "navbar"}
            >
                <container>
                    <Navbar.Brand href="/" className="d-flex">
                        <img src={logo} className="img-fluid logo" alt="brand" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onclick={() => {
                            updateExpanded(expand ? false : "expanded");
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" defaultActivekey="#home">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" onclick={() => updateExpanded(false)}>
                                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                as={Link}
                                to="/about"
                                onclick={() => updateExpanded(false)}
                            >
                                <AioutlineUser style={{ marginBottom: "2px"}} /> about
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/project"
                                    onclick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                    />{" "}
                                    projects 
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                as={Link}
                                to="/resume"
                                onclick={() => updateExpanded(false)}
                                >
                                    <cgFileDocument style={{ marginBottom: "2px"}} /> resume
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                href="https://soumajitblogs.vercell.app/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <ImBlog style={{ marginBottom: "2px"}} /> Blogs
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="fork-btn">
                                <Button
                                    href="https://github.com/soumyajit4419/Portfolio"
                                    target="_blank"
                                    className="fork-btn-inner"
                                    >
                                        <cgGitFork style={{ fontsize: "1.2em" }} />{" "}
                                        <AiFillStar style={{ fontsize: "1.1em" }} />
                                    </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.collapse>
                </container>
            </Navbar>
        );
}

export default Navbar;