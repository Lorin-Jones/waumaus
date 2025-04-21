import { Form, FormikValues, useFormikContext } from 'formik';
import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { ContactForm } from './contact-form.hooks';
import { theme } from '@/app/theme';

export const ContactFormFields = () => {
  const formik = useFormikContext<ContactForm>();

  return (
    <StyledForm>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box display="flex" flexDirection="row" gap={2}>
        <TextField
          fullWidth
          label="First"
          margin="normal"
          {...formik.getFieldProps('firstName')}
          error={Boolean(formik.errors.firstName)}
          helperText={formik.errors.firstName}
          onFocus={() => {
            formik.setFieldError('firstName', undefined);
            formik.setFieldTouched('firstName', false);
          }}
        />
        <TextField
          fullWidth
          label="Last"
          {...formik.getFieldProps('lastName')}
          margin="normal"
          error={Boolean(formik.errors.lastName)}
          helperText={formik.errors.lastName}
          onFocus={() => {
            formik.setFieldError('lastName', undefined);
            formik.setFieldTouched('lastName', false);
          }}
        />
      </Box>
      <TextField
        fullWidth
        label="Email"
        {...formik.getFieldProps('email')}
        margin="normal"
        error={Boolean(formik.errors.email)}
        helperText={formik.errors.email}
        onFocus={() => {
          formik.setFieldError('email', undefined);
          formik.setFieldTouched('email', false);
        }}
      />
      <TextField
        fullWidth
        label="Message"
        {...formik.getFieldProps('message')}
        margin="normal"
        multiline
        rows={4}
        error={Boolean(formik.errors.message)}
        helperText={formik.errors.message}
        onFocus={() => {
          formik.setFieldError('message', undefined);
          formik.setFieldTouched('message', false);
        }}
      />

      <Box mt={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? <CircularProgress size={24} /> : 'Send'}
        </Button>
      </Box>
    </StyledForm>
  );
};

const StyledForm = styled(Form)(({ theme }) => ({
  maxWidth: '500px',
  width: '100%',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
}));
