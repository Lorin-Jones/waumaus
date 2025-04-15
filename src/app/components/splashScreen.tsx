import { Fade, styled } from '@mui/material';
import React from 'react';

type SplashScreenProps = {
  onFinish: () => void;
};

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setVisible] = React.useState(true);

  const handleVideoEnd = () => {
    setVisible(false);
    setTimeout(onFinish, 250);
  };

  return (
    <Fade in={isVisible} timeout={500}>
      <Video
        src="https://res.cloudinary.com/dlr2tm7qr/video/upload/v1743190094/WauMaus_Splash_Screen_Final_tzsx7d.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
    </Fade>
  );
};

const Video = styled('video')({
  display: 'flex',
  justifyContent: 'center',
  height: 'auto',
  width: '100vw',
});
