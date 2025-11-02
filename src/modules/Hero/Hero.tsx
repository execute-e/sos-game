import { useTranslation } from 'react-i18next';
import bg from './images/bg1.jpg';

const PRICE = '$14.99';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover bg-center text-center"
      style={{ backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%),url(${bg})` }}
      aria-labelledby="hero-title">
      <div className="c min-h-screen flex justify-center items-center flex-col sm:gap-y-[25px] gap-y-[15px]">
        <div className="font-bold font-accent text-white flex flex-col md:gap-y-[15px] gap-y-[7px] leading-none">
          <h1 id="hero-title" className="text-[50px] sm:text-[80px]">
            {t('hero.title')}
          </h1>
          <p className="font-bold text-[18px] sm:text-[22px] md:text-[24px]">
            {t('hero.subtitle')}
          </p>
        </div>
        <a
          href="#"
          target="_blank"
          className="bg-orange md:p-[15px] p-[5px] text-[12px] sm:text-[14px] md:text-[16px] font-bold rounded hover:bg-transparent border-orange border transition-colors">
          <dl className="flex items-center">
            <dt className="pr-2.5 border-r border-black capitalize">{t('hero.button')}</dt>
            <dd className="ml-2.5">{PRICE}</dd>
          </dl>
        </a>
        <a
          href="#about"
          className="absolute md:bottom-[10%] sm:bottom-[15%] bottom-[20%] text-white font-bold text-[16px] after:w-0 after:h-0 after:block uppercase z-0 after:border-[20px] after:absolute after:top-[150%] hover:after:translate-y-1 after:transition-transform after:left-[50%] after:-translate-x-1/2 after:border-transparent after:border-t-white">
          {t('hero.story')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
