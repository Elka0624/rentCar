import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import malibu from "../assets/cars/malibu.png";
import circleIcon from "../assets/circleIcon.svg";
import rightIcon from "../assets/rigthIcon.svg";
import li from '../assets/cars/LI-XIANG-MAX.png'

const CaruaselCard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0px 80px",
        marginTop: "120px",
        marginBottom: "140px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid
          item
          xs={5.5}
          sx={{
            background: "#5CAFFC",
            position: "relative",
            zIndex: "2",
            height: "250px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "35px",
              width: "320px",
              fontWeight: "600",
            }}
          >
            The Best Platform for Car Rental
          </Typography>
          <Typography sx={{ color: "white", width: "320px" }}>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </Typography>
          <Button
            sx={{
              width: "150px",
              background: "#3563E9",
              color: "white",
              marginTop: "20px",
            }}
          >
            Rental Car
          </Button>
          <Box
            component={"img"}
            src={malibu}
            sx={{
              width: "500px",
              position: "absolute",
              top: "80px",
              right: "-80px",
              zIndex: "3",
            }}
          ></Box>
          <Box
            component={"img"}
            src={circleIcon}
            sx={{
              width: "400px",
              position: "absolute",
              top: "10px",
              right: "-50px",
              transform: "rotate(-10deg)",
              zIndex: "1",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={5.5}
          sx={{
            background: "#3563E9",
            position: "relative",
            zIndex: "2",
            height: "250px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "35px",
              width: "320px",
              fontWeight: "600",
            }}
          >
            The Best Platform for Car Rental
          </Typography>
          <Typography sx={{ color: "white", width: "320px" }}>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </Typography>
          <Button
            sx={{
              width: "150px",
              background: "#5CAFFC",
              color: "white",
              marginTop: "20px",
              zIndex: "4",
            }}
          >
            Rental Car
          </Button>
          <Box
            component={"img"}
            src={li}
            sx={{
              width: "500px",
              position: "absolute",
              top: "80px",
              right: "-80px",
              zIndex: "3",
            }}
          ></Box>
          <Box
            component={"img"}
            src={rightIcon}
            sx={{
              width: "580px",
              position: "absolute",
              top: "0px",
              left: "0px",
              transform: "rotate(0deg)",
              zIndex: "1",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaruaselCard;
