import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
function About(){
    return(
      <div className={`${geistSans.className} ${geistMono.className} px-8 w-full h-screen relative`}>
        <Image src='/slider-bg.jpg' alt="" fill className=" object-cover -z-10"/>
      <ul className=" flex gap-8 pt-8">
       <Link href={'/'}>
       <li className=" hover:text-blue-300 text-white">Home</li>
       </Link>
        
        <li>About Us</li>
      </ul>

      <div className=" pt-20 leading-8">
      <h1 className=" text-lg md:text-2xl pb-5">ABOUT US</h1>
      <h4>Sample Store</h4>
      <p>Thanks so much for visiting our online store. Our team is excited to provide you with an impeccable online shopping experience and remains available to assist at any time. If you have questions, comments or concerns about your order or the content found within this website, please feel free to contact us via telephone or email and one of our experienced team members will get back to you right away.  Again, thanks for visiting our store and we look forward to serving you in the future.  </p>
      </div>
        </div>
    )
}
export default About