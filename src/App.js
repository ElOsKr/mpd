import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites  from './pages/Favorites';
import NotFound from './pages/NotFound';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {

  const router = createBrowserRouter( createRoutesFromElements(
    <>
      <Route path="/" element={ <Home/> }/>
      <Route path = "/search" element = {<Search />}/>
      <Route path = "/favorites" element = {<Favorites />}/>
      <Route path='*' element ={<NotFound />} />  
    </>

  ))

  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
