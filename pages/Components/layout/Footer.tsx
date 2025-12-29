import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Facebook, Instagram, Twitter } from "lucide-react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function Footer() {
  return (
    <footer className={`${geistSans.className} ${geistMono.className} relative w-full mt-5`}>
      <div className=" relative w-full h-[700px] opacity-90">
        <Image src="/casio-b.png" alt="" fill className=" object-cover" priority/>

        <div className=" absolute bg-black/30 w-full py-10 inset-0 flex flex-col justify-between text-white p-6">

          <div className=" text-center">
            <h2 className=" text-3xl md:text-4xl font-bold mb-3 text-black">TIMEZONE</h2>
            <p className=" text-xl">Premium watches for every moment.</p>
          </div>

          <div className=" flex flex-col md:flex-row justify-around gap-8">
            <div>
              <h3 className=" font-bold mb-6 text-base md:text-xl">Links</h3>
              <ul className=" space-y-2 text-sm md:text-lg">
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className=" font-bold mb-6 text-base md:text-xl">Services</h3>
              <ul className=" space-y-2 text-sm md:text-lg">
                <li>Free Shipping</li>
                <li>7 Days Return</li>
                <li>Secure Payment</li>
              </ul>
            </div>
            <div>
              <h3 className=" font-bold mb-6 text-base md:text-xl">Follow Us</h3>
              <ul className=" space-y-2 text-sm md:text-lg">
                <li className=" flex gap-4"><Instagram/>Instagram</li>
                <li className=" flex gap-4"> <Twitter/> Twitter</li>
                <li className=" flex gap-4"> <Facebook/> Facebook</li>
              </ul>
            </div>
          </div>
          <div className=" text-center text-sm border-t border-white pt-6">
            © 2025 Timezone Watches. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
