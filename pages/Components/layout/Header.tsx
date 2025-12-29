import Link from "next/link";
import Search from "../product/Search";
import { Geist, Geist_Mono } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState } from "@/pages/store";
import { ShoppingCart } from "lucide-react";
import ThemeToggle from "../ThemeToggle";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function Header() {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    // const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);
    const totalQty=cartItems.length

    return (
        <header className={`${geistSans.className} ${geistMono.className} w-full sticky top-0 z-50 dark:bg-gray-900 flex justify-between py-5 bg-black/5 lg:flex-row flex-col items-center md:px-20`}>
            <ul className=" flex gap-6 py-5 md:mt-0">
                <Link href="/"><li className=" hover:text-blue-400">Home</li></Link>
                <Link href="/products"><li className=" hover:text-blue-400">Gallery</li></Link>
                <Link href="/About"><li className=" hover:text-blue-400">About Us</li></Link>
                <li className=" pl-7"><ThemeToggle /></li>
            </ul>

            <div className=" flex gap-1.5">
                <img src="/logo.png" alt="" className=" w-16 h-16 rounded-4xl" />
                <h1 className=" text-5xl pt-1.5">Watch</h1>
            </div>

            <div className=" py-5 flex items-center gap-4 mt-4 md:mt-0 relative">
                <Search />
                <Link href="/cart" className=" relative">
                    <ShoppingCart className=" text-blue-400 w-6 h-6 md:w-8 md:h-8" />
                    {totalQty > 0 && (
                        <span className=" absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-xs rounded-full flex items-center justify-center">
                            {totalQty}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    )
}
export default Header


