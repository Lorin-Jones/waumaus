import { useFormik } from 'formik';
import * as Yup from 'yup';
import { contactValidationSchema } from './validations';

export type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export const useContactForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const onSubmit = async (values: ContactForm) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Message sent!');
    } else {
      console.error(data);
      alert('There was a problem sending your message.');
    }
  };

  const validationSchema = contactValidationSchema;

  return {
    initialValues,
    onSubmit,
    validationSchema,
  };
};
