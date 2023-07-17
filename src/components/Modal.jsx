import { useState } from "react";


const Modal = ({ body, modalBTN, btnType }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className={`${btnType}`}
                onClick={() => setShowModal(true)}
            >
                {modalBTN}
            </button>
            {showModal ? (
                <>
                    <div className="fixed top-0 right-0 left-0 bottom-0 z-40 bg-black bg-opacity-70"></div>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <button
                                    className="bg-transparent border-0 text-black float-right absolute top-2 right-2 z-50"
                                    onClick={() => setShowModal(false)}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5L5 19" stroke="#000316" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 5L19 19" stroke="#000316" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div className="relative p-6 flex-auto">
                                    {body}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default Modal;
