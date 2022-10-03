import React, {useState} from "react";

import './GoalForm.css';

const GoalForm = props => {
    const[enteredGoal, setEnteredGoal] = useState('')

    const textChangeHandler = (event) => {
        setEnteredGoal(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();

        const goalData = {
            goal: enteredGoal,
        }

        props.onSaveGoal(goalData);

        setEnteredGoal('');
        
    }

    return (
        <form onSubmit={submitHandler} className="goal-form">
            <div className="goal-form__controls">
                <label>Course Goal</label>
                <input
                    type='text'
                    onChange={textChangeHandler}
                    value={enteredGoal}
                />
            </div>

            <button type="submit">Add Goal</button>
        </form>
    );
}

export default GoalForm;