
import PartnerBlock from './PartnerBlock';
import BannerSlideImg1 from '../../assets/prt-01.svg';
import BannerSlideImg2 from '../../assets/prt-02.svg';
import BannerSlideImg3 from '../../assets/prt-03.svg';
import BannerSlideImg4 from '../../assets/prt-04.svg';
import BannerSlideImg5 from '../../assets/prt-05.svg';
import BannerSlideImg6 from '../../assets/prt-06.svg';
import BannerSlideImg7 from '../../assets/empty.png';

const NostriPartner = () => {
    return (
        <section className='partnership-sec w-full py-[60px] bg-[#080808] rounded-[10px]'>
            <div className="container">
                <div className="prt-row flex justify-between items-center">
                    <div className="prt-col-1 max-w-[600px]">
                        <span className="btn-grey darken mb-[60px]">Partnership</span>
                        <h2 className='sec-title text-white  mb-[32px]'>I nostri <b>Partner</b></h2>
                        <p className='sec-parah text-[#A7A7A7]'>Collaboriamo con aziende leader del settore per garantire soluzioni tecnologiche di ultima generazione. I nostri partner condividono il nostro impegno per innovazione, solidità e sicurezza, contribuendo a offrire servizi sempre più performanti.</p>
                    </div>
                    <div className="prt-col-2 max-w-[618px] w-full py-[33px]">
                        <div className="prt-grid grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
                            <div className="cell-maxed col-span-3">
                                <PartnerBlock img={BannerSlideImg1} alt="Vianova">{null}</PartnerBlock>
                            </div>
                            <PartnerBlock img={BannerSlideImg2} alt="EnGenius">{null}</PartnerBlock>
                            <PartnerBlock img={BannerSlideImg3} alt="Satel">{null}</PartnerBlock>
                            <PartnerBlock img={BannerSlideImg4} alt="Promelit">{null}</PartnerBlock>
                            <PartnerBlock img={BannerSlideImg5} alt="Paso">{null}</PartnerBlock>
                            <PartnerBlock img={BannerSlideImg6} alt="Vianova">{null}</PartnerBlock>
                            <PartnerBlock img={BannerSlideImg7} alt="duh">{null}</PartnerBlock>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NostriPartner;
