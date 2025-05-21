import React from 'react'
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";
import { servicesData } from '@/data/serviceControllo'

const ServiceControlloPage = () => {
    return (
        <div>
            <ServiceBanner
                backgroundImage="/assets/controllo-banner_converted.webp"
                title="Sistemi di Protezione e Controllo"
                paragraph="Proteggi i tuoi spazi con soluzioni avanzate per la sicurezza aziendale. Offriamo sistemi integrati per il controllo degli accessi, la rilevazione di incendi e allarmi, garantendo protezione e gestione efficace in ogni situazione."
                linkTo="/"
                linkText="Inizia Adesso"
            />
            <ServiceDetails
                subtitle="Dettagli"
                title={<><b>Sicurezza Completa</b> <br /> per Ogni Ambiente</>}
                description="Gestire la sicurezza aziendale richiede soluzioni affidabili e integrate. I nostri sistemi proteggono ambienti e persone con tecnologie avanzate per la prevenzione, il controllo degli accessi e la gestione delle emergenze."
                mainImage="/assets/controllo-col_converted.webp"
                iconImage="/assets/controllo-ico.svg"
            />
            <ServiceGrid
                services={servicesData}
                title="Le Nostre Soluzioni per la Sicurezza"
                subtitle="Sottoservizi"
                description="Dalla protezione perimetrale alla gestione degli accessi, ogni tecnologia è progettata per migliorare la sicurezza aziendale. Offriamo soluzioni avanzate per la prevenzione, il controllo e la gestione efficace delle emergenze."
            />
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}

export default ServiceControlloPage
