import React from "react";
import styles from "./about-css-modules.module.css"
import Container from "../components/container";

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)


export default() => (
    <Container>
        <h1>About css</h1>
        <p> Modules are cool</p>
    <User
        username="Thomas F. Lyseggen"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Thomas"
    />
    <User
        username="Thomas F. Lyseggen"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm also Thomas"
    />
    </Container>
)
