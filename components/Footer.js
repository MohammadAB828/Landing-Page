import Image from "next/image"
import { FaFacebook, FaPhoneAlt, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { MdEmail } from "react-icons/md";

import { motion } from 'framer-motion'
import { fadeIn } from "./variants"

const varr = {
    hidden: { opacity: 0, y: 40 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
}

const imgg = {
    hidden: { opacity: 0, y: 30 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}



const Footer = () => {
    return (
        <section className=" w-[80%] mx-auto lg:my-28 my-10">
            <motion.div
                variants={varr}
                initial='hidden'
                whileInView={'show'}
                // animate='show'
                viewport={{ once: true, amount: 0.4 }}
                className=" flex flex-col gap-y-10 md:grid md:grid-cols-2 md:max-w-max md:gap-x-10 xl:grid-cols-3 xl:gap-x-28">
                <motion.div
                    variants={imgg}
                    className="max-w-md flex flex-col items-start gap-y-6">
                    <Image src="/img/header/logo.svg" alt="image1" width={180} height={120} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto fugit magnam.</p>
                    <div className=" flex flex-col gap-y-5">
                        <div className=" flex gap-x-2 items-center">
                            <div className=" text-2xl text-accent">
                                <MdLocationOn />
                            </div>
                            <h5>148 Isfahan, IUT,  NY</h5>
                        </div>
                        <div className=" flex gap-x-2 items-center">
                            <div className=" text-2xl text-accent">
                                <MdEmail />
                            </div>
                            <h5>Mohammad.AB@gmail.com</h5>
                        </div>
                        <div className=" flex gap-x-3 items-center ">
                            <div className=" text-xl text-accent">
                                <FaPhoneAlt />
                            </div>
                            <h5>(+913) 719 6801</h5>
                        </div>
                    </div>
                    <div className=" mt-5 flex flex-row gap-x-10 text-2xl text-accent-tertiary">
                        <div className=" hover:text-accent cursor-pointer duration-300"><FaFacebook /></div>
                        <div className=" hover:text-accent cursor-pointer duration-300"><FaInstagram /></div>
                        <div className=" hover:text-accent cursor-pointer duration-300"><FaTwitter /></div>
                        <div className=" hover:text-accent cursor-pointer duration-300"><FaLinkedin /></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={imgg}
                    className="max-w-md flex flex-col gap-y-5">
                    <h3 className=" text-3xl text-black font-semibold">Quick Link</h3>
                    <div className=" grid grid-cols-2">
                        <ul className=" flex flex-col gap-y-6">
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Home
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Doctor
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Department
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Services
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Blog
                            </li>
                        </ul>
                        <ul className=" flex flex-col gap-y-6 justify-self-end">
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Our Pricing
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Contact
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Careers
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Privacy Policy
                            </li>
                            <li className=" cursor-pointer text-base font-light hover:text-accent duration-300 transition-all">
                                Blog
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={imgg}
                    className="max-w-md flex flex-col gap-y-5">
                    <h3 className=" text-3xl text-black font-semibold">Opening Hours</h3>
                    <div className=" flex flex-col gap-y-5 ">
                        <div className="flex flex-row justify-between border-b-2 pb-3">
                            <h5 className=" text-base">Monday - Thursday</h5>
                            <h6 className=" text-base text-accent">8:00 Am - 6:00Pm</h6>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 pb-3">
                            <h5 className=" text-base">Friday - Saturday</h5>
                            <h6 className=" text-base text-accent">10:00 Am - 4:00Pm</h6>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 pb-3">
                            <h5 className=" text-base">Sunday</h5>
                            <h6 className=" text-base text-accent">Emergency Only</h6>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 pb-3">
                            <h5 className=" text-base">Personal</h5>
                            <h6 className=" text-base text-accent">7:00 Am - 9:00Pm</h6>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Footer
