import { ReactNode, MouseEvent } from 'react';
import './bottomModal.css';

interface IBottomModal {
    isOpen: boolean;
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
    children: ReactNode;
}

function BottomModal({ isOpen, onClose, children }: IBottomModal) {
    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        isOpen && (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={stopPropagation}>
                    <div className="resizer-handle"></div>
                    {children}
                </div>
            </div>
        )
    );
};

export default BottomModal;
