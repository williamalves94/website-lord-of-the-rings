import {
  Sauron,
  TitleSauron,
  DivImgAndTextSauron,
  DivImgSauron,
  DivTextSauron,
  DivThreeImgSauron,
  ImageSauron,
} from "../styles-mordor/sauron-styles";
import SauronMain from "../../assets/sauron/sauronmain.jpg";
import Sauron1 from "../../assets/sauron/sauron1.png";
import SauronTeste from "../../assets/sauron/sauronteste.jpg";
import Sauron3 from "../../assets/sauron/sauron3.jpg";

export const SauronSection = () => {
  return (
    <Sauron>
      <TitleSauron>
        <p>Sauron</p>
      </TitleSauron>

      <DivImgAndTextSauron>
        <DivImgSauron>
          <img src={SauronMain} />
        </DivImgSauron>

        <DivTextSauron>
          <p>
            Sauron, também conhecido como Senhor do Escuro de Mordor ou Senhor
            Sombrio, por vezes referido como Inimigo do Mundo, é um Maia que se
            tornou o tenente mais poderoso de Morgoth, o primeiro Senhor
            Sombrio. Mais tarde seria o criador do Um Anel. Foi o maior inimigo
            dos Povos Livres da Terra-média e o principal antagonista de O
            Senhor dos Anéis, apesar de aparecer em várias outras obras do
            Legendário.
          </p>
        </DivTextSauron>
      </DivImgAndTextSauron>

      <DivThreeImgSauron>
        <ImageSauron>
          <img src={Sauron1} />
        </ImageSauron>

        <ImageSauron>
          <img src={SauronTeste} />
        </ImageSauron>

        <ImageSauron className="image-three">
          <img src={Sauron3} />
        </ImageSauron>
      </DivThreeImgSauron>
    </Sauron>
  );
};
