import { Box, Typography, Grid, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import Card from '../components/Card'
import Navbar from '../components/Navbar';
import { carData } from '../data/carData'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BuildIcon from "@mui/icons-material/Build";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PopularCar from '../components/PopularCar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';

const SelectedCar = () => {

  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id));
  const [loading, setLoading] = useState(true)

  if (!car) {
    return <div>Car not found</div>;
  }

  useEffect(()=>{
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve)=> setTimeout(resolve, 2000))
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="blue"
          ariaLabel="triangle-loading"
        />
      </Box>
    );
  }

  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1, padding: '0px 80px', marginTop: '120px' }}>
      <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Grid item xs={8} sx={{background: 'red', height: '500px', background: 'white', borderRadius: '20px'}}>
          <Box component={'img'} src={car.carImage} sx={{width: '100%'}}></Box>
        </Grid>
        <Grid item xs={3.5} sx={{background: 'white', height: '250px', padding: '50px 20px', display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
          <Typography variant={'h4'}>{car.carName}</Typography>
          <Box sx={{display: 'flex',justifyContent: 'space-between'}}>
          <Typography variant={'h5'} sx={{color: '#90A3BF'}}>{car.carModel}</Typography>
          <Typography variant={'h5'} sx={{color: '#90A3BF'}}>{car.carColor}</Typography>
          <Typography variant={'h5'} sx={{color: '#90A3BF'}}>{car.carYear}</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
              <BuildIcon
                sx={{ color: "#90A3BF", fontSize: "30px", cursor: "pointer" }}
              />
              <Typography
                sx={{
                  color: "#90A3BF",
                  fontSize: "16px",
                  marginLeft: "5px",
                  marginTop: "5px",
                }}
              >
                {car.carStatus}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PeopleAltIcon
                sx={{ color: "#90A3BF", fontSize: "35px", cursor: "pointer" }}
              />
              <Typography
                sx={{
                  color: "#90A3BF",
                  fontSize: "16px",
                  marginLeft: "5px",
                  marginTop: "5px",
                }}
              >
                {car.carBuy}
              </Typography>
            </Box>
          </Box>
          <Button sx={{
                width: "100%",
                background: "#3563E9",
                color: "white",
                border: "1px solid #3563E9",
                "&:hover": {
                  color: "#3563E9",
                  border: "1px solid #3563E9",
                },
              }}>Buy</Button>
        </Grid>
      </Grid>
    </Box>
    <PopularCar />
    </div>
  )
}

export default SelectedCar
