import { useCallback, useRef, useState, type KeyboardEvent } from 'react';

interface IEvent<T> {
  value: T;
}

interface IOptions<T> {
  text: string;
  value: T;
}

interface IProps<T> {
  defaultValue: string;
  options: IOptions<T>[];
  onChange?: (arg: IEvent<T>) => void;
  className?: string;
  label?: string;
  id?: string;
}

const Select = <T,>({
  defaultValue,
  options,
  onChange,
  className,
  label = 'Select option',
  id = 'select-' + Math.random().toString(36).substring(2, 9),
}: IProps<T>) => {
  const [isOpened, setOpened] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpened(false);
    buttonRef.current?.focus();
  }, []);

  return (
    <div
      className={`relative flex items-center ${className}`}
      onBlur={(e) => {
        if (!e.relatedTarget?.hasAttribute('data-not-blur')) {
          setOpened(false);
        }
      }}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        switch (e.code) {
          case 'Escape':
            close();
            break;
        }
      }}>
      <label id={`${id}-label`} htmlFor={`${id}-button`} className="sr-only">
        {label}
      </label>

      <button
        id={`${id}-button`}
        ref={buttonRef}
        onClick={() => setOpened((state) => !state)}
        className="flex justify-between items-center gap-x-0.5 cursor-pointer px-1"
        aria-haspopup="listbox"
        aria-expanded={isOpened}
        aria-labelledby={`${id}-label ${id}-button`}>
        {value}
        <svg
          width={20}
          height={20}
          className={`flex justify-center items-center pointer-events-none transition-transform ${
            isOpened ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <ul
        className={`absolute z-10 top-full overflow-y-auto [scrollbar-width:none] bg-black w-full divide-y border-gray rounded-sm transition-[max-height] duration-300 ${
          isOpened ? 'max-h-[150px]' : 'max-h-0'
        }`}
        role="listbox"
        aria-labelledby={`${id}-label`}
        tabIndex={-1}>
        {options.map((item, index) => {
          return (
            <li role="option" key={index}>
              <button
                data-not-blur
                onClick={() => {
                  setValue(item.text);
                  onChange?.({ value: item.value });
                  close();
                }}
                tabIndex={isOpened ? 0 : -1}
                className="w-full flex justify-start focus:outline-0 focus:bg-gray-900 cursor-pointer first:rounded-t-sm last:rounded-b-sm border-gray px-1 hover:bg-gray-900 transition-colors">
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;