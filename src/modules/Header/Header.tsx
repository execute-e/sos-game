import { useTranslation } from 'react-i18next';
import logo from './images/logo.svg';
import Select from '@/UI/Select/Select';
import { LANGUAGES_OPTIONS } from '@/constants';
import SteamIcon from './icons/SteamIcon';
import XboxIcon from './icons/XboxIcon';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`top-0 left-0 right-0 leading-none font-accent font-bold tracking-[10%] text-white text-[16px] lg:text=[20px] absolute`}>
      <div className="c flex justify-between items-center min-h-[55px]">
        <a href="#" aria-current="page" aria-label={t('header.logoAlt')} className="z-100">
          <img
            src={logo}
            alt=""
            className="w-[35px] h-[35px] lg:w-[55px] lg:h-[55px]"
            width="55"
            height="55"
            loading="lazy"
            decoding="async"
          />
        </a>
        <nav className="md:block hidden">
          <ul className="flex md:gap-x-3 text-[12px] sm:text-[14px] md:text-[16px] text-center">
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
        <div className="flex z-100">
          <Select<string>
            defaultValue={i18n.language}
            options={LANGUAGES_OPTIONS}
            onChange={(e) => i18n.changeLanguage(e.value)}
            className="mr-[5px] lg:mr-[15px]"
            id="first"
          />
          <div className="flex gap-x-[15px] pl-[5px] lg:pl-[15px] border-l border-gray">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-orange transition-colors hidden md:block"
              aria-label={t('header.xboxLabel')}>
              <XboxIcon />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-orange transition-colors hidden md:block"
              aria-label={t('header.steamLabel')}>
              <SteamIcon />
            </a>
            <button
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle('isLock');
                setMenuOpen((state) => !state);
              }}
              className="cursor-pointer hover:opacity-70 transition-opacity md:hidden flex flex-col items-center justify-center gap-y-1 w-5 h-5">
              <span
                className={`bg-white h-0.5 w-[80%] rounded-sm transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
              <span
                className={`bg-white h-0.5 w-[80%] rounded-sm transform-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
              <span
                className={`bg-white h-0.5 w-[80%] rounded-sm transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
            </button>
          </div>
        </div>
      </div>
      <BurgerMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;