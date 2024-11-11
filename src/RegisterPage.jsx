import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';


const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    salutation: Yup.string().required('Salutation is required'),
    country: Yup.string().required('Country is required'),
  });

  <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  { (formik) => (
    <Form>
      {/* Form fields here */}
      {formik.errors.name && formik.touched.name ? <div className="text-danger">{formik.errors.name}</div> : null}
      {/* Repeat for other fields */}
    </Form>
  )}
</Formik>

function RegisterPage() {
  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <p>This is where users can create a new account.</p>
    </div>
  );
}

export default RegisterPage;
