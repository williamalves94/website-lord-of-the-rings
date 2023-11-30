import React from "react";
import { DivSidebar, DivTags } from "../styles/sidebar-styles";

export const SidebarSection = ({ active }) => {
  return (
    <DivSidebar sidebar={active}>
      <DivTags>
        <a href="">Terra Média</a>
        <a href="">Mapa</a>
        <a href="">Mordor</a>
      </DivTags>
    </DivSidebar>
  );
};
