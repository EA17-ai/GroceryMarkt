
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/StoreItems";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Cart from "./pages/Cart";
function App() {
  
  return (
    <div>
     <ShoppingCartProvider>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     <Footer/>
    
      </ShoppingCartProvider> 
    </div>
  )
}

export default App
