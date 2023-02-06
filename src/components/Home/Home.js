import React from 'react'
import Header from '../header/header'
import Crousel from '../crousel/crousel'
import Cards from '../cards/cards'
import Footer from '../footer/footer'

function Home() {
  return (
    <div>
      <Header/>
      <Crousel/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home