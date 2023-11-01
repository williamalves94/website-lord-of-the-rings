import LogoMain from '../../assets/logosf.png';
import { HeaderMordor, LogoImg, NavHeader } from '../styles-mordor/header-mordor-styles';
import { Link } from 'react-router-dom';

export const HeaderMordorSection = () => {
    return (
        <HeaderMordor>
            <LogoImg>
                <img src={ LogoMain }/>
            </LogoImg>   
           
           <NavHeader>                      
            <Link to="/"><a>Terra Média</a></Link>
                <p className="mapa">Mapa</p>
                <a href="#mordor">Mordor</a>       
            </NavHeader>
        </HeaderMordor>
    )
}