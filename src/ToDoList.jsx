import React, {useState} from 'react'

function ToDoList () {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange (event){
        setNewTasks(event.target.value);

    }

    function addTask () {

        if(newTasks.trim() !== ""){
            setTasks(t =>[...t, newTasks]);
            setNewTasks("");
        }
        
    }

    function deleteTask (index) {
        const updatedTasks = tasks.filter((_, i) => i!==index);
        setTasks(updatedTasks);
    }

    function moveTaskUp (index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown (index) {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }



    return(
        <div className='to-do-list'>
            <div>
                <h2>TO-DO-List</h2>
                <input type="text"
                placeholder='Enter your task...'
                value={newTasks}
                onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>ADD NEW</button>
                
            </div>
            <div className="list-task">
            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>Up</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>Down</button>
                </li>)}
                
            </ol>
            </div>

        </div>
    );
}

export default ToDoList