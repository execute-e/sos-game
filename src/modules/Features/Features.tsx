import { useTranslation } from 'react-i18next';
import bg from './images/bg.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Features = () => {
  const { t } = useTranslation();
  return (
    <section
      id="game-features"
      className="min-h-screen bg-no-repeat bg-cover sm:bg-center bg-left text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, 
        rgba(0,0,0,0.4) 50%, 
        rgba(0,0,0,0.8) 100%),url(${bg})`,
      }}
      aria-labelledby="features-title">
      <div className="flex items-center justify-end c min-h-screen">
        <div className="flex flex-col sm:w-1/2 w-full gap-y-4">
          <div className="flex flex-col font-accent leading-none gap-y-2">
            <h3 className="text-[18px] lg:text-[24px]">{t('features.subtitle')}</h3>
            <h2 className="text-[33px] lg:text-[56px]" id="features-title">
              {t('features.title')}
            </h2>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-orange font-accent text-[21px] lg:text-[36px] leading-none">
                {t('features.accordion.firstTitle')}
              </AccordionTrigger>
              <AccordionContent className="leading-4 text-[14px] lg:text-[18px]">
                {t('features.accordion.firstText')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-orange font-accent text-[21px] lg:text-[36px] leading-none">
                {t('features.accordion.secondTitle')}
              </AccordionTrigger>
              <AccordionContent className="leading-4 text-[14px] lg:text-[18px]">
                {t('features.accordion.secondText')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-orange font-accent text-[21px] lg:text-[36px] leading-none">
                {t('features.accordion.thirdTitle')}
              </AccordionTrigger>
              <AccordionContent className="leading-4 text-[14px] lg:text-[18px]">
                {t('features.accordion.thirdText')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Features;
