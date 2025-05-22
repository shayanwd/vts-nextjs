import React from 'react'
import Image from 'next/image'
import backgroundImage from '../../assets/detail-bg.png'

const AboutDetails = () => {
    return (
        <div className="outer py-[10px]">
            <section className="detail-sec relative rounded-[10px] py-[60px]">
                <Image
                    src={backgroundImage}
                    alt="Details Background"
                    fill
                    className="object-cover -z-10"
                    priority
                />
                <div className="container">
                    <div className="det-inner flex items-center justify-between gap-[78px]">
                        <div className="w-[50%] det-left flex flex-col justify-start items-start gap-[32px]">
                            <h3 className="btn-grey bg-[#F7F7F71A] text-[#FFFFFF]">Dettagli</h3>

                            <h1 className="banner-title text-[#FFF] font-normal">La nostra <b>missione</b>
                            </h1>

                            <p className="font-normal parah">
                                La nostra missione &egrave; semplificare e potenziare le comunicazioni aziendali attraverso
                                tecnologie avanzate, realizzando un servizio su misura. Ci impegniamo a fornire soluzioni
                                che migliorano l&apos;efficienza operativa, creando valore per i nostri clienti.
                            </p>
                        </div>

                        <ul className="w-[50%] det-right flex flex-col justify-start items-start gap-[32px]">
                            <li className="flex gap-[12px]">
                                <div
                                    className="no w-[20%] font-[NeueMachina] max-w-[50px] h-[50px] bg-[#FF0000] rounded-[50%] flex justify-center items-center text-[#FFF]">
                                    01</div>

                                <h4 className="text-[20px] font-medium text-[#FFFFFF]"><span className="font-semibold">Soluzioni su
                                    misura</span> - Analizziamo le esigenze specifiche di ogni azienda per offrire
                                    servizi personalizzati.</h4>
                            </li>

                            <li className="flex gap-[12px]">
                                <div
                                    className="no w-[20%] font-[NeueMachina] max-w-[50px] h-[50px] bg-[#FF0000] rounded-[50%] flex justify-center items-center text-[#FFF]">
                                    02</div>

                                <h4 className="text-[20px] font-medium text-[#FFFFFF]"><span className="font-semibold">Innovazione
                                    continua</span> - Adottiamo tecnologie avanzate per garantire prestazioni elevate.
                                </h4>
                            </li>

                            <li className="flex gap-[12px]">
                                <div
                                    className="no w-[20%] font-[NeueMachina] max-w-[50px] h-[50px] bg-[#FF0000] rounded-[50%] flex justify-center items-center text-[#FFF]">
                                    03</div>

                                <h4 className="text-[20px] font-medium text-[#FFFFFF]"><span className="font-semibold">Vicini ai
                                    clienti</span> - Forniamo un supporto attento e proattivo per assicurare sempre la
                                    massima operatività.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutDetails
