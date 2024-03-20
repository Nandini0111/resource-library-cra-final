import React, { useState } from 'react';
import ResourceTab from './ResourceTab';
import ResourceCard from './ResourceCard';
import resources from './Data/Links.json';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Resource.css';

function Resource() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Digital assets and NFTS');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredResources = resources[activeCategory].filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='resource-page'>
      <Box sx={{ width: '100%', p: 2 }}>
        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item xs={12} lg={4} className="bg-[#3e4a6a] flex items-center justify-center">
            <div>
              <Typography align="center" variant="h4" className="pb-1 hidden sm:block" style={{ fontWeight: 'bold', color: 'white' }}>
                Resource Library
              </Typography>
              <Typography align="center" variant="h6" className="pb-2 pt-3 sm:hidden" style={{ fontWeight: 'bold', color: 'white' }}>
                Resource Library
              </Typography>
              <Typography align="center" className="pb-2" style={{ color: 'white' }}>Build your financial knowledge.</Typography>
            </div>
          </Grid>
          <Grid item xs={0} lg={8} className="hidden lg:block">
            <img src="https://mycreditunion.gov/sites/default/files/styles/banner_graphic_1600_/public/header-banner-images/fi-banner.png.webp?itok=zSHPDHfl" className="w-full h-auto" />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <div className="container mx-auto p-0 sm:p-6 sm:pt-3">
        <ResourceTab onCategoryChange={handleCategoryChange} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
