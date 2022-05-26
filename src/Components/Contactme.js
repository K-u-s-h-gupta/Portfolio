import React from 'react'
import { Typography, Container,Button,styled} from '@mui/material'
import {motion} from 'framer-motion'
import "../App"
export default function Contactme(props) {
   const styles = {
     color: props.toggleMode ? 'white' :'black'
   }
  return (
    <div>
        <Container sx={{marginTop:"25px",display:"flex" , alignItems:"center" , flexDirection:"column", paddingBottom:"100px"}}>
        <Typography variant="h4" sx={{fontWeight:"bold"}} >CONTACT</Typography>

            <motion.a
            className='styleBtn mrgn' 
            style={styles}
            whileHover={{ boxShadow: 'inset 6.5em 0 0 0 #2b53e5',color:'white'}} 
            transition={{type:'tween', duration:'0.3'}}  
            href="mailto:kushagr18gupta@gmail.com"
            >
                    email me
            </motion.a>
        </Container>
    </div>
  )
}
