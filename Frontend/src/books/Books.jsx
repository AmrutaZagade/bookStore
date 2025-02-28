import React from 'react'
import Footer from '../components/Footer'
import Book from '../components/Book'
import Navbar from '../components/Navbar'

function Books() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
           <Book />
        </div>
        <Footer />
    </div>
  )
}

export default Books