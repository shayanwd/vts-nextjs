'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    useEffect(() => {
        ScrollTrigger.create({
            start: "top -20%",
            end: 99999,
            toggleClass: {
                className: 'header-scrolled',
                targets: '.main--header'
            }
        });
    }, []);

    return (
        <>



            <header className='main--header fixed top-0 left-0 w-full z-50 transition-all duration-300'>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="logo">
                            <Image
                                src="/assets/logo.svg"
                                alt="Logo"
                                width={150}
                                height={40}
                                priority
                            />
                        </div>
                        <div className="menu">
                            <ul className='flex items-center gap-4'>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="header-btn">
                            <button className='trans-btn'>Parla con noi</button>
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Header; 