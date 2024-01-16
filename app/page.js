'use client'

import Header from "@/components/Header";
import Services from "@/components/Services";
import Image from "next/image";
import { RiHeartPulseLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Testim from "@/components/Testim";
import Team from "@/components/Team";
import Question from "@/components/Question";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

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

export default function Home() {
  return (
    <div>
      <Header />

      {/* hero section */}
      <section className=" bg-gery w-full lg:pt-10">
        <div className=" w-[80%] flex flex-row justify-between mx-auto items-center">
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" flex flex-col items-center py-10 gap-y-5 lg:items-start lg:w-[40%]">
            <div className=" flex bg-white py-2 px-5 rounded-3xl items-center gap-x-2">
              <div className=" text-2xl text-accent">
                <RiHeartPulseLine />
              </div>
              <h2 className=" uppercase">live your life</h2>
            </div>
            <div className=" text-center lg:text-left mx-10 lg:mx-0 flex flex-col gap-y-5 w-full ">
              <h2 className=" text-5xl font-semibold text-black">we care about your health</h2>
              <p className=" text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure culpa quisquam, molestiae amet itaque vero eos quod deserunt reprehenderit doloremque temporibus excepturi aliquid.</p>
              <div>
                <button className=" uppercase border-2 bg-accent rounded-3xl border-accent py-2 px-12 hover:border-accent-secondary duration-300 text-white hover:bg-accent-secondary">contact us</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }} className=" lg:flex hidden">
            <Image src="/../img/hero/img.png" width={600} height={500} />
          </motion.div>
        </div>
      </section>


      {/* status section */}
      <section className=" lg:py-16 pt-10">
        <motion.div
          variants={varr}
          initial='hidden'
          whileInView={'show'}
          // animate='show'
          viewport={{ once: true, amount: 0.4 }}
          className=" flex flex-col items-center gap-y-5 lg:flex-row lg:justify-center lg:gap-x-16 ">
          <motion.div
            variants={imgg}
            // initial='hidden'
            // whileInView={'show'}
            // viewport={{once: false , amount: 0.4}}
            className=" flex flex-col gap-y-1 text-center lg:border-r-2 lg:pr-16">
            <span className=" text-5xl text-accent-tertiary font-semibold">
              +5120
            </span>
            <span>Happy Patients</span>
          </motion.div>
          <motion.div
            variants={imgg}
            // initial='hidden'
            // whileInView={'show'}
            // viewport={{once: false , amount: 0.4}}
            className=" flex flex-col gap-y-1 text-center lg:border-r-2 lg:pr-16">
            <span className=" text-5xl text-accent-tertiary font-semibold">
              26
            </span>
            <span>Total Branches</span>
          </motion.div>
          <motion.div
            variants={imgg}
            // initial='hidden'
            // whileInView={'show'}
            // viewport={{once: false , amount: 0.4}}
            className=" flex flex-col gap-y-1 text-center lg:border-r-2 lg:pr-16">
            <span className=" text-5xl text-accent-tertiary font-semibold">
              +53
            </span>
            <span>Senior Doctors</span>
          </motion.div>
          <motion.div
            variants={imgg}
            // initial='hidden'
            // whileInView={'show'}
            // viewport={{once: false , amount: 0.4}}
            className=" flex flex-col gap-y-1 text-center">
            <span className=" text-5xl text-accent-tertiary font-semibold">
              +10
            </span>
            <span>Years Experience</span>
          </motion.div>
        </motion.div>
      </section>


      {/* services section */}
      <Services />



      {/* Apointment section */}
      <section className=" lg:mt-52 py-10 flex items-center justify-center flex-col w-[80%] mx-auto">

        <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className=" text-center text-3xl text-black flex flex-col gap-y-2">
          <h3 className=" font-semibold">Book Appointment Or Call:</h3>
          <span className=" text-accent">(+913) 719 6801</span>
        </motion.div>
        <form className=" w-full pt-10 flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-5 ">

          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" relative flex items-center">
            <div className=" absolute right-4 text-2xl text-primary ">
              <IoIosArrowDown />
            </div>
            <select defaultValue="1" className=" appearance-none w-full h-full bg-transparent px-5 text-xl optional:bg-white  rounded-lg border-2 py-2 focus:border-accent">
              <option disabled value="1">Select Department</option>
              <option value="2">Department 1</option>
              <option value="3">Department 2</option>
              <option value="4">Department 3</option>
            </select>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" relative flex items-center">
            <div className=" absolute right-4 text-2xl text-primary ">
              <IoIosArrowDown />
            </div>
            <select defaultValue="1" className=" rounded-lg border-2 py-2 appearance-none w-full h-full bg-transparent px-5 text-xl optional:bg-white focus:border-accent" >
              <option disabled value="1">Select Doctor</option>
              <option value="2">Dr. Mansori</option>
              <option value="3">Dr. Abedi</option>
              <option value="4">Dr. Asadi</option>
            </select>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" w-full">
            <input type="text" className="focus:border-accent text-xl w-full rounded-lg border-2 py-2 outline-none px-5" placeholder="Full Name" />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" w-full">
            <input type="text" className=" focus:border-accent text-xl w-full rounded-lg border-2 py-2 outline-none px-5" placeholder="Phone Number" />
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" w-full">
            <input type="date" className="focus:border-accent text-xl w-full rounded-lg border-2 py-2 outline-none px-5" />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className=" w-full">
            <input type="time" className="focus:border-accent text-xl w-full rounded-lg border-2 py-2 outline-none px-5" />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}>
            <button className=" uppercase border-2 bg-accent rounded-3xl border-accent py-2 px-12 hover:border-accent-secondary duration-300 text-white hover:bg-accent-secondary">book an appointment</button>
          </motion.div>

        </form>

      </section>



      {/* testim section */}
      <Testim />


      {/* team section */}
      <Team />


      {/* Question section */}
      <Question />



      {/* departments section */}
      <section
        className=" my-20 bg-departments bg-cover py-10 w-[95%] mx-auto overflow-hidden bg-no-repeat bg-center rounded-[20px]">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className=" flex flex-col lg:flex-row lg:items-start lg:gap-x-20 lg:pt-5 items-center w-[80%] mx-auto">
          <div className=" flex flex-col gap-y-10">
            <h2 className=" uppercase cursor-pointer hover:text-accent transition-all duration-300">labratoey analisis</h2>
            <h2 className=" uppercase cursor-pointer hover:text-accent transition-all duration-300">labratoey analisis</h2>
            <h2 className=" uppercase cursor-pointer hover:text-accent transition-all duration-300">labratoey analisis</h2>
            <h2 className=" uppercase cursor-pointer hover:text-accent transition-all duration-300">labratoey analisis</h2>
            <h2 className=" uppercase cursor-pointer hover:text-accent transition-all duration-300">labratoey analisis</h2>
            <h2 className=" uppercase cursor-pointer hover:text-accent transition-all duration-300">labratoey analisis</h2>
          </div>
          <div className=" lg:w-[55%] mt-10 lg:mt-0 flex flex-col items-center gap-y-7 text-center lg:items-start lg:text-left">
            <div className=" flex flex-col items-center text-center gap-y-5 lg:items-start lg:text-left" >
              <h2 className=" text-4xl text-black fose">Cardiology Clinic</h2>
              <p className=" leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsum quis cumque soluta? Rerum unde pariatur, cum molestiae deserunt minus. At voluptas sed perferendis inventore id quae facilis, dolorem necessitatibus.</p>
            </div>
            <div>
              <p className=" leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, corrupti magnam veritatis consectetur dicta blanditiis ipsa ducimus iusto temporibus dolore. Similique ipsum exercitationem esse, et perspiciatis fugiat officiis rem velit.</p>
            </div>
            <div className=" flex flex-col gap-y-3 lg:flex-row mt-2">
              <h4 className=" text-xl text-accent lg:border-r-2 lg:pr-5 lg:border-gray-300">Neurocritical Care</h4>
              <h4 className=" text-xl text-accent lg:border-r-2 lg:px-5 lg:border-gray-300">Neuro Oncology</h4>
              <h4 className=" text-xl text-accent lg:pl-5">Geriatric Neurology</h4>
            </div>
            <div className=" mt-5">
              <button className=" uppercase border-2 bg-accent rounded-3xl border-accent py-2 px-12 hover:border-accent-secondary duration-300 text-white hover:bg-accent-secondary">learn more</button>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Blog section */}
      <Blog />



      {/* Brans section */}
      <section className=" py-16 lg:py-32 mx-5">
        <motion.div
          variants={varr}
          initial='hidden'
          whileInView={'show'}
          // animate='show'
          viewport={{ once: true, amount: 0.4 }}
          className=" flex flex-col items-center justify-between gap-y-16 lg:flex-row lg:max-w-[1100px] lg:mx-auto">

          <motion.div
            variants={imgg}
          >
            <Image src="../img/brands/brand-1.svg" width={140} height={100} />
          </motion.div>

          <motion.div
            variants={imgg}
          >
            <Image src="../img/brands/brand-2.svg" width={140} height={100} />
          </motion.div>

          <motion.div
            variants={imgg}
          >
            <Image src="../img/brands/brand-3.svg" width={140} height={100} />
          </motion.div>

          <motion.div
            variants={imgg}
          >
            <Image src="../img/brands/brand-4.svg" width={140} height={100} />
          </motion.div>

          <motion.div
            variants={imgg}
          >
            <Image src="../img/brands/brand-5.svg" width={140} height={100} />
          </motion.div>

        </motion.div>
      </section>



      {/* News section */}
      <section className=" py-12 bg-news bg-cover bg-no-repeat lg:py-32">
        <motion.div
        variants={fadeIn('up' , 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true , amount: 0.4}}
        className=" flex flex-col items-center gap-y-10 w-[85%] mx-auto lg:flex-row lg:gap-x-16">
          <div className=" flex flex-col items-center text-center gap-y-2 lg:items-start lg:w-[50%]">
            <span className=" uppercase text-white/90">our newsletter</span>
            <h3 className=" text-white text-4xl md:text-5xl font-semibold lg:text-6xl lg:text-left">Subscribe to get more updates</h3>
          </div>
          <div className=" flex flex-col max-w-[350px] mx-auto gap-y-5 lg:w-[50%] lg:max-w-full lg:flex-row lg:relative">
            <input type="email" placeholder="Yuor email address" className=" w-full bg-transparent border-2 outline-none rounded-3xl py-1 text-2xl text-white px-5 placeholder:text-white/80 placeholder:text-xl" />
            <button className=" lg:absolute lg:right-0 border-white w-full lg:w-auto uppercase border-2 bg-white rounded-3xl py-2 px-12  duration-300 hover:bg-white/85">Subscribe</button>
          </div>
        </motion.div>
      </section>



      {/* News section */}
      <Footer />



      <div className=" border"></div>
      <div className=" my-5 flex flex-col items-center">
        <div className=" text-base">
          &copy; 2024 Iut - All rights reserved
        </div>
      </div>



    </div>
  )
}
