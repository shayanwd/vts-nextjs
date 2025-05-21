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
        icon: "/assets/svt-02.png",
        title: "Centrali Telefoniche On-Premises",
        description: "Soluzioni di centralino telefonico tradizionale, fornite in collaborazione con Promelit, ideali per aziende che preferiscono mantenere l'infrastruttura in sede.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svt-03.png",
        title: "App Interno Virtuale Vianova",
        description: "Un'applicazione che consente di gestire e monitorare le comunicazioni aziendali direttamente dal dispositivo, integrando il centralino telefonico con i sistemi aziendali.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svt-04.png",
        title: "Alladino",
        description: "Piattaforma per il monitoraggio e la gestione delle chiamate, che si interfaccia con database e CTI (Computer Telephony Integration), per una gestione centralizzata e più efficiente delle comunicazioni.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
]; 