import { Home, ImageMain } from '../styles/home-main-style';
import MainImage from '../assets/imagemain.jpg';


export const HomeMain = () => {
    return (
      <Home>
        <ImageMain>
          <img src={ MainImage }/>            
        </ImageMain>
      </Home>
    );
  };