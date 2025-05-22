'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';
import BannerParticles from "@/components/homeComponents/BannerParticles";



const Banner = () => {


    return (
        <>

            <div className="relative h-fit">
                <section className="banner-sec relative h-fit rounded-[10px] overflow-hidden bg-[black] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/assets/bnn-bg_converted.webp')" }}>
                    <div className="relative h-full">
                        <div className="absolute inset-0">
                            <BannerParticles />
                        </div>
                        <div className="bn-inner relative z-10">
                            <div className="tx-wrap">
                                <div className="top-text">
                                    <h1 className="text-5xl font-bold text-white mb-6">
                                        Accellera la <br />
                                        <b>connettività</b> e la <b>sicurezza</b> <br />
                                        della tua azienda
                                    </h1>
                                    <Link
                                        href="#"
                                        className="btn-lined"
                                    >
                                        Inizia Adesso
                                    </Link>
                                </div>
                                <div className="bottom-text mt-8">
                                    <p className="sec-parah text-white max-w-3xl">
                                        Ogni azienda ha esigenze uniche: per questo sviluppiamo soluzioni integrate che combinano reti
                                        aziendali, telecomunicazioni, cloud e sistemi di controllo avanzati. Offriamo tecnologie
                                        avanzate per garantire infrastrutture solide, comunicazioni efficienti e un&apos;operativit&agrave; senza
                                        interruzioni.
                                    </p>
                                </div>
                            </div>
                            <div className="bn-swiper mt-12">
                                <Swiper
                                    modules={[Autoplay, Pagination, Navigation]}
                                    spaceBetween={77}
                                    slidesPerView="auto"
                                    loop={true}
                                    speed={800}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                    }}
                                    className="brand-swiper"
                                >
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-01_converted.webp"
                                                alt="Fini"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-02_converted.webp"
                                                alt="EnGenius"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-03_converted.webp"
                                                alt="Vianova"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-04_converted.webp"
                                                alt="Satel"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-05_converted.webp"
                                                alt="Bettini"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-06_converted.webp"
                                                alt="Promelit"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-07_converted.webp"
                                                alt="Paso"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center justify-center h-32">
                                            <Image
                                                src="/assets/vtl-08_converted.webp"
                                                alt="Paso"
                                                width={200}
                                                height={128}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </>

    );
};

export default Banner;
