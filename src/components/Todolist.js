import React, {useState} from 'react'
import Todoform from './Todoform'

function Todolist() {
    const [todos, setTodos] = useState([])
    // si qlqun mets du vide la tache ne s'affichera pas. 
    const addToDo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)) {
            const newTodos= [todo,...todos]
            setTodos(newTodos)
            console.log(...todos);
        }

    }
    return (
        <div>
            <h1>What to you want to do today?</h1>
            <Todoform onSubmit={addToDo} />
        </div>
    )
}

export default Todolist
