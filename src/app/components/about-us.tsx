import { Box, Typography } from '@mui/material';
import { useText } from '../../../text';

export const AboutUs: React.FC = () => {
  const text = useText();

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ pb: 4 }}>
        <Typography variant="h4">{'ABOUT US'}</Typography>
      </Box>
      <Box>
        <img
          src={
            'https://res.cloudinary.com/dlr2tm7qr/image/upload/v1745165695/Reed_aaczvc.jpg'
          }
          alt="Reed"
          width={200}
          height={200}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="h6">{text.aboutUs.names.reed}</Typography>
          <Typography variant="body1">{text.aboutUs.bios.reedBio}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
