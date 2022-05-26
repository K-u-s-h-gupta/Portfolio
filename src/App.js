import './App.css';
import React ,{useState}from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills'
import Contactme from './Components/Contactme';
import Footer from './Components/Footer';
import { CssBaseline, ThemeProvider,createTheme } from '@mui/material';

function App() {

  const [toggleMode , setToggleMode] = useState(false)

  function handleMode(){
    setToggleMode(prevMode=> !prevMode)
  }
  const light = {
    palette: {
      mode: "light",
      primary:{
        main:'#ffffff',
        light:'#000000'
    },
  },
    typography: {
      allVariants: {
        fontFamily: 'Open Sans',
      },
    },
  };
  
  const dark = {
    palette: {
      mode: "dark",
    },
    typography: {
      allVariants: {
        fontFamily: 'Open Sans',
      },
    },  
  };
  return (
    <ThemeProvider theme={toggleMode ? createTheme(dark) : createTheme(light)}>
       <CssBaseline/>
   <Navbar toggleMode={toggleMode} handleMode={handleMode}/>
   <About toggleMode={toggleMode}/>
   <Project toggleMode={toggleMode}/>
   <Skills/>
   <Contactme toggleMode={toggleMode}/>
    <Footer/>
</ThemeProvider>
  );
}

export default App;
