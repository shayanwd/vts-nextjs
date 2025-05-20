"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

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
    },
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
    },
];

const ServiceReviews = () => {
    return (
        <section className="w-full bg-white rounded-[10px] pt-[60px]">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex flex-col items-center text-center mb-[40px]">
                    <span className="btn-grey mb-[32px] mx-auto">Relativo a questo servizio</span>
                    <h2 className='sec-title mb-[32px]'>Progetti <b className="font-bold">Fatti</b></h2>
                    <p className="text-[#7D7D7D] sec-parah  max-w-[910px] mx-auto">
                        Abbiamo implementato soluzioni di connettività avanzata e servizi integrati per aziende di diverse dimensioni, garantendo un'ottimizzazione continua dei flussi aziendali. Qui puoi trovare esperienze e testimonianze di chi ha scelto i nostri servizi per migliorare la propria infrastruttura tecnologica.
                    </p>
                </div>
            </div>
            <div className='px-[10px] mx-[-10px] overflow-hidden swp-visible'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        200: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3.5 },
                        1536: { slidesPerView: 3.5 },
                    }}
                >
                    {testimonials.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-[#F1F1F1] rounded-[10px] px-[16px] py-[20px] h-full flex flex-col justify-between gap-[28px] min-h-[260px]">
                                <div>
                                    <svg className='mb-[34px]' width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.6341 26.3672C27.7736 26.3672 30.3203 23.7483 30.3203 20.5172C30.3203 17.288 27.7736 14.6672 24.6341 14.6672C18.9499 14.6672 22.7387 3.35914 30.3203 3.35914V0.629135C16.7893 0.627184 11.4872 26.3672 24.6341 26.3672ZM8.25411 26.3672C11.3917 26.3672 13.9384 23.7483 13.9384 20.5172C13.9384 17.288 11.3917 14.6672 8.25411 14.6672C2.56791 14.6672 6.35676 3.35914 13.9384 3.35914V0.629135C0.409264 0.627184 -4.89279 26.3672 8.25411 26.3672Z" fill="#FF0000" />
                                    </svg>
                                    <p className="text-lg text-[#000] sec-parah !font-medium line-clamp-4">{review.text}</p>
                                </div>
                                <div className="flex items-center gap-[20px] mt-auto">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full object-cover block"
                                    />
                                    <div className="line h-[40px] w-[2px] block bg-[#FF0000] rounded-[10px]"></div>
                                    <span className="sec-parah text-[#000] !font-medium">{review.name}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ServiceReviews
