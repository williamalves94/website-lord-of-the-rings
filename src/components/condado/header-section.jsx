import { Link } from "react-router-dom";
import React, { useContext } from "react";
import {
  Head,
  NavHeader,
  LogoImg,
  MenuIcon,
} from "../../styles/styles-condado/header-style";
import LogoMain from "../../assets/logosf.png";
import { BiMenu } from "react-icons/bi";
import { AllContext } from "../../context/context";

export const HeaderSection = () => {
  const {
    SidebarSection,
    sidebar,
    setSidebar,
    showSidebar,
    handleOpenModal,
    handleClickLogo,
  } = useContext(AllContext);

  return (
    <Head>
      <LogoImg>
        <img src={LogoMain} onClick={handleClickLogo} />
      </LogoImg>
      <MenuIcon>
        <BiMenu onClick={showSidebar} />
        {sidebar && <SidebarSection active={setSidebar} />}
      </MenuIcon>

      <NavHeader>
        <Link to="/">
          <a href="#home">Terra Média</a>
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
