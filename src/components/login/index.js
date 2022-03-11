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
import {Link,useHistory} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import './Login.css';
import axios from 'axios';





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

export default function Login() {
  const history= useHistory('/')
  const handleSubmit=e=>{
    e.preventDefault();
    console.log('working');
    var customer = new URLSearchParams();
    for(const pair of new FormData(e.target)){
      customer.append(pair[0],pair[1])
    }
    var options={
      url:"http://localhost:5000/api/customer/login",
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
   if (res.data.message==='success'){
     if(res.data.result[0].is_authorised)
       history.push('/admin')
     else
     history.push('/dashboard')
   }
  })
}

  return (
    <ThemeProvider theme={theme}>




      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Paper>
          
          </Paper>
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
          <Typography component="h1" variant="h5" color="white">
            Sign in
          </Typography>
          <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} className="form" >
          
      
          <TextField
            style={{
                color:"blue",
                backgroundColor:"white",
                borderRadius:"5px",
                zIndex:2,
            


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
                borderRadius:"5px",
                zIndex:2

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
              style={{backgroundColor:"gold",color:"black"}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
        
        
            <Grid container>
       
              <Grid item>
                <Link to="/signup" variant="body2" style={{textDecoration:'none',color:"lightseagreen"}} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      
    </ThemeProvider>
  );
}