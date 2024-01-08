import {
  FooterMordor,
  LogoFooterMordor,
} from "../../styles/styles-mordor/footer-mordor-styles";
import FooterMordorLogo from "../../assets/logosf.png";

export const FooterMordorSection = () => {
  return (
    <FooterMordor>
      <LogoFooterMordor>
        <img src={FooterMordorLogo} />
      </LogoFooterMordor>
    </FooterMordor>
  );
};
