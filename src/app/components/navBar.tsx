'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, styled } from '@mui/material';

const LinkBox = styled('div')({
  gridGap: '8px',
});

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <StyledToolbar>
          <Typography variant="h6">WauMaus</Typography>
          <LinkBox sx={buttons}>
            <Button
              color="inherit"
              onClick={() => {
                console.log('Scrolling to hero');
                scrollToSection('hero');
              }}
            >
              Home
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('donate')}>
              Donate
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </LinkBox>
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

const buttons = {
  display: 'flex',
  flexDirection: 'row',
  gridGap: '16px',
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.main,
}));
