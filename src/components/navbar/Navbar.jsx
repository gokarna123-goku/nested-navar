import React from 'react';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { GoDownload } from "react-icons/go";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <nav className='w-full h-[8ch] bg-zinc-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 z-50 shadow'>
                {/* Logo Section */}
                <Link to="/" className='text-2xl text-zinc-200 font-bold mr-16 flex items-center'>
                    Navbar
                </Link>

                {/* Toggle button */}
                <button
                    onClick={handleClick}
                    className='flex-1 lg:hidden text-zinc-600 hover:text-indigo-600 ease-in-out duration-300 flex items-center justify-end'
                >
                    {open ? <LiaTimesSolid className='text-xl' /> : <FaBars className='text-xl' />}
                </button>

                <div
                    className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'
                        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-zinc-900 md:shadow-none sm:shadow-md shadow-md rounded-md`}
                >

                    <ul className='list-none flex md:items-center sm:items-start items-start gap-x-7 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base text-zinc-500 font-normal'>
                        <li>
                            <Link to={"/"} onClick={handleClose} className='text-indigo-500 ease-in-out duration-300'>
                                Home
                            </Link>
                        </li>
                        <li className='relative group ease-in-out duration-300'>
                            <h6 className='hover:text-indigo-500 ease-in-out duration-300 flex items-center gap-x-1 cursor-pointer'>
                                Services <IoMdArrowDropdown />
                            </h6>
                            <div className="absolute top-6 left-0 group-hover:block hidden rounded-lg md:py-5 py-3 max-w-[400px] w-[300px] min-w-[250px] h-auto ease-in-out duration-300 z-50">
                                <div className="w-full relative bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-700">
                                    <div className="absolute -top-[1.45rem] left-0 text-4xl text-zinc-700 -z-10">
                                        <IoMdArrowDropup />
                                    </div>
                                    <div className="space-y-2">
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            Website development
                                        </Link>
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            App development
                                        </Link>
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            Students assignemnt support
                                        </Link>
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            Research and report
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/portfolio"} onClick={handleClose} className='hover:text-indigo-600 ease-in-out duration-300'>
                                Portfolio
                            </Link>
                        </li>
                        <li className='relative group ease-in-out duration-300'>
                            <h6 className='hover:text-indigo-500 ease-in-out duration-300 flex items-center gap-x-1 cursor-pointer'>
                                Article <IoMdArrowDropdown />
                            </h6>
                            <div className="absolute top-6 left-0 group-hover:block hidden rounded-lg md:py-5 py-3 max-w-[400px] w-[300px] min-w-[250px] h-auto ease-in-out duration-300 z-50">
                                <div className="w-full relative bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-700">
                                    <div className="absolute -top-[1.45rem] left-0 text-4xl text-zinc-700 -z-10">
                                        <IoMdArrowDropup />
                                    </div>
                                    <div className="space-y-2">
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            Single post page
                                        </Link>
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            Multiple post page
                                        </Link>
                                        <Link to={"/book-detail"} onClick={handleClose} className='hover:text-indigo-500 ease-in-out duration-300 block' >
                                            Single detail page
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/me"} onClick={handleClose} className='hover:text-indigo-600 ease-in-out duration-300'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"} onClick={handleClose} className='hover:text-indigo-600 ease-in-out duration-300'>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className='flex md:items-center sm:items-start items-start gap-x-5 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base font-medium text-zinc-800'>
                        <button className="w-fit px-8 py-2 rounded-full bg-indigo-800 flex items-center gap-x-2 justify-center text-zinc-50">
                            Resume <GoDownload />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;