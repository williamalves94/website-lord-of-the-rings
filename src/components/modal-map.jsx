import React, { useState } from "react";
import Mapa from "../assets/mapa.jpg";

import { Modal } from "../styles/modal-styles";

export const ModalMap = ({ isOpen }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isOpen) {
    return (
      <Modal>
        <img src={Mapa} alt=""></img>
        <p onClick={() => setOpenModal}>X</p>
      </Modal>
    );
  }
};
