import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from '../src/pages/HomePage/HomePage.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App