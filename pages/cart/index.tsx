import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import { AppDispatch, RootState } from "../store";
import { decrementQty, incrementQty, removeFromCart } from "../store/cartSlice";

function CartBasket() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems) || [];
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-10 transition-colors duration-300">
      <div className=" max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 transition-colors duration-300">
        <h1 className=" text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100"> Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className=" text-center py-20">
            <p className=" text-gray-500 dark:text-gray-300 mb-4">Your shopping cart is empty</p>
            <Link href="/" className=" inline-block bg-orange-500 dark:bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-600 dark:hover:bg-orange-700 transition"> Back To Store </Link>
          </div>
        ) : (
          <>
            <div className=" space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className=" flex sm:flex-row items-center justify-between border-b pb-4 dark:border-gray-700 sm:gap-0">
                  <div className=" flex items-center gap-4 w-full sm:w-auto">
                    <Link href={`/products/${item.id}`}>
                      <img src={item.image} alt={item.name} className=" w-24 h-24 sm:w-28 sm:h-28 object-contain rounded transition-transform hover:scale-105"/>
                    </Link>
                    <div className=" flex-1 sm:flex-none">
                      <h4 className=" font-semibold text-gray-900 dark:text-gray-100">{item.name}</h4>
                      <p className=" text-gray-500 dark:text-gray-300">${item.price}</p>
                      <div className=" flex items-center gap-2 mt-2">
                        <button onClick={() => dispatch(decrementQty(item.id))} className=" px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition transform active:scale-95 cursor-pointer"> - </button>
                        <span className=" px-3 text-gray-900 dark:text-gray-100">{item.qty}</span>
                        <button onClick={() => dispatch(incrementQty(item.id))} className=" px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition transform active:scale-95 cursor-pointer"> + </button>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => dispatch(removeFromCart(item.id))} className=" text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600 font-bold text-lg cursor-pointer mt-4 sm:mt-0">
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>

            <div className=" mt-6 flex flex-col sm:flex-row justify-between items-center">
              <h3 className=" text-xl font-bold text-gray-900 dark:text-gray-100">Total Price:</h3>
              <span className=" text-xl font-semibold text-gray-900 dark:text-gray-100 mt-2 sm:mt-0"> ${totalPrice.toFixed()}</span>
            </div>

            <div className=" mt-6 text-center sm:text-right">
              <Link href="/checkout" className=" inline-block bg-green-500 dark:bg-green-600 text-white px-6 py-3 rounded hover:bg-green-600 dark:hover:bg-green-700 transition transform active:scale-95">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default CartBasket
