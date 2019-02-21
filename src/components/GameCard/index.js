import React from "react";
import "./style.css";

function GameCard (props) {
    return (
        <div 
            style={{backgroundImage: `url("${props.image}")`}}
            className="gamecard"
            onClick={() => props.handleClick(props.id)}
        />
            
    )
}

export default GameCard;