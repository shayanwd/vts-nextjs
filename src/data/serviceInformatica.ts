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
        icon: "/assets/svit-02.png",
        title: "Endpoint Protection (EDR/XDR)",
        description: "Forniamo soluzioni avanzate per la protezione di dispositivi aziendali, con rilevamento e risposta automatizzata alle minacce in tempo reale.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svit-03.png",
        title: "Monitoraggio e Threat Intelligence",
        description: "Analizziamo costantemente il traffico di rete e i log di sistema per individuare anomalie e neutralizzare le minacce prima che causino danni.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svit-04.png",
        title: "Penetration Test e Vulnerability Assessment",
        description: "Simuliamo attacchi informatici e analizziamo le vulnerabilità della rete per identificare e correggere eventuali punti deboli.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svit-05.png",
        title: "Protezione Email e Antiphishing",
        description: "Blocchiamo email dannose, preveniamo tentativi di phishing e filtriamo allegati pericolosi per ridurre i rischi di attacchi via posta elettronica.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
    {
        icon: "/assets/svit-06.png",
        title: "Backup e Disaster Recovery",
        description: "Implementiamo strategie di backup sicure e piani di ripristino rapido per garantire la protezione dei dati aziendali in caso di attacchi o guasti.",
        benefits: ["Connessione veloce e stabile", "Alta disponibilità e bassa latenza", "Adattamento alle esigenze di scalabilità aziendale"],
        buttonText: "Mostra benefici",
        buttonLink: "#"
    },
]; 