import React  from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
