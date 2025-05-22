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
                    className="header-mm fixed left-0 top-[70px] w-full flex justify-center z-[100]"
                >
                    <div className="text-white rounded-lg shadow-2xl flex w-[1760px] max-w-[95vw] p-12 gap-12" style={{ background: '#0a0a0a' }}>
                        {/* Performance Column */}
                        <div className="flex-1">
                            <div className="flex items-center mb-2">
                                <span className="text-4xl mr-2">🔴</span>
                                <span className="text-3xl font-bold">Performance</span>
                            </div>
                            <div className="text-sm text-gray-300 mb-8">
                                Area dedicata ai servizi per la connettività, la comunicazione aziendale e la gestione dell'infrastruttura di rete.
                            </div>
                            <div className="mm-links">
                                <Link href="/servizi/connettivita" className="mm-item mb-6 block group">
                                    <div className="text-lg font-medium group-hover:underline">Connettività e servizi integrati</div>
                                    <div className="text-xs text-gray-400">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/servizi/telefonici" className="mm-item mb-6 block group">
                                    <div className="text-lg font-medium group-hover:underline">Sistemi Telefonici</div>
                                    <div className="text-xs text-gray-400">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/servizi/networking" className="mm-item mb-6 block group">
                                    <div className="text-lg font-medium group-hover:underline">Networking</div>
                                    <div className="text-xs text-gray-400">Scopri maggiori dettagli</div>
                                </Link>
                            </div>
                        </div>
                        {/* Sicurezza Column */}
                        <div className="flex-1">
                            <div className="flex items-center mb-2">
                                <span className="text-4xl mr-2">🛡️</span>
                                <span className="text-3xl font-bold">Sicurezza</span>
                            </div>
                            <div className="text-sm text-gray-300 mb-8">
                                Soluzioni per il controllo degli accessi, la protezione degli ambienti aziendali e la gestione dei sistemi di allarme.
                            </div>
                            <div className="mm-links">
                                <Link href="/sicurezza/antintrusione" className="mm-item mb-6 block group">
                                    <div className="text-lg font-medium group-hover:underline">Sistemi di Antintrusione</div>
                                    <div className="text-xs text-gray-400">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/sicurezza/videosorveglianza" className="mm-item mb-6 block group">
                                    <div className="text-lg font-medium group-hover:underline">Sistemi di Videosorveglianza</div>
                                    <div className="text-xs text-gray-400">Scopri maggiori dettagli</div>
                                </Link>
                                <Link href="/sicurezza/informatica" className="mm-item mb-6 block group">
                                    <div className="text-lg font-medium group-hover:underline">Sicurezza Informatica</div>
                                    <div className="text-xs text-gray-400">Scopri maggiori dettagli</div>
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