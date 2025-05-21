import React from 'react'
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";
import { servicesData } from '@/data/serviceNetworking'

const ServiceNetworkingPage = () => {
    return (
        <div>
            <ServiceBanner
                backgroundImage="/assets/networking-banner_converted.webp"
                title="Networking"
                paragraph="Progettiamo e gestiamo infrastrutture di rete efficienti e affidabili. Dalla progettazione delle reti cablate e Wi-Fi alla gestione centralizzata e certificazione, offriamo soluzioni su misura per garantire prestazioni elevate e connettività sicura."
                linkTo="/"
                linkText="Inizia Adesso"
            />
            <ServiceDetails
                subtitle="Dettagli"
                title={<><b>Performance e Stabilità </b> <br /> per la Tua Rete</>}
                description="Una rete solida e performante è essenziale per la continuità operativa aziendale. Offriamo soluzioni di networking progettate per garantire connettività stabile, sicurezza e gestione ottimizzata delle infrastrutture aziendali."
                mainImage="/assets/networking-col_converted.webp"
                iconImage="/assets/networking-ico.svg"
            />
            <ServiceGrid
                services={servicesData}
                title="Tutto ciò che serve per la tua rete"
                subtitle="Sottoservizi"
                description="Ogni azienda ha esigenze di rete specifiche. Forniamo soluzioni avanzate per la progettazione, gestione e certificazione delle infrastrutture, garantendo affidabilità, scalabilità e massime prestazioni."
            />
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}

export default ServiceNetworkingPage
