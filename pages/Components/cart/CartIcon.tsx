import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/pages/store";


function FloatingCartIcon() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems) || [];
  // const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalQty = cartItems.length

  if (totalQty === 0) return null;

  return (
    <Link href="/cart">
      <div className=" fixed right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full cursor-pointer z-50 hover:scale-105 transition flex items-center justify-center">
        <FiShoppingCart className=" w-8 h-8 text-blue-500 dark:text-blue-400" />
        <span className=" absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalQty}
        </span>
      </div>
    </Link>
  )
}
export default FloatingCartIcon
