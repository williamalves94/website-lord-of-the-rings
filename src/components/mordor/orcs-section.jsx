import {
  Orcs,
  OrcsImageMain,
  DivImagesOrcsAndTextOne,
  ImgOrcsFirst,
  ImgOrcsLast,
  TextOrcs,
  TitleOrcs,
  DivShadowOrcs,
} from "../../styles/styles-mordor/orcs-styles";
import OrcsMain from "../../assets/orcs/orcsmain.jpg";
import Orcs1 from "../../assets/orcs/orcs1.jpg";
import Orcs2 from "../../assets/orcs/orcs2.jpg";

export const OrcsSection = () => {
  return (
    <Orcs>
      <OrcsImageMain>
        <TitleOrcs>
          <p className="title-orcs">Orcs</p>
        </TitleOrcs>
        <img src={OrcsMain} />
      </OrcsImageMain>

      <DivShadowOrcs>
        <DivImagesOrcsAndTextOne>
          <ImgOrcsFirst>
            <img src={Orcs1} />
          </ImgOrcsFirst>
          <TextOrcs>
            <p>
              Orcs são os vilões mais comuns da mitologia de Tolkien, uma raça
              de criaturas subservientes criadas pelo malvado Valar Melkor
              (Morgoth). O Dark Lord Sauron também os criou com a intenção de
              usá-los como soldados e capangas em suas aventuras pela
              Terra-Média.
            </p>
          </TextOrcs>
          <ImgOrcsLast>
            <img src={Orcs2} />
          </ImgOrcsLast>
        </DivImagesOrcsAndTextOne>
      </DivShadowOrcs>
    </Orcs>
  );
};
