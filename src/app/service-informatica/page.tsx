import React from 'react'
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";
import { servicesData } from '@/data/serviceInformatica'

const ServiceInformaticaPage = () => {
    return (
        <div>
            <ServiceBanner
                backgroundImage="/assets/informatica-banner_converted.webp"
                title="Sicurezza Informatica"
                paragraph="Proteggi la tua azienda dalle minacce informatiche con sistemi avanzati di sicurezza. Dalla protezione della rete al monitoraggio continuo, offriamo soluzioni per garantire integrità, riservatezza e disponibilità dei dati aziendali."
                linkTo="/"
                linkText="Inizia Adesso"
            />
            <ServiceDetails
                subtitle="Dettagli"
                title={<><b>Massima Protezione</b> <br /> per la Tua Rete e i Tuoi Dati</>}
                description="Le minacce informatiche evolvono costantemente, rendendo essenziale una strategia di difesa solida. I nostri sistemi di cybersecurity proteggono reti, dispositivi e dati aziendali con tecnologie all’avanguardia, prevenendo intrusioni e garantendo la continuità operativa."
                mainImage="/assets/informatica-col_converted.webp"
                iconImage="/assets/informatica-ico.svg"
            />
            <ServiceGrid
                services={servicesData}
                title="I pilastri della sicurezza aziendale"
                subtitle="Sottoservizi"
                description="Dalla protezione perimetrale al monitoraggio delle minacce, ogni soluzione è progettata per individuare, prevenire e contrastare gli attacchi informatici, garantendo la massima sicurezza per la tua azienda."
            />
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}

export default ServiceInformaticaPage
