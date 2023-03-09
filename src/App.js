import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites  from './pages/Favorites';
import NotFound from './pages/NotFound';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const FONT = createTheme({
  typography: {
    allVariants: {
      "fontFamily": 'Space Grotesk'
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={FONT}>
      <div 
      className='App'
      style={{backgroundColor: '#393E46'}}
      >
        <BrowserRouter basename='/mpd'>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path = "/search" element = {<Search />}/>
            <Route path = "/favorites" element = {<Favorites />}/>
            <Route path='*' element ={<NotFound />} />           
          </Routes>
          <Footer />
        </BrowserRouter> 
      </div>      
    </ThemeProvider>
  );
}

export default App;
