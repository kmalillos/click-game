import React from "react";

const Scoreboard = (props) => {

    return (
        <div className="card">
            <div className="card-body text-center">
                Score: {props.score}
            </div>
        </div>
    )
}

export default Scoreboard;