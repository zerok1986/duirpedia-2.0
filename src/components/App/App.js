import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from '../Category/Category'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<Category category="people" />} />
          <Route path="/planets" element={<Category category="planets" />} />
          <Route path="/films" element={<Category category="films" />} />
          <Route path="/species" element={<Category category="species" />} />
          <Route path="/vehicles" element={<Category category="vehicles" />} />
          <Route
            path="/starships"
            element={<Category category="starships" />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
