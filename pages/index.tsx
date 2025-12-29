import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Header from "./Components/layout/Header";
import { products } from "./types/product";
import Footer from "./Components/layout/Footer";
import CustomerReviews from "./Components/reviews/customerReviews";
import { useEffect, useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen items-center justify-center text-gray-900 dark:text-gray-100 bg-zinc-50 font-sans dark:bg-black`}>
  
      <Header />

      <div className="relative w-full h-[700px] md:h-[800px]">
        <Image src="/image-1.jpg" alt="" fill className="object-cover" priority />

        <div className=" inline-block">
          <div className=" skew-x-[-18deg] bg-red-600 px-6 py-2 shadow-lg transition-all duration-300 hover:skew-x-[-22deg] hover:bg-red-700 animate-[fadeIn_0.8s_ease-out_forwards]">
            <span className=" block skew-x-[18deg] text-white font-semibold text-sm tracking-[0.35em] select-none">WATCH STORE</span>
          </div>
        </div>

        <div className=" absolute top-40 right-9 items-center justify-center flex flex-col text-white bg-black/5">
          <h1 className=" text-4xl font-bold mb-4">The Watch Everyone Desires!</h1>
          <p className=" text-lg max-w-xl text-center">Discover the best products with the best prices</p>
        </div>

      </div>

      <section className="mt-20 md:mt-52">
        <div className=" text-center mb-10">
          <p className=" text-2xl leading-10">Discover</p>
          <p className=" text-5xl italic">Our <span className=" text-6xl">Collections</span></p>

        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" flex flex-col md:flex-row items-center gap-10 md:gap-20 p-8">
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" w-full h-[600px] object-contain rounded-lg md:h-[800px]"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col gap-6">
                  <p className="uppercase text-gray-500 text-lg">Collection</p>
                  <h2 className="text-4xl md:text-5xl font-bold py-4 mb-3">{product.brand}</h2>
                  <p className="text-gray-700 mb-10">{product.description}</p>
                  <Link href="/products">
                    <button className="bg-yellow-400 text-white px-6 py-4 rounded-4xl hover:bg-yellow-500 transition cursor-pointer">Shop the watches</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className=" flex flex-col lg:flex-row items-center gap-10 mt-20 justify-center">

        <img src="/image-2.png" className={`w-[400px] h-72 transition-all duration-700 rounded-full ease-out delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"} `} />

        <img src="/image-3.png" className={`w-[400px] h-72 transition-all duration-700 rounded-full ease-out delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`} />

        <img src="/image-4.png" className={`w-[400px] h-72 transition-all duration-700 rounded-full ease-out delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}`} />
      </div>

      <CustomerReviews />
      <Footer />

    </div>
  )
}
