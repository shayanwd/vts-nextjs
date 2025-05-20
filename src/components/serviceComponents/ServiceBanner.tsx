import Link from 'next/link'

const ServiceBanner = ({
    backgroundImage = "",
    title = "",
    paragraph = "",
    linkText = "Inizia Adesso",
    linkTo = "#"
}) => {
    return (
        <div>
            <section
                className='sv-banner-sec relative h-fit rounded-[10px] overflow-hidden min-h-[534px] pt-[193px] pb-[70px]'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="container">
                    <h1 className='sec-title !font-semibold text-white text-center mb-[32px]'>{title}</h1>
                    <p className='sec-parah max-w-[1103px] mx-auto text-white text-center !tracking-[1px]'>{paragraph}</p>
                    <Link href={linkTo} className='btn-lined mt-[32px] mx-auto'>{linkText}</Link>
                </div>
            </section>
        </div>
    )
}

export default ServiceBanner
