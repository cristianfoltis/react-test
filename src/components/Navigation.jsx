import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material';

import {
  CheckBoxOutlineBlankOutlined,
  HomeOutlined,
  InboxOutlined,
  Menu,
} from '@mui/icons-material';

import Breadcrumbs from './Breadcrumbs';

const pages = [
  { path: '/', title: 'Homepage', breadcrumb: 'HomePage', icon: <HomeOutlined /> },
  { path: '/cartoons', title: 'Cartoons', breadcrumb: 'Cartoons Page', icon: <InboxOutlined /> },
  {
    path: '/cartoons/create-cartoon',
    title: 'Create Cartoon',
    breadcrumb: 'Crete Cartoon Page',
    icon: <CheckBoxOutlineBlankOutlined />,
  },
];

function Navigation() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleRouteChange = (path) => {
    navigate(path);
  };

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {pages.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}>
            <Menu></Menu>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cartoons
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleRouteChange(page.path);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer variant="temporary" open={open} anchor={'left'} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </Box>
      <Box sx={{ marginTop: 10 }} role="presentation" onClick={handleRouteChange}>
        <Breadcrumbs />
      </Box>
    </Box>
  );
}

export default Navigation;
