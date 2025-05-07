import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Menu from '../components/Menu'

function Home() {
  

  return (
    <div className='w-full'>
      <Menu />

      <Hero />

      <Services />
    </div>
  )
}

export default Home