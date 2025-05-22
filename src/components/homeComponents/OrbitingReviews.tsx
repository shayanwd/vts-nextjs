import React from 'react';

const OrbitingReviews = () => {
    return (
        <section className="w-full bg-[#080808] rounded-[10px] py-[20px] my-[10px] min-h-[940px]">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-[40px]">
                    <span className="btn-grey mb-[32px] mx-auto">Le opinioni dei nostri clienti</span>
                    <h2 className='sec-title mb-[32px]'>Cosa dicono di <b>noi</b></h2>
                    <p className="text-[#7D7D7D] sec-parah max-w-[910px] mx-auto">
                        Scopri le esperienze di chi ha scelto i nostri servizi per migliorare la propria infrastruttura tecnologica. Le testimonianze dei nostri clienti raccontano il nostro impegno quotidiano per l&apos;eccellenza.
                    </p>
                </div>
                <div className="reviews-orbit relative">
                    {/* Orbit animation and review display will be added here */}
                </div>
            </div>
        </section>
    );
};

export default OrbitingReviews;
