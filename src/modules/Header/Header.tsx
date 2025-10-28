import { useTranslation } from 'react-i18next';
import logo from './images/logo.svg';
import Select from '@/UI/Select/Select';
import { LANGUAGES_OPTIONS } from '@/constants';
import SteamIcon from './icons/SteamIcon';
import XboxIcon from './icons/XboxIcon';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="top-0 left-0 right-0 font-accent font-bold tracking-[10%] text-white absolute text-[16px]">
      <div className="c flex justify-between items-center">
        <a href="#" aria-current="page" aria-label={t('header.logoAlt')}>
          <img
            src={logo}
            alt=""
            className="w-[55px] h-[55px]"
            width="55"
            height="55"
            loading="lazy"
            decoding="async"
          />
        </a>
        <nav>
          <ul className="flex gap-x-5 text-center">
            <li className="hover:text-orange transition-colors">
              <a href="#hero">
                {t('header.nav.main')}
              </a>
            </li>
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
        <div className="flex">
          <Select<string>
            defaultValue={i18n.language}
            options={LANGUAGES_OPTIONS}
            onChange={(e) => i18n.changeLanguage(e.value)}
            className='mr-[15px]'
            id='first'
          />
          <div className="flex gap-x-[15px] pl-[15px] border-l border-gray">
            <a href="#" target="_blank" className="hover:text-white text-orange transition-colors">
              <XboxIcon />
            </a>
            <a href="#" target="_blank" className='hover:text-white text-orange transition-colors'>
              <SteamIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
