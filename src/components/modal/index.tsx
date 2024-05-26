import React from "react";

import { ModalContainer, ModalBody } from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose = () => {},
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalBody>
        <button title="close" className="close" onClick={() => onClose()}>
        <span>&#10005;</span>
        </button>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
