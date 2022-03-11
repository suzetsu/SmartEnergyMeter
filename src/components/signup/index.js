import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom'

import { blue } from '@mui/material/colors';
import { borderRadius, color } from '@mui/system';
import axios from 'axios'



function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <span style={{color:"red"}}>
        Electrify
      </span>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const handleSubmit=e=>{
    e.preventDefault();
    console.log('working');
    var customer = new URLSearchParams();
    for(const pair of new FormData(e.target)){
      customer.append(pair[0],pair[1])
    }
    var options={
      url:"http://localhost:5000/api/customer/signup",
      method:"post",
      headers:{ 
         
          "content-type":"application/json"      
      },
      data:{
          customerId:customer.get('customerId'),
          customerName:customer.get('customerName')
      }
  }
 axios(options)
 .then(res=>{
   console.log(res)
  })
}
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
// console.log(data)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5" color="whitesmoke">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} className="form">
            <TextField
            style={{
                color:"blue",
                backgroundColor:"white",
                borderRadius:"5px"


            }}
              margin="normal"
              required
              fullWidth
              id="customerid"
              label="Customer Id"
              name="customerId"
              autoComplete="customerId"
              autoFocus
            />
            <TextField
            style={{
                color:"blue",
                backgroundColor:"white",
                borderRadius:"5px"

            }}
              margin="normal"
              required
              fullWidth
              id="customername"
              label="Customer Name"
              name="customerName"
              autoComplete="customerName"
              autoFocus
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"gold",color:"black"}}
            >
              Sign Up
            </Button>
            <Grid container>
      
                <Link to="/" variant="body2" style={{textDecoration:'none',color:"lightseagreen"}}>
                  {"have an account? Sign In"}
                </Link>
              </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
