import React from "react";
import Layout from "./layout.js";
import styles from "./main.module.css";

export default ({ children }) => (
    <div>
    <div className={styles.main}>
        {children} 
    </div>
    </div>
)
