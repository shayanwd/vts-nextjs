import Image from 'next/image'
import ServiceDetailsImg from '../../assets/svc-col_converted.webp'
import ServiceDetailsIcon from '../../assets/svc-col-ico_converted.webp'

const ServiceDetails = () => {
    return (
        <section className='sv-details-sec w-full py-[60px]'>
            <div className="container">
                <div className="grid grid-cols-[1.2fr_1fr] gap-[80px]">
                    <div className="svd-col1 max-w-[650px]">
                        <span className="btn-grey mb-[60px]">Dettagli</span>
                        <h2 className='sec-title mb-[32px]'><b>Connettività Affidabile,</b> <br /> Servizi Efficaci</h2>
                        <p className='sec-parah text-[#7D7D7D]'>Forniamo una vasta gamma di soluzioni integrate, dalla connessione Internet a alta velocità a servizi avanzati in cloud, tutti progettati per garantire prestazioni elevate, sicurezza e scalabilità. Assicurati che la tua azienda sia sempre connessa e pronta a crescere.</p>
                    </div>
                    <div className="svd-col2 relative max-w-[580px] ml-auto">
                        <Image
                            src={ServiceDetailsIcon}
                            alt="service-icon"
                            width={80}
                            height={80}
                            className='block object-contain rounded-full absolute top-0 left-0 bottom-0 my-auto -translate-x-1/2'
                        />
                        <Image
                            src={ServiceDetailsImg}
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
