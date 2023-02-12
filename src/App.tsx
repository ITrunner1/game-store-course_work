import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import Root from './pages/Root';
import { Store } from './pages';
import './scss/App.scss';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="root" element={<Root />} />
        <Route path="store" element={<Store />} />  
        <Route path="home" element={<h1>Home</h1>} />        
        <Route path="games" element={<h1>Games</h1>} />   
        <Route path="bookmarks" element={<h1>Bookmarks</h1>} /> 
        <Route path="settings" element={<h1>Settings</h1>} />   
      </Route>
    )
   );

  return (
      <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
