import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '../assets/json/menu.json';
import * as LuIcons from 'react-icons/lu';
import * as MdIcons from 'react-icons/md';
import logo from '../assets/logo.png';

const drawerWidth = 240;

const iconLibraries: Record<string, Record<string, React.ElementType>> = {
    lu: LuIcons,
    md: MdIcons,
};
interface SideBarProps {
    onClick: (item: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onClick }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: '13rem',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '13rem',
            boxSizing: 'border-box',
            border: 'none',
            backgroundColor: '#F0F5FC',
            padding: '.3rem'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div style={{display: 'flex', 'flexDirection': 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <h2>XSource</h2>
            <img alt="logo" src={logo} style={{width:'2.5rem', height: '2.5rem'}} />
        </div>

        <List>
            {MenuList.menu.map((item, index) => {
                const IconComponent = iconLibraries[item.library]?.[item.icon];
                if (!IconComponent) {
                    console.error(`Icon "${item.icon}" not found in react-icons/io`);
                    return null;
                }
                return (
                    <ListItem key={item.text} disablePadding>
                    <ListItemButton
                      onClick={() => onClick(item.key)}
                      sx={{
                        borderRadius: '1rem', // Rounded corners
                        transition: 'background-color 0.3s, color 0.3s', // Smooth transition
                        '&:hover': {
                          backgroundColor: 'white', // Change background to white on hover
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for depth effect
                        },
                      }}
                    >
                        <ListItemIcon>
                            <IconComponent />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
      </Drawer>
    </Box>
  );
}


export default SideBar;
