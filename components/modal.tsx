'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    modalIsOpen: boolean;
    // eslint-disable-next-line
    setModalIsOpen: (value: boolean) => void;
    children: React.ReactNode

}
function Modal(props: Props) {
  const { modalIsOpen, setModalIsOpen, children } = props;
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('modal-overlay')) {
      setModalIsOpen(false);
    }
  };
  return (
        <motion.div
            className="z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: modalIsOpen ? 1 : 0,
              display: modalIsOpen ? 'block' : 'none',
            }}
            transition={{ duration: 0.3 }}
        >
            <div>

                <div className="fixed bg-black/65 left-0 right-0 top-0 bottom-0 backdrop-blur-sm flex justify-center items-center modal-overlay"
                    onClick={handleClickOutside}>
                    <div onClick={(e) => e.stopPropagation()} className="bg-white rounded p-1 sm:p-4 m-4 max-h-screen overflow-auto min-w-full sm:min-w-96">{children}</div>
                </div>
            </div>
        </motion.div>
  );
}

export default Modal;
