import { useState, useEffect } from 'react';
import AllCars from '../components/AllCars';
import CarFilter from '../components/CarFilter';
import CaruaselCard from '../components/CaruaselCard';
import Navbar from '../components/Navbar';
import PopularCar from '../components/PopularCar';
import FilterCarsProduct from '../components/FilterCarsProduct';
import { Triangle } from 'react-loader-spinner';
import { Box } from '@mui/material';

const HomePage = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [carFilterState, setCarFilterState] = useState({
    carYear: '',
    carModel: '',
    carColor: '',
  });

  const hasFilter = Object.values(carFilterState).filter((filter) => !!filter);

  useEffect(() => {
    // Simulate network request
    const loadData = async () => {
      setLoading(true);
      // Simulate network request with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    loadData();
  }, []);

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
      <Navbar checked={checked} handleChange={handleChange} />
      <CaruaselCard />
      <CarFilter carFilterState={carFilterState} setCarFilterState={setCarFilterState} checked={checked} />
      {hasFilter.length > 0 
        ? <FilterCarsProduct carFilterState={carFilterState} />
        : (<><PopularCar checked={checked} /><AllCars checked={checked} /></>)}
    </div>
  );
};

export default HomePage;
