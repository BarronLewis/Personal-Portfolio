import React, {useState}from 'react'
import {BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill} from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
import './Todo.css'
let index = 0;
function Todo() {
  const [todos, setTodos] = useState([]);
    const [task, setTask] = useState();

    const handleAdd = () => {
       setTodos(current => [...current, {id: index,desc: task, complete: false}]);
       index++
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    }
    const handleEdit = (id) => {
        const nextTodos = todos.map(todo => {
            if(id === todo.id){
                todo.complete = !todo.complete;
                return todo;
            }
            return todo;
        })
        setTodos(nextTodos);
    }
  return (
    <div className='home'>
      <h2>To Do List</h2>
      <div className='create_form'>
        <input type="text" name='' id='' onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
        {
            todos.length === 0 ?
            <div><h2>No Task</h2></div>
            :
            todos.map((todo)=>{
                return (
                    <div className='task' key={todo.id}>
                        <div className='checkbox' onClick={() => handleEdit(todo.id)}>
                        <FontAwesomeIcon icon= {todo.complete ? faCircleCheck : faCircle}/>
                            <p>{todo.desc}</p>
                        </div>
                        <div className='deleteButton' onClick={() => handleDelete(todo.id)}>
                           <FontAwesomeIcon icon= {faTrash}/>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todo
