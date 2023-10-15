import LogoMain from '../../assets/logosf.png';
import { HeaderMordor, LogoImg, NavHeader } from '../styles-mordor/header-mordor-styles';

export const HeaderMordorSection = () => {
    return (
        <HeaderMordor>
            <LogoImg>
                <img src={ LogoMain }/>
            </LogoImg>   
           
           <NavHeader>                      
                <a href="#condado">Terra Média</a>
                <a href="#sobre">Mapa</a>
                <a href="#mordor">Mordor</a>       
            </NavHeader>
        </HeaderMordor>
    )
}