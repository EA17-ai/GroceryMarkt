import Items from "../data/Items";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
  };

const CartItem = ({ id, quantity }: CartItemProps) => {
    const {removeFromCart } = useShoppingCart();
    const item = Items.find((item) => item.id === id);
    if (item == null) return null;
  return (
    <tr>
    <td className="py-4">
        <div className="flex items-center">
            <img className="h-16 w-16 mr-4" src={item.imgUrl} alt="Product image" />
            <span className="font-semibold">{item.name}</span>
        </div>
    </td>
    <td className="py-4">{item.price}</td>
    
    <td className="py-4">
        <div className="flex items-center">
            <span className="text-center w-8">{quantity}</span>
        </div>
    </td>
    <td className="py-4">{formatCurrency(item.price * quantity)}</td>
    <td className="py-4"><button className="font-bold text-red-600 rounded-full  px-2 " onClick={()=>removeFromCart(id)}>x</button></td>
</tr>

    )
}

export default CartItem
