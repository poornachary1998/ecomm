import  {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart'
import About from './Components/About';
import Products from './Components/Products';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar';
import ProtectedRoutes from './ProtectedRoutes';
function App() {
  


  return (
    <>
    {/* <Navbar/> */}
    <Toaster
        position="top-right"
        reverseOrder={true}
        containerStyle={{
          top: "4rem",
        }}
      />
    <Routes>
<Route  path='/home' element={<Home/>}/>
<Route  path='/' element={<Login/>}/>
<Route path='/products' element={<Products/>} />
<Route path='/products/:id' element={<Product/>} />
<Route path='/cart' element={<Cart/>} />
<Route path = '/about' element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>

<Route path="/checkout" element={<ProtectedRoutes> <Checkout/></ProtectedRoutes>}/>

<Route path="/register" element={<Register/>} />
  <Route exact path="/login" element={<Login/>} />
      
    </Routes>
    </>
  )
}

export default App;
             