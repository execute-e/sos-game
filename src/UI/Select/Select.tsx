import { useState } from 'react';

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
}

const Select = <T,>({ defaultValue, options, onChange }: IProps<T>) => {
  const [isOpened, setOpened] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="relative">
      <button
        onClick={() => setOpened((state) => !state)}
        className="flex justify-between items-center gap-x-0.5 cursor-pointer px-1 focus:outline-0 focus:ring focus:ring-blue-500">
        {value}
        <svg
          width={20}
          height={20}
          className="flex justify-center items-center pointer-events-none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
            fill="white"
          />
        </svg>
      </button>
      <ul
        className={`absolute z-10 bg-black w-full divide-y border-gray rounded-sm transition-opacity ${
          isOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }}`}>
        {options.map((item, index) => {
          return (
            <li
              className="cursor-pointer first:rounded-t-sm last:rounded-b-sm border-gray px-1 hover:bg-gray-900 transition-colors"
              onClick={() => {
                setValue(item.text);
                onChange?.({ value: item.value });
                setOpened(false);
              }}
              key={index}>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
