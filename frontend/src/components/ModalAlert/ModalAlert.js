import React, { useEffect, useState } from 'react';

function ModalAlert({ isOpenVerify, onCloseVerify }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (isModalOpen) {
            // Thêm lớp CSS khi modal được mở
            document.body.classList.add('modal-open');
        } else {
            // Xóa lớp CSS khi modal được đóng
            document.body.classList.remove('modal-open');
        }

        // Cleanup effect
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isModalOpen]);
    if (!isOpenVerify) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="z-50 rounded-lg bg-[#323232] px-8 py-2">
                <div className="mt-2 flex justify-end">
                    <button className="text-gray-500 hover:text-[#d2d2d2]" onClick={onCloseVerify}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mb-10">
                    <p className="text-2xl font-medium">Thông báo cho người dùng ở đây</p>
                </div>
            </div>
        </div>
    );
}

export default ModalAlert;
