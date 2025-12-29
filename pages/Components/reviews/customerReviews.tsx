import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { reviews } from "@/pages/types/product"
import "swiper/css"
import "swiper/css/navigation"

function CustomerReviews(){
    return(
        <div className=" py-16 bg-gray-100 mt-36 dark:bg-gray-900">
         <div className=" px-6">
        <h1 className=" text-3xl font-bold text-center mb-10 dark:text-gray-100"> Customer Reviews</h1>
        <Swiper 
        modules={[Autoplay , Navigation]}
        autoplay={{delay:5000}}
        navigation
        spaceBetween={24}
        breakpoints={{
            640:{slidesPerView:1},
            768:{slidesPerView:2},
            1024:{slidesPerView:3},
        }}  >
            {reviews.map((item)=>(
               <SwiperSlide key={item.id}>
                <div className=" flex flex-col items-center justify-center pt-10 h-full">
                    <p className=" text-gray-600 mb-6 text-center dark:text-gray-300">{item.comment}</p>
                <div className=" w-52 h-52 rounded-full border-4 border-white overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>
                </div>
                <div className=" flex justify-between items-center flex-col">
                    <p className=" font-semibold py-5 text-gray-900 dark:text-gray-100">{item.name}</p>
                    <div className=" text- bg-yellow-400">
                    {'⁎'.repeat(item.rating)}
                </div>
                </div>
                </div>

               </SwiperSlide>
            ))}
        </Swiper>
        </div>
        </div>
    )
}
export default CustomerReviews