'use client';
import { Box, Paper, paperClasses, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { theme } from '../theme';

export type HeroProps = {
  header: string;
  body: string;
};

export const Hero: React.FC<HeroProps> = ({ header, body }) => {
  return (
    <StyledHero>
      <Box
        sx={{
          bgcolor: '#CBA4C5',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 2,
          py: 8,
        }}
      >
        <img
          src="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1744759299/WauMaus_Logo_BLACK_iqkn2z.png"
          alt="WauMaus Logo"
          width={400}
          height={400}
        />
      </Box>
      <Box
        sx={{
          maxWidth: 800,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: 2,
          py: 8,
        }}
      >
        <Typography variant="body1">{body}</Typography>
      </Box>
    </StyledHero>
  );
};

const StyledHero = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));
