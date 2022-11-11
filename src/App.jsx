import './App.css'

function App() {
  const [todos, setTodos] = useState(['Clean the room', 'Wash my clothes', 'wash the cups', 'Take Dogs for a walk']);
  return(
    <div>
      <h1> hello this is papa react lets do this</h1>
      <input />
     <button>Add Todo</button>

     <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
     </ul>
    </div>
    
  )
}

export default App
