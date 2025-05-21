import React from 'react'
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";
import { servicesData } from '@/data/serviceSistemi'

const ServiceSistemiPage = () => {
    return (
        <div>
            <ServiceBanner
                backgroundImage="/assets/sistemi-banner_converted.webp"
                title="Sistemi di Videosorveglianza"
                paragraph="Proteggi la tua azienda con un sistema di videosorveglianza avanzato. Offriamo soluzioni su misura con telecamere ad alta definizione, registrazione continua e monitoraggio remoto per garantire sicurezza e affidabilità."
                linkTo="/"
                linkText="Inizia Adesso"
            />
            <ServiceDetails
                subtitle="Dettagli"
                title={<><b>Controllo totale, </b> <br /> ovunque tu sia</>}
                description="Gestisci la sicurezza in tempo reale con soluzioni affidabili e su misura. I nostri sistemi di videosorveglianza ti permettono di monitorare ogni area critica, rilevare anomalie e intervenire tempestivamente, ovunque ti trovi."
                mainImage="/assets/sistemi-col_converted.webp"
                iconImage="/assets/sistemi-ico.svg"
            />
            <ServiceGrid
                services={servicesData}
                title="Come Proteggiamo i Tuoi Spazi"
                subtitle="Sottoservizi"
                description="La videosorveglianza si compone di diverse soluzioni, dalla progettazione e installazione degli impianti alla gestione e analisi dei dati. Ogni servizio è pensato per rispondere a specifiche esigenze di sicurezza e controllo."
            />
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}

export default ServiceSistemiPage
