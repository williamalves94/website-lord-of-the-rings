import React from "react";
import Mapa from "../assets/mapa.jpg";

import {
  Modal,
  DivShadowModal,
  CloseButton,
  ImageModal,
} from "../styles/modal-styles";

export const ModalMap = ({ isOpen, handleCloseModal }) => {
  if (isOpen) {
    return (
      <Modal>
        <DivShadowModal>
          <ImageModal>
            <CloseButton>
              <p onClick={handleCloseModal}>X</p>
            </CloseButton>
            <img src={Mapa} alt=""></img>
          </ImageModal>
        </DivShadowModal>
      </Modal>
    );
  }
};
