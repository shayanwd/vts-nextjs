import Image from 'next/image'
import { ReactNode } from 'react'

interface ServiceDetailsProps {
    subtitle: string;
    title: ReactNode;
    description: string;
    mainImage: string;
    iconImage: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
    subtitle,
    title,
    description,
    mainImage,
    iconImage
}) => {
    return (
        <section className='sv-details-sec w-full py-[60px]'>
            <div className="container">
                <div className="grid grid-cols-[1.2fr_1fr] gap-[80px] items-center">
                    <div className="svd-col1 max-w-[650px]">
                        <span className="btn-grey mb-[60px]">{subtitle}</span>
                        <h2 className='sec-title mb-[32px]'>{title}</h2>
                        <p className='sec-parah text-[#7D7D7D]'>{description}</p>
                    </div>
                    <div className="svd-col2 relative max-w-[580px] ml-auto">
                        <Image
                            src={iconImage}
                            alt="service-icon"
                            width={80}
                            height={80}
                            className='block object-contain rounded-full absolute top-0 left-0 bottom-0 my-auto -translate-x-1/2'
                        />
                        <Image
                            src={mainImage}
                            alt="service-details"
                            width={580}
                            height={400}
                            className='w-full block object-cover rounded-[10px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetails
