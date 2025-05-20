'use client';
import React from 'react';

const testimonials = [
    {
        text: "I recently switched to SkyConnect and I couldn't be happier! The call quality is crystal clear, and their customer service is top-notch. Highly recommend!",
        name: 'Floyd Miles',
        avatar: '/assets/revv-1.png',
    },
    {
        text: "I've been using WaveTalk for a few months now, and it's been a game changer. The internet speed is lightning fast, and I love the flexibility of their plans. Definitely worth it!",
        name: 'Darrell Steward',
        avatar: '/assets/revv-2.png',
    },
    {
        text: "I can't say enough good things about StreamNet. The customer support is always available and helpful, and the streaming quality is excellent. Highly recommend for anyone!",
        name: 'Jerome Bell',
        avatar: '/assets/revv-3.png',
    },
    {
        text: "Switching to ConnectPro was the best decision I made this year. Their features are extensive, and I rarely experience dropped calls. Plus, their app is super easy to use!",
        name: 'Darlene Robertson',
        avatar: '/assets/revv-4.png',
    }
];

const OrbitingReviews = () => {
    return (
        <section className="w-full bg-[#080808] rounded-[10px] py-[20px] my-[10px] min-h-[940px]">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-[40px]">
                    <span className="btn-grey mb-[32px] mx-auto">Le opinioni dei nostri clienti</span>
                    <h2 className='sec-title mb-[32px]'>Cosa dicono di <b>noi</b></h2>
                    <p className="text-[#7D7D7D] sec-parah max-w-[910px] mx-auto">
                        Scopri le esperienze di chi ha scelto i nostri servizi per migliorare la propria infrastruttura tecnologica. Le testimonianze dei nostri clienti raccontano il nostro impegno quotidiano per l'eccellenza.
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
