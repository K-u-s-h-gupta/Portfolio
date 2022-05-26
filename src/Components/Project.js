import React from 'react'
import {projects} from '../Portfolio'
import { Container , Typography , Box , Paper, Grid,styled,Link} from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import {motion} from 'framer-motion'

export default function Project(props) {
  const StyledLink = styled(Link)({
    color:props.toggleMode? 'white' : 'black'
  })

  return (
    <Container sx={{display:"flex" , alignItems:"center" , flexDirection:"column",marginBottom:'70px' }} id="Projects">

      <Typography variant="h4" sx={{fontWeight:"bold"}} >PROJECTS</Typography>


      <Grid container spacing={2} sx={{marginTop:"20px"}}>
        {projects.map((item,i)=>(
          
          <Grid item key={i} md={4} sm={6} xs={12} sx={{alignItems:'center',display:'grid',gridAutoFlow:'column'}}>
            <motion.div 
            whileHover={{y:-10}}>
            
          <Paper elevation={12} sx={{ padding:'20px' , textAlign:'center' , marginBottom:'50px'}}>
              <Typography variant="h5" sx={{fontWeight:"bold", fontSize:'1.6rem', marginBottom:'10px'}}>{item.name}</Typography>
              <Typography variant="p" sx={{fontSize:'1.2rem'}}>{item.description}</Typography>  
              <Box sx={{display:"flex" , gap:'1rem', margin:'30px 0', justifyContent:'center'}}>
              {item.stack.map((stacks,k)=>(
                <Typography variant="p" sx={{fontWeight:"600", fontSize:'1rem'}} key={k}>{stacks}</Typography>
                ))}
                  </Box>
                  <div style={{display:'flex', justifyContent:'center', gap:'2rem'}}>

                  <StyledLink href={item.sourceCode}>
                  <motion.div whileHover={{color:'#2b53e5',scale:1.2}}>
                   <GitHub/>
                  </motion.div>
                    </StyledLink>
                  <StyledLink href={item.livePreview}>
                  <motion.div whileHover={{color:'#2b53e5',scale:1.2}}>
                    <Launch/>
                  </motion.div>
                    
                    </StyledLink>
                  </div>
          </Paper>
                </motion.div>

          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

