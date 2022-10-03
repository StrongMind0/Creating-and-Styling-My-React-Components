import React from "react";

import GoalItems from "./GoalItems";

const Goal = props => {
    return (
        <div>
            {props.items.map(goals => (
                <GoalItems
                    key={goals.id}
                    items={goals.goal} />
            ))}
      </div>
    );
}

export default Goal;