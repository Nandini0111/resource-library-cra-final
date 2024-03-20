import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import resources from './Data/Links.json'; 

export default function ResourceTab({ onCategoryChange }) {
  const [value, setValue] = React.useState(0);
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
