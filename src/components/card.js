import React from "react";
import style from "./card.module.css";
const card = props => {
    let text;
    let ingress;
    if (props.text) {
        text = <p style={{color: "#000"}}>{props.text}</p>;
    }
    if (props.ingress) {
        ingress = <p style={{color: "#000"}}>{props.ingress}</p>
    }
    return (
        <div style={{padding: "2px 16px"}}> 
            <div className={style.card}> 
                <h1 style={{color: "#", fontFamily: "Tangerine, serif", fontSize: "36px"}}> {props.name} </h1> 
                <section>
                {ingress}
                {text}
                </section>
            </div> 
        </div>
        );
}

export default card;
