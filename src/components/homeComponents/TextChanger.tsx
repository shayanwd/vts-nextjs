"use client";

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import DotList from '../../assets/dot-list.svg';
import hangerBg from '../../assets/text-changer.png';

gsap.registerPlugin(ScrollTrigger);

const words = [
    'connection',
    'innovation',
    'technology',
    'creativity',
    'design',
    'future',
    'digital',
    'progress',
    'vision',
    'impact'
];

const TextChanger = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const wordRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Text change animation
        const interval = setInterval(() => {
            // Create a new timeline for each change
            const tl = gsap.timeline();

            tl.to(wordRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    setCurrentWord(prev => {
                        const currentIndex = words.indexOf(prev);
                        const nextIndex = (currentIndex + 1) % words.length;
                        return words[nextIndex];
                    });
                }
            })
                .to(wordRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
        }, 2000);

        // Scroll trigger animation
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".text-changer-section",
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });

        scrollTl.to(".highlight-word", {
            color: "#FF0000",
            duration: 1
        });

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="text-changer-section py-20 relative">
            <Image
                src={hangerBg}
                alt="Background"
                fill
                className="object-cover -z-10"
                priority
            />
            <div className="container mx-auto">
                <div className="text-center max-w-[1000px] mx-auto text-[50px]">
                    <h3>
                        <span className='font-[600]'>Figma ipsum</span> component variant
                    </h3>
                    <div className="flex items-center justify-center gap-2 ">
                        <h3 className='flex items-center gap-2'>
                            main layer
                            <span className="inline-flex gap-2 mx-2">
                                <Image src={DotList} alt="dot-list" width={128} height={41} />
                            </span>
                            scrolling effect
                        </h3>
                    </div>
                    <div>
                        <span className="italic">italic</span>
                        <span
                            ref={wordRef}
                            className="text-[#FF0000] font-bold mx-2"
                            style={{ display: 'inline-block' }}
                        > {currentWord} </span>
                        <span>auto.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextChanger;
