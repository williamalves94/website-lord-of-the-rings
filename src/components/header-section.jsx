import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Head, NavHeader, LogoImg, MenuIcon } from "../styles/header-style";
import LogoMain from "../assets/logosf.png";
import { BiMenu } from "react-icons/bi";
import { SidebarSection } from "./sidebar";

export const HeaderSection = ({ handleOpenModal }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Head>
      <LogoImg>
        <img src={LogoMain} href="#" />
      </LogoImg>
      <MenuIcon>
        <BiMenu onClick={showSidebar} />
        {sidebar && <SidebarSection active={setSidebar} />}
      </MenuIcon>

      <NavHeader>
        <Link to="/">
          <a>Terra Média</a>
        </Link>
        <p onClick={handleOpenModal} className="mapa">
          Mapa
        </p>

        <Link to="/mordor">
          <a>Mordor</a>
        </Link>
      </NavHeader>
    </Head>
  );
};
