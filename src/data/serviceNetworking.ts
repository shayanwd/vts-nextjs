export interface Service {
    icon: string;
    title: string;
    description: string;
    benefits: string[];
    buttonText: string;
    buttonLink: string;
}

export const servicesData: Service[] = [
    {
        icon: "/assets/srcv-i1.png",
        title: "VoIP (Voice over IP)",
        description: "Linee voce aziendali basate su tecnologia VoIP per comunicazioni efficienti e a costi ridotti, con un'ottima qualità del servizio.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svin-02.png",
        title: "Impianti Wi-Fi di Ultima Generazione",
        description: "Realizziamo e ottimizziamo reti Wi-Fi aziendali con tecnologie avanzate, per garantire copertura e velocità ottimali.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svin-03.png",
        title: "Gestione Centralizzata della Rete",
        description: "Monitoriamo e gestiamo reti aziendali complesse, garantendo un controllo unificato e ottimizzato per una maggiore efficienza operativa.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svin-04.png",
        title: "Supporto e Manutenzione della Rete",
        description: "Forniamo assistenza tecnica continua per la manutenzione, l’espansione e l’ottimizzazione delle reti aziendali.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svin-05.png",
        title: "Certificazione della Rete",
        description: "Certifichiamo reti in rame e fibra ottica, garantendo il rispetto degli standard qualitativi e prestazionali richiesti dalle normative aziendali.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
]; 