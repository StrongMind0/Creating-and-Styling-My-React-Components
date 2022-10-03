import React from "react";

import GoalForm from "./GoalForm";
import './NewGoal.css'

const NewGoal = props => {
    const saveGoalHandler = enteredGoal => {
        const goalData = {
            id: Math.random().toString(),
            ...enteredGoal
        };

        props.onAddNewGoal(goalData)
    }

    return (
        <div className="new-goal">
            <GoalForm onSaveGoal={saveGoalHandler} />
        </div>
    );
}

export default NewGoal;