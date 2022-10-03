import React from "react";

import './GoalItems.css'

const GoalItems = props => {
    return (
        <div className="goal-items">
            <div className="goal-items__new">
                {props.items}
            </div>
        </div>
    );
}

export default GoalItems;