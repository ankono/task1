import React, { FC, useState } from 'react';
import Box from '../Box';
import Button from '../Button';
import TextField from '../TextField';
import Typography from '../Typography';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import * as Yup from 'yup';
import { ReactComponent as GoogleLogo } from '../../icons/google.svg';
import { ReactComponent as MicrosoftLogo } from '../../icons/microsoft.svg';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);

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
      console.log(JSON.stringify(values, null, 2));
    },
  })

  return (
    <Box width="550px" m="auto" mt="50px" mb="50px">
      <Box mb="60px" width="410px">
        <Typography variant="h2">
          Sign up to set your brand up for success
        </Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="270px 270px" gridGap="10px">
        <Button size="large" variant="contained" color="default">
          <Box mr="10px" lineHeight="0"><GoogleLogo /></Box>
            Sign up with Google
        </Button>
        <Button size="large" variant="contained" color="secondary">
          <Box mr="10px" lineHeight="0"><MicrosoftLogo /></Box>
          Sign up with Microsoft
          </Button>
      </Box>

      <Box display="flex" alignItems="center" mt="34px" mb="34px">
        <Box borderBottom="1px solid #E5E5E5" height="1px" flexGrow="1" />
        <Box mr="10px" ml="10px">
          <Typography variant="h6">or</Typography>
        </Box>
        <Box borderBottom="1px solid #E5E5E5" height="1px" flexGrow="1" />
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Box mb="35px">
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              helperText={formik.touched.fullName && formik.errors.fullName}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              InputProps={{

              }}
            />
          </Box>
          <Box mb="35px">
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
          </Box>
          <Box mb="35px">
            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              InputProps={{
                endAdornment:
                  <Box style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                  </Box>
              }}
            />
          </Box>
          <Box mt="40px" mb="40px">
            <FormControlLabel
              control={
                <Checkbox
                  name="checkbox"
                  checked={formik.values.checkbox}
                  onChange={formik.handleChange}
                  color={formik.values.checkbox ? 'primary' : 'secondary'}
                />
              }
              label={
                <Typography variant="body2">
                  Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
                </Typography>
              }
            />

          </Box>
          <Box width="270px">
            <Button type="submit" size="large" variant="contained" color="primary">Sign Up
            </Button>
          </Box>

        </form>
      </Box>
    </Box>
  )

}

export default SignUp;