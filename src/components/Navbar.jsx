import {
  Box,
  Grid,
  Avatar,
  TextField,
  Typography,
  Popover,
  Switch,
} from "@mui/material";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({handleChange, checked}) => {
  const [anchorEl, setAnchorEl] = useState(null);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          padding: "10px 80px",
          background: `${!checked ? 'white' : '#3f51b5'}`,
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "1000",
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
              alignItems: "center",
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography variant={"h4"} sx={{ color: `${!checked ? '#3563E9' : 'white'}` }}>
                RentCar
              </Typography>
            </Link>
            <Box
              sx={{
                height: "35px",
                display: "flex",
                alignItems: "center",
                border: `${!checked ? '1px solid #C3D4E9' : '1px solid white'}`,
                width: "440px",
                borderRadius: "20px",
                padding: "0px  10px",
              }}
            >
              <SearchIcon sx={{ color: `${!checked ? '#3D5278' : 'white'}`, fontSize: "25px" }} />
              <TextField
                fullWidth
                placeholder="Placeholder"
                autoComplete="off"
                sx={{
                  // height: '0px',
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    outline: "none",
                    color: `${!checked ? '#3D5278' : 'white'}`,
                    "&::placeholder": {
                      color: `${!checked ? '#3D5278' : 'white'}`,
                      opacity: 1,
                    },
                  },
                }}
              />
              <TuneIcon sx={{ color: `${!checked ? '#3D5278' : 'white'}`, fontSize: "25px" }} />
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                gap: "10px",
              }}
            >
              <FavoriteIcon
                sx={{
                  border: `${!checked ? '1px solid #C3D4E9' : '1px solid white'}`,
                  borderRadius: "50px",
                  padding: "4px",
                  width: "38px",
                  height: "38px",
                  color: `${!checked ? '#3D5278' : 'white'}`,
                }}
              />
              <NotificationsIcon
                sx={{
                  border: `${!checked ? '1px solid #C3D4E9' : '1px solid white'}`,
                  borderRadius: "50px",
                  padding: "4px",
                  width: "38px",
                  height: "38px",
                  color: `${!checked ? '#3D5278' : 'white'}`,
                }}
              />
              <SettingsIcon
                sx={{
                  border: `${!checked ? '1px solid #C3D4E9' : '1px solid white'}`,
                  borderRadius: "50px",
                  padding: "4px",
                  width: "38px",
                  height: "38px",
                  color: `${!checked ? '#3D5278' : 'white'}`,
                }}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 80, left: 1200 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <WbSunnyIcon />
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <DarkModeIcon />
              </Typography>
            </Popover>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Navbar;
