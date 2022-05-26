import React from 'react'
import { Container,Box,Typography,AppBar,Toolbar, styled, Link,Drawer, List } from '@mui/material'
import Drawers from './Drawer'
import {navbar} from '../Portfolio'
import { DarkMode, LightMode } from '@mui/icons-material'
import { motion } from 'framer-motion'

export default function Navbar(props) {


const StyleComponent = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"20px",
    fontFamily:"Source Sans Pro"
})


  return (
    <AppBar sx={{ padding:"30px 0px"}}  position="relative">
        <Toolbar>

    <Container>
        <StyleComponent>

        <motion.div 
        animate={{x:0 , scale:1, rotateZ:0}}
        initial={{ scale:0, rotateZ:-30}}
        transition={{type:'spring', stiffness:150}}
        
        >
            <Typography variant="h5" sx={{fontWeight:"bolder", letterSpacing:"2px", color:'#2978b5'}}>KUSH.</Typography>
        </motion.div>
      

        <StyleComponent>
            {
                navbar.map((item,i)=>(
                    
                    <List variant="h6" underline="none"sx={{fontSize:"1.2rem" , fontFamily:"Source Sans Pro" , display:{sm:'block' , xs:'none'}}} key={i} >{item}</List>
                    ))
                }
        </StyleComponent>
             
        <Box sx={{display:'flex', gap:'1rem'}}>
                    <Box onClick={props.handleMode}>{props.toggleMode? <DarkMode/>: <LightMode/> }</Box>
            
                    <Drawers/>

        </Box>

              
        </StyleComponent>
    </Container>
        </Toolbar>
    </AppBar>
  )
}
