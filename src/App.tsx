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
import FilterGenrePage from './pages/FilterGenrePage';
import CartPage from './pages/CartPage';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import SearchPage from './pages/SearchPage';
import store from './redux/store';
import { useTheme } from './hooks/use-theme';
import './scss/App.scss';

const App = () => {
  const { theme, setTheme } = useTheme();
  return (
      <Provider store = {store}>
        <BrowserRouter basename='/game-store-course_work'>
          <Routes>
            <Route index element={<Navigate to="store" replace />} />          
            <Route path='login' element={<LogIn />} /> 
            <Route path='signup' element={<SignUp />} /> 
            <Route path='/' element={<Root />}>              
              <Route path='store' element={<Store />} /> 
              <Route path ="/search/:searchTerm" element = {<SearchPage />} />
              <Route path="home" element={<Home />} />          
              <Route path="cart" element={<CartPage />} />      
              <Route path="settings" element={<Settings />} />     
              <Route path='/store/:id' element={<GamePageDetails />} /> 
              <Route path='/genre/:genre' element={<FilterGenrePage />} />       
              <Route path='*' element={<h1>Error</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
