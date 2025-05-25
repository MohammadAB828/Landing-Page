'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className={show ? " fixed w-[300px] bg-white top-0 left-0 h-screen lg:hidden shadow-2xl shadow-black duration-500 transition-all z-20" : " fixed w-[300px] bg-white top-0 -left-[300px] h-screen lg:hidden shadow-2xl shadow-black duration-500 transition-all z-20"}>
            <div onClick={() => setShow(!show)} className=" text-xl bg-primary h-8 w-8 relative -right-full top-8 text-white flex items-center justify-center rounded-r-lg cursor-pointer transition-all">
                {show ? (
                    <MdOutlineArrowBackIos />
                ) : (
                    <MdArrowForwardIos />
                )}

            </div>
            <div className=" px-12 flex flex-col mx-auto h-full gap-y-12">
                <Link href="/">
                    <Image src="/img/header/logo.svg" alt="image1" width={160} height={100} />
                </Link>
                <ul className=" flex flex-col gap-y-5 text-xl">
                    <li>
                        <Link href="#" className=" ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Doctors
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Deparment
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Contact
                        </Link>
                    </li>
                </ul>

                <form className=" relative flex gap-x-1">
                    <label htmlFor="search" className=" text-3xl text-accent">
                        <IoMdSearch />
                    </label>
                    <input type="text" id="search" placeholder="search..." className=" outline-none border-b-2 w-[160px] placeholder:italic focus:border-accent duration-200"/>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
