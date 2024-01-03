import React from 'react'
import Cards from '../components/Cards'
import People from '../components/People'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Cards/>
        <People/>
        <Footer/>
    </div>
  )
}

export default Home