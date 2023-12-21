


import React from "react"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="bg-white flex flex-col items-stretch">
            <div className="backdrop-blur-[25px] bg-gray-50 flex w-full flex-col items-center pt-6 pb-4 px-16 border-b-black border-b-opacity-10 border-b border-solid max-md:max-w-full max-md:px-5">
                <div className="items-stretch flex w-full max-w-[1200px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                        <Link to={"/home"} className="navbar-brand">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ef712a960f32bb9038e0faa20f60b2b0a3694e76e440c671d635d05d52a1c8?apiKey=ea1f72652410428d9e2577f04ade1630&"
                                className="aspect-square object-contain object-center w-[60px] fill-violet-500 overflow-hidden shrink-0 max-w-full"
                            />
                        </Link>
                        <div className="items-stretch self-center flex justify-between gap-5 my-auto p-4 max-md:max-w-full max-md:flex-wrap">
                            <div className="text-pink-500 text-sm font-medium leading-4 grow whitespace-nowrap">
                                <Link to={"/brands"} className="nav-link">
                                    For brands
                                </Link>
                            </div>
                        </div>
                        <div className="text-neutral-600 text-base leading-4">
                            <Link to={"/#"} className="nav-link">
                                For creators
                            </Link>
                        </div>
                        <div className="text-neutral-600 text-sm leading-4">
                            <Link to={"/#"} className="nav-link">
                                Pricing

                            </Link></div>
                        <div className="text-neutral-600 text-sm leading-4">
                            <Link to={"/#"} className="nav-link">
                                Contact us
                            </Link>
                        </div>
                        <div className="text-neutral-600 text-sm leading-4 whitespace-nowrap">
                            <Link to={"/#"} className="nav-link">
                                Blogs
                            </Link>
                        </div>
                    </div>
                    <div className="items-center self-center flex justify-between gap-5 my-auto pl-7 max-md:pl-5">
                        <div className="flex items-stretch gap-1.5 my-auto">

                            <div className="text-neutral-600 text-sm leading-4 grow whitespace-nowrap self-start">

                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>

                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-4">
                            <div className="text-violet-500 text-sm leading-4 whitespace-nowrap justify-center items-stretch shadow-2xl bg-white grow px-11 py-3.5 rounded-[32px] max-md:px-5">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </div>
                            <div className="text-white text-sm leading-4 whitespace-nowrap justify-center items-stretch shadow-2xl bg-pink-500 grow px-5 py-3.5 rounded-[32px] max-md:pl-5">
                                Book a Demo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header