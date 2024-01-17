import { useContext } from "react";
import LogoMain from "../../assets/logosf.png";
import {
  HeaderMordor,
  LogoImg,
  NavHeader,
} from "../../styles/styles-mordor/header-mordor-styles";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { MenuIconMordor } from "../../styles/styles-mordor/header-mordor-styles";
import { AllContext } from "../../context/context";

export const HeaderMordorSection = () => {
  const {
    SidebarSection,
    sidebar,
    setSidebar,
    showSidebar,
    handleOpenModal,
    handleClickLogo,
  } = useContext(AllContext);

  return (
    <HeaderMordor>
      <LogoImg>
        <img src={LogoMain} onClick={handleClickLogo} />
      </LogoImg>
      <MenuIconMordor>
        <BiMenu onClick={showSidebar} />
        {sidebar && <SidebarSection active={setSidebar} />}
      </MenuIconMordor>
      <NavHeader>
        <Link to="/">
          <a>Terra Média</a>
        </Link>
        <p className="mapa" onClick={handleOpenModal}>
          Mapa
        </p>
        <a href="#mordor">Mordor</a>
      </NavHeader>
    </HeaderMordor>
  );
};
