import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Teachers from '../Components/Teachers/Teachers'
import Our from '../Components/Our/Our'
import NewCollections from '../Components/NewCollections/NewCollections'
import Offers from '../Components/Offers/Offers'
import HeroNew from '../Components/Hero/HeroNew'
import StarsCanvas from '../Components/Stars/Stars'



const Home = () => {
  return (
    <div>
     {/*  <Hero/>*/}
     <HeroNew/>
      <Popular/>
      <Teachers/>
      <Our/>
      <NewCollections/>
      <Offers/>
      

    </div>
  )
}

export default Home