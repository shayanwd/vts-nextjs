
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

interface ServiceBlockProps {
    img: string | StaticImageData;
    img2: string | StaticImageData;
    title: string;
    description: string;
    link?: string;
}

const ServiceBlock = ({ img, img2, title, description, link = '/' }: ServiceBlockProps) => {
    return (
        <div className="serv-block flex items-end w-full h-full relative z-1 min-h-[500px] px-[25px] py-[30px] overflow-hidden rounded-[10px]">
            <div className="serv-img absolute top-0 left-0 w-full h-full">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className='user-select-none pointer-events-none user-drag-none object-cover sv-img-1'
                />
                <Image
                    src={img2}
                    alt={title}
                    fill
                    className='user-select-none pointer-events-none user-drag-none object-cover sv-img-2'
                />
            </div>
            <div className="serv-content relative z-10">
                <h3 className='text-white text-[40px] leading-[100%] font-light mb-[12px]'>{title}</h3>
                <p className='text-[#A7A7A7] text-[20px] leading-[150%] font-normal tracking-[0.3px] mb-[10px]'>{description}</p>
                <Link href={link} className='font-[NeueMachina] text-[14px] font-normal text-[#FFFFFF] leading-[120%] mt-[40px] block'>
                    Vedi Dettagli
                </Link>
            </div>
        </div>
    )
}

export default ServiceBlock
