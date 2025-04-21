// components/ContactForm.tsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  FormControl,
} from '@mui/material';
import { theme } from '../../theme';
import { Form, Formik, FormikValues, useFormikContext } from 'formik';
import { ContactFormFields } from './contact-form-fields';
import { useContactForm } from './contact-form.hooks';

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type FormErrors = {
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  message?: boolean;
};

export const ContactForm: React.FC = () => {
  const { initialValues, onSubmit, validationSchema } = useContactForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <ContactFormFields />
    </Formik>
  );
};
