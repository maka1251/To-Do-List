import { useState } from "react";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <input 
            type="text" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Введите задачу..."
            />
            <button onClick={addTask} style={{ marginLeft: '10px' }}>Добавить</button>

            <ul style={{ marginTop: '20px' }}>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                    ))}
            </ul>
        </div>
    );
}