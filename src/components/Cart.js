import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-10 p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="w-6/12 m-auto">
     <button className="p-2 m-2 text-white rounded-lg bg-black" onClick={handleClearCart}> Clear Cart</button>
       {cartItems.length===0 &&(
        <h1>Your Cart is Empty pls add some items to the cart!</h1>
       )}
        <ItemList items={cartItems}/>
      </div>
        </div>
    )
}
export default Cart;