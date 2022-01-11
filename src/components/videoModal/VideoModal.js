import { createPortal } from "react-dom";
import ModalStyled from "../styled/modalStyled/ModalStyled";
import OverlayStyled from "../styled/modalStyled/OverlayStyled";
import ModalWrapper from "../styled/modalStyled/ModalWrapper";
import VideoContentWrapper from "../styled/modalStyled/VideoContentWrapper";
import CloseButton from "../styled/modalStyled/CloseButton";
import { MdClose } from "react-icons/md";
import VideoContent from "../videoModal/VideoContent";
import SideContent from "../videoModal/SideContent";

const VideoModal = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <ModalWrapper>
      <OverlayStyled>
        <CloseButton onClick={onClose}>
          <MdClose />
        </CloseButton>
      </OverlayStyled>

      <ModalStyled>
        <VideoContentWrapper>
          <VideoContent />
        </VideoContentWrapper>
        <SideContent />
      </ModalStyled>
    </ModalWrapper>,
    document.getElementById("modal")
  );
};

export default VideoModal;
