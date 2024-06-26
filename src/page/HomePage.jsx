import React from 'react'
import CarFilter from '../components/CarFilter'
import CaruaselCard from '../components/CaruaselCard'
import Navbar from '../components/Navbar'
import PopularCar from '../components/PopularCar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CaruaselCard />
      <CarFilter />
      <PopularCar />
    </div>
  )
}

export default HomePage
