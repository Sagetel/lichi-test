import React from 'react';

interface Props {
  text: string;
  func?: () => void;
  type?: string;
}
function Button(props: Props) {
  const { text, func, type } = props;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (func) {
      func();
    }
  };
  return (
    <button
      onClick={(e) => { handleClick(e); }}
      type={type ? type as 'button' | 'submit' | 'reset' : 'button'}
      className='bg-green-500 text-white font-bold py-2 px-4 rounded '>
      {text}
    </button>
  );
}

export default Button;
