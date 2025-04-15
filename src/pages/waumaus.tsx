'use client';
import React, { useEffect } from 'react';
import { Hero } from '../app/components/hero';
import { useText } from '../../text';
import ButtonAppBar from '../app/components/navBar';
import { SplashScreen } from '@/app/components/splashScreen';
import { Box, styled } from '@mui/material';
import { Main } from 'next/document';

export const WauMaus = () => {
  const [showSplash, setShowSplash] = React.useState(false);
  const text = useText();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowSplash(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <Box>
          <ButtonAppBar />
          <MainContent>
            <Hero header={text.landing.wauMaus} body={text.landing.mission} />
          </MainContent>
        </Box>
      )}
    </>
  );
};

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  maxWidth: '80%',
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.up('md')]: {
    maxWidth: '60%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '50%',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '40%',
  },
}));
