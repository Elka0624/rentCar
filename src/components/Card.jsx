import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BuildIcon from "@mui/icons-material/Build";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import malibu from "../assets/cars/malibu.png";
import { carData } from "../data/carData";
import {Link} from 'react-router-dom'

const Card = ({ car, checked }) => {

  const handleClickScroll = () =>{
    console.log('llll');
    preventDefault()
    window.scrollY('0')
  }

  return (
    <div>
      <Box
          sx={{
            cursor: "pointer",
            width: "300px",
            background: `${!checked ? 'white' : '#3f51b5'}`,
            padding: "20px",
            margin: "20px 0px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          key={car.id}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: `${!checked ? 'black' : 'white'}`, fontSize: "25px" }}>
              {car.carName}
              <Typography sx={{ color: `${!checked ? '#90A3BF' : 'white'}`, fontSize: "16px" }}>
                {car.carModel}
              </Typography>
            </Typography>
            <FavoriteBorderIcon
              sx={{ color: `${!checked ? '#90A3BF' : 'white'}`, fontSize: "32px", cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ width: "100%", background: `${!checked ? 'white' : '#3f51b5'}` }}>
            <Box
              component={"img"}
              src={car.carImage}
              sx={{ width: "100%" }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalGasStationIcon
                sx={{ color: `${!checked ? '#90A3BF' : 'white'}`, fontSize: "35px", cursor: "pointer" }}
              />
              <Typography
                sx={{
                  color: `${!checked ? '#90A3BF' : 'white'}`,
                  fontSize: "16px",
                  marginLeft: "5px",
                  marginTop: "5px",
                }}
              >
                {car.carPetrol}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BuildIcon
                sx={{ color: `${!checked ? '#90A3BF' : 'white'}`, fontSize: "30px", cursor: "pointer" }}
              />
              <Typography
                sx={{
                  color: `${!checked ? '#90A3BF' : 'white'}`,
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
                sx={{ color: `${!checked ? '#90A3BF' : 'white'}`, fontSize: "35px", cursor: "pointer" }}
              />
              <Typography
                sx={{
                  color: `${!checked ? '#90A3BF' : 'white'}`,
                  fontSize: "16px",
                  marginLeft: "5px",
                  marginTop: "5px",
                }}
              >
                {car.carBuy}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: `${!checked ? 'black' : 'white'}`,
                fontSize: "25px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {car.carPrice}$/
              <Typography sx={{ color: `${!checked ? '#90A3BF' : 'white'}`, marginLeft: "5px" }}>
                day
              </Typography>
            </Typography>
            <Link style={{textDecoration: 'none'}} to={`/car/${car.id}`} onClick={()=>handleClickScroll()}>
            <Button
              sx={{
                width: "150px",
                background: `${!checked ? '#3563E9' : 'white'}`,
                color: `${!checked ? 'white' : '#3563E9'}`,
                border: "1px solid #3563E9",
                "&:hover": {
                  color: `${!checked ? '#3563E9' : 'white'}`,
                  border:`${!checked ? '1px solid #3563E9' : '1px solid white'}`,
                },
              }}
            >
              Rental Now
            </Button>
            </Link>
          </Box>
        </Box>
      </div>
  );
};

export default Card;
