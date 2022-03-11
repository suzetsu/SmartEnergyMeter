import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import ReactHtmlParser from 'react-html-parser'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

  
const mdTheme = createTheme();


export default function Admin() {
    const [state,updateState]=useState({})
    // const [toggle,updateToggle]=useState({})
 
    const toggleButton=(event)=>{

        switch(state[event.target.id]){
    
            case undefined:

              state[event.target.id]="on"
              updateState(state)
              break

            case "on":
              //off grny
                state[event.target.id]="off"
                updateState(state)
              
                break
            case "off":
              //on grny 
                state[event.target.id]="on"
                updateState(state)
                break
            default:
                break
        } 
        console.log(state)
      }
    
   
   

    const columns = [
        { field: 'id', headerName: 'CID', width: 70 },
        { field: 'firstName', headerName: 'CName', width: 130 },
        { field: 'lastName', headerName: 'Address', width: 130 },
        {
          field: 'age',
          headerName: 'EnergyUsed',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Price',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        { 
            field: 'toggle', headerName: 'Switch ', width: 130, renderCell: (params) =><div> <button id={params.row.id} onClick={(e)=>toggleButton(e)}>{state[params.row.id]!==undefined?state[params.row.id]:"off"}</button></div>
        }
      ]
      
      const rows = [
        { id: 1, lastName: 'Sankhamul', firstName: 'Hari',  },
        { id: 2, lastName: 'Chyasal', firstName: 'Shyam',  },
        { id: 3, lastName: 'Baneshwor', firstName: 'Kushal',  },
        { id: 4, lastName: 'Koteshwor', firstName: 'Amrit',  },
        { id: 5, lastName: 'Balkumari', firstName: 'Bishal',  },
      //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,toggle:()=>SupplyPowerToggle()  },
      //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,toggle:()=>SupplyPowerToggle() },
      //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150,toggle:()=>SupplyPowerToggle()  },
      //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,toggle:()=>SupplyPowerToggle()  },
      //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,toggle:()=>SupplyPowerToggle()  },
      //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,toggle:()=>SupplyPowerToggle() },
      ];
      
    
    
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
         Admin
        </Typography>
      </Toolbar>
    </AppBar>
    <br/><br/>
    <div style=
    {{ height: '500px', width: '50%',backgroundColor:"#f2f2f2",  margin:"50px auto"
  
 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </ThemeProvider>
  );
}

