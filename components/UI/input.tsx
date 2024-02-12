import { ChangeEvent } from "react";

interface Props {
    value: string;
    setValue: (value: string) => void;
    name: string;
    labelText: string;
}

function Input(props: Props) {
    const { value, setValue, name, labelText } = props;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2 mt-4">{labelText}</label>

            <input
                className="w-full"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;