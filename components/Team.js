import Image from "next/image"
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import {motion} from 'framer-motion'
import { fadeIn } from "./variants"




const Team = () => {
    return (
        <section className=" w-full my-20 flex flex-col items-center">
            <h4 className=" text-4xl text-black font-semibold italic">Our Team</h4>
            <motion.div
             variants={fadeIn('up' , 0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: true , amount: 0.4}}
            className=" w-full">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper  ">
                    <SwiperSlide>
                        <div className=" flex flex-col items-start gap-y-8 w-[300px] mx-auto
                     md:flex-row md:w-[80%] md:justify-between lg:w-[90%]">
                            <div className=" md:w-[45%] lg:w-[50%] xl:w-[48%]">
                                <div className=" mt-5 flex flex-col gap-y-5 items-start text-left
                                 lg:flex-row lg:items-center">
                                    <div className=" w-full lg:mr-5">
                                        <Image src="/../img/team/doctor-1.png" width={1000} height={1000} />
                                    </div>
                                    <div className=" flex flex-col gap-y-3">
                                        <div className=" flex flex-col gap-y-1">
                                            <h2 className=" text-black text-xl">Dr. Lesile Taylor</h2>
                                            <span className=" uppercase">fediatrician</span>
                                        </div>
                                        <p className=" text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque labore maiores?</p>
                                        <div className=" flex flex-row gap-x-5 text-2xl text-accent-tertiary">
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaYoutube /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaFacebookSquare /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><AiFillInstagram /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaPinterest /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" md:w-[45%] lg:w-[50%] xl:w-[48%]">
                                <div className=" mt-5 flex flex-col gap-y-5  items-start text-left lg:flex-row lg:items-center">
                                    <div className=" w-full lg:mr-5">
                                        <Image src="/../img/team/doctor-2.png" width={1000} height={1000} />
                                    </div>
                                    <div className=" flex flex-col gap-y-3">
                                        <div className=" flex flex-col gap-y-1">
                                            <h2 className=" text-black text-xl">Dr. Lesile Taylor</h2>
                                            <span className=" uppercase">fediatrician</span>
                                        </div>
                                        <p className=" text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque labore maiores?</p>
                                        <div className=" flex flex-row gap-x-5 text-2xl text-accent-tertiary">
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaYoutube /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaFacebookSquare /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><AiFillInstagram /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaPinterest /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex flex-col items-start gap-y-8 w-[300px] mx-auto
                     md:flex-row md:w-[80%] md:justify-between lg:w-[90%]">
                            <div className=" md:w-[45%] lg:w-[50%] xl:w-[48%]">
                                <div className=" mt-5 flex flex-col gap-y-5 items-start text-left
                                 lg:flex-row lg:items-center">
                                    <div className=" w-full lg:mr-5">
                                        <Image src="/../img/team/doctor-1.png" width={1000} height={1000} />
                                    </div>
                                    <div className=" flex flex-col gap-y-3">
                                        <div className=" flex flex-col gap-y-1">
                                            <h2 className=" text-black text-xl">Dr. Lesile Taylor</h2>
                                            <span className=" uppercase">fediatrician</span>
                                        </div>
                                        <p className=" text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque labore maiores?</p>
                                        <div className=" flex flex-row gap-x-5 text-2xl text-accent-tertiary">
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaYoutube /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaFacebookSquare /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><AiFillInstagram /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaPinterest /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" md:w-[45%] lg:w-[50%] xl:w-[48%]">
                                <div className=" mt-5 flex flex-col gap-y-5  items-start text-left lg:flex-row lg:items-center">
                                    <div className=" w-full lg:mr-5">
                                        <Image src="/../img/team/doctor-2.png" width={1000} height={1000} />
                                    </div>
                                    <div className=" flex flex-col gap-y-3">
                                        <div className=" flex flex-col gap-y-1">
                                            <h2 className=" text-black text-xl">Dr. Lesile Taylor</h2>
                                            <span className=" uppercase">fediatrician</span>
                                        </div>
                                        <p className=" text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque labore maiores?</p>
                                        <div className=" flex flex-row gap-x-5 text-2xl text-accent-tertiary">
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaYoutube /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaFacebookSquare /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><AiFillInstagram /></div>
                                            <div className=" hover:text-accent cursor-pointer duration-300"><FaPinterest /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    )
}

export default Team
