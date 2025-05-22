import React from 'react'
import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";
import { servicesData } from '@/data/serviceTelefonici'
import Fresher from '@/components/Fresher';
const ServiceTelefoniciPage = () => {
    return (
        <div>
            <Fresher />
            <ServiceBanner
                backgroundImage="/assets/telefonici-banner_converted.webp"
                title="Sistemi Telefonici" paragraph="Offriamo soluzioni avanzate per la gestione delle comunicazioni aziendali. Dai centralini in cloud alle soluzioni on-premises, i nostri sistemi telefonici garantiscono flessibilità, scalabilità e integrazione con i tuoi sistemi aziendali esistenti." linkTo="/" linkText="Inizia Adesso"
            />
            <ServiceDetails
                subtitle="Dettagli"
                title={<><b>Comunicazioni Aziendali,</b> <br /> Semplici e Sicure</>}
                description="Ottimizza la gestione delle comunicazioni aziendali con soluzioni telefoniche scalabili, sicure e facilmente integrabili con i sistemi esistenti. Offriamo opzioni per ogni esigenza, dalla gestione centralizzata delle chiamate all'integrazione con software aziendali."
                mainImage="/assets/telefonici-cell_converted.webp"
                iconImage="/assets/telefonici-ico.svg"
            />
            <div className="dual-cell">
                <ServiceGrid
                    services={servicesData}
                    title="Le Soluzioni per la Tua Comunicazione Aziendale"
                    subtitle="Sottoservizi"
                    description="Dalle soluzioni cloud alle centraline tradizionali, offriamo sistemi telefonici personalizzati per ogni esigenza, che semplificano la gestione delle comunicazioni aziendali e ottimizzano le performance operative."
                />
            </div>
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}

export default ServiceTelefoniciPage
