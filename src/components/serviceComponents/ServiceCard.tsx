import React from 'react'
import Link from 'next/link'

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    benefits?: string[];
    buttonText?: string;
    buttonLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    benefits = [],
    buttonText = "Mostra benefici",
    buttonLink = "#"
}) => {
    return (
        <div className="flip-card w-full h-[300px] rounded-[10px] perspective">
            <div className="relative w-full h-full rounded-[10px] transition-transform duration-700 transform-style-3d hover:rotate-y-180 border border-1 border-solid border-[#242424] border-width-[1px]">
                {/* Front Side */}
                <div className="fc-front absolute w-full h-full bg-[#121212] rounded-[10px] p-[30px] pt-[60px] backface-hidden">
                    <div className="service-ico absolute top-0 right-0 w-[100px] h-[100px]">
                        <img src={icon} alt="" className="w-full h-full object-contain object-right-top block" />
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-[28px] font-light text-white leading-[120%] mb-[12px] max-w-[280px]">{title}</h3>
                            <p className="text-[#A7A7A7] text-[16px] leading-[150%] tracking-[0.3px]">{description}</p>
                        </div>
                        <Link
                            href={buttonLink}
                            className="block bg-transparent text-white font-[NeueMachina] font-[14px] leading-[120%] mt-[20px]"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>

                {/* Back Side */}
                <div className="fc-back absolute w-full h-full bg-[#202020] rounded-[10px] p-[30px] pt-[60px] backface-hidden rotate-y-180">
                    <h3 className="text-[28px] font-light text-white leading-[120%] mb-[12px]">Benefici</h3>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-[8px]">
                                <span className="text-[#D31E1E] text-2xl">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="text-[#A7A7A7] text-[16px] leading-[150%] tracking-[0.3px]">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard 