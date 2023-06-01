import { AppBar, Toolbar, Typography,Container,Button } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useStateContext from '../hooks/useStateContext'

const Layout = () => {
    const {resetContext} = useStateContext();
    const navigate = useNavigate();
    const logout =()=>{
        resetContext();
        navigate('/')
    }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ width: 640, m: "auto" }}>
          <Typography variant="h4" align="center" sx={{flexGrow :1}}>
            Quiz App
          </Typography>
          <Button onClick = {logout}>LogOut</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout