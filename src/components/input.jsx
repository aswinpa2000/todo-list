import { useState } from "react";
import { useEffect } from "react";

const Input = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  
 //taking entered values from input field
  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

 //add task
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

 //useEffect
  useEffect(() => {
    if (enteredTask.length < 3) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [enteredTask]);

  return (
    <form id="add-tasks" onSubmit={handleSubmit}>
      <input
        placeholder="Enter tasks.."
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="add-task-button" disabled={disableButton}>ADD TASK</button>
    </form>
  );
};

export default Input;
