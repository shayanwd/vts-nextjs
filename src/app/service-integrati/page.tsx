import React from 'react'
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";
import { servicesData } from '@/data/services'

const ServiceIntegratiPage = () => {
    return (
        <div>
            <ServiceBanner
                backgroundImage="/assets/svc-banner_converted.webp"
                title="Connettività e Servizi Integrati" paragraph="Offriamo soluzioni di connettività avanzate e servizi integrati, garantendo performance elevate e sicurezza grazie alla partnership con Vianova, leader nelle soluzioni di rete. Dalla connessione Internet alla gestione dei servizi in cloud, ogni servizio è pensato per ottimizzare il business aziendale." linkTo="/" linkText="Inizia Adesso"
            />
            <ServiceDetails
                subtitle="Dettagli"
                title={<><b>Connettività Affidabile,</b> <br /> Servizi Efficaci</>}
                description="Forniamo una vasta gamma di soluzioni integrate, dalla connessione Internet a alta velocità a servizi avanzati in cloud, tutti progettati per garantire prestazioni elevate, sicurezza e scalabilità. Assicurati che la tua azienda sia sempre connessa e pronta a crescere."
                mainImage="/assets/svc-col_converted.webp"
                iconImage="/assets/svc-col-ico_converted.webp"
            />
            <ServiceGrid
                services={servicesData}
                title="Le Soluzioni per la Tua Connettività Aziendale"
                subtitle="Sottoservizi"
                description="Offriamo una gamma di servizi pensati per ottimizzare la connessione e le comunicazioni aziendali, per garantire affidabilità, sicurezza e prestazioni elevate in ogni situazione."
            />
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}

export default ServiceIntegratiPage
