import {
  MordorImageMain,
  DivImgAndTextMordorOne,
  ImageMordorOne,
  DivTextOne,
  DivImgAndTextMordorTwo,
  ImageMordorTwo,
  DivTextTwo,
  Mountain,
  ImgMountain,
  TextMountain,
  DivShadowOne,
  DivShadowTwo,
  DivMountainShadow,
} from "../../styles/styles-mordor/mordor-styles";
import Mordor1 from "../../assets/mordor/mordor1.jpg";
import Mordor2 from "../../assets/mordor/mordor2.jpg";
import Mountain1 from "../../assets/mordor/mountainmordor.jpg";

export const MordorMainSection = () => {
  return (
    <MordorImageMain>
      <DivShadowOne>
        <DivImgAndTextMordorOne>
          <ImageMordorOne>
            <img src={Mordor1} />
          </ImageMordorOne>
          <DivTextOne>
            <p>
              Mordor é uma região localizada na parte sudeste da Terra-Média,
              sendo considerada o reino de Sauron, o Senhor do Escuro, a leste
              de Gondor, de Ithilian e do Grande Rio Anduin. Mordor foi
              escolhido para ser o território de Sauron em função causa das
              cadeias montanhosas que o rodeiam pelos três lados, criando uma
              barreira natural contra os inimigos. Ao norte, surgem os
              contrafortes cinzentos de Ered Lithui. Ao sul e ao oeste, estão os
              picos sombrios de Ephel Duáth.
            </p>
          </DivTextOne>
        </DivImgAndTextMordorOne>
      </DivShadowOne>
      <DivShadowTwo>
        <DivImgAndTextMordorTwo>
          <ImageMordorTwo>
            <img src={Mordor2} />
          </ImageMordorTwo>
          <DivTextTwo>
            <p>
              A maior parte da terra está coberta de resíduo vulcânico, por
              causa da atividade da Montanha da Perdição, em cujas fendas, as
              Sammarth Naur, o Anel de Poder foi feito. Os escravos do Senhor
              das Sombras plantavam comida para os exércitos, e eventualmente, a
              terra secou por causa de todos os exércitos que Sauron mantinha em
              Mordor. Porém, após o fim da resistência à Sombra, o local
              sustentava algumas formas de vida, apresentando em seu centro as
              águas amargas do Mar de Núrnen.
            </p>
          </DivTextTwo>
        </DivImgAndTextMordorTwo>
      </DivShadowTwo>

      <DivMountainShadow>
        <Mountain>
          <ImgMountain>
            <img src={Mountain1} />
          </ImgMountain>
          <TextMountain>
            <p>
              A Montanha da Perdição, também conhecida como Orodruin e Amon
              Amarth é um lugar em Terra-Média. É um vulcão em Mordor que foi
              usado para falsificar o Um Anel, e também o único lugar onde o
              Anel pode ser destruído.
            </p>
          </TextMountain>
        </Mountain>
      </DivMountainShadow>
    </MordorImageMain>
  );
};
