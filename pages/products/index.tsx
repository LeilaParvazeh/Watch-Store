import ProductCard from "../Components/product/ProductCard";
import Header from "../Components/layout/Header";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Geist, Geist_Mono } from "next/font/google";
import BrandFilter from "../Components/product/BrandFilter";
import PriceFilter from "../Components/product/PriceFilter";
import Image from "next/image";
import Link from "next/link";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function ProductsPage() {
  const { brand, minPrice, maxPrice } = useSelector((state: RootState) => state.filters);
  const products = useSelector((state: RootState) => state.products.items);
  const searchQuery = useSelector((state: RootState) => state.search.query) || "" ;
  const normalizedQuery = searchQuery.toLowerCase();

  const filteredProducts = products.filter((pro) => {
    const brandMatch = brand === 'all' || pro.brand === brand;
    const minMatch = minPrice === null || pro.price >= minPrice;
    const maxMatch = maxPrice === null || pro.price <= maxPrice;
    const searchMatch = normalizedQuery === "" || pro.name.toLowerCase().includes(normalizedQuery);
    return brandMatch && minMatch && maxMatch && searchMatch
  });

  return (
    <div className={`${geistSans.className} ${geistMono.className} bg-[#f7f7f7] dark:bg-gray-900  dark:text-gray-100`}>
      <Header/>

      <div className=" relative w-full h-[600px]">
        <Image src='/downloadw-w.png' alt="" fill className=" object-cover opacity-65" priority />
        <div className=" absolute top-44 left-1/2 -translate-x-1/2 text-center">
          <h1 className=" text-4xl md:text-5xl font-bold"> Collection</h1>
          <ul className=" flex justify-center gap-12 pt-8 text-sm md:text-base">
            <Link href={'/'}><li className=" hover:text-blue-400">Home</li></Link>
            <li>Products</li>
          </ul>
        </div>
      </div>

      <aside className=" flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mt-10">
        <BrandFilter />
        <PriceFilter />
      </aside>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20 mt-10">
      {filteredProducts.length === 0 ? (
          <p className=" col-span-full text-center text-xl font-semibold text-gray-600 dark:text-gray-300">No products found</p>
        ) : (
        filteredProducts.map(product => (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        )))}
      </div>
    </div>
  )
}
export default ProductsPage
