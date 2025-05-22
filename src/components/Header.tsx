'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const serviziRef = useRef<HTMLLIElement>(null);
    const megaMenuRef = useRef<HTMLDivElement>(null);

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

    // Close megamenu on outside click
    useEffect(() => {
        if (!showMegaMenu) return;
        function handleClickOutside(event: MouseEvent) {
            if (
                serviziRef.current &&
                !serviziRef.current.contains(event.target as Node) &&
                megaMenuRef.current &&
                !megaMenuRef.current.contains(event.target as Node)
            ) {
                setShowMegaMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showMegaMenu]);

    return (
        <>
            <header className='main--header fixed top-0 left-0 w-full z-[101] transition-all duration-300'>
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
                                <li
                                    ref={serviziRef}
                                    className="relative"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setShowMegaMenu((prev) => !prev)}
                                        className="focus:outline-none"
                                    >
                                        Servizi
                                    </button>
                                </li>
                                <li><Link href="/contact">Chi Siamo</Link></li>
                                <li><Link href="/contact">Contatti</Link></li>
                            </ul>
                        </div>

                        <div className="header-btn">
                            <button className='trans-btn'>Parla con noi</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Megamenu outside header */}
            {showMegaMenu && (
                <div
                    ref={megaMenuRef}
                    className="header-mm fixed left-0 w-full flex justify-center z-[100]"
                >
                    <div className="text-white rounded-lg flex w-[1760px] gap-12">
                        {/* Performance Column */}
                        <div className="flex-1 max-w-[880px]">
                            <div className="mc-head">
                                <div className="flex items-center mb-[8px] gap-[16px]">
                                    <span className="mc-icon">
                                        <svg className='w-[40px] h-[40px]' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.881 24.7575C10.9782 25.416 10.9324 26.0877 10.7467 26.7269C10.5611 27.3662 10.2399 27.9579 9.80513 28.4619C9.37033 28.9659 8.83207 29.3703 8.22698 29.6477C7.62188 29.925 6.96415 30.0688 6.29852 30.0692C3.74185 30.0692 1.66602 27.9934 1.66602 25.4367C1.66602 22.88 3.74185 20.8042 6.29852 20.8042C7.12043 20.8042 7.92756 21.0228 8.63708 21.4377C9.3466 21.8525 9.93297 22.4487 10.336 23.165L12.2277 22.1975C12.0305 21.4888 11.931 20.7565 11.9318 20.0209C11.9318 18.0834 12.6127 16.3034 13.7485 14.9084L10.3618 11.5209C9.86658 11.8084 9.30431 11.9603 8.73164 11.9615C8.15897 11.9626 7.5961 11.8129 7.0997 11.5273C6.60329 11.2418 6.19086 10.8305 5.90392 10.3349C5.61698 9.83931 5.46566 9.27686 5.46518 8.70419C5.46518 6.90586 6.92518 5.44586 8.72352 5.44586C9.29619 5.44633 9.85863 5.59766 10.3542 5.8846C10.8498 6.17154 11.2611 6.58397 11.5466 7.08037C11.8322 7.57678 11.9819 8.13964 11.9808 8.71231C11.9797 9.28499 11.8277 9.84725 11.5402 10.3425L14.9268 13.7292C16.3705 12.5522 18.1767 11.9104 20.0394 11.9125C21.9777 11.9125 23.7568 12.5942 25.1527 13.7292L28.9877 9.89419C28.407 9.07362 28.096 8.09275 28.0977 7.08752C28.0977 4.39752 30.2819 2.21252 32.9727 2.21252C35.6635 2.21252 37.8477 4.39752 37.8477 7.08752C37.8471 7.98019 37.6014 8.85556 37.1376 9.61825C36.6737 10.3809 36.0094 11.0017 35.2171 11.4128C34.4247 11.8239 33.5347 12.0097 32.644 11.9498C31.7534 11.89 30.8962 11.5868 30.166 11.0734L26.331 14.9084C27.5084 16.3518 28.1503 18.1581 28.1477 20.0209C28.1492 21.2344 27.8772 22.4327 27.3519 23.5267L29.5277 24.4934C29.9801 23.8758 30.5717 23.3736 31.2545 23.0276C31.9374 22.6815 32.6922 22.5014 33.4577 22.5017C34.7505 22.5021 35.9902 23.0159 36.9043 23.93C37.8185 24.8442 38.3322 26.0839 38.3327 27.3767C38.3327 30.0667 36.1485 32.2517 33.4577 32.2517C32.6988 32.2513 31.9504 32.0738 31.2722 31.7333C30.5939 31.3929 30.0045 30.8988 29.5507 30.2905C29.097 29.6822 28.7914 28.9764 28.6584 28.2293C28.5253 27.4821 28.5685 26.7142 28.7843 25.9867L26.4702 24.9584C25.7991 25.8332 24.9565 26.5619 23.994 27.0998C23.0316 27.6377 21.9694 27.9735 20.8727 28.0867V31.42C21.636 31.6243 22.2991 32.0989 22.7388 32.7555C23.1784 33.412 23.3646 34.206 23.2627 34.9895C23.1608 35.7731 22.7778 36.493 22.1849 37.0154C21.592 37.5377 20.8295 37.8269 20.0394 37.8292C19.2492 37.8269 18.4867 37.5377 17.8938 37.0154C17.3009 36.493 16.9179 35.7731 16.816 34.9895C16.7141 34.206 16.9003 33.412 17.3399 32.7555C17.7796 32.0989 18.4427 31.6243 19.206 31.42V28.0867C17.8696 27.9476 16.5886 27.4791 15.4779 26.7231C14.3672 25.9671 13.4614 24.9473 12.8418 23.755L10.881 24.7575Z" fill="#FF0000" />
                                        </svg>
                                    </span>
                                    <h4 className="text-[40px] text-white font-bold leading-[100%]">Performance</h4>
                                </div>
                                <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px] max-w-[610px] mb-[40px]">
                                    Area dedicata ai servizi per la connettività, la comunicazione aziendale e la gestione dell'infrastruttura di rete.
                                </div>
                            </div>
                            <div className="mm-links grid gap-[40px]">
                                <Link href="/servizi/connettivita" className="mm-item block group">
                                    <div className="text-[24px] font-normal mb-[4px] leading-[100%] group-hover:underline">Connettività e servizi integrati</div>
                                    <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px]">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/servizi/telefonici" className="mm-item block group">
                                    <div className="text-[24px] font-normal mb-[4px] leading-[100%] group-hover:underline">Sistemi Telefonici</div>
                                    <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px]">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/servizi/networking" className="mm-item block group">
                                    <div className="text-[24px] font-normal mb-[4px] leading-[100%] group-hover:underline">Networking</div>
                                    <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px]">Scopri maggiori dettagli</div>
                                </Link>
                            </div>
                        </div>
                        {/* Sicurezza Column */}
                        <div className="flex-1 max-w-[880px]">
                            <div className="mc-head">
                                <div className="flex items-center mb-[8px] gap-[16px]">
                                    <span className="mc-icon">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.4667 8.91054L20.3556 2.08072C20.2443 2.02756 20.1229 2 20 2C19.8771 2 19.7557 2.02756 19.6444 2.08072L4.53333 8.91054C4.37708 8.97982 4.24373 9.09331 4.14917 9.23747C4.05461 9.38163 4.00283 9.55038 4 9.72362V14.5659C4 23.4555 9.22667 34.2242 19.68 37.9463C19.8875 38.0179 20.1125 38.0179 20.32 37.9463C30.7733 34.2242 36 23.4555 36 14.5659V9.72362C35.9972 9.55038 35.9454 9.38163 35.8508 9.23747C35.7563 9.09331 35.6229 8.97982 35.4667 8.91054ZM28.3342 14.8912L18.9476 27.0367C18.8111 27.2118 18.6399 27.3557 18.4451 27.459C18.2503 27.5624 18.0362 27.6229 17.8169 27.6365L17.7244 27.6401C17.3111 27.6394 16.9148 27.4725 16.6222 27.1758L11.7867 22.2612C11.495 21.9641 11.3315 21.5614 11.332 21.1418C11.3325 20.7221 11.497 20.3198 11.7893 20.0235C12.0817 19.7271 12.4779 19.5608 12.8908 19.5614C13.3037 19.5619 13.6995 19.7291 13.9911 20.0262L17.5858 23.6796L25.888 12.938C26.1475 12.6218 26.5181 12.4209 26.921 12.3779C27.3239 12.3349 27.7274 12.4531 28.0459 12.7075C28.3644 12.9619 28.5729 13.3324 28.6271 13.7404C28.6812 14.1485 28.5768 14.5619 28.336 14.893L28.3342 14.8912Z" fill="#FF0000" />
                                        </svg>
                                    </span>
                                    <h4 className="text-[40px] text-white font-bold leading-[100%]">Sicurezza</h4>
                                </div>
                                <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px] max-w-[610px] mb-[40px]">
                                    Soluzioni per il controllo degli accessi, la protezione degli ambienti aziendali e la gestione dei sistemi di allarme.
                                </div>
                            </div>
                            <div className="mm-links grid gap-[40px]">
                                <Link href="/sicurezza/antintrusione" className="mm-item block group">
                                    <div className="text-[24px] font-normal mb-[4px] leading-[100%] group-hover:underline">Sistemi di Antintrusione</div>
                                    <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px]">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/sicurezza/videosorveglianza" className="mm-item block group">
                                    <div className="text-[24px] font-normal mb-[4px] leading-[100%] group-hover:underline">Sistemi di Videosorveglianza</div>
                                    <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px]">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/sicurezza/informatica" className="mm-item block group">
                                    <div className="text-[24px] font-normal mb-[4px] leading-[100%] group-hover:underline">Sicurezza Informatica</div>
                                    <div className="text-md text-[#A7A7A7] leading-[130%] tracking-[0.7px]">Scopri maggiori dettagli</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header; 