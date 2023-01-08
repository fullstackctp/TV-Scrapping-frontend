
import React from "react";

// import GoogleLogin from "react-google-login";
import {Row,Col} from 'reactstrap'
// import googleLogo from '../assets/Images/google-logo.png';

import { useNavigate } from "react-router-dom";

// ** React Imports
import { useEffect, useState } from "react";

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

import { Form, Formik } from "formik";
import slugs from "resources/slugs";
import dsahboardDataAction from "store/actions/dashboardAction";
import { createUseStyles } from "react-jss";
import useSettings from "hooks/useSettings";

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

const useStyles = createUseStyles({
  cardsContainer: ({theme,settings}) => {
    return {
      backgroundImage : settings?.mode === 'light' ? `linear-gradient(98deg, #F6F8FB,#D6E0EF 94%)` : `linear-gradient(98deg,rgb(30 41 59),rgb(30 41 59) 94%)`,
      color : settings?.mode === 'light' ? 'black' : 'white'
  }},

  cardRow: {
      marginTop: 30,
      '@media (max-width: 768px)': {
          marginTop: 0
      }
  },
  
});

const DashboardForm = () => {

  // ** Hook
  const theme = useTheme();
  const {settings} = useSettings()
  const classes = useStyles({theme,settings})
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    console.log({...values,stock:values.stock.split(',')},'valueslakdsfklllllllllll')
    dispatch(dsahboardDataAction({...values,stock:values.stock.toUpperCase().split(',')}))
  };
  
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        width:'100%',
      }}
    >
      <Card className={classes.cardsContainer} sx={{ padding: "40px 20px",minWidth:'90%'}}>
        <CardContent  sx={{ padding: "10px" }}>
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
          </Box>
        
          <Formik
            initialValues={{
              stock: "",
              limit: "",
            }}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form onSubmit={formik.handleSubmit} >
                  <InputLabel htmlFor="stock" sx={{color : settings?.mode === 'light' ? "black" : "white" ,marginBottom : '5px'}}>
                    Stocks
                  </InputLabel>
                  <TextField
                    autoFocus
                    fullWidth
                    name="stock"
                    id="stock"
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    placeholder="Stocks"
                    sx={{ marginBottom: 4,borderRadius : '4px',border : 'none',backgroundColor : 'white'}}
                  />
                    <InputLabel htmlFor="limit" sx={{color : settings?.mode === 'light' ? "black" : "white" ,marginBottom : '5px'}}>
                      Limit
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="limit"
                      placeholder="Limit"
                      value={formik.values.limit}
                      id="limit"
                      onChange={formik.handleChange}
                      type={"text" }
                      sx={{ marginBottom: 4,borderRadius : 'none',border : 'none',backgroundColor : 'white'}}
                    />
                  <Box
                    sx={{
                      mb: 4,
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                  
                  </Box>
                  <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ marginBottom: 2 }}
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardForm;









