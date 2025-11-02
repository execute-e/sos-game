import { useTranslation } from 'react-i18next';
import bg from './images/bg.jpg';
import { REQUIREMENTS } from '@/constants';

const Requirements = () => {
  const { t } = useTranslation();
  return (
    <section
      id="system-requirements"
      className="min-h-screen bg-no-repeat bg-cover sm:bg-center bg-left text-white"
      style={{
        backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%),url(${bg})`,
      }}
      aria-labelledby="features-title">
      <div className="c flex flex-col gap-y-5 items-center justify-center min-h-screen">
        <div className="flex flex-col font-accent text-white leading-none gap-y-4">
          <h3 className="text-[18px] md:text-[24px]">{t('requirements.subtitle')}</h3>
          <h2 className="text-[33px] md:text-[56px]" id='features-title'>{t('requirements.title')}</h2>
        </div>
        <dl className="grid grid-cols-2 lg:w-1/2 w-full self-start">
          {REQUIREMENTS.map((item, index) => {
            const isLastOddItem =
              index === REQUIREMENTS.length - 1 && REQUIREMENTS.length % 2 !== 0;
            return (
              <div
                key={item.id}
                className={`border border-gray sm:px-5 sm:py-[15px] px-[5px] py-[5px] flex flex-col sm:gap-y-2.5 gap-y-1 ${isLastOddItem ? 'col-span-2' : ''}`}>
                <dt className='text-orange font-accent text-[18px] md:text-[24px] leading-none'>{t(item.titleKey)}:</dt>
                <dd className='leading-[18px] text-[14px] md:text-[18px]'>{t(item.descriptionKey)}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default Requirements;
