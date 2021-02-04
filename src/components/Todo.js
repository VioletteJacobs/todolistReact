import React,{useState} from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'

function Todo() {
    const [edit, setEdit] = useState({
        id:null, 
        value:""
    })
    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}></div>
            <div className="icons"></div>
        </div>
    ))
}

export default Todo
