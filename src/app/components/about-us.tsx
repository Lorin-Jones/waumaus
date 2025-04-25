import { Box, makeStyles, styled, Typography } from '@mui/material';
import { useText } from '../../../text';
import React from 'react';
import { string } from 'yup';

type BioSectionProps = {
  img: string;
  name: string;
  //   bio: string;
};

const BioSection: React.FC<BioSectionProps> = ({ img, name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <img src={img} alt={name} />
      <Typography variant="h6">{name}</Typography>
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
          pb: 6,
          color: 'white',
        }}
      >
        <Typography variant="h3" sx={{ color: 'white' }}>
          {'ABOUT US'}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          paddingBottom: 8,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            paddingLeft: 2,
            paddingRight: 2,
            fontSize: '1.5rem',
          }}
        >
          {text.aboutUs.waumaus[1]}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            paddingLeft: 2,
            paddingRight: 2,
            fontSize: '1.5rem',
          }}
        >
          {text.aboutUs.waumaus[2]}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{ textAlign: 'center', color: 'white', paddingBottom: 6 }}
        >
          {text.ourTeam}
        </Typography>
      </Box>
      <StyledBioSection>
        <BioSection
          img="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745165695/Reed_aaczvc.jpg"
          name={text.aboutUs.names.reed}
          //   bio={text.aboutUs.bios.reedBio}
        />
        <BioSection
          img="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745246719/IMG_4729_wmv0nu.jpg"
          name={text.aboutUs.names.carl}
          //   bio={text.aboutUs.bios.carlBio}
        />
        <BioSection
          img="https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745249428/IMG_4304_ctgqju.jpg"
          name={text.aboutUs.names.jules}
          //   bio={text.aboutUs.bios.julesBio}
        />
      </StyledBioSection>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: '#DABED6',
}));

const StyledBioSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    gap: theme.spacing(12),
  },
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: 16,
}));
