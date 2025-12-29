import { useRouter } from "next/router";
import { products } from "../types/product";
import { RootState } from "../store";
import { Geist, Geist_Mono } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, incrementQty } from "../store/cartSlice";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function ProductDetails() {
    const {query}=useRouter()
    const id=query.id
  const product = products.find(p => p.id === Number(id));

  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const quantityInCart = cartItems.find(item => item.id === Number(id))?.qty || 0;

  const handleIncrement = () => { if(product) dispatch(incrementQty(product.id)) }
  const handleDecrement = () => { if(product) dispatch(decrementQty(product.id)) }
  const handleAddToCart = () => { if(product) dispatch(addToCart({ ...product, qty: 0 })) }

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <main className=" max-w-6xl mx-auto py-10 px-4 md:px-8 flex items-center justify-center">
        <div className=" flex flex-col md:flex-row gap-10 md:gap-20">
        {product &&(<>
          <div className=" md:w-1/2 flex justify-center">
            <img src={product.image} alt={product.name} className=" w-72 sm:w-96 md:w-[500px] lg:w-[600px] object-contain" />
          </div>
      
          <div className=" flex flex-col gap-6 mt-24">
            <h1 className=" text-4xl font-bold text-yellow-600 py-8">{product.name}</h1>
            <p className=" text-[#6b7280] text-lg dark:text-gray-300">{product.description}</p>
            <p className=" text-2xl font-bold py-8 text-[#1a1a1a] dark:text-gray-100">${product.price}</p>

            <div className=" flex items-center gap-4 mt-4">
              <button onClick={handleDecrement} className=" bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition cursor-pointer"> - </button>
              <span className=" text-xl font-bold w-8 text-center text-gray-900 dark:text-gray-100">{quantityInCart}</span>
              <button onClick={handleIncrement} className=" bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition cursor-pointer"> + </button>
            </div>

            <button
              onClick={handleAddToCart}
              className=" bg-yellow-400 text-white px-6 py-3 rounded hover:bg-yellow-500 transition mt-4 w-full md:w-auto">Add To Cart</button>
          </div>
          </>
        )}
        </div>
      </main>
    </div>
  )
}
export default ProductDetails
