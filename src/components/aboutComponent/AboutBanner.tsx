"use client";

import React from 'react'
import Image from 'next/image'
import backgroundImage from '../../assets/about-bg.png'

const AboutBanner = () => {
    return (
        <section className="about-sec relative flex items-end rounded-[10px] min-h-[575px]">
            <Image
                src={backgroundImage}
                alt="About Background"
                fill
                className="object-cover -z-10"
                priority
            />
            <div className="container">
                <div className="about-inner flex flex-col justify-start items-start pb-[109px] gap-[32px] w-[811px]">
                    <h1 className="banner-title text-[#FFF] font-normal">Una storia di<br /> <b>tecnologia e passione</b>
                    </h1>

                    <p className="font-normal parah">
                        Da oltre trent'anni offriamo soluzioni di telecomunicazione con competenza e passione. La nostra
                        esperienza ci consente di garantire servizi affidabili e all'avanguardia, sempre attenti alle
                        esigenze dei clienti. Crediamo nella disponibilità e nell'innovazione per offrire supporto
                        costante e costruire relazioni di fiducia.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner
