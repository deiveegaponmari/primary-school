import React  from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './components/Home'
import AdmissionForm from './components/AdmissionForm'
import About from './components/About'
import Pre_primary from './components/Pre_primary'
import Primary from './components/Primary';
import Student_life from './components/Student_life'
import Gallery from './components/Gallery'
import Achievement from './components/Achievement'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import PublicLayout from './Layouts/PublicLayout'
import AuthLayout from './Layouts/AuthLayout'
import FreeService from './components/FreeService'

function App() {

  return (
    <>
      <Router>
        <Routes>
       {/*    <Route path='/' element={<Dashboard/>}></Route> */}
          <Route path='/register' element={<AuthLayout><Register/></AuthLayout>}></Route>
          <Route path='/login' element={<AuthLayout><Login/></AuthLayout>}></Route>
          <Route path='/admissionform' element={<PublicLayout><AdmissionForm/></PublicLayout>}></Route>
          <Route path='/' element={<PublicLayout><Home/></PublicLayout>}></Route>
          <Route path='/about' element={<PublicLayout><About/></PublicLayout>}></Route>
          <Route path='/preprimary' element={<PublicLayout><Pre_primary/></PublicLayout>}></Route>
          <Route path='/primary' element={<PublicLayout><Primary/></PublicLayout>}></Route>
          <Route path='/studentlife' element={<PublicLayout><Student_life/></PublicLayout>}></Route>
          <Route path='/freeservice' element={<PublicLayout><FreeService/></PublicLayout>}></Route>
          <Route path='/gallery' element={<PublicLayout><Gallery/></PublicLayout>}></Route>
          <Route path='/achievement' element={<PublicLayout><Achievement/></PublicLayout>}></Route>
          <Route path='/feedback' element={<PublicLayout><Feedback/></PublicLayout>}></Route>
          <Route path='/contact' element={<PublicLayout><Contact/></PublicLayout>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
