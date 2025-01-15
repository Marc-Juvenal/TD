import React, { useState, useEffect } from "react";
import { preloader } from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projets from "./components/Projets/Projects";
import Footer from "./components/footer";
import Resume from "./components/Resume/ResumeNew";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css"
import "./App.css";
import "boostrap/dist/css/boostrap.main.css";

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Projets />} />
                    <Route path="/" element={<About />} />
                    <Route path="/" element={<Resume />} />
                    <Route path="/" element={<Navigate to="/" />} />
                </Routes>
                <footer />
            </div>
        </Router>
    );
}

export default App;