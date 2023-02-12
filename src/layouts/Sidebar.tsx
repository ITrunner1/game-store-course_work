import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledTooltip } from '../styles/StyledTooltip';
import { Tabs, Tab } from '@mui/material';

import { 
  IoHome,
  IoStorefront,
  IoGameController,
  IoBookmark,
  IoSettings
} from 'react-icons/io5'

function Sidebar() {
    const sideNavIcons = [
        IoHome, 
        IoStorefront,
        IoGameController,    
        IoBookmark,
        IoSettings,
      ];
      const paths = [
        'home',
        'store',
        'games',   
        'bookmarks',
        'settings',
      ];    
      const location = useLocation();  
      const active = paths.indexOf(location.pathname.split('/')[1]);
      const [value, setValue] = useState(active === -1 ? 1 : active);

      return (
        <Tabs
        orientation="vertical"
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{ '& .MuiTabs-indicator': { right: 'initial' } }}
        component="nav"
        className="sidebar"
      >
        {sideNavIcons.map((SideNavIcons, id) => (
          <StyledTooltip title={paths[id]} placement="right" key={id}>
            <Tab
              icon={<SideNavIcons className="icon"/>}
              sx={{ minWidth: 0, py: '2rem' }}
              component={Link}
              to={paths[id]}             
            />
          </StyledTooltip>
        ))}
      </Tabs>
      );
}

export default Sidebar;