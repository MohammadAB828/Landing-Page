import Image from "next/image"
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className=" bg-transparent py-5 lg:pt-5 lg:pb-14">
            <div className=" w-full lg:w-[80%] lg:relative lg:mx-auto flex flex-col lg:flex-row items-center gap-y-5 lg:justify-between">
                <div>
                    <Image src="../img/header/logo.svg" width={160} height={100} />
                </div>
                <div className=" flex flex-col lg:flex-row lg:gap-y-0 lg:gap-x-4 xl:gap-x-8 gap-y-4 items-center">
                    <div className=" flex gap-x-1 items-center">
                        <div className=" text-2xl text-accent">
                            <MdLocationOn />
                        </div>
                        <h5>148 Isfahan, IUT,  NY</h5>
                    </div>
                    <div className=" flex gap-x-2 items-center ">
                        <div className=" text-xl text-accent">
                            <FaPhoneAlt />
                        </div>
                        <h5>(+913) 719 6801</h5>
                    </div>
                    <div>
                        <button className=" uppercase border-2 rounded-3xl border-accent py-2 px-12 hover:border-accent-tertiary duration-300 hover:text-white hover:bg-accent">book new</button>
                    </div>

                    <Navbar />

                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header
