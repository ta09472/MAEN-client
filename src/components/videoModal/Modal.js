import { createPortal } from "react-dom";
import ModalStyled from "../styled/modalStyled/ModalStyled";
import OverlayStyled from "../styled/modalStyled/OverlayStyled";
import ModalWrapper from "../styled/modalStyled/ModalWrapper";
import CloseButton from "../styled/modalStyled/CloseButton";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpened, children }) => {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <ModalWrapper>
      <OverlayStyled>
        <CloseButton>
          <MdClose />
        </CloseButton>
        <ModalStyled>
          <div className="modal-content">{children}</div>
        </ModalStyled>
      </OverlayStyled>
    </ModalWrapper>,
    document.getElementById("modal")
  );
};

export default Modal;
