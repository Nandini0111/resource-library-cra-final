import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function ResourceTab({ onCategoryChange }) {
  const [value, setValue] = useState(0);
  const [resources, setResources] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'http://localhost:5000/api/data/resources' with your actual API endpoint
        const response = await axios.get('http://localhost:5000/api/data/resources');
        setResources(response.data);
      } catch (error) {
        console.error('There was an error fetching the resources data:', error);
      }
    };

    fetchData();
  }, []);

  const categories = Object.keys(resources);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onCategoryChange(categories[newValue]);
  };

  return (
    <Box sx={{ padding: "0px 0px 10px 0px", bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="resource tabs"
      >
        {categories.map((category, index) => (
          <Tab label={category} key={index} />
        ))}
      </Tabs>
    </Box>
  );
}

ResourceTab.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};
