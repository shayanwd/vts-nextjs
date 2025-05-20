import ServiceBanner from "@/components/serviceComponents/ServiceBanner";
import ServiceGrid from "@/components/serviceComponents/ServiceGrid";
import ServiceDetails from "@/components/serviceComponents/ServiceDetails";
import ServiceProcess from "@/components/serviceComponents/ServiceProcess";
import ServiceReviews from "@/components/serviceComponents/ServiceReviews";

export default function Service() {
    return (
        <div>
            <ServiceBanner
                backgroundImage="/assets/svc-banner_converted.webp"
                title="Connettività e Servizi Integrati" paragraph="Offriamo soluzioni di connettività avanzate e servizi integrati, garantendo performance elevate e sicurezza grazie alla partnership con Vianova, leader nelle soluzioni di rete. Dalla connessione Internet alla gestione dei servizi in cloud, ogni servizio è pensato per ottimizzare il business aziendale." linkTo="/" linkText="Inizia Adesso"
            />
            <ServiceDetails />
            <ServiceGrid />
            <ServiceProcess />
            <ServiceReviews />
        </div>
    )
}
