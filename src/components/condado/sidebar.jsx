import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  DivSidebar,
  DivTags,
} from "../../styles/styles-condado/sidebar-styles";
import { AllContext } from "../../context/context";

export const SidebarSection = ({ active }) => {
  const { handleOpenModal, setSidebar, sidebar } = useContext(AllContext);
  return (
    //<AllContext.Provider>
    <DivSidebar sidebar={active}>
      <DivTags>
        <Link to="/">
          <a onClick={() => setSidebar(!sidebar)}>Terra Média</a>
        </Link>
        <p className="mapa-sidebar" onClick={handleOpenModal}>
          Mapa
        </p>
        <Link to="/mordor">
          <a onClick={() => setSidebar(!sidebar)}>Mordor</a>
        </Link>
      </DivTags>
    </DivSidebar>
    //</AllContext.Provider>
  );
};
