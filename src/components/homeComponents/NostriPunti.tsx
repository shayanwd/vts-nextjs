'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        id: 1,
        title: "Integrazione perfetta tra rete, voce, cloud e protezione aziendale.",
    },
    {
        id: 2,
        title: "Continuità operativa e massime prestazioni.",
    },
    {
        id: 3,
        title: "Soluzioni personalizzate per massima produttività e sicurezza.",
    }
];

const NostriPunti = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const slides = slidesRef.current;
        const numbers = numbersRef.current;

        if (!section || !slides.length || !numbers.length) return;

        // Initial setup
        slides.forEach((slide, index) => {
            if (!slide) return;
            if (index === 0) {
                slide.classList.add('active');
            } else if (index === 1) {
                slide.classList.add('next');
            }
        });
        numbers[0]?.classList.add('active');

        // Create scroll trigger for the entire section
        const trigger = ScrollTrigger.create({
            trigger: section,
            pin: true,
            start: "top top",
            end: () => `+=${window.innerHeight * (slides.length - 0.5)}`,
            scrub: 1,
            onUpdate: (self) => {
                const progress = Math.round(self.progress * (slides.length - 1));

                // Update slides
                slides.forEach((slide, index) => {
                    if (!slide) return;
                    slide.classList.remove('active', 'prev', 'next');

                    if (index === progress) {
                        slide.classList.add('active');
                    } else if (index === progress - 1) {
                        slide.classList.add('prev');
                    } else if (index === progress + 1) {
                        slide.classList.add('next');
                    }
                });

                // Update numbers
                numbers.forEach((num, i) => {
                    if (!num) return;
                    if (i === progress) {
                        num.classList.add('active');
                    } else {
                        num.classList.remove('active');
                    }
                });
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <div className="punti-sec" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
                    <div className="left-content">
                        {/* <span className="tag">CHI SIAMO</span> */}
                        <span className="btn-grey mb-[60px]">CHI SIAMO</span>
                        <h2 className="title">I nostri <b>punti</b> di forza</h2>
                        <p className="description">
                            La nostra esperienza e il nostro approccio innovativo ci permettono di
                            offrire soluzioni su misura, garantendo alle aziende tecnologie affidabili
                            e performanti.
                        </p>
                    </div>
                    <div className="right-content">
                        <div className="slides-container">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    ref={el => { slidesRef.current[index] = el; }}
                                    className="slide"
                                >
                                    <h3>{slide.title}</h3>
                                </div>
                            ))}

                            <div className="numbers">
                                {slides.map((slide, index) => (
                                    <div
                                        key={slide.id}
                                        ref={el => { numbersRef.current[index] = el; }}
                                        className="number-indicator"
                                    >
                                        {String(slide.id).padStart(2, '0')}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NostriPunti;
