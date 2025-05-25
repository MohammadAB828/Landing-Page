import Image from "next/image"

import { motion } from 'framer-motion'


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



const Blog = () => {
    return (
        <section>
            <div className=" flex flex-col items-center gap-y-5 w-full">
                <h3 className=" text-4xl text-black font-semibold italic">Our Resent Post</h3>
                <motion.div
                    variants={varr}
                    initial='hidden'
                    whileInView={'show'}
                    // animate='show'
                    viewport={{ once: true, amount: 0.4 }}
                    className="mx-auto flex flex-col gap-y-10 lg:flex-row lg:gap-x-5">
                    <motion.div
                        variants={imgg}
                        className=" bg-white flex flex-col max-w-[340px] shadow-xl cursor-pointer group lg:ml-5">
                        <div className=" overflow-hidden relative rounded-t-xl">
                            <Image className=" group-hover:scale-110 duration-300" alt="image1" src="/img/blog/img-1.png" width={350} height={200} />
                            <div className=" absolute bottom-0 left-0 bg-accent-tertiary px-1 uppercase text-white">
                                medical
                            </div>
                        </div>
                        <div className=" flex flex-col items-start px-5 pt-3 pb-5 gap-y-2">
                            <span>jan 2, 2024</span>
                            <h2 className=" text-xl font-semibold text-black">10 Foods To Avoid For Your Heart Health</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus debitis eligendi, ducimus fuga... <span className=" italic underline text-black">Read More</span></p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={imgg}
                        className=" bg-white flex flex-col max-w-[340px] shadow-xl cursor-pointer  group">
                        <div className=" overflow-hidden relative rounded-t-xl">
                            <Image className=" group-hover:scale-110 duration-300" alt="image1" src="/img/blog/img-2.png" width={350} height={200} />
                            <div className=" absolute bottom-0 left-0 bg-accent-tertiary px-1 uppercase text-white">
                                medical
                            </div>
                        </div>
                        <div className=" flex flex-col items-start px-5 pt-3 pb-5 gap-y-2">
                            <span>jan 2, 2024</span>
                            <h2 className=" text-xl font-semibold text-black">10 Foods To Avoid For Your Heart Health</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus debitis eligendi, ducimus fuga... <span className=" italic underline text-black">Read More</span></p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={imgg}
                        className=" bg-white flex flex-col max-w-[340px] shadow-xl cursor-pointer lg:mr-5 group">
                        <div className=" overflow-hidden relative rounded-t-xl">
                            <Image className=" group-hover:scale-110 duration-300" alt="image1" src="/img/blog/img-3.png" width={350} height={200} />
                            <div className=" absolute bottom-0 left-0 bg-accent-tertiary px-1 uppercase text-white">
                                medical
                            </div>
                        </div>
                        <div className=" flex flex-col items-start px-5 pt-3 pb-5 gap-y-2">
                            <span>jan 2, 2024</span>
                            <h2 className=" text-xl font-semibold text-black">10 Foods To Avoid For Your Heart Health</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus debitis eligendi, ducimus fuga... <span className=" italic underline text-black">Read More</span></p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Blog
