import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BuildIcon from '@mui/icons-material/Build';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import malibu from '../assets/cars/malibu.png';
import carData from '../data/carData'

const Card = () => {

  console.log(carData);

  return (
    <div>
      <Box sx={{cursor: 'pointer', width: '300px', background: 'white', padding: '20px', margin: '20px 0px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography sx={{color: 'black', fontSize: '30px'}}>Nexia 1 <Typography sx={{color: '#90A3BF', fontSize: '16px'}}>Atmosfer</Typography> </Typography>
          <FavoriteBorderIcon sx={{color: '#90A3BF', fontSize: '32px', cursor: 'pointer'}} />
        </Box>
        <Box sx={{width: '100%', background: 'white'}}>
          <Box component={'img'} src={malibu} sx={{width: '100%'}}></Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <LocalGasStationIcon sx={{color: '#90A3BF', fontSize: '35px', cursor: 'pointer'}} />
            <Typography sx={{color: '#90A3BF', fontSize: '16px', marginLeft: '5px', marginTop: '5px'}}>90L</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <BuildIcon sx={{color: '#90A3BF', fontSize: '30px', cursor: 'pointer'}} />
            <Typography sx={{color: '#90A3BF', fontSize: '16px', marginLeft: '5px', marginTop: '5px'}}>New</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <PeopleAltIcon sx={{color: '#90A3BF', fontSize: '35px', cursor: 'pointer'}} />
            <Typography sx={{color: '#90A3BF', fontSize: '16px', marginLeft: '5px', marginTop: '5px'}}>2 People</Typography>
          </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography sx={{color: 'black', fontSize:'25px', display: 'flex', alignItems: 'center'}}>120$ / <Typography sx={{color: '#90A3BF', marginLeft: '5px'}}>day</Typography></Typography>
            <Button sx={{
              width: "150px",
              background: "#3563E9",
              color: "white",
              border: '1px solid #3563E9',
              '&:hover': {
                color: '#3563E9',
                border: '1px solid #3563E9'
              },
            }}>Rental Now</Button>
          </Box>
      </Box>
    </div>
  )
}

export default Card
