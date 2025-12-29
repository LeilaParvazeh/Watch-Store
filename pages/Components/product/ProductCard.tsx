import { Eye } from "lucide-react";
import Link from "next/link";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/store";
import { addToCart, removeFromCart, updateQty } from "@/pages/store/cartSlice";

type Props = {
  id: number,
  image: string,
  name: string,
  brand: string,
  price: number,
  description:string
}

function ProductCard({ id, name, brand, price, image }: Props) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cart.cartItems.find(i => i.id === id));
  const quantity = cartItem?.qty || 0;

  const increment = () => dispatch(addToCart({ id, name, price, image, qty: 1 }));
  const decrement = () => {
    if (quantity <= 0) return;
    if (quantity === 0) dispatch(removeFromCart(id));
    else dispatch(updateQty({ id, qty: quantity - 1 }));
  };

  return (
    <div className=" bg-white shadow-2xl rounded-2xl p-4 text-center w-full justify-between h-[420px] sm:h-[450px] dark:bg-gray-800">
       <img src={image} alt={name} className=" w-32 h-32 sm:w-40 sm:h-40 object-contain m-auto" />
      <h1 className=" mt-5 font-semibold text-gray-900 dark:text-gray-100">{name}</h1>
      <p className=" text-lg text-gray-500 mt-5 text-center dark:text-gray-400">{brand}</p>
      <p className=" pt-3 font-black text-gray-900 dark:text-gray-100">${price}</p>

      <div className=" flex justify-around my-4 items-center">
        <Link href={`/products/${id}`}><Eye className=" text-[#d4af37] w-8 h-8"/></Link>
        <div className=" flex items-center gap-2">
          {quantity > 0 ? (
            <>
              <button onClick={decrement} className=" text-[#d4af37] w-8 h-8 cursor-pointer">-</button>
              <span className=" text-gray-900 dark:text-gray-100">{quantity}</span>
              <button onClick={increment} className=" text-[#d4af37] w-8 h-8 cursor-pointer">+</button>
            </>
          ) : (
            <button onClick={increment}>
              <TbShoppingBagPlus className=" text-[#d4af37] w-8 h-8 cursor-pointer"/>
            </button>
          )}
        </div>
      </div>

      <Link href={'/cart'}>
        <button className=" mt-4 border lg:px-8 lg:py-3 border-orange-400 text-orange-500 px-8 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition cursor-pointer">
          View Cart
        </button>
      </Link>
    </div>
  )
}
export default ProductCard
