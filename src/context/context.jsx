import { createContext, useState } from "react";
import { SidebarSection } from "../components/condado/sidebar";
import { ModalMap } from "../components/condado/modal-map";
//import {MordorSection} from '../components/mordor/mordor-section'

export const AllContext = createContext({});

export const AllProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    setSidebar(!sidebar);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AllContext.Provider
      value={{
        SidebarSection,
        sidebar,
        setSidebar,
        showSidebar,
        ModalMap,
        openModal,
        setOpenModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
