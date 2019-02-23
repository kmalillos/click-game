import React from "react";
import "./style.css";

function GameCards(props) {
    return (
        <div>
            <div
                className="gamecard"
                style={{ backgroundImage: `url("${props.image}")` }}
                onClick={() => props.handleClick(props.id)}
            />
        </div>
    )
}

export default GameCards;