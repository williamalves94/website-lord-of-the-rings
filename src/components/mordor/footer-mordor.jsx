import {
  FooterMordor,
  LogoFooterMordor,
} from "../../styles/styles-mordor/footer-mordor-styles";
import FooterMordorLogo from "../../assets/logosf.png";
import { useContext } from "react";
import { AllContext } from "../../context/context";

export const FooterMordorSection = () => {
  const { handleClickLogo } = useContext(AllContext);
  return (
    <FooterMordor>
      <LogoFooterMordor>
        <img src={FooterMordorLogo} onClick={handleClickLogo} />
      </LogoFooterMordor>
    </FooterMordor>
  );
};
