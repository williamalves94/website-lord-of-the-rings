import {
  //MainImageEagle,
  TitleMordor,
  DivMainImageEagleAndTitle,
  EagleImage,
} from "../styles-mordor/mordor-styles";
import ImageMainMordor from "../../assets/mordor/mordormain.png";

export const MordorEagleSection = () => {
  return (
    <DivMainImageEagleAndTitle>
      <TitleMordor>
        <p className="title-mordor">Mordor</p>
      </TitleMordor>
      <EagleImage>
        <img src={ImageMainMordor} />
      </EagleImage>
    </DivMainImageEagleAndTitle>
  );
};
