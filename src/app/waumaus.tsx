'use client';
import React, { useEffect } from 'react';
import { Hero } from './components/hero';
import { useText } from '../../text';
import ButtonAppBar from './components/navBar';
import { SplashScreen } from '@/app/components/splashScreen';
import { Box, styled } from '@mui/material';
import { Main } from 'next/document';
import { ContactForm } from '@/app/components/contact-form/contact';
import { theme } from '@/app/theme';
import { DonorSection } from '@/app/components/donate/donate';
import { AboutUs } from '@/app/components/about-us';

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

      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <ButtonAppBar />
        <Hero header={text.landing.wauMaus} body={text.landing.mission} />
        <AboutUs />
        <Box sx={{ py: 8 }}>
          <DonorSection />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(4),
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <ContactForm />
        </Box>
      </Box>
    </>
  );
};
