import { useTranslation } from 'react-i18next';
import logo from './images/logo.svg';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="top-0 left-0 right-0 font-accent color-white absolute text-[12px]">
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
          <ul className='flex gap-x-5 text-center'>
            <li>
              <a href="#hero">{t('header.nav.main')}</a>
            </li>
            <li>
              <a href="#about">{t('header.nav.about')}</a>
            </li>
            <li>
              <a href="#game-features">{t('header.nav.gameFeatures')}</a>
            </li>
            <li>
              <a href="#system-requirements">{t('header.nav.systemRequirements')}</a>
            </li>
            <li>
              <a href="#quotes">{t('header.nav.quotes')}</a>
            </li>
            <li>
              <a href="#newsletter">{t('header.nav.newsletter')}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
