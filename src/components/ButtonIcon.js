import React from "react";
import styles from "./ButtonIcon.module.css";
import { IconContext } from "react-icons";

export default props => (
    <div className={styles.iconCn}>
            <IconContext.Provider value={{ size: "40px"}}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                {props.icon}
            </a>
            </IconContext.Provider>
    </div>
)
