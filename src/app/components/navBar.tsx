'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ButtonAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setDrawerOpen(false); // Close drawer on click
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Donate', id: 'donate' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <StyledToolbar>
          <Typography variant="h6">WauMaus</Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                  '& .MuiDrawer-paper': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    padding: theme.spacing(2),
                    height: 'fit-content',
                  },
                }}
              >
                <List sx={{ width: 200, height: 'fit-content' }}>
                  {navItems.map((item) => (
                    <ListItem
                      component={'button'}
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      disablePadding
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        border: 0,
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <LinkBox sx={buttons}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </LinkBox>
          )}
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

const buttons = {
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
};

const LinkBox = styled('div')({ display: 'flex' });

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.main,
}));
