import React from 'react'
import { Container, Typography } from '@mui/material'
export default function Footer() {
  return (
    <Container sx={{ alignItems:"center" , display:"flex",justifyContent:'center' , marginBottom:'50px'}}>
      <Typography variant='h5' sx={{fontWeight:'bold', fontSize:'1.1rem', color:'rgb(43 83 229)'}}>Created By Kushagra Gupta</Typography>
    </Container>
  )
}
