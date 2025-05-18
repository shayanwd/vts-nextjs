import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';

const PartnerBlock = ({ img, alt = '', children }: { img: string | StaticImageData, alt: string, children: React.ReactNode }) => (
    <div className="bg-[#181818] rounded-[10px] flex items-center justify-center w-full min-w-[200px] min-h-[100px] px-[34px] py-[30px]">
        {img ? (
            <Image
                src={img}
                alt={alt}
                className="h-full w-full max-h-[37px] max-w-[405px] object-contain"
                width={405}
                height={37}
            />
        ) : (
            children
        )}
    </div>
);

export default PartnerBlock