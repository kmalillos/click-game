import React from "react";

const Scoreboard = (props) => {

    return (
        <div className="card">
            <div className="card-body text-center">
                Score: {props.score} | Top Score: {props.topscore}
            </div>
        </div>
    )
}

export default Scoreboard;