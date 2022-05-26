import React from 'react'
import { Button, Container, Typography , Box, duration, Link} from '@mui/material'
import styled from '@emotion/styled'
import { GitHub , LinkedIn} from '@mui/icons-material'
import { motion } from 'framer-motion'
import '../App.css'
export default function About(props) {
const styles = {
  color: props.toggleMode? 'white': 'black'
}

const StyledLink = styled(Link)({
  color:props.toggleMode? 'white' : 'black'
})

  return (


    <Container 
    maxWidth="md" 
    sx={{ marginTop:'10px',alignItems:{md:"center" ,sm:'center'} , display:"flex" , flexDirection:"column" , padding:"20px", marginBottom:"7rem"}} 
    >
        <Typography 
        variant="h1" 
        sx={{  fontSize:{md:"4.4rem" , sm:'2.9rem', xs:'2.5rem'} , fontWeight:"bold"}}
        >
          Hi, I am <span style={{color:"#2978b5"}}>
             Kushagra Gupta.
            </span>
            </Typography>
        <Typography 
        variant='h2' 
        sx={{lineHeight:"1" , fontWeight:"bold", fontSize:{md:'2.8rem',xs:'2rem'}, margin:'20px 0px'}}
        >
          A Front End Engineer.
          </Typography>
        <Typography 
        style={{maxWidth:"600px" , lineHeight:"1.5", fontSize:"1.1rem",margin:'10px 0px',textAlign:'center' }}
        >
          I'm a junior developer who has recently started my journey as a web developer.
        I'm a self-motivated learner with strong organisation, time management & communication skills. I'm able to work independently & collaboratively in a team with a meticulous attention to detail.
        </Typography>
        <Box 
        sx={{marginTop:"40px", display:"flex" , alignItems:"center", gap:'1rem'}}
        >
      
        <motion.a 
        className="styleBtn"
        style={styles}
        whileHover={{ boxShadow: 'inset 6.5em 0 0 0 #2b53e5',color:'white'}} 
        transition={{type:'tween', duration:'0.3'}}   
        href="https://drive.google.com/file/d/1VliMEYnaoWjv9RiqTd-mM5_DQ1rVg3MO/view?usp=sharing"
        >
          resume
          </motion.a>

        <StyledLink href="https://github.com/K-u-s-h-gupta" >
          <motion.div whileHover={{color:'#2b53e5',scale:1.3}}>
        <GitHub/>
          </motion.div>
        </StyledLink>
        <StyledLink href="https://github.com/K-u-s-h-gupta">
        <motion.div whileHover={{color:'#2b53e5',scale:1.3}}>
        <LinkedIn/>
        </motion.div>
        </StyledLink>
        </Box>
    </Container>

  )
}
