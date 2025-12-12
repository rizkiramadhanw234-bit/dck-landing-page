"use client"

import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            {/* FOOTER */}
            <footer className="bg-(--dck-bg) py-8 sm:py-10 px-4 sm:px-6 text-center text-blue-950 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
                    {/* LEFT SECTION */}
                    <div className="text-left">
                        <div className="flex sm:flex-row items-center sm:items-start gap-3 mb-4">
                            <div className="w-7 h-7 bg-(--color1) rounded-full flex items-center justify-center font-bold text-white shrink-0">
                                DCK
                            </div>
                            <h2 className="text-sm sm:text-xl font-bold text-blue-950 text-center sm:text-left sm:mt-0">
                                DCK Media & Business Consulting
                            </h2>
                        </div>

                        <p className="text-blue-950 text-center leading-relaxed text-sm sm:text-base">
                            A bespoke royal formula for unstoppable business growth. Strategy at
                            core, formula as crown.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 text-white">
                            <a className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-(--color1) rounded-md cursor-pointer hover:bg-(--color2) text-xs sm:text-sm">
                                <FaLinkedin className="text-white" /> LinkedIn
                            </a>
                            <a className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-(--color1) rounded-md cursor-pointer hover:bg-(--color2) text-xs sm:text-sm">
                                <FaTiktok /> TikTok
                            </a>
                            <a className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-(--color1) rounded-md cursor-pointer hover:bg-(--color2) text-xs sm:text-sm">
                                <FaInstagram /> Instagram
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="text-left">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-950">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-3 text-blue-950 text-sm sm:text-base">
                            <li className="hover:text-blue-800 cursor-pointer">Home</li>
                            <li className="hover:text-blue-800 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-800 cursor-pointer">Services</li>
                            <li className="hover:text-blue-800 cursor-pointer">Case Studies</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="text-left">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-950">Contact</h3>
                        <ul className="space-y-2 sm:space-y-3 text-blue-950 text-sm sm:text-base">
                            <li>Email: support@dckmedia.com</li>
                            <li>Mobile No.: +60 12-245 9661</li>
                            <li>WeChat ID: dckmedia</li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 text-center font-bold text-blue-950 text-xs sm:text-sm">
                    © 2025 DCK Media & Business Consulting. All rights reserved.
                </div>
            </footer>
        </>
    )
}