import { Provider } from 'react-redux';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom'

import { Store } from './pages';
import Root from './pages/Root';
import Home from './pages/Home';
import GamePageDetails from './pages/GamePageDetails';
import CartPage from './pages/CartPage';
import Settings from './pages/Settings';
import store from './redux/store';
import './scss/App.scss';


const App = () => {

  return (
      <Provider store = {store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Root />}>
              <Route index element={<Navigate to="store" replace />} />
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
