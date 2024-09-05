import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

const drawerWidth = 240;

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
      
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function DashboardLayoutNavigationDividers(props) {
  const { window } = props;
  const [pathname, setPathname] = React.useState('/admindashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: 'black', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'black', // Black background for the drawer
            color: 'white',  // White text color in the drawer
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ bgcolor: 'white' }} />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'black', color: 'white', p: 3 }}
      >
        <Toolbar />
        <AppProvider
          navigation={[
            {
              segment: 'Dashboard',
              title: 'Dashboard',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
            { kind: 'divider' },
            {
              segment: 'Employees',
              title: 'Employees',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
            { kind: 'divider' },
            {
              segment: 'Sales',
              title: 'Sales',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
            { kind: 'divider' },
            {
              segment: 'Orders',
              title: 'Orders',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
            { kind: 'divider' },
            {
              segment: 'Report',
              title: 'Report',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
            { kind: 'divider' },
            {
              segment: 'Payment',
              title: 'Payment',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
            { kind: 'divider' },
            {
              segment: 'Feedbacks',
              title: 'Feedback',
              icon: <DescriptionIcon sx={{ color: 'white' }} />,
            },
          ]}
          router={router}
          theme={demoTheme}
          window={demoWindow}
        >
          <DashboardLayout>
            <DemoPageContent pathname={pathname} />
          </DashboardLayout>
        </AppProvider>
      </Box>
    </Box>
  );
}

DashboardLayoutNavigationDividers.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};
