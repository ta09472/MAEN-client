import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <div>This is portaled Modal</div>,
    document.getElementById("modal")
  );
};

export default Modal;
