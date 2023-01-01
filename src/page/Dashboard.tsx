import React from 'react'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import MobileNavbar from '../components/navbar/MobileNavbar'

const Dashboard = () => {
  return (
    <>
      <Grid container minHeight={'200vh'}>
        <Grid xs={12}>
          <MobileNavbar />
        </Grid>
        <Grid xs={12} xl={8}></Grid>
        <Grid xs={12} xl={2}></Grid>
      </Grid>
    </>
  )
}

export default Dashboard
