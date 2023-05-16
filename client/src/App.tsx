import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from "../src/components/Signup"
import Login from './components/Login'
import { TextField } from '@mui/material'
import Jobs from "./components/Jobs"
function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/textfield' element={<TextField/>} />
      <Route path='/Jobs' element={<Jobs/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
