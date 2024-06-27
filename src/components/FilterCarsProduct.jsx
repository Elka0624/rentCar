
import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'
import carData from '../data/carData'

const FilterCarsProduct = ({carFilterState}) => {

  return (
    <div>
      <Box sx={{padding: "0px 80px", marginTop: '30px'}}>
        <Typography variant={'h5'} sx={{color: '#90A3BF', marginBottom: '30px', fontSize: '40px'}}>Filter Cars</Typography>
        <Box sx={{display: 'flex', justifyContent: 'left', flexWrap: 'wrap', alignItems: 'center', columnGap: '143px'}}>
          {carData.filter((carData) => carData.carYear === carFilterState).map((car)=>(<Card key={car.id} car={car}  />))}
        </Box>
      </Box>
    </div>
  )
}

export default FilterCarsProduct

