import { useState } from 'react'
import { Header} from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
 

function App() {
  const [todos,setTodos] =  useState([{
    input: 'Hello! Add your first todo!',
    complete: true
  }])

  const [selectedTab, setSelectedTab] = useState('Open')
 
  function handleAddTodo(newTodo){
    const newTodoList = [...todos,{input:newTodo, complete:false}]
    setTodos(newTodoList)
  }
  return (
    <>
      <Header todos={todos}/> 
      <Tabs selectedTab={selectedTab} setSelectedTab ={setSelectedTab} todos={todos}/>
      <TodoList selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/> 
    </>
  )
}

export default App
