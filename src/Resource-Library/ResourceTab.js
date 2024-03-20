import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function ResourceTab({ onCategoryChange }) {
  const [value, setValue] = React.useState(0);
  const [resources, setResources] = useState({});

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data/resource');
        if (response.data.length > 0 && response.data[0].resource && response.data[0].resource.length > 0) {
          const resourcesData = response.data[0].resource[0];
          const fetchedResources = { ...resourcesData };
          setResources(fetchedResources);

          if (Object.keys(fetchedResources).length > 0) {
            const firstCategory = Object.keys(fetchedResources)[0];
            onCategoryChange(firstCategory);
          }
        } else {
          console.error('No resources found');
        }
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, [onCategoryChange]);

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
