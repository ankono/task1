import React, { FC } from 'react';
import Box from '../Box';
import Button from '../Button';
import TextField from '../Text field';
import Typography from '../Typography';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import * as Yup from 'yup';



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
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      checkbox: Yup.bool()
        .oneOf([true])
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
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkbox"
                  checked={formik.values.checkbox}
                  onChange={formik.handleChange}
                />
              }
              label={
                <Typography variant="body2">
                  Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
                </Typography>
              }
            />


          </Box>
          <Button type="submit" size="large" variant="contained" color="primary">Sign Up</Button>
        </form>
      </Box>
    </Box>
  )

}

export default SignUp;