import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";


export default () => (
    <div style={{  }}>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <Header headerText="Contact"/>
        <p> Feel free to contact me </p>
    </div>
)
