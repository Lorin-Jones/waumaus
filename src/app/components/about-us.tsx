import { Box, styled, Typography } from '@mui/material';
import { useText } from '../../../text';
import React from 'react';
import { string } from 'yup';

type BioSectionProps = {
  img: string;
  name: string;
  bio: string;
};

const BioSection: React.FC<BioSectionProps> = ({ img, name, bio }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <img src={img} alt={name} width={400} height={400} />
        <Typography variant="h6">{name}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="body1">{bio}</Typography>
      </Box>
    </Box>
  );
};

export const AboutUs: React.FC = () => {
  const text = useText();

  return (
    <StyledAboutUs>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 4,
          color: 'white',
        }}
      >
        <Typography variant="h3" sx={{ color: 'white' }}>
          {'ABOUT US'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <BioSection
          img="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745165695/Reed_aaczvc.jpg"
          name={text.aboutUs.names.reed}
          bio={text.aboutUs.bios.reedBio}
        />
        <BioSection
          img="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745246719/IMG_4729_wmv0nu.jpg"
          name={text.aboutUs.names.carl}
          bio={text.aboutUs.bios.carlBio}
        />
        <BioSection
          img="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745249428/IMG_4304_ctgqju.jpg"
          name={text.aboutUs.names.jules}
          bio={text.aboutUs.bios.julesBio}
        />
      </Box>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  backgroundColor: '#DABED6',
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(0),
  },
}));
