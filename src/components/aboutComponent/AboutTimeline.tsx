"use client";

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const milestones = [
    {
        year: '1988',
        title: 'Fondazione e Leadership Esperta',
        desc: "Con oltre 40 anni di esperienza nel settore delle telecomunicazioni e della sicurezza, Vincenzo Pignalosa, già responsabile tecnico di Sielte ed Ericsson, fonda l'azienda e avvia la partnership con Promelit.",
    },
    {
        year: '1996',
        title: 'Nuova Gestione e Crescita',
        desc: "Giuseppe Pignalosa, già co-fondatore e responsabile tecnico, diventa amministratore unico, portando nuova energia e visione strategica all'azienda.",
    },
    {
        year: '1999',
        title: 'Partnership Strategica con WelcomItalia (Vianova)',
        desc: "Avviamo una collaborazione con WelcomItalia, oggi Vianova, che diventa uno dei nostri partner più importanti e duraturi.",
    },
    {
        year: '2020',
        title: 'Trasferimento nella Nuova Sede',
        desc: "Ci trasferiamo nella nuova sede di Via Cassano, 293, un ambiente moderno e funzionale per supportare la nostra crescita e innovazione.",
    },
    {
        year: '2024',
        title: 'Investimenti in Innovazione',
        desc: "Realizziamo importanti investimenti in attrezzature, strumenti e infrastrutture, rafforzando la nostra capacità di offrire soluzioni all'avanguardia.",
    }
]

const AboutTimeline = () => {
    return (
        <section className="w-full bg-white rounded-[16px] py-16 px-2 md:px-0">
            <div className="container mx-auto max-w-[1100px]">
                <h2 className="text-center text-4xl md:text-5xl font-light mb-16">
                    I nostri <b className="font-bold">traguardi</b>
                </h2>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#BDBDBD] z-0 rounded-full -translate-x-1/2" />
                    <div className="flex flex-col relative z-10">
                        {milestones.map((milestone, index) => (
                            <div key={milestone.year} className="grid grid-cols-2 gap-[80px] timeline-item items-center">
                                <div className="text-left max-w-[545px] tl-col1 w-fit">
                                    <span className='block px-[28px] py-[10px] bg-[#FF0000] rounded-[6px] font-[NeueMachina] font-extrabold text-white leading-[120%] text-[20px] w-fit'>
                                        {milestone.year}
                                    </span>
                                </div>
                                <div className="text-left max-w-[545px] py-[20px] tl-col2">
                                    <h3 className="text-[40px] font-light leading-[100%] text-black mb-[12px]">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-[#7D7D7D] sec-parah">
                                        {milestone.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTimeline
