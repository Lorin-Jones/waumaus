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
          bgcolor: '#FE955D',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          py: 8,
        }}
      >
        <img
          src="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745242986/WauMaus_Logo_WHITE_vdbxzh.png"
          alt="WauMaus Logo"
          style={{ width: '100%', height: 'auto', maxWidth: 300 }}
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
        <Typography variant="h6" fontWeight={200}>
          {body}
        </Typography>
      </Box>
    </StyledHero>
  );
};

const StyledHero = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));
