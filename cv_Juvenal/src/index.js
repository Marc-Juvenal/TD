import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
import App from './App';
import reportwebvitals from "./reportWebvitals";

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

reportwebvitals();