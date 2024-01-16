import Link from "next/link"
import { IoMdSearch } from "react-icons/io";


const Nav = () => {
    return (
        <nav className=" absolute left-0 -bottom-[86px] h-16 w-full bg-white hidden lg:flex lg:items-center lg:justify-between lg:px-[30px] rounded-[10px] shadow-2xl">
            <div>
                <ul className=" flex gap-x-3 text-xl">
                    <li className=" border-r-2 pr-3">
                        <Link href="#" className=" ">
                            Home
                        </Link>
                    </li>
                    <li className=" border-r-2 pr-3">
                        <Link href="#">
                            Doctors
                        </Link>
                    </li>
                    <li className=" border-r-2 pr-3">
                        <Link href="#">
                            Deparment
                        </Link>
                    </li>
                    <li className=" border-r-2 pr-3">
                        <Link href="#">
                            Services
                        </Link>
                    </li>
                    <li className=" border-r-2 pr-3">
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
            </div>
            <div>
                <form className=" relative flex gap-x-1">
                    <label htmlFor="search" className=" text-3xl text-accent">
                        <IoMdSearch />
                    </label>
                    <input type="text" id="search" placeholder="search..." className=" outline-none border-b-2 w-[160px] placeholder:italic focus:border-accent duration-200" />
                </form>
            </div>
        </nav>
    )
}

export default Nav
