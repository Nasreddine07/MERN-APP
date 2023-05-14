// import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductPage from './Pages/ProductPage';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Registre from "./Pages/Registre";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinnerr from './Components/Spinnerr';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';

/*import { PrivateRoute } from './PrivateRoutes/PrivateRoute';*/


function App() {
  return (
    <Router>
      <NavBar/>
      <Spinnerr/>
      <Routes>
      <Route index element={<Home/>} />
      <Route path='/products' element={<ProductPage/>} />
      <Route path="/products/:id" element={<ProductDetail/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path='/register' element={<Registre/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
