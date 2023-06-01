import React from 'react';
import {Grid} from "@mui/material"
const Center = (props) => {
  return (
    <Grid container
    direction = "column"
    justifyContent ="center"
    alignItems = "center"
    sx={{minHeight : "100vh"}}>
            <Grid item sx ={1}>
            {props.children}
            </Grid>
        </Grid>
  )
}

export default Center