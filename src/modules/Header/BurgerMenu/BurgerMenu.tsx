import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

interface IProps {
  isOpen: boolean;
  setOpen: () => void;
}

const BurgerMenu = ({ isOpen, setOpen }: IProps) => {
  const { t } = useTranslation();
  return createPortal(
    <nav
      className={`font-bold font-accent text-white fixed top-0 left-0 right-0 h-full flex justify-center items-center bg-black/80 transition-transform ${
        isOpen ? 'translate-y-0' : '-translate-y-2/1'
      }`}>
      <ul className="flex gap-y-5 text-[24px] text-center flex-col items-center">
        <li className="hover:text-orange transition-colors" onClick={setOpen}>
          <a href="#about">{t('header.nav.about')}</a>
        </li>
        <li className="hover:text-orange transition-colors" onClick={setOpen}>
          <a href="#game-features">{t('header.nav.gameFeatures')}</a>
        </li>
        <li className="hover:text-orange transition-colors" onClick={setOpen}>
          <a href="#system-requirements">{t('header.nav.systemRequirements')}</a>
        </li>
        <li className="hover:text-orange transition-colors" onClick={setOpen}>
          <a href="#quotes">{t('header.nav.quotes')}</a>
        </li>
        <li className="hover:text-orange transition-colors" onClick={setOpen}>
          <a href="#newsletter">{t('header.nav.newsletter')}</a>
        </li>
      </ul>
    </nav>,
    document.body,
  );
};

export default BurgerMenu;
