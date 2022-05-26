import React, { useState } from 'react'
import { Drawer,IconButton,Link, List } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { navbar } from '../Portfolio'
export default function Drawers() {

    const [toggleMenu , setToggleMenu] = useState(false)
  return (
      <>
      <Drawer open={toggleMenu} anchor="right" PaperProps={{sx:{width:200}}} onClose={()=>setToggleMenu(false)}>
          <div style={{display:'flex', flexDirection:'column', padding:'10px', alignItems:"center",gap:'1rem',marginTop:'10px'}}>

          {navbar.map((item,i)=>(
              <List underline="none" sx={{fontSize:'1.2rem'}} key={i} >{item}</List>
              ))}
              </div>
      </Drawer>
      <IconButton  sx={{display:{sm:'none', xs:'block',padding:'0px'}}} size='large' onClick={()=>setToggleMenu(true)}>
          <Menu style={{transform:'scale(1.3)'}}/>
      </IconButton>
              </>
  )}
