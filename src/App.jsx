import { Routes, Route } from 'react-router-dom'
import { TodoListHome } from './pages/TodoListHome'
import { Header } from './components/Header'
import { TodoListCreate } from './pages/TodoListCreate'
import { TodoListContextProvider } from './context/TodoListContext'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <div className='min-h-screen bg-zinc-200 pb-5'>
      <Header />
      <div className='container mx-auto'>
        <TodoListContextProvider>
          <Routes>
            <Route path='/' element={<TodoListHome />} />
            <Route path='/createTask' element={<TodoListCreate />} />
            <Route path='/editTask/:id' element={<TodoListCreate />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </TodoListContextProvider>
      </div>
    </div>
  )
}

export default App
