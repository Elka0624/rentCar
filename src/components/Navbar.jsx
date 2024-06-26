import { Box, Grid, Avatar, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          padding: "10px 80px",
          background: "white",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0px",
          }}
        >
          <Grid
            xs={6}
            sx={{
              display: "flex",
              padding: "10px 0px",
              justifyContent: "space-between",
              alignItems: 'center'
            }}
          >
            <Typography variant={"h4"} sx={{ color: "#3563E9" }}>
              RentCar
            </Typography>
            <Box
              sx={{
                height: '35px',
                display: "flex",
                alignItems: "center",
                border: "1px solid #C3D4E9",
                width: "440px",
                borderRadius: "20px",
                padding: "0px  10px",
              }}
            >
              <SearchIcon sx={{color: '#3D5278', fontSize: '25px'}} />
              <TextField
                fullWidth
                placeholder="Placeholder"
                autoComplete="off"
                sx={{
                  // height: '0px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none',
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    outline: 'none',
                    color: '#3D5278',
                    '&::placeholder': {
                      color: '#3D5278',
                      opacity: 1,
                    },
                  },
                }}
              />
              <TuneIcon sx={{color: '#3D5278', fontSize: '25px'}} />
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
              gap: '10px'
            }}>
              <FavoriteIcon sx={{border: '1px solid #C3D4E9', borderRadius: '50px', padding: '4px', width: '38px', height: '38px', color: '#3D5278'}}/>
              <NotificationsIcon sx={{border: '1px solid #C3D4E9', borderRadius: '50px', padding: '4px', width: '38px', height: '38px', color: '#3D5278'}} />
              <SettingsIcon sx={{border: '1px solid #C3D4E9', borderRadius: '50px', padding: '4px', width: '38px', height: '38px', color: '#3D5278'}} />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Navbar;
