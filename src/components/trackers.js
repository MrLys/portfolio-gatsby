import React from "react";
import styles from "./trackers.module.css";

export default ({ children }) => (
    <div className={styles.trackersWrapper}>
        <div className={styles.cn}>
        <ul id="myMenu">
                {children}
        </ul>
        </div>
    </div>
)
