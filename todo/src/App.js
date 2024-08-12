import './App.css';
import useData from "./api/useData";
import TodoList from './component/TodoList';

function App() {
  const apiData = useData();
  
  return (
    <div className="App">
      <TodoList todoData={apiData.data} setTodo={apiData.setData} />
    </div>
  );
}

export default App;
