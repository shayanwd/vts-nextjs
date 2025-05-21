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
        icon: "/assets/svct-02.png",
        title: "Controllo Accessi",
        description: "Implementiamo sistemi intelligenti per la gestione degli ingressi, garantendo accessi autorizzati e una supervisione completa degli spazi aziendali.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svct-03.png",
        title: "Lettura Targhe",
        description: "Sistemi avanzati per la rilevazione automatizzata delle targhe, ideali per la gestione di parcheggi, accessi riservati e monitoraggio del traffico.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svct-04.png",
        title: "Rilevazione Incendio",
        description: "Soluzioni innovative per la rilevazione tempestiva di fumi e incendi, progettate per prevenire danni e garantire interventi immediati.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svct-05.png",
        title: "EVAC (Evacuazione Vocale)",
        description: "Sistemi di evacuazione vocale che forniscono istruzioni chiare e tempestive in caso di emergenza, migliorando la gestione della sicurezza aziendale.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
]; 