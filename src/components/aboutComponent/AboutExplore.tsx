import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import backgroundImage from '../../assets/abt-explore.png'

const AboutExplore = () => {
    return (
        <section className="w-full bg-[#F1F1F1] rounded-[10px] py-[38px] px-2 md:px-0 relative overflow-hidden">
            <Image
                src={backgroundImage}
                alt="Explore Background"
                fill
                className="object-contain object-top-right -z-10"
                priority
            />
            <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-center text-center">
                <span className="btn-grey mb-[32px] mx-auto">VISUALIZZA SERVIZI</span>
                <h2 className="text-[56px] md:text-[100px] font-bold leading-[100%] mb-[20px] text-black">Esplora I nostri Servizi</h2>
                <p className="text-[#7D7D7D] sec-parah max-w-3xl mx-auto font-normal">
                    Realizziamo importanti investimenti in attrezzature, strumenti e infrastrutture, rafforzando la nostra capacit&agrave; di offrire soluzioni all&apos;avanguardia.
                </p>
                <Link href="/services" className="btn-lined mt-[20px]">View Services</Link>
            </div>
        </section>
    )
}

export default AboutExplore
