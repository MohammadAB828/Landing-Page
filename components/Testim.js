import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import {motion} from 'framer-motion'
import { fadeIn } from "./variants"


const Testim = () => {
    return (
        <section className=' bg-testimonials bg-cover bg-no-repeat shadow-xl bg-right'>
            <div className="  w-[80%] mx-auto flex flex-col gap-y-5 lg:flex-row-reverse lg:items-center lg:justify-between py-10 lg:py-0">
                <motion.div
                 variants={fadeIn('down' , 0.2)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: true , amount: 0.4}}
                className=' lg:w-[50%]'>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <div className=' w-[90%] flex flex-col items-center gap-y-5 lg:items-start'>
                                <p className=' text-xl relative before:bg-quoteLeft text-center lg:text-left before:bg-contain before:bg-bottom before:inline-block before:w-10 before:h-10 before:top-0 before:bg-no-repeat
                                after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:w-10 after:h-10 after:top-0 after:bg-no-repeat'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut recusandae quia reprehenderit autem iusto impedit eum? Saepe sed ea sint et. Minus nam magni atque officia natus libero quis distinctio.</p>
                                <div className='mb-5 lg:text-left'>
                                    <h2 className=' text-2xl font-semibold text-black'>Jomes Rodrigo</h2>
                                    <span className=' uppercase'>customer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' w-[90%] flex flex-col items-center gap-y-5 lg:items-start'>
                                <p className=' text-xl relative before:bg-quoteLeft lg:text-left before:bg-contain before:bg-bottom before:inline-block before:w-10 before:h-10 before:top-0 before:bg-no-repeat
                                after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:w-10 after:h-10 after:top-0 after:bg-no-repeat'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut recusandae quia reprehenderit autem iusto impedit eum? Saepe sed ea sint et. Minus nam magni atque officia natus libero quis distinctio.</p>
                                <div className='mb-5 lg:text-left'>
                                    <h2 className=' text-2xl font-semibold text-black'>Jomes Rodrigo</h2>
                                    <span className=' uppercase'>customer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>

                <motion.div
                 variants={fadeIn('up' , 0.2)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: true , amount: 0.4}}
                 className=' lg:w-[50%] hidden lg:flex'>
                    <Image src="/img/testimonials/img.png" alt="image1" width={400} height={300} />
                </motion.div>
            </div>
        </section>
    )
}

export default Testim
