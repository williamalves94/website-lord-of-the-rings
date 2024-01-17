import { Footer, LogoFooter } from "../../styles/styles-condado/footer-styles";
import FooterLogo from "../../assets/logosf.png";
import { useContext } from "react";
import { AllContext } from "../../context/context";
export const FooterFunc = () => {
  const { handleClickLogo } = useContext(AllContext);
  return (
    <Footer>
      <LogoFooter>
        <img src={FooterLogo} onClick={handleClickLogo} />
      </LogoFooter>
    </Footer>
  );
};
