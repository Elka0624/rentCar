import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { carData } from "../data/carData";

const FilterCarsProduct = ({ carFilterState }) => {
  const filters = Object.keys(carFilterState).map((key) => ({
    key,
    value: carFilterState[key],
  })).filter((fil) => fil.value)
  const filteredCars = carData.filter((car) => {
    const res = filters.map((filter) => {
      if (car[filter.key] === filter.value) {
        return true
      } else {
        return false
      }
    })
    if(res.filter((e) => !e).length) {
      return false
    } else {
      return true
    }
  });

console.log(filteredCars)
  return (
    <div>
      <Box sx={{ padding: "0px 80px", marginTop: "30px" }}>
        <Typography
          variant={"h5"}
          sx={{ color: "#90A3BF", marginBottom: "30px", fontSize: "40px" }}
        >
          Filter Cars
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            alignItems: "center",
            columnGap: "143px",
          }}
        >
          {filteredCars.map((car) => (
              <Card key={car.id} car={car} />
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default FilterCarsProduct;
