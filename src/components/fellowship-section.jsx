import { Fellowship, ImageFellowship, DivMainFellowship, DivTextFellowship } from '../styles/fellowship-section-style';
import FellowshipImagemMain from '../assets/fellowshipmain.jpg';


export const FellowshipSection = () => {
    return (
      <Fellowship>
        <DivMainFellowship>
        <ImageFellowship>
            <img src={ FellowshipImagemMain }/>            
          </ImageFellowship>

          <DivTextFellowship>
            <p>A <br></br>Sociedade do Anel</p>
          </DivTextFellowship>
        </DivMainFellowship>       
      </Fellowship>
    );
  };