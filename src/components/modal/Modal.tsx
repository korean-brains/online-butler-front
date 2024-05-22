import { useEffect } from 'react';

interface ModalProps {
  title?: string;
  closeModal(): void;
  children?: React.ReactNode;
}

const Modal = ({ title, closeModal, children }: ModalProps) => {
  const handleClose = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full items-center justify-center rounded-sm bg-black bg-opacity-40 px-5"
      onClick={handleClose}
    >
      <div className="min-w-0 break-words rounded-lg bg-white p-5 shadow-md">
        {title && <div className="mb-4 font-semibold">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
