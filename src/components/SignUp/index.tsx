import React, { FC } from 'react';
import Box from '../Box';
import Button from '../Button';
import TextField from '../Text field';
import Typography from '../Typography';
import { FormikConsumer, useFormik, validateYupSchema } from 'formik';
import { Checkbox } from '@material-ui/core';
import * as Yup from 'yup';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';


const SignUp = () => {


  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      checkbox: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid Email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be 15 characters or more')
        .required('Required'),
      checkbox: Yup.boolean()
        .required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  })


  return (
    <Box width="550px">
      <Box>
        <Typography variant="h2">
          Sign up to set your brand up for success
        </Typography>
      </Box>
      <Box>
        <Button size="large" variant="contained" color="primary">Sign up with Google</Button>
        <Button size="large" variant="contained" color="secondary">Sign up with Microsoft</Button>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="fullName"
            name="fullName"
            label="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box>
            <Checkbox
              name="checkbox"
              checked={formik.values.checkbox}
              onChange={() => formik.touched.checkbox}
            />
            <Typography variant="body2">
              Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
            </Typography>
          </Box>
          <Button type="submit" size="large" variant="contained" color="primary">Sign Up</Button>
        </form>
      </Box>
    </Box>
  )

}

export default SignUp;