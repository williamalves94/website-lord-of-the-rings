import { Footer, LogoFooter } from "../../styles/styles-condado/footer-styles";
import FooterLogo from "../../assets/logosf.png";

export const FooterFunc = () => {
  return (
    <Footer>
      <LogoFooter>
        <img src={FooterLogo} />
      </LogoFooter>
    </Footer>
  );
};
