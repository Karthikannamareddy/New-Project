import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from "../src/components/Signup"
import Login from './components/Login'
import { TextField } from '@mui/material'
function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/textfield' element={<TextField/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
