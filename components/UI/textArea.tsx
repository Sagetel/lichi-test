import { ChangeEvent } from 'react';

interface Props {
    value: string;
    // eslint-disable-next-line
    setValue: (value: string) => void;
    name: string;
    labelText: string;
}

function TextArea(props: Props) {
  const {
    value, setValue, name, labelText,
  } = props;
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
        <div className="w-full">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2 mt-4">{labelText}</label>
            <textarea
                className="w-full p-1"
                rows={10}
                value={value}
                onChange={handleChange}
            />
        </div>
  );
}

export default TextArea;
