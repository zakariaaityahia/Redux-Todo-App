import './App.css';
import  {React, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addTodoAction, removeTodoAction } from './Components/actions/TodoAction';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch(); 

  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(removeTodoAction(t))
  }

  return (
    <div className="App"> 
      <div className="all">
      <div className='home-page'>
        <h1> Redux Todo App </h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter a Todo'
            style={{
              width: "400px",
              padding: '10px',
              border: "#000000 solid",
              fontSize: 18,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit'
            style={{
              padding: 12,
              boredrRadius2: 25,
              fontSize: 15,
              marginLeft: 20,
              backgroundColor: "white",
          }}
          >
            Go 
          </button>
        </form>
        <ul className='allTodos'>
            {todos && todos.map((t) => (
                <li key={t.id} className='singleTodo'>
                <span className='todoText'>{t.todo}</span>
                  <button
                    style={{
                      boredrRadius: 25,
                      padding: 10,
                      border: '1px solid #fff',
                      backgroundColor: 'orangered',  
                      fontSize: '15px',
                      color: "#fff"
                    }}
                    onClick={() => removeHandler(t)}
                  >Delete</button>
                </li>
              ))}
          </ul>
      </div>   
      </div>
    </div>
  )
} 

export default App;
 