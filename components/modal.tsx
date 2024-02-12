"use client"
interface Props {
    modalIsOpen: boolean;
    setModalIsOpen: (value: boolean) => void;
    children: React.ReactNode

}
function Modal(props: Props) {
    const { modalIsOpen, setModalIsOpen, children } = props;
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains("modal-overlay")) {
            setModalIsOpen(false);
        }
    };
    return (
        <div>
            {
                modalIsOpen &&
                <div className="fixed bg-black/65 left-0 right-0 top-0 bottom-0 z-10 backdrop-blur-sm flex justify-center items-center modal-overlay"
                    onClick={handleClickOutside}>
                    <div onClick={(e) => e.stopPropagation()} className="bg-white rounded p-4">{children}</div>
                </div>
            }
        </div>
    )

}

export default Modal