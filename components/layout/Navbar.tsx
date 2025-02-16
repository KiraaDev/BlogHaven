'use client';

import React, { useState, useEffect } from 'react';
import { menuItems } from '@/config/menu';
import SignIn from '../sign-in';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import SignOut from '../sign-out';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    const { data: session, status } = useSession();
    const location = usePathname();

    useEffect(() => {
        if (status === "loading") {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [status]);


    return (
        <nav>
            <div className="w-full flex items-center justify-between p-4 h-[10svh] md:justify-around">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className=" text=[#10162F] self-center text-2xl font-semibold whitespace-nowrap dark:text-[#FFF0E5]">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500.000000 500.000000"
                            preserveAspectRatio="xMidYMid meet" className='h-14 md:h-16'>

                            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                                stroke="none" className=' fill-[#FFF0E5] dark:fill-[#383838] transition-none dark:transition-none'>
                                <path d="M2340 4343 c-219 -34 -343 -81 -495 -183 -223 -151 -378 -372 -452
                                    -645 -20 -72 -26 -123 -30 -252 l-6 -163 612 0 611 0 0 125 0 125 -450 0
                                    c-516 0 -461 -14 -435 108 69 330 306 561 628 612 48 8 122 11 195 7 425 -20
                                    713 -288 783 -730 17 -108 7 -309 -22 -417 -65 -253 -216 -443 -433 -546 -237
                                    -112 -541 -107 -762 13 -85 47 -217 175 -266 258 l-34 60 -177 3 c-97 1 -177
                                    0 -177 -4 0 -14 80 -166 117 -221 48 -74 181 -208 258 -260 417 -282 1000
                                    -263 1387 46 161 128 292 316 358 511 59 176 78 436 45 626 -87 495 -467 859
                                    -965 924 -73 9 -240 11 -290 3z"/>
                                <path d="M2275 2939 c-38 -5 -104 -18 -145 -29 -93 -25 -250 -89 -250 -102 0
                                    -25 67 -133 114 -183 l51 -56 60 21 c224 78 534 71 734 -16 53 -24 53 -24 80
                                    -5 37 27 100 96 140 155 39 56 44 48 -74 105 -165 80 -299 111 -500 116 -77 2
                                    -171 0 -210 -6z"/>
                                <path d="M1413 2328 c-45 -91 -87 -222 -103 -325 -15 -94 -13 -304 4 -403 69
                                    -393 352 -716 741 -846 110 -36 229 -54 368 -54 l117 0 0 605 0 605 -82 0
                                    c-46 0 -100 3 -120 6 l-38 7 0 -453 0 -453 -61 7 c-33 4 -91 16 -127 28 -373
                                    114 -587 448 -543 850 11 100 47 241 70 278 8 11 -8 33 -67 95 -43 44 -87 93
                                    -98 108 l-20 29 -41 -84z"/>
                                <path d="M3365 2274 l-100 -101 18 -43 c56 -127 71 -348 37 -505 -46 -205
                                    -178 -387 -346 -476 l-44 -24 0 -178 0 -177 38 15 c249 105 461 327 560 588
                                    55 146 75 259 76 427 0 82 -5 177 -13 220 -17 96 -62 233 -98 302 l-28 53
                                    -100 -101z"/>
                            </g>
                        </svg>
                    </span>
                </a>
                <button onClick={() => setNavbar(!navbar)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  text-white rounded-lg md:hidden ">
                    <svg className='transition-none dark:transition-none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <rect x="2" y="11" width="20" height="2" />
                        <rect x="2" y="5" width="20" height="2" />
                        <rect x="2" y="17" width="20" height="2" />
                    </svg>
                </button>
                <div className={'hidden absolute top-20 right-5 border z-20 md:static md:border-none md:block'} id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {
                            menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.to} onClick={() => setNavbar(!navbar)} className='block py-2 px-3 text-lg font-semibold text-[#FAFAFA] dark:text-[#383838] rounded md:bg-transparent md:p-0'
                                    >{item.title}</Link>
                                </li>
                            ))
                        }
                        <div className=' flex gap-10'>
                            {loading ? (<img src={'/assets/loader.gif'} alt='loader' />)
                                :
                                session?.user ? (
                                    <div>
                                        <img src={session.user.image || ''} alt="avatar" className='h-10 rounded-full' />
                                        <SignOut />
                                    </div>
                                )
                                    : <SignIn />
                            }
                        </div>
                    </ul>
                </div>
                {/* Sidebar Menu */}
                <div className={`sidebar ${navbar ? 'active md:hidden ' : ''}`}>
                    <div className='flex justify-center items-center'>
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 500.000000 500.000000"
                                preserveAspectRatio="xMidYMid meet" className='h-14 md:h-16'>

                                <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                                    stroke="none" className=' fill-[#030303] dark:fill-[#383838] transition-none dark:transition-none'>
                                    <path d="M2340 4343 c-219 -34 -343 -81 -495 -183 -223 -151 -378 -372 -452
                                    -645 -20 -72 -26 -123 -30 -252 l-6 -163 612 0 611 0 0 125 0 125 -450 0
                                    c-516 0 -461 -14 -435 108 69 330 306 561 628 612 48 8 122 11 195 7 425 -20
                                    713 -288 783 -730 17 -108 7 -309 -22 -417 -65 -253 -216 -443 -433 -546 -237
                                    -112 -541 -107 -762 13 -85 47 -217 175 -266 258 l-34 60 -177 3 c-97 1 -177
                                    0 -177 -4 0 -14 80 -166 117 -221 48 -74 181 -208 258 -260 417 -282 1000
                                    -263 1387 46 161 128 292 316 358 511 59 176 78 436 45 626 -87 495 -467 859
                                    -965 924 -73 9 -240 11 -290 3z"/>
                                    <path d="M2275 2939 c-38 -5 -104 -18 -145 -29 -93 -25 -250 -89 -250 -102 0
                                    -25 67 -133 114 -183 l51 -56 60 21 c224 78 534 71 734 -16 53 -24 53 -24 80
                                    -5 37 27 100 96 140 155 39 56 44 48 -74 105 -165 80 -299 111 -500 116 -77 2
                                    -171 0 -210 -6z"/>
                                    <path d="M1413 2328 c-45 -91 -87 -222 -103 -325 -15 -94 -13 -304 4 -403 69
                                    -393 352 -716 741 -846 110 -36 229 -54 368 -54 l117 0 0 605 0 605 -82 0
                                    c-46 0 -100 3 -120 6 l-38 7 0 -453 0 -453 -61 7 c-33 4 -91 16 -127 28 -373
                                    114 -587 448 -543 850 11 100 47 241 70 278 8 11 -8 33 -67 95 -43 44 -87 93
                                    -98 108 l-20 29 -41 -84z"/>
                                    <path d="M3365 2274 l-100 -101 18 -43 c56 -127 71 -348 37 -505 -46 -205
                                    -178 -387 -346 -476 l-44 -24 0 -178 0 -177 38 15 c249 105 461 327 560 588
                                    55 146 75 259 76 427 0 82 -5 177 -13 220 -17 96 -62 233 -98 302 l-28 53
                                    -100 -101z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <ul className="font-medium flex flex-col items-center p-4 mt-4">
                        <li>
                            <a href={'/'} onClick={() => setNavbar(!navbar)} className='block py-2 px-3  text-white dark:text-[#383838] rounded md:bg-transparent md:p-0  '>HOME</a>
                        </li>
                        <li>
                            <a href={'/skills'} onClick={() => setNavbar(!navbar)} className="block py-2 px-3  text-white dark:text-[#383838] rounded md:hover:bg-transparent md:border-0 md:p-0 ">SKILLS</a>
                        </li>
                        <li>
                            <a href={'/projects'} onClick={() => setNavbar(!navbar)} className="block py-2 px-3  text-white dark:text-[#383838] text-whiterounded md:hover:bg-transparent md:border-0 md:p-0 ">PROJECTS</a>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    );
}

export default NavBar;
