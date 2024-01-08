import {
  Fellowship,
  ImageFellowship,
  DivMainFellowship,
  DivTextFellowship,
  DivFellowshipImgOne,
  DivFellowshipImgTwo,
  ImgFellowship,
} from "../../styles/styles-condado/fellowship-section-style";
import FellowshipImagemMain from "../../assets/fellowshipsimgs/fellowshipmain.jpg";
import FrodoBolseiro from "../../assets/fellowshipsimgs/frodo.jpg";
import FellowshipGroup from "../../assets/fellowshipsimgs/fellowshipgroup.jpg";
import Gandalf from "../../assets/fellowshipsimgs/gandalf.jpg";
import Group from "../../assets/fellowshipsimgs/group.jpg";
import Aragorn from "../../assets/fellowshipsimgs/aragorn.jpg";
import Legolas from "../../assets/fellowshipsimgs/legolas.jpg";

export const FellowshipSection = () => {
  return (
    <Fellowship>
      <DivMainFellowship>
        <ImageFellowship>
          <img src={FellowshipImagemMain} />
        </ImageFellowship>
        <DivTextFellowship>
          <p className="title-fellowship">A Sociedade do Anel</p>
          <p>
            A Sociedade do Anel, com nove membros, foi criada em oposição aos
            nove Cavaleiros Negros de Sauron, e com o objetivo de destruir o Um
            Anel. Ela se constituía de Frodo Bolseiro, o portador do Anel, de
            Samwise Gamgee, fiel companheiro de Frodo, do mago Gandalf, o
            Cinzento, do elfo Legolas, do anão Gimli, dos homens Aragorn e
            Boromir, e dos dois jovens hobbits Merry Brandebuque e Pippin Tûk. A
            Sociedade representa as pessoas livres do oeste — Elfos, Anões,
            Homens e Hobbits, acompanhados de um mago.
          </p>
        </DivTextFellowship>
      </DivMainFellowship>

      <DivFellowshipImgOne>
        <ImgFellowship>
          <img src={FrodoBolseiro} />
        </ImgFellowship>

        <ImgFellowship>
          <img src={FellowshipGroup} />
        </ImgFellowship>

        <ImgFellowship>
          <img src={Gandalf} />
        </ImgFellowship>
      </DivFellowshipImgOne>

      <DivFellowshipImgTwo>
        <ImgFellowship>
          <img src={Aragorn} />
        </ImgFellowship>

        <ImgFellowship>
          <img src={Group} />
        </ImgFellowship>

        <ImgFellowship>
          <img src={Legolas} />
        </ImgFellowship>
      </DivFellowshipImgTwo>
    </Fellowship>
  );
};
