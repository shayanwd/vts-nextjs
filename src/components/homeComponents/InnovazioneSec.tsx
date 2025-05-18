'use client';
import Image from 'next/image';
import Link from 'next/link';


const InnovazioneSec = () => {
    return (
        <section className='second-sec w-full pt-[10px] pb-[60px] bg-white'>
            <div className="container">
                <div className="ss-row flex justify-between items-center gap-[20px]">
                    <div className="ss-col-1">
                        <Image src="/assets/ss-col.png" alt="Logo" width={500} height={500} className='!w-full !max-w-[500px] !h-[500px] !aspect-square !block !object-contain ' />
                    </div>
                    <div className="ss-col-2 max-w-[618px] py-[33px]">
                        <span className="btn-grey mb-[60px]">Chi siamo</span>
                        <h2 className='text-black sec-title mb-[32px]'>Dal <b className='text-[#AFAFAF] f2 font-bold'>1988</b>, innovazione e affidabilità per le imprese</h2>
                        <p className='sec-parah text-[#7D7D7D] mb-[32px]'>Da oltre 30 anni supportiamo le aziende con soluzioni tecnologiche affidabili, evolvendoci insieme alle loro necessità. Dalle telecomunicazioni alle infrastrutture digitali, fino ai sistemi di sicurezza, offriamo servizi pensati per garantire continuità e innovazione.</p>
                        <Link
                            href="#"
                            className="btn-lined"
                        >
                            saperne di più su di noi
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovazioneSec;
