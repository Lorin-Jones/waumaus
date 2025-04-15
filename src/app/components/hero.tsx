'use client';
import { Box, Paper, paperClasses, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

export type HeroProps = {
  header: string;
  body: string;
};

export const Hero: React.FC<HeroProps> = ({ header, body }) => {
  return (
    <StyledHero>
      <Typography variant="h1">{header}</Typography>
      <Typography variant="body1">{body}</Typography>
    </StyledHero>
  );
};

const StyledHero = styled(Box)(({ theme }) => ({
  maxWidth: '80%',
  padding: '16px',
}));
