import { ChangeEvent } from 'react';

interface Props {
    value: string;
    // eslint-disable-next-line
    setValue: (value: string) => void;
    name: string;
    labelText?: string;
}

function Input(props: Props) {
  const {
    value, setValue, name, labelText,
  } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
        <div className="w-full">
            {labelText
                && <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2 mt-4">{labelText}</label>
            }

            <input
                className="w-full border-2 border-black rounded p-1"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
  );
}

export default Input;
