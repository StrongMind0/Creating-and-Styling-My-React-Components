import React,{useState} from "react";

import Goal from "./components/Goals/Goal";
import NewGoal from "./components/NewGoal/NewGoal";
import './App.css';

const Dummy__Goals = [
  {
    id: 'e1',
    goal: 'Do all exercises!',
  },
  {
    id: 'e2',
    goal: 'Finsih the course!',
  }
];
const App = () => {
  const [Goals, setGoal] = useState(Dummy__Goals)
  
  const addNewGoalHandler = inputGoal => {
    setGoal(prevGoal => {
      return [inputGoal, ...prevGoal]
    })
  }

  return (
    <div> 
      <NewGoal onAddNewGoal={addNewGoalHandler} />
      <Goal items={Goals} />
    </div>
  )
}

export default App;