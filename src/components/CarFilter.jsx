import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const MAX = 3000;
const MIN = 100;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const CarFilter = ({carFilterState, setCarFilterState, checked}) => {
  const [val, setVal] = React.useState(MIN);

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

const setFilter = (key, value) => {
  setCarFilterState({
    ...carFilterState,
    [key]: value 
  })
}

  return (
    <Box sx={{ flexGrow: 1, padding: "0px 80px" }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid
          item
          xs={5.5}
          sx={{
            background: `${!checked ? 'white' : '#3f51b5'}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
            borderRadius: '20px'
          }}
        >
          <Box sx={{ width: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"  sx={{ color: checked ? 'white' : '' }}>Yili</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Yili"
                value={carFilterState['carYear']}
                onChange={(e)=> setFilter('carYear', e.target.value)}
                sx={{
                  color: `${!checked ? '' : 'white'}`,
                  border: `${!checked ? '' : '1px solid white'}`
                }}
                inputProps={{
                  style: {
                    color: checked ? 'red' : 'black',
                  },
                }}
              >
                <MenuItem value=''>X</MenuItem>
                <MenuItem value={2015}>2015</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: checked ? 'white' : '' }}>Rangi</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Rangi"
                value={carFilterState['carColor']}
                onChange={(e)=>{setFilter('carColor', e.target.value)}}
                sx={{
                  color: `${!checked ? '' : 'white'}`,
                  border: `${!checked ? '' : '1px solid white'}`
                }}
                inputProps={{
                  style: {
                    color: checked ? 'red' : 'black',
                  },
                }}
              >
                <MenuItem value=''>X</MenuItem>
                <MenuItem value={"Qora"}>Qora</MenuItem>
                <MenuItem value={"Oq"}>Oq</MenuItem>
                <MenuItem value={"Seriy"}>Seriy</MenuItem>
                <MenuItem value={"Ko'k"}>Ko'k</MenuItem>
                <MenuItem value={"Yashil"}>Yashil</MenuItem>
                <MenuItem value={"Qizil"}>Qizil</MenuItem>
                <MenuItem value={"Sariq"}>Sariq</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: checked ? 'white' : '' }}>Model</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Model"
                value={carFilterState['carModel']}
                onChange={(e)=>{setFilter('carModel', e.target.value)}}
                sx={{
                  color: `${!checked ? '' : 'white'}`,
                  border: `${!checked ? '' : '1px solid white'}`
                }}
                inputProps={{
                  style: {
                    color: checked ? 'red' : 'black',
                  },
                }}
              >
                <MenuItem value=''>X</MenuItem>
                <MenuItem value={"Atmosfer"}>Atmosfer</MenuItem>
                <MenuItem value={"Gibrid"}>Gipred</MenuItem>
                <MenuItem value={"Elektro"}>Elektro</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={5.5}
          sx={{
            background:  `${!checked ? 'white' : '#3f51b5'}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 20px",
            borderRadius: '20px'
          }}
        >
          <Box sx={{ width: 450 }}>
            <Slider
              marks={marks}
              step={50}
              value={val}
              valueLabelDisplay="auto"
              min={MIN}
              max={MAX}
              onChange={handleChange}
              sx={{
                color: `${!checked ? '' : 'white'}`,
              }}
              inputProps={{
                style: {
                  color: checked ? 'red' : 'black',
                },
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                onClick={() => setVal(MIN)}
                sx={{ cursor: "pointer", color: checked ? 'white' : 'black', }}
              >
                {MIN} min $
              </Typography>
              <Typography
                variant="body2"
                onClick={() => setVal(MAX)}
                sx={{ cursor: "pointer", color: checked ? 'white' : 'black', }}
              >
                {MAX} max $
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarFilter;
