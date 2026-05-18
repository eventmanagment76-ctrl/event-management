import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />

        <Outlet />

        
          <section className='foo-1'>
  <Footer />
</section>
      </div>
    </>
  )
}

export default App