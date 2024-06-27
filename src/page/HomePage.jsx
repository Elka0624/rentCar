import {useState} from 'react'
import AllCars from '../components/AllCars'
import CarFilter from '../components/CarFilter'
import CaruaselCard from '../components/CaruaselCard'
import Navbar from '../components/Navbar'
import PopularCar from '../components/PopularCar'
import FilterCarsProduct from '../components/FilterCarsProduct'

const HomePage = () => {

  const [carFilterState, setCarFilterState] = useState([{
    year: '',
    color: '',
    model: '',
    price: 0
  }])

  console.log(carFilterState, 'elka')

  return (
    <div>
      <Navbar />
      <CaruaselCard />
      <CarFilter carFilterState={carFilterState} setCarFilterState={setCarFilterState} />
      {carFilterState ? (<FilterCarsProduct carFilterState={carFilterState} />) : (<><PopularCar /><AllCars /></>)}
      
    </div>
  )
}

export default HomePage
