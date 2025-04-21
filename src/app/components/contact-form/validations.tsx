import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string()
    .trim()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: Yup.string()
    .trim()
    .required('Email is required')
    .email('Must be a valid email address'),
  message: Yup.string()
    .trim()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});
