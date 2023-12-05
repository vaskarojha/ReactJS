import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Sercice from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'


import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/services' exact element={<Sercice />}/>
      <Route path='/about' exact element = {<About/>}/>
      <Route path='/contact' exact element = {<Contact />} />
    </Routes>
    <Footer />
    </Router>
    
    </>
  )
}

export default App
