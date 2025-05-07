import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Menu from '../components/Menu'
import Works from '../sections/Works'
import About from '../sections/About'
import Testimonial from '../sections/Testimonials'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

function Home() {
  

  return (
    <div className='w-full'>
      <Menu />

      <Hero />

      <Services />

      <Works />

      <About />

      <Testimonial />
      
      <Contact />

      <Footer />
    </div>
  )
}

export default Home