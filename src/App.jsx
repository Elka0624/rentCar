import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage'
import SelectedCar from './page/SelectedCar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/car/:id/' element={<SelectedCar />} />
      </Routes>
    </div>
  )
}

export default App
