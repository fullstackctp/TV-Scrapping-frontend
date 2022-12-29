
import React from "react";

// import GoogleLogin from "react-google-login";
import {Row,Col} from 'reactstrap'
import { GoogleLogin,useGoogleLogin } from '@react-oauth/google';
import GoogleButton from "react-google-button";

// ** React Imports
import { useState } from "react";

// ** Next Imports
import {Link} from 'react-router-dom'

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

import { useDispatch} from 'react-redux'

// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

import { Form, Formik } from "formik";
import { authLoginAction } from "store/actions/loginAction";
import axios from "axios";
import SLUGS from "resources/slugs";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  // ** Hook
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()

  const theme = useTheme();

  const handleSubmit = (values) => {
    dispatch(authLoginAction(values))
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const responseGoogle = async (response) => {
    console.log('Access Token',response)
    console.log('ID Token',response.accessToken)
  }

  const onFailure = async (err) => {
    console.log(err,'errorishereofthegame')
  }

  const handleGoogleLogin = (codeResponse) => {
    axios.post('http://localhost:8000/google/',codeResponse).then(res => console.log(res,'resishere')).catch(err => console.log(err,'errorishere'))
  }

  const login = useGoogleLogin({
    onSuccess: codeResponse => handleGoogleLogin(codeResponse),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ zIndex: 1, padding: "40px 20px" }}>
        <CardContent sx={{ padding: "10px" }}>
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
            >
              TV Scraping
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              Welcome to TV Scraping! 👋🏻
            </Typography>
            <Typography variant="body2">
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
              remember: false,
            }}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form onSubmit={formik.handleSubmit}>
                  <TextField
                    autoFocus
                    fullWidth
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    label="Email"
                    sx={{ marginBottom: 4 }}
                  />
                  <FormControl fullWidth>
                    <InputLabel htmlFor="auth-login-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      label="Password"
                      name="password"
                      value={formik.values.password}
                      id="auth-login-password"
                      onChange={formik.handleChange}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowPassword}
                            aria-label="toggle password visibility"
                          >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Box
                    sx={{
                      mb: 4,
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="remember"
                          onChange={formik.handleChange}
                          value={formik.values.remember}
                        />
                      }
                      label="Remember Me"
                    />
                    <Link passHref href="#">
                      <LinkStyled>Forgot Password?</LinkStyled>
                    </Link>
                  </Box>
                  <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ marginBottom: 2 }}
                  >
                    Login
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ marginRight: 2 }}>
                        New on our platform?
                    </Typography>
                    <Typography variant='body2'>
                    <Link to={SLUGS.signup}>
                        <LinkStyled>Create an account</LinkStyled>
                    </Link>
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1 }}>or</Divider>
                  
                  <Row className="form-group">
                    <Col>
                      {/* <GoogleLogin
                        clientId="535792898032-i6jpo4p9qutukn6o3n6l601oujruc4q0.apps.googleusercontent.com"
                        // render={renderProps => (
                        //   <GoogleButton onClick={() => {renderProps.onSuccess(responseGoogle())}} type="dark" style={{width : '100%',marginTop:'20px'}}/>
                        // )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                      /> */}
                      {/* <GoogleLogin
                        
                        onSuccess={credentialResponse => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                        flow= 'auth-code'
                      /> */}
                      {/* <Button onClick={() => login()}>Google Login</Button> */}
                      <GoogleButton onClick={() => login()} type="dark" style={{width : '100%',marginTop:'20px'}}/>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;









