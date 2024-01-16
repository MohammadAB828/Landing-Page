'use client'
import { useState } from "react";
import { HiPlus } from "react-icons/hi";

import {motion} from 'framer-motion'
import { fadeIn } from "./variants"


const Question = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);


    return (
        <section className=" mb-20">
            <motion.div
            variants={fadeIn('left' , 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true , amount: 0.4}}
            className=" flex flex-col items-center gap-y-5 w-[80%] mx-auto text-center">
                <h3 className=" lg:text-4xl text-3xl font-semibold text-black italic">We've Got Answers</h3>
                <div className=" w-full md:w-[600px] lg:w-[700px] xl:w-[800px] flex flex-col gap-y-5">
                    <div className="border-b-2 pb-5 flex flex-col gap-y-5">
                        <div onClick={() =>setShow1(!show1)} className="text-black flex flex-row justify-between items-center cursor-pointer">
                            <h2 className=" lg:text-2xl text-xl text-left">Why section in health to heart and your good?</h2>
                            <div className=" text-2xl text-accent">
                                <HiPlus />
                            </div>
                        </div>
                        <div className={show1 ? ' flex transition-all duration-300' : ' hidden'}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae animi quidem rem! Quod, consequatur!</p>
                        </div>
                    </div>

                    <div className="border-b-2 pb-5 flex flex-col gap-y-5">
                        <div onClick={() =>setShow2(!show2)} className="text-black flex flex-row justify-between items-center cursor-pointer">
                            <h2 className=" lg:text-2xl text-xl text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, asperiores accusamus?</h2>
                            <div className=" text-2xl text-accent">
                                <HiPlus />
                            </div>
                        </div>
                        <div className={show2 ? ' flex transition-all duration-300' : ' hidden'}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="border-b-2 pb-5 flex flex-col gap-y-5">
                        <div onClick={() =>setShow3(!show3)} className="text-black flex flex-row justify-between items-center cursor-pointer">
                            <h2 className=" lg:text-2xl text-xl text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto?</h2>
                            <div className=" text-2xl text-accent">
                                <HiPlus />
                            </div>
                        </div>
                        <div className={show3 ? ' flex transition-all duration-300' : ' hidden'}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quod cum quisquam nesciunt eveniet inventore.</p>
                        </div>
                    </div>

                    <div className="border-b-2 pb-5 flex flex-col gap-y-5">
                        <div onClick={() =>setShow4(!show4)} className="text-black flex flex-row justify-between items-center cursor-pointer">
                            <h2 className=" lg:text-2xl text-xl text-left">Lorem ipsum dolor sit amet?</h2>
                            <div className=" text-2xl text-accent">
                                <HiPlus />
                            </div>
                        </div>
                        <div className={show4 ? ' flex transition-all duration-300' : ' hidden'}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, in.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Question
