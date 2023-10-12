










import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './dashbord'
import Register from './register'
import Login from './login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
