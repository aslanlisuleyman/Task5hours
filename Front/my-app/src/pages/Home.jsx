import React from 'react'
import Cards from '../components/Cards'
import People from '../components/People'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header/>
        <Cards/>
        <People/>
        <Footer/>
    </div>
  )
}

export default Home