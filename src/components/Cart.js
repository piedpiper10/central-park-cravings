import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  //subscribe to the store
  //it give access to whole store we want to access only small part of it
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("lets display cart", cartItems);

  const buttonHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="shadow-lg bg-black text-white rounded-lg p-2 m-2"
          onClick={buttonHandler}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty Add Items to the Cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
