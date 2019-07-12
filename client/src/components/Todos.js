import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './Todos.css';

const Todos = () => {
  // initial state
  const [todos, setTodos] = useState([]);

  const saveTodos = async (val)=>{
    try {
      setTodos([{text:val}, ...todos]);
      await axios.post('http://localhost:5000/api/todos/add',{text: val});
    } catch (error) {
      console.log('err', error);
    }
  }
  
  const getTodos = async ()=>{
    try {
      const response = await axios.get('http://localhost:5000/api/todos/');
      const newTodos = response.data.result;
      
      // update the todos list in state
      setTodos(newTodos);
    } catch (error) {
      console.log('err', error);
    }
  }
//   Fetch to-do list when component mounts
  useEffect(() => {
    getTodos()
  }, [])

    return (
        <div>
          <TodoForm addTodo={val => saveTodos(val)} />  
          <h5>To-dos</h5>
            <ul className="todo-list">
        {   todos && todos.length > 0
            ? 
            todos.map((item, i)=>(
                <Todo key={i} todo={item} />
            ))
            :
            'No To-do items found'
        }
            </ul>
        </div>
    )
}


const Todo = ({todo}) => {
    return (
        <li className="todo-item">
         {todo.text}
        </li>
    )
}

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    return (
        <form onSubmit={(e)=>{
          e.preventDefault();
 
          // add an item to the list
          addTodo(value);

          // reset the input field to empty
          setValue('')
          }}>
            <input input='text' value={value} onChange={e=> setValue(e.target.value)} placeholder="Add a To-do Item" />
        </form>
    )
  }

export default Todos


