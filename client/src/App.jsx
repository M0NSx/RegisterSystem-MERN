import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './dashbord'
import Register from './register'
import Login from './login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  )
}

export default App