import { useState, useContext } from "react";
import CounterContext from "../CounterContext";


type TaskListProps = {
    tasks: string[],
    id: number
};

const TaskList = ({ tasks,id }: TaskListProps) => {
    const [taskNames, setTasks] = useState(tasks);
    const [newTask, setNewTask] = useState('');
    const { counter, setCounter } = useContext(CounterContext);

    const deleteTask = (task: string) => {
        let taskIndex = taskNames.indexOf(task);
        let newList = [...taskNames];
        newList.splice(taskIndex, 1);
        setTasks(newList);
        if (setCounter) {
            setCounter(counter - 1);
        }
    };

    const addTask = () => {
        if (newTask && !taskNames.includes(newTask)){
            setTasks([...taskNames, newTask]);
            setNewTask('');
            if (setCounter) {
                setCounter(counter + 1);
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    };

    return (
        <ul>
            {taskNames.map(t => (
                <li key={t}>
                    {t}
                    <button onClick={() => {
                        deleteTask(t);
                    }}>Del</button>
                </li>
            ))}
            <li key={`${id}_newTask`}>
                <input id={`${id}_newTask`} type="text" onChange={ handleChange } value={newTask} />
                <button onClick={addTask}>Add</button>
            </li>
        </ul>
    )
}

export default TaskList;