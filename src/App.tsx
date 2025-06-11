import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Resume />
          <Contact />
        </main>
      </div>
    </Router>
  )
}

export default App 