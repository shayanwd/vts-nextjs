import React from 'react'

const AboutChoose = () => {
    return (
        <section className="choose-sec bg-[#F1F1F1] py-[60px] rounded-[10px]">
            <div className="container">
                <div className="choose-inner flex items-center justify-between gap-[56px]">
                    <div className="choose-left grid grid-cols-2 gap-[10px] pr-[70px]">
                        <div className="chs-box p-[32px] bg-[#080808] rounded-[10px]">
                            <h2 className="text-[70px] font-bold ">800+</h2>
                            <p className="text-[30px] font-normal text-[#FFF]">Clienti Soddisfatti</p>
                        </div>

                        <div className="chs-box p-[32px] bg-[#080808] rounded-[10px]">
                            <h2 className="text-[70px] font-bold ">35+</h2>
                            <p className="text-[30px] font-normal text-[#FFF]">Anni di esperienza</p>
                        </div>

                        <div className="chs-box p-[32px] bg-[#080808] rounded-[10px]">
                            <h2 className="text-[70px] font-bold ">30+</h2>
                            <p className="text-[30px] font-normal text-[#FFF]">Partnership Strategiche</p>
                        </div>

                        <div className="chs-box p-[32px] bg-[#080808] rounded-[10px]">
                            <h2 className="text-[70px] font-bold ">53.5k+</h2>
                            <p className="text-[30px] font-normal text-[#FFF]">Dispositivi Connessi</p>
                        </div>
                    </div>

                    <div className="choose-right w-[50%] flex flex-col justify-start items-start gap-[32px]">
                        <h3 className="btn-grey">Punti di forza</h3>

                        <h1 className="banner-title text-[#000000] font-normal"><b>Perché</b> sceglierci?
                        </h1>

                        <p className="font-normal parah text-[#7D7D7D]">
                            Selezioniamo con cura i nostri partner per garantire soluzioni affidabili e all&apos;avanguardia. Collaboriamo solo con aziende leader nel settore, offrendo servizi di alta qualit&agrave; che rispondono alle reali esigenze dei nostri clienti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutChoose
