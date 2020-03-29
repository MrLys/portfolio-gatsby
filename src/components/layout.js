import React from "react";
import { FaGithub, FaKeybase, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import ButtonIcon from "./ButtonIcon";
import styles from "./layout.module.css";

export default ({ children }) => (
    <div>
        <div className={styles.sidenav}>
            <div className={styles.cn}>
                <ButtonIcon icon={<FaGithub />} url="https://github.com/mrlys"/>
                <ButtonIcon icon={<FaKeybase />} url="https://keybase.io/mrlys"/>
                <ButtonIcon icon={<FaLinkedinIn />} url="#"/>
                <ButtonIcon icon={<FaTwitter />} url="#"/>
                <ButtonIcon icon={<FaEnvelope/>} url="mailto:thomas@lyseggen.xyz"/>
            </div>
        </div>
        <div className="waveContainer">
            {children}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00adb5" fill-opacity="1" d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,160C685.7,181,754,235,823,229.3C891.4,224,960,160,1029,160C1097.1,160,1166,224,1234,234.7C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </div>
    </div>
)
