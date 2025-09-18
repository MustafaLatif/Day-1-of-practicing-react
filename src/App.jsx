import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import PrdDetail from './components/PrdDetail'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Router>
        
        <Navbar/>

        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/products/:id' element={<PrdDetail/>}/>
        </Routes>
      </Router>  
    </div>
  )
}

export default App
