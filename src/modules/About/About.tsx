import { EffectCards, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import bg from './images/bg.jpg';
import { useTranslation } from 'react-i18next';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-screen bg-no-repeat bg-cover bg-center text-white flex items-center sm:flex-row flex-col gap-y-[25px] justify-center overflow-x-hidden"
      style={{ backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 1) 100%),url(${bg})` }}>
      <div className="c flex flex-col gap-y-0.5 sm:w-1/2">
        <div className="flex flex-col-reverse pb-2.5 border-b-2 mb-2.5 border-white leading-none">
          <h2 id="about-title" className='text-[33px] font-accent'>{t('about.title')}</h2>
          <h3 className='font-accent text-[18px]'>{t('about.subtitle')}</h3>
        </div>
        <div className="text-[14px] sm:text-[18px] leading-none sm:leading-5 flex flex-col gap-y-3">
          <p>{t('about.textFirst')}</p>
          <p>
            {t('about.textSecond')}
            <span className='border-b-2 border-orange'>{t('about.textAccent')}</span>
          </p>
        </div>
      </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{
            clickable: true,
            dynamicBullets: true,
        }}
        className="lg:w-[300px] lg:h-[400px] md:w-[250px] md:h-[350px] w-[200px] h-[250px]">
        <SwiperSlide className='bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage: `url(${slide1})`}}></SwiperSlide>
        <SwiperSlide className='bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage: `url(${slide2})`}}></SwiperSlide>
        <SwiperSlide className='bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage: `url(${slide3})`}}></SwiperSlide>
        <SwiperSlide className='bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage: `url(${slide4})`}}></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default About;
