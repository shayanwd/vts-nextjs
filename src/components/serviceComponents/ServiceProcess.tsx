import React from 'react'

const ServiceProcess = () => {
    const processSteps = [
        {
            title: 'Analisi delle Esigenze',
            description: 'Valutiamo le necessità aziendali per progettare una soluzione su misura.'
        },
        {
            title: 'Progettazione della Soluzione',
            description: 'Definiamo la configurazione più adatta per garantire prestazioni ottimali.'
        },
        {
            title: 'Implementazione e Configurazione',
            description: "Realizziamo l'infrastruttura e configuriamo i servizi per una gestione efficiente."
        },
        {
            title: 'Test e Verifica',
            description: 'Verifichiamo il corretto funzionamento di tutte le soluzioni implementate.'
        },
        {
            title: 'Assistenza e Monitoraggio',
            description: "Forniamo supporto continuo per mantenere alta la qualità e l'affidabilità dei servizi."
        }
    ];

    return (
        <>
            <section className='sv-process-sec w-full py-[60px] bg-[#F1F1F1] rounded-[10px] mt-[10px]'>
                <div className="container">
                    <div className="grid grid-cols-[1.1fr_1fr] gap-[80px]">
                        <div className="svp-col1 max-w-[580px]">
                            <span className="btn-grey mb-[60px]">Come lavoriamo</span>
                            <h2 className='sec-title mb-[32px]'><b>Processo</b></h2>
                            <p className='sec-parah text-[#7D7D7D]'>Dalla valutazione iniziale alla messa in opera, seguiamo un approccio strutturato per garantire un&apos;installazione efficiente e un funzionamento ottimale nel tempo, offrendo sicurezza, affidabilità e continuità operativa.</p>
                        </div>
                        <div className="svp-col2 svp-timeline relative max-w-[600px] flex-1 ml-auto">
                            <div className="svp-scroller">
                                {processSteps.map((step, idx) => (
                                    <div className="svp-cell flex items-start gap-[29px] relative min-h-[180px]" key={idx}>
                                        <div className="flex flex-col items-center">
                                            <div className="svp-ico w-[100px] h-[100px] aspect-square rounded-full bg-[#FF0000] flex items-center justify-center text-white text-[32px] font-extrabold font-[NeueMachina] leading-[120%] select-none">
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                        <div className='pt-[30px]'>
                                            <h3 className="text-[32px] font-normal text-[#1A1A1A] leading-[100%] mb-[10px]">{step.title}</h3>
                                            <p className="text-[#7D7D7D] sec-parah">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceProcess
