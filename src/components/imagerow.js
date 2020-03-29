import React from "react";
import styles from "./imagerow.module.css";

const row = props => {
    let additional;
    if (props.additional) {
        additional = <a href={props.additional} target="_blank" rel="noopener noreferrer"><p className={styles.p}>{props.additionalText}</p></a>;
    }
    if (props.imageLeft) {
    return (
    <div className={styles.cn}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageCn}> 
            <img style={{borderRadius: "10px"}} src={props.image} alt={props.image} height="350" width="500"/>
        </div>
        </a>
        <div className={styles.rowText}>
            <h1 style={{color: "#00adb5", fontSize: "46px", fontFamily: "Tangerine, serif", marginBottom: "5px", marginTop: "5px"}}>
                {props.name}
            </h1>
            <h2 className={styles.h2}>
                {props.title}
            </h2>
            <p className={styles.p}>
            {props.tech}
            </p>
            <p className={styles.p}>
            {props.desc}
            </p>
        {additional}
        </div>
    </div>
    );
    } else {
        return (
    <div className={styles.cn}>
        <div className={styles.rowText}>
            <h1 style={{color: "#00adb5", fontSize: "46px", fontFamily: "Tangerine, serif"}}>
            {props.name}
            </h1>
            <h2 className={styles.h2}>
            {props.title}
            </h2>
            <p className={styles.p}>
            {props.tech}
            </p>
            <p className={styles.p}>
            {props.desc}
            </p>
        {additional}
        </div>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageCn}> 
            <img style={{borderRadius: "10px"}} src={props.image} alt={props.image} height="350" width="500"/>
        </div>
            </a>
    </div>
        );
    }
};
export default row;
