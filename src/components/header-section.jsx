import { Head, NavHeader, LogoImg } from '../styles/header-style';
import LogoMain from '../assets/logosf.png';

export const HeaderSection = () => {
    return (
        <Head>     
        <LogoImg>
            <img src={ LogoMain }/>
        </LogoImg>   
           
           <NavHeader>                      
                <a href="#condado">Terra Média</a>
                <a href="#sobre">Mapa</a>
                <a href="#mordor">Mordor</a>       
            </NavHeader>
        </Head>
    );
};