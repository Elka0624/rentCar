import {useState} from 'react'
import AllCars from '../components/AllCars'
import CarFilter from '../components/CarFilter'
import CaruaselCard from '../components/CaruaselCard'
import Navbar from '../components/Navbar'
import PopularCar from '../components/PopularCar'
import FilterCarsProduct from '../components/FilterCarsProduct'

const HomePage = () => {

  const [carFilterState, setCarFilterState] = useState({
    carYear: '',
    carModel: '',
    carColor: '',
  })

  const hasFilter = Object.values(carFilterState).filter((filter) => !!filter);

  return (
    <div>
      <Navbar />
      <CaruaselCard />
      <CarFilter carFilterState={carFilterState} setCarFilterState={setCarFilterState} />
      {hasFilter.length > 0 
        ? <FilterCarsProduct carFilterState={carFilterState} />
        : (<><PopularCar /><AllCars /></>)}
      
    </div>
  )
}

export default HomePage
