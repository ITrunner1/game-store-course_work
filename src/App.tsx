import { Provider } from 'react-redux';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'

import { Store } from './pages';
import Root from './pages/Root';
import Home from './pages/Home';
import GamePageDetails from './pages/GamePageDetails';
import store from './redux/Store/store';
import './scss/App.scss';


const App = () => {

  return (
      <Provider store = {store}>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Root />}>
          <Route path="home" element={<Home />} />
          <Route path='store' element={<Store />} />             
          <Route path='/store/:id' element={<GamePageDetails />} />         
          <Route path='*' element={<h1>Error</h1>} />
        </Route>
        </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
