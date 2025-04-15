'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, styled } from '@mui/material';
import Image from 'next/image';

const LinkBox = styled('div')({
  gridGap: '8px',
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <StyledToolbar>
          <Typography variant="h6">WauMaus</Typography>
          <LinkBox sx={buttons}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </LinkBox>
        </StyledToolbar>
      </AppBar>
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
