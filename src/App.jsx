import React  from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Navbar2/>
        <Routes>
       {/*    <Route path='/' element={<Dashboard/>}></Route> */}
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
