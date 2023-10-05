import { Footer, LogoFooter } from '../styles/footer-styles';
import FooterLogo from '../assets/logosf.png';

export const FooterFunc = () => {
    return (
        <Footer>
            <LogoFooter>
                <img src={ FooterLogo }/>
            </LogoFooter>               
        </Footer>
    );
};