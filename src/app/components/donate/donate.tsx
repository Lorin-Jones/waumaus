import { useEffect, useState } from 'react';
import Script from 'next/script';
import './donate.css';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';

export const DonorSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box sx={{ maxWidth: '423px', width: '100%', margin: '0 auto' }}>
      <Box>
        <Typography variant="h4">{'Donate'}</Typography>
      </Box>
      <Script
        src="https://donorbox.org/widget.js"
        strategy="afterInteractive"
      />

      {isClient && (
        <StyledIframe
          src="https://donorbox.org/embed/waumaus?"
          name="donorbox"
          allow="payment"
        ></StyledIframe>
      )}
    </Box>
  );
};

const StyledIframe = styled('iframe')(({ theme }) => ({
  maxWidth: '423px',
  minWidth: '250px',
  height: '900px',
  border: 'none',
  overflow: 'hidden',
  display: 'block',
  margin: '0 auto',
  width: '100%',
  backgroundColor: 'transparent',
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease-in-out',
}));
