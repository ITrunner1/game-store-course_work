import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  BrowserRouter
} from 'react-router-dom'

import Root from './pages/Root';
import { Store } from './pages';
import './scss/App.scss';
import store from './redux/Store/store';
import { Provider } from 'react-redux';
import Home from './pages/Home';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="root" element={<Root />} />
        <Route path="store" element={<Store />} />  
        <Route path="home" element={<Home />} />        
        <Route path="games" element={<h1>Games</h1>} />   
        <Route path="bookmarks" element={<h1>Bookmarks</h1>} /> 
        <Route path="settings" element={<h1>Settings</h1>} />   
      </Route>
    )
   );

  return (
      <Provider store = {store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
  );
}

export default App;
