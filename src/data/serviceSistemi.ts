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
        icon: "/assets/sstm-02.png",
        title: "Analisi Video con Intelligenza Artificiale",
        description: "Implementiamo sistemi avanzati di analisi video che rilevano automaticamente eventi sospetti e ottimizzano la gestione della sicurezza.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/sstm-03.png",
        title: "Monitoraggio Remoto del Funzionamento dei Dispositivi",
        description: "Garantiamo un controllo costante sullo stato dei dispositivi di videosorveglianza, rilevando tempestivamente eventuali malfunzionamenti.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
]; 