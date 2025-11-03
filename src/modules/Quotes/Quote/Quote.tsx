import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import type { IQuote } from '../quotes.config';

interface IProps extends IQuote {
  className?: string;
}

const Quote = ({
  id,
  imgSrc,
  nameKey,
  majorKey,
  textKey,
  dateKey,
  dateTime,
  twitterLink,
  className,
}: IProps) => {
  const { t } = useTranslation();
  return (
    <blockquote
      id={`quote-${id}`}
      aria-labelledby={`quote-title-${id}`}
      aria-describedby={`quote-text-${id}`}
      role="article"
      className={twMerge(
        'bg-[rgba(255,255,255,0.08)] flex flex-col gap-y-2 relative p-[15px] rounded-[10px]',
        className,
      )}>
      <div className="flex items-center sm:gap-x-[30px] gap-x-[15px] xl:mb-4">
        <div className="w-[50px] h-[50px] relative after:w-full after:h-full after:rounded-[50%] after:bg-orange after:translate-x-1 after:absolute after:inset-0 after:z-0">
          <img
            src={imgSrc}
            alt={t(nameKey)}
            className="rounded-[50%] absolute inset-0 z-10"
            width="50"
            height="50"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col leading-none">
          <cite
            id={`quote-title-${id}`}
            className="font-accent text-orange text-[21px] md:text-[24px]">
            {t(nameKey)}
          </cite>
          <p className="text-gray-500 text-[14px] md:text-[18px]">{t(majorKey)}</p>
        </div>
      </div>
      <q id={`quote-text-${id}`} className='text-[14px] md:text-[18px]'>{t(textKey)}</q>
      <time dateTime={dateTime} className='text-gray-500 text-[12px] md:text-[14px]'>{t(dateKey)}</time>
      {twitterLink && (
        <a
          href={twitterLink}
          target="_blank"
          className='absolute top-[15px] right-[15px] text-white opacity-30 hover:text-orange hover:opacity-100 transition-all'
          aria-label="Twitter"
          rel="noopener noreferrer"
          >
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden>
            <path
              d="M18.0249 1.65195C17.3499 1.93664 16.634 2.12355 15.901 2.20646C16.6634 1.77003 17.2498 1.08034 17.5258 0.257327C16.8 0.667654 16.0058 0.956745 15.1776 1.11211C14.4787 0.401064 13.5013 -0.00168555 12.4787 5.30263e-06C10.4373 5.30263e-06 8.78051 1.5768 8.78051 3.52188C8.78051 3.79826 8.81317 4.06763 8.8771 4.32485C5.8033 4.17773 3.07909 2.7761 1.25482 0.644788C0.936284 1.16436 0.754593 1.77003 0.754593 2.41569C0.754593 3.63712 1.40719 4.71537 2.39924 5.34712C1.81188 5.32997 1.2374 5.17888 0.724004 4.90653V4.95144C0.724004 6.6575 1.99883 8.08115 3.68971 8.4054C3.14514 8.54586 2.57416 8.56647 2.01999 8.46565C2.49078 9.8652 3.85691 10.8833 5.47442 10.9129C4.20902 11.8561 2.61474 12.4202 0.881777 12.4202C0.587102 12.4199 0.292691 12.4034 0 12.3709C1.63637 13.37 3.58058 13.9539 5.66876 13.9539C12.4707 13.9539 16.1896 8.58571 16.1896 3.93048C16.1896 3.77821 16.1896 3.62595 16.1781 3.47478C16.9017 2.97603 17.5267 2.35884 18.0238 1.65195H18.0249Z"
              fill="currentColor"
            />
          </svg>
        </a>
      )}
    </blockquote>
  );
};

export default Quote;
