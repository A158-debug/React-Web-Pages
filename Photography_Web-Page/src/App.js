import React from 'react'
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Navigate to="/"/>} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App