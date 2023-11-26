import { Modal } from "../styles/modal-styles";
//import { CgClose } from "react-icons/cg";

export const ModalMap = ({ isOpen }) => {
  if (isOpen) {
    return (
      <Modal>
        <button>BUTTON</button>
        <img src="../src/assets/mapa.jpg" alt=""></img>
      </Modal>
    );
  }
};
