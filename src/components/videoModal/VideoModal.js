import { createPortal } from "react-dom";
import ModalStyled from "../styled/modalStyled/ModalStyled";
import OverlayStyled from "../styled/modalStyled/OverlayStyled";
import ModalWrapper from "../styled/modalStyled/ModalWrapper";
import VideoContentWrapper from "../styled/modalStyled/VideoContentWrapper";
import CloseButton from "../styled/modalStyled/CloseButton";
import { MdClose } from "react-icons/md";
import VideoContent from "../videoModal/VideoContent";
import SideContent from "../videoModal/SideContent";

const VideoModal = ({ isOpened, children }) => {
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
          <VideoContentWrapper>
            <VideoContent />
          </VideoContentWrapper>
          <SideContent />
        </ModalStyled>
      </OverlayStyled>
    </ModalWrapper>,
    document.getElementById("modal")
  );
};

export default VideoModal;
