import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Items from "../data/Items";
import { formatCurrency } from "../utilities/formatCurrency";

const Cart = () => {
    const { cartItems} = useShoppingCart();
  return (
    <div className="bg-gray-100 h-screen py-8">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((cartItem) => (
                <CartItem id={cartItem.id} quantity={cartItem.quantity}/>

            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = Items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}</span>
                    </div>
                    
                    {/* <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>$1.99</span>
                    </div> */}
                    
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>{formatCurrency(0.00)}</span>
                    </div>
                    

                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">{formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = Items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
            </span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cart
