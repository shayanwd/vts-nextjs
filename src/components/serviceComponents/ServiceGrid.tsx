import React from 'react'
import ServiceCard from '@/components/serviceComponents/ServiceCard'

interface Service {
    icon: string;
    title: string;
    description: string;
    benefits: string[];
    buttonText: string;
    buttonLink: string;
}

interface ServiceGridProps {
    services: Service[];
    title?: string;
    subtitle?: string;
    description?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
    services,
    title = "Le Soluzioni per la Tua Connettività Aziendale",
    subtitle = "Sottoservizi",
    description = "Offriamo una gamma di servizi pensati per ottimizzare la connessione e le comunicazioni aziendali, per garantire affidabilità, sicurezza e prestazioni elevate in ogni situazione."
}) => {
    return (
        <>
            <section className='sv-grid-sec w-full py-[60px] rounded-[10px] bg-[#080808]'>
                <div className="container">
                    <div className="prt-row flex flex-col justify-between items-center">
                        <div className="sv-grid-col-1 max-w-[970px]">
                            <span className="btn-grey darken mb-[32px] mx-auto">{subtitle}</span>
                            <h2 className='sec-title text-white text-center mb-[32px] !font-semibold'>{title}</h2>
                            <p className='sec-parah text-[#A7A7A7] text-center'>{description}</p>
                        </div>
                        <div className="sv-grid-col-2 flex flex-wrap justify-center gap-[40px] w-full mt-[40px]">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    benefits={service.benefits}
                                    buttonText={service.buttonText}
                                    buttonLink={service.buttonLink}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceGrid
