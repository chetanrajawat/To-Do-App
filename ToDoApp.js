import React, { useState } from 'react';
function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput.trim()]);
            setTaskInput('');
        }
    };
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };
    const handleChange = (event) => {
        setTaskInput(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };
    return (
        <div>
            <h2>To Do List</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter task"
                    value={taskInput}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={handleAddTask}>
                        Add Task
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item">
                        {task}
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={() => handleDeleteTask(index)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
                            </button>
                            </li>
                        ))}
                    </ul>
                 </div>
                 );
}

export default TodoList;