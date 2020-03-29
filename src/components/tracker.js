import React from "react";
import styles from "./tracker.module.css";

/**const tracker = props => {
    const active = props.active ? styles.active : styles.inactive;
    let classes = `${styles.dot} ${active}`;
    return (
    <div className={styles.tracker}>
        <a href={props.page}>
        <span className={classes}></span>
        </a>
    </div>);
}**/

const tracker = props => {
    return (
        <li data-menuanchor={props.page} className={props.active || ''}><a href={props.pageRef}></a></li>
    )
}

export default tracker;
