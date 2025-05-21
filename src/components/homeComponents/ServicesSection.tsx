"use client";
import ServiceBlock from './ServiceBlock'
import img1 from '../../assets/servv-01.webp'
import img2 from '../../assets/servv-02.webp'
import img3 from '../../assets/servv-03.webp'
import img4 from '../../assets/servv-04.webp'
import img5 from '../../assets/servv-05.webp'

const ServicesSection = () => {
    return (
        <>
            <section className='partnership-sec w-full p-[10px] pt-[60px] bg-[#080808] rounded-[10px]'>
                <div className="container">
                    <div className="prt-row flex justify-center items-center">
                        <div className="prt-col-1 max-w-[700px] text-center">
                            <span className="btn-grey darken mb-[60px] mx-auto">Chi siamo</span>
                            <h2 className='sec-title text-white  mb-[32px]'>I Nostri <b className='f2 font-bold'>servizi</b></h2>
                            <p className='sec-parah text-[#A7A7A7] '>Offriamo un’ampia gamma di servizi per garantire connettività, sicurezza e infrastrutture digitali affidabili.</p>
                        </div>
                    </div>
                </div>
                <div className="sv-wrap w-full grid gap-[10px] mt-[60px]">
                    <div className="grid grid-cols-[3fr_2fr] gap-[10px]">
                        <ServiceBlock
                            img={img1}
                            img2={img1}
                            title="Connettività e Servizi Integrati"
                            description="Soluzioni di connettività ad alte prestazioni con Internet dedicato, VPN sicure e servizi cloud scalabili. Offriamo hosting, server virtuali, numerazioni aziendali e strumenti per la comunicazione digitale."
                            link="/"
                        />
                        <ServiceBlock
                            img={img2}
                            img2={img2}
                            title="Sistemi Telefonici"
                            description="Soluzioni per la gestione delle comunicazioni aziendali, con centralini cloud scalabili, centrali telefoniche on-premises e strumenti avanzati per il monitoraggio e l’integrazione delle chiamate."
                            link="/"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-[10px]">
                        <ServiceBlock
                            img={img3}
                            img2={img3}
                            title="Sistemi di Videosorveglianza"
                            description="Firewall, protezione perimetrale, sistemi di monitoraggio delle minacce e strategie di backup e disaster recovery. Soluzioni per la protezione della rete aziendale e la sicurezza dei dati."
                            link="/"
                        />
                        <div className='row-span-2'>
                            <ServiceBlock
                                img={img5}
                                img2={img5}
                                title="Networking"
                                description="Progettazione, installazione e gestione di reti aziendali cablate e wireless. Soluzioni per la gestione centralizzata della rete, certificazione degli impianti e manutenzione per garantire affidabilità e sicurezza."
                                link="/"
                            />
                        </div>
                        <ServiceBlock
                            img={img4}
                            img2={img4}
                            title="Sistemi Protezione e Controllo"
                            description="Impianti di allarme, controllo accessi, lettura targhe e sistemi di evacuazione vocale. Soluzioni per la protezione di ambienti aziendali con tecnologie avanzate per il monitoraggio e la sicurezza fisica."
                            link="/"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesSection
