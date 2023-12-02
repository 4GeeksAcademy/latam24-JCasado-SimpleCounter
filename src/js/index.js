
import React from "react";

import ReactDOM from "react-dom";

import "../styles/index.css";

import Home from "./component/home.jsx";

let counter = 0;

setInterval(() => {

    if (counter < 100000) {

        counter++;

    } else {

        counter = 0;
    }

    ReactDOM.render(<Home seconds={counter} />, document.querySelector("#app"));

}, 1000);