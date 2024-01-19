import { formatCurrency } from "../utilities/formatCurrency";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { useEffect } from "react";


type StoreItemProps={
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({id,name,price,imgUrl}:StoreItemProps) => {

    useEffect(()=>{
      if (!localStorage.getItem('shopCart')){
        localStorage.setItem("shopCart", JSON.stringify([]))
      }
      
    })


  
  const {getItemQuantity,incrementProduct,decrementProduct,removeFromCart}=useShoppingCart()



  const quantity=getItemQuantity(id) ;
  return (
    <div key={id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={imgUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{formatCurrency(price)}</p>
                   {quantity ? 
                    (<div className="flex flex-col  ml-auto gap-2">
                      <div className="flex flex-col-1 flex-row  gap-2">
                    <div className="flex-1">                    
                    <button  className="w-6 h-6 bg-blue-400 text-white" onClick={()=>incrementProduct(id)}>+</button>
                    </div>
                    <div className="flex-1">                    
                    <p className="w-6 h-6 bg-white text-black justify-center">{getItemQuantity(id)}</p>
                    </div>
                    <div className="flex-1">                    
                    <button  className="w-6 h-6 bg-blue-400 text-white" onClick={()=>decrementProduct(id)}>-</button>
                    </div>
                   </div>
                    <div  className="flex flex-col-1"><button  className="bg-red-500 text-white px-2 py-2 rounded-lg " onClick={()=>removeFromCart(id)}>Remove</button></div>
                    </div>
 )                   
                   :(
                    <div className="ml-auto"><button onClick={() => incrementProduct(id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></button></div>
                     
)
                   } 
                  
                </div>
            </div>
        
    </div>
  )
}

export default StoreItem;
