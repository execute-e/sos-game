import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    isOpen: boolean;
    children: ReactNode;
}

const BurgerMenu = ({ isOpen, children }: IProps) => {
    console.log(isOpen);
  return createPortal(
    <nav
      className={`font-bold font-accent text-white fixed top-0 left-0 right-0 h-full flex justify-center items-center bg-black/80 transition-transform ${
        isOpen ? 'translate-y-0' : '-translate-y-2/1'
      }`}>
      {children}
    </nav>,
    document.body
  );
};

export default BurgerMenu;
