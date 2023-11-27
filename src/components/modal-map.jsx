import React from "react";
import Mapa from "../assets/mapa.jpg";

import { Modal } from "../styles/modal-styles";

export const ModalMap = ({ isOpen, handleCloseModal }) => {
  if (isOpen) {
    return (
      <Modal>
        <img src={Mapa} alt=""></img>
        <p onClick={handleCloseModal}>X</p>
      </Modal>
    );
  }
};
