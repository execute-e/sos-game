import { useTranslation } from 'react-i18next';
import bg from './images/bg.jpg';
import { QUOTES } from './quotes.config';
import Quote from './Quote/Quote';

const Quotes = () => {
  const { t } = useTranslation();
  return (
    <section
      id="quotes"
      className="min-h-screen bg-no-repeat bg-cover bg-center text-white flex justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 1) 100%),url(${bg})`,
      }}
      aria-labelledby="quotes-title">
      <div className="c flex lg:flex-row flex-col justify-between items-center text-center lg:text-start gap-x-[200px] gap-y-10 mt-10 lg:mt-0">
        <div className='flex flex-col lg:items-start items-center lg:w-1/2 w-full gap-y-2.5 lg:gap-y-8'>
          <div className='font-accent leading-none flex flex-col gap-y-2.5'>
            <h3 className='text-[18px] md:text-[24px]'>{t('quotes.subtitle')}</h3>
            <h2 id='quotes-title' className='text-[33px] md:text-[56px]'>{t('quotes.title')}</h2>
          </div>
          <p className='text-[14px] md:text-[16px] leading-none'>{t('quotes.text')}</p>
          <a
            href="#"
            className="bg-orange md:p-[15px] p-[5px] text-[14px] md:text-[16px] font-bold rounded text-dark hover:text-white hover:bg-transparent border-orange border transition-colors">
            {t('quotes.button')}
          </a>
        </div>
        <div className='flex flex-col gap-y-[15px] xl:gap-y-[30px]'>
          {QUOTES.map((item) => {
            return (
              <Quote
                key={item.id}
                id={item.id}
                imgSrc={item.imgSrc}
                nameKey={item.nameKey}
                majorKey={item.majorKey}
                textKey={item.textKey}
                dateKey={item.dateKey}
                dateTime={item.dateTime}
                twitterLink={item.twitterLink}
                className='lg:nth-[2n]:-translate-x-10'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
