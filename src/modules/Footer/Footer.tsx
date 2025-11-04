import { useTranslation } from 'react-i18next';
import logo from '/logo.svg';
import TwitchIcon from './icons/TwitchIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import TwitterIcon from './icons/TwitterIcon';
import FacebookIcon from './icons/FacebookIcon';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white">
      <div className="c flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b-2 border-gray flex-col lg:flex-row gap-y-[50px]">
          <a href="#" aria-current="page" aria-label={t('header.logoAlt')} className="z-100">
            <img
              src={logo}
              alt=""
              className="w-[55px] h-[55px] lg:w-20 lg:h-20"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
          </a>
          <nav className="font-accent">
            <ul className="flex gap-x-4 text-[16px] md:text-[18px] flex-wrap justify-center">
              <li className="hover:text-orange transition-colors">
                <a href="#about">{t('header.nav.about')}</a>
              </li>
              <li className="hover:text-orange transition-colors">
                <a href="#game-features">{t('header.nav.gameFeatures')}</a>
              </li>
              <li className="hover:text-orange transition-colors">
                <a href="#system-requirements">{t('header.nav.systemRequirements')}</a>
              </li>
              <li className="hover:text-orange transition-colors">
                <a href="#quotes">{t('header.nav.quotes')}</a>
              </li>
              <li className="hover:text-orange transition-colors">
                <a href="#newsletter">{t('header.nav.newsletter')}</a>
              </li>
            </ul>
          </nav>
          <ul className="flex gap-x-10 items-center">
            <li className='hover:text-blue-700 transition-colors'>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </li>
            <li className='hover:text-blue-300 transition-colors'>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </li>
            <li className='hover:text-red-500 transition-colors'>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </li>
            <li className='hover:text-purple-700 transition-colors'>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
                <TwitchIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center my-5 flex-col lg:flex-row gap-y-[50px]">
          <small className='text-gray-400 text-center'>{t('footer.copyright')}</small>
          <ul className="flex gap-x-2 text-[16px] [font-family:var(--font-family-accent)] flex-col lg:flex-row gap-y-[25px] items-center">
            <li className='hover:text-orange transition-colors'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.extra.policy')}
              </a>
            </li>
            <li className='hover:text-orange transition-colors border-x border-white px-2'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.extra.terms')}
              </a>
            </li>
            <li className='hover:text-orange transition-colors'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.extra.code')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
