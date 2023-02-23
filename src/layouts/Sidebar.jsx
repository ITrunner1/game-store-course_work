import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { StyledTooltip } from '../styles/StyledTooltip';
import { Tabs, Tab } from '@mui/material';

import { 
  IoHome,
  IoStorefront,
  IoCart,
  IoSettings
} from 'react-icons/io5'

function Sidebar() {
    const { t } = useTranslation(); 
    const sideNavIcons = [
        IoHome, 
        IoStorefront,
        IoCart,           
        IoSettings,
      ];
      const paths = [
        'home',
        'store',
        'cart',   
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
          <StyledTooltip title={t(paths[id])} placement="right" key={id}>
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