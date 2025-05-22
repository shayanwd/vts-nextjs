'use client';

import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';
const Footer = () => {


    return (
        <>
            <div className="px-[10px]">
                {window.location.pathname !== '/contact' && <ContactForm />}
                <div className=" pt-[10px]">
                    <footer className="w-full bg-[#F1F1F1] rounded-[10px] text-[#000000] py-[60px] pb-[20px]">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-[2.6fr_0.9fr_1.1fr] gap-8">
                                <div className='w-full fc-01'>
                                    <Link href="/">
                                        <Image src="/assets/logo-dark.svg" alt="Logo" width={260} height={40} className='w-fill max-w-[260px] block object-contain mb-[32px]' />
                                    </Link>
                                    <p className='sec-parah text-[#A7A7A7] mb-[20px] max-w-[566px]'>Figma ipsum component variant main layer. Strikethrough vertical selection blur opacity union. Background clip underline list subtract distribute. Flatten select horizontal.</p>
                                    <ul className="socials flex gap-[12px]">
                                        <li>
                                            <Link href="#">
                                                <Image src='/assets/sci-01.svg' width={45} height={45} alt="Social Icon 1" className='w-[45px] h-[45px] block object-contain' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image src='assets/sci-02.svg' width={45} height={45} alt="Social Icon 2" className='w-[45px] h-[45px] block object-contain' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image src='assets/sci-03.svg' width={45} height={45} alt="Social Icon 3" className='w-[45px] h-[45px] block object-contain' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-[#000000] text-[32px] leading-[100%] font-normal mb-4">Quick <b>Links</b></h3>
                                    <ul className="flex flex-col gap-[12px]">
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Home</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Servizi</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Chi Siamo</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Contatti</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-[#000000] text-[32px] leading-[100%] font-normal mb-4">I Nostri <b>servizi</b></h3>
                                    <ul className="flex flex-col gap-[12px]">
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Connettività e Servizi Integrati</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Sistemi Telefonici</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Sistemi di Videosorveglianza</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Sistemi Protezione e Controllo</Link></li>
                                        <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Networking</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 grid grid-cols-1 md:grid-cols-[1fr_max-content_] gap-8">
                                <ul className="flex gap-[12px]">
                                    <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Terms & Condition</Link></li>
                                    <li><Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000]">Privacy Policy</Link></li>
                                </ul>
                                <li className='text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider'>Made by <Link href="/" className="text-[#7D7D7D] text-[20px] leading-[150%] tracking-wider hover:text-[#000] underline">eccentrico.net</Link></li>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer; 