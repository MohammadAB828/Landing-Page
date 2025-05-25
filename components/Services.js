import Image from "next/image"

import {motion} from 'framer-motion'
import { fadeIn } from "./variants"

const varr ={
    hidden: { opacity: 0 , y:40 },
    show: {
      y:0,
      opacity: 1 ,
      transition: {
        staggerChildren: 0.5 ,
      }
    }
  }
  
  const imgg ={
    hidden: { opacity: 0 , y:30},
    show: {
      y:0,
      opacity: 1 ,
      transition: {
        duration: 0.5 ,
      }
    }
  }

const Services = () => {
    return (
        <section className=" w-[90%] mx-auto py-10">
            <motion.div
            variants={fadeIn('left' , 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true , amount: 0.4}}
           className=" lg:relative">
                <div className=" flex flex-col gap-y-5 bg-services py-16 bg-no-repeat bg-cover rounded-[20px] px-12 lg:flex-row lg:items-start lg:justify-between lg:pt-5 lg:pb-44 text-white shadow-xl">
                    <h2 className=" lg:w-[45%] text-3xl font-semibold">
                        Our Best Services For Your Solution
                    </h2>
                    <p className=" lg:w-[53%] font-medium leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam, neque, minima fuga recusandae voluptas vel sint facere ab consequuntur, eligendi hic dolorum maiores commodi quaerat rerum?
                    </p>
                </div>

                <motion.div
          variants={varr}
          initial='hidden'
          whileInView={'show'}
          // animate='show'
          viewport={{once: true , amount: 0.4}}
           className=" lg:h-96 grid grid-rows-4 gap-x-5 gap-y-10 mt-10 lg:absolute lg:grid-cols-4 lg:top-24 lg:mx-10">
                    <motion.div
          variants={imgg} className=" bg-white shadow-2xl rounded-xl px-8 py-4 text-center items-center flex flex-col min-h-[288px] gap-y-3">
                        <div>
                            <Image src="/icons/services/icon-1.svg" alt="image1" width={70} height={40} />
                        </div>

                        <h3 className=" text-black text-2xl font-semibold">General Proctitioners</h3>

                        <p className=" text-base leading-7 max-w-[380px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. dosere</p>
                    </motion.div>
                    <motion.div
          variants={imgg} className=" bg-white shadow-2xl rounded-xl px-8 py-4 text-center items-center flex flex-col min-h-[288px] gap-y-3">
                        <div>
                            <Image src="/icons/services/icon-2.svg" alt="image1" width={70} height={40} />
                        </div>

                        <h3 className=" text-black text-2xl font-semibold">Pregency Suport</h3>

                        <p className=" text-base leading-7 max-w-[380px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </motion.div>
                    <motion.div
          variants={imgg} className=" bg-white shadow-2xl rounded-xl px-8 py-4 text-center items-center flex flex-col min-h-[288px] gap-y-3">
                        <div>
                            <Image src="/icons/services/icon-3.svg" alt="image1" width={70} height={40} />
                        </div>

                        <h3 className=" text-black text-2xl font-semibold">Notional Suport</h3>

                        <p className=" text-base leading-7 max-w-[380px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ex. opements forterm</p>
                    </motion.div>
                    <motion.div
          variants={imgg} className=" bg-white shadow-2xl rounded-xl px-8 py-4 text-center items-center flex flex-col min-h-[288px] gap-y-3">
                        <div>
                            <Image src="/icons/services/icon-4.svg" alt="image1" width={70} height={40} />
                        </div>

                        <h3 className=" text-black text-2xl font-semibold">Emergency pages</h3>

                        <p className=" text-base leading-7 max-w-[380px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Services
