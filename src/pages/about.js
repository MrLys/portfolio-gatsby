import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default() => (
    <div style={{ color: `teal` }}>
    <Header headerText="I'm Thomas"/>
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>
        <h1> About me </h1>
        <p> Something awesome </p>
    </div>
)
