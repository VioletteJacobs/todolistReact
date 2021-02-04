import React, {useState} from 'react'

function Todoform(props) {
    const [input, setInput] = useState('')
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            // créer un id aléatoire
            id: Math.floor(Math.random() * 10000),
            text:input
        });
        // rendre l'input vide une fois qu'on a envoyé la tâche qu'on voulait.
        setInput('');
    };
    const handleChange =e =>{
        setInput(e.target.value)
    }
    return (
        <form className='todo_form' onSubmit={handleSubmit}>
            <input type="text" placeholder="add a to do" value={input} name="text" className="todo_input" onChange={handleChange}/>
            <button className="todo_button">Add todo</button>
        </form>
    )
}

export default Todoform
