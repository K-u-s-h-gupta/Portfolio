import React from 'react'
import { Container, Typography, Grid ,  Paper, Box} from '@mui/material'
import {skills} from '../Portfolio'
import {motion} from 'framer-motion'
export default function Skills() {
  return (
    <Container sx={{display:"flex" , alignItems:"center" , flexDirection:"column", paddingBottom:"50px"}}>
     
      <Typography variant="h4" sx={{fontWeight:"bold"}} >SKILLS</Typography>
        <Box>

      <Grid container spacing={2} sx={{maxWidth:'400px' , marginTop:'20px'}} >
          {skills.map((item,i)=>(
              <Grid item md={4}  sm={6} key={i} sx={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <motion.div whileHover={{y:-5}}>

                <Paper elevation={4} sx={{padding:"10px" , textAlign:"center", borderRadius:"0px"}}>
                    <Typography>{item}</Typography>
                </Paper>
                </motion.div>
              </Grid>
          ))}
      </Grid>
          </Box>
    </Container>
  )
}
