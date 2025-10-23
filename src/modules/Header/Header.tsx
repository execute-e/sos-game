import { useTranslation } from 'react-i18next';
import logo from './images/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="flex font-accent color-white">
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
        <ul>
            <li>
                <a href="#hero">{t("header.nav.main")}</a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
