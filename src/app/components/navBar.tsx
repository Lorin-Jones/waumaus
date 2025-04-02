"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, styled } from '@mui/material';
import Image from 'next/image';

const LinkBox = styled('div')({
    gridGap: '8px'
})

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Image src={'/assets/Redrum.png'} alt='redrum' width={50} height={50}/>
          </Button>
          <LinkBox>
            <Typography variant="h6">
                Home
            </Typography>
            <Typography variant="h6">
                About
            </Typography>
            <Typography variant="h6">
                Contact
            </Typography>
          </LinkBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}