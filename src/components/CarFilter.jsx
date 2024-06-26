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

const CarFilter = () => {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

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
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
          }}
        >
          <Box sx={{ width: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Yili</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Yili"
              >
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
              <InputLabel id="demo-simple-select-label">Rangi</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Rangi"
              >
                <MenuItem value={"qora"}>Qora</MenuItem>
                <MenuItem value={"oq"}>Oq</MenuItem>
                <MenuItem value={"seriy"}>Seriy</MenuItem>
                <MenuItem value={"kok"}>Ko'k</MenuItem>
                <MenuItem value={"yashil"}>Yashil</MenuItem>
                <MenuItem value={"qizil"}>Qizil</MenuItem>
                <MenuItem value={"sariq"}>Sariq</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Model</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Model"
              >
                <MenuItem value={"atmosfer"}>Atmosfer</MenuItem>
                <MenuItem value={"gibrid"}>Gipred</MenuItem>
                <MenuItem value={"elektro"}>Elektro</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={5.5}
          sx={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 20px",
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
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                onClick={() => setVal(MIN)}
                sx={{ cursor: "pointer" }}
              >
                {MIN} min $
              </Typography>
              <Typography
                variant="body2"
                onClick={() => setVal(MAX)}
                sx={{ cursor: "pointer" }}
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
