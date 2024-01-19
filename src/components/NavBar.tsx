import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavBar = () => {
  const {cartQuantity}=useShoppingCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
    return (

  <section className="relative">
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          Grocery Markt
        </a>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a className="hover:text-gray-200" href="/">Home</a></li>
          <li><a className="hover:text-gray-200" href="/products">Products</a></li>
          {/* <li><a className="hover:text-gray-200" href="/login">Login</a></li>
          <li><a className="hover:text-gray-200" href="/register">Register</a></li> */}
          
        </ul>
        <div className="hidden xl:flex items-center space-x-5">

          <a className="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span className="flex absolute -mt-10 ml-5 px-1 rounded-full bg-red-400">
                
                {cartQuantity && <p>{cartQuantity}</p> || null}
                
              </span>
          </a>
          
       
          
        </div>
      </div>
      <a className="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="flex absolute -mt-10 ml-5 px-1 rounded-full bg-red-400">
                
                {cartQuantity && <p>{cartQuantity}</p> || null}
                
              </span>
      </a>
      <button className="navbar-burger self-center mr-12 xl:hidden" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      
      
    </nav>
    <div className={`flex flex-wrap flex-row xl:hidden w-screen justify-center py-5 font-bold bg-gray-900 text-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4">
          <li><a className="hover:text-gray-200" href="/">Home</a></li>
          <li><a className="hover:text-gray-200" href="/products">Products</a></li>
          {/* <li><a className="hover:text-gray-200" href="/login">Login</a></li>
          <li><a className="hover:text-gray-200" href="/register">Register</a></li> */}
        </ul>
      </div>
  </section>

          );
  };
  
  export default NavBar;
  