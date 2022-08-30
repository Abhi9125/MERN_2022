import React from "react";
import InputBox from "./InputBox";
import OutPutBox from "./OutputBox";
        function Todo() {  // store these li's into an array
            let [tasks, setTasks] = React.useState([]);
            function addTask(value) {
                // copy data from original
                let newTaskArr = [...tasks];
                if (value == "") {
                    alert("Kindly enter some task");
                    return;
                }
                newTaskArr.push(value);
                setTasks(newTaskArr);
                console.log(value);
            }   
            return (
                <React.Fragment>
                    <h1>Todo App</h1>
                    <InputBox addTask={addTask} />
                    <OutPutBox tasks={tasks} />
                </React.Fragment>)
}
export default Todo;
        