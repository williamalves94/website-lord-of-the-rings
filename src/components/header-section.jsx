import { Head, NavHeader, LogoImg } from '../styles/header-style';
import LogoMain from '../assets/logosf.png';

export const HeaderSection = () => {
    return (
        <Head>     
        <LogoImg>
            <img src={ LogoMain }/>
        </LogoImg>   
           
           <NavHeader>                      
                <a href="#home">Terra Média</a>
                <a href="#sobre">Mordor</a>       
            </NavHeader>
        </Head>
    );
};

//<p>The Lord of the Rings</p>