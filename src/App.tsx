import { Provider } from 'react-redux';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom'

import Store from './pages/Store';
import Root from './pages/Root';
import Home from './pages/Home';
import GamePageDetails from './pages/GamePageDetails';
import CartPage from './pages/CartPage';
import Settings from './pages/Settings';
import Landing from './pages/Landing';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import store from './redux/store';
import './scss/App.scss';


const App = () => {

  return (
      <Provider store = {store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="landing" replace />} />
            <Route path='landing' element={<Landing />} /> 
            <Route path='login' element={<LogIn />} /> 
            <Route path='signup' element={<SignUp />} /> 
            <Route path='/' element={<Root />}>              
              <Route path='store' element={<Store />} /> 
              <Route path="home" element={<Home />} />          
              <Route path="cart" element={<CartPage />} />      
              <Route path="settings" element={<Settings />} />     
              <Route path='/store/:id' element={<GamePageDetails />} />         
              <Route path='*' element={<h1>Error</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
