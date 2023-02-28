import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites  from './pages/Favorites';
import NotFound from './pages/NotFound';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {

  return (
    <div 
    className='App'
    style={{backgroundColor: '#393E46'}}
    >
      <BrowserRouter>
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
  );
}

export default App;
