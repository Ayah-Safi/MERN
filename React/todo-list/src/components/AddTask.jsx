import React, {useState} from "react";
import Task from './Task';

const AddTask = (props) => {
    const [tasks, setTasks] = useState([
        {
            title: 'clean home',
            completed: false
        },
        {
            title: 'study material',
            completed: false
        },
        {
            title: 'check email',
            completed: false
        }
    ]);

    const handleSumbit = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {
            title: e.target.task.value,
            completed: false
        }]);
        e.target.task.value = '';
    }

    const toggleTask = (targetTaskIndex) => {
        const newArrayBeforeIndex = tasks.slice(0, targetTaskIndex);
        const newArrayAfterIndex = tasks.slice(targetTaskIndex + 1);
        const targetTask = { ...tasks[targetTaskIndex], completed: !tasks[targetTaskIndex].completed}
        setTasks([
            ...newArrayBeforeIndex,
            targetTask,
            ...newArrayAfterIndex,
        ]);
    }

    const removeTask = (targerTaskIndex) => {
        setTasks([...tasks.filter((item, index) => index !== targerTaskIndex)])
    }

return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
        <div className="formSection" >
            <form style={{display:"flex", gap:20}} onSubmit={handleSumbit}>
                <input type="text" name="task" />
                <button type="submit">Add</button>
            </form>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 7}} >
            {tasks.map((task, index) => <Task 
            handleRemove={() => removeTask(index)} 
            handleToggle={() => toggleTask(index)}
            title={task.title} 
            completed={task.completed}
            />)}
        </div>
    </div>
)
}

export default AddTask;