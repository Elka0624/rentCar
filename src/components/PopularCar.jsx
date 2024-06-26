import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'

const PopularCar = () => {
  return (
    <div>
      <Box sx={{padding: "0px 80px", marginTop: '30px'}}>
        <Typography variant={'h5'} sx={{color: '#90A3BF', marginBottom: '30px'}}>Popular Car</Typography>
        <Card />
      </Box>
    </div>
  )
}

export default PopularCar
