import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from '../chart';
import './Dashboard.css';





  function Copyright(props) {
    return (
      <Typography variant="body2" color="black" align="center" {...props}>
        {'Copyright © '}
        <span style={{color:"red"}}>
          Electrify
        </span>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const mdTheme = createTheme();

function DashboardContent() {

const esewaPayment=(amount)=>{
        var path="https://uat.esewa.com.np/epay/main";
        
        var params= {
            amt: amount,
            psc: 0,
            pdc: 0,
            txAmt: 0,
            tAmt: amount,
            pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
            scd: "EPAYTEST",
            su: "http://merchant.com.np/page/esewa_payment_success",
            fu: "http://merchant.com.np/page/esewa_payment_failed"
        }
        post(path,params)
        
        function post(path, params) {
            var form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("action", path);
        
            for(var key in params) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }
        
            document.body.appendChild(form);
            form.submit();
        }
    }
  return (
    <ThemeProvider theme={mdTheme}>
        <AppBar position="absolute">
          <Toolbar
        
          >
 
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             Daily Consumption Of Electricity
            </Typography>
          </Toolbar>
        </AppBar>
    
        <CssBaseline />
      
 
        <Box
     
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >

          <Toolbar />
          <Container  sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
        
              {/* Recent Deposits */}

              <Grid item xs={12} md={5} lg={4}>
                <Paper
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    backgroundColor:"lightgrey",
                  
                   
                  
                  
                  }}
                >
                    <Typography variant="h6" color="blue">Meter Reading:</Typography>
                    <Paper className="pricing">Voltage Reading:10v</Paper>
                    <Paper className="pricing">Current Reading:20A</Paper>
                  
              </Paper>
          </Grid>
            
    
            </Grid>
            <br/><br/><br/>

            <Grid container spacing={3}>
              {/* Chart */}

              <Grid item xs={12} md={4} lg={5}>
                <Paper
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    backgroundColor:"coral",
                  
                   
                  
                  
                  }}
                >
                    <Paper className="pricing">Per Unit Price:10</Paper>
                    <Paper className="pricing">Total Unit:Rs.20</Paper>
                    <Paper className="pricing">Total Cost:Rs.{20*10}</Paper>
                    
                    <Button style={{backgroundColor:"lightgreen"}} onClick={()=>esewaPayment(20*10)}>PAY WITH ESEWA </Button>
                </Paper>
              </Grid>
 
    
            </Grid>


          </Container>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      
   
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}