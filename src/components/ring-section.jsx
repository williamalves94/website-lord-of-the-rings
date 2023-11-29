import {
  Ring,
  ImageRingMain,
  TitleRing,
  DivImgAndTextRing,
  RingImages,
  RingText,
  DivSecondImgAndText,
  DivGloveRing,
  DivGloveRingText,
} from "../styles/ring-section-style";
import RingMain from "../assets/ring/ringmain.jpg";
import Ring1 from "../assets/ring/ring1.jpg";
import Ring2 from "../assets/ring/ring2.png";

export const RingSection = () => {
  return (
    <Ring>
      <ImageRingMain>
        <TitleRing>
          <p className="title-ring">O Um Anel</p>
          <p className="text-ring">
            Três anéis para os Reis-Élfos sob o céu,<br></br>sete para os
            senhores-Anões em seus rochosos<br></br>corredores, nove para os
            homens mortais fadados ao eterno sono,<br></br>um para o senhor do
            escuro em seu escuro trono,
            <br></br>na terra de Mordor, onde as sombras se deitam.<br></br>Um
            anel para todos governar, um anel para encontrá-los,<br></br>um anel
            para todos trazer e na escuridão<br></br>aprisioná-los na Terra de
            Mordor,<br></br>onde as sombras se deitam.
          </p>
        </TitleRing>
        <img src={RingMain} />
      </ImageRingMain>

      <DivImgAndTextRing>
        <RingImages>
          <img src={Ring1} />
        </RingImages>
        <RingText>
          <p>
            O Anel de Sauron, também conhecido como O Anel Mestre ou referido
            como O Anel do Poder ou O Um Anel, ou também chamado de "Precioso".
            O Anel em si é o artefato mais poderoso na Terra-Média. Foi criado e
            forjado pelo Senhor do Escuro Sauron no fogo da Montanha da Perdição
            durante a Segunda Era, num plano maléfico de dominar, controlar e
            governar todos os outros anéis do poder, inclusive dominar a
            Terra-Média. Porém, durante a batalha de Mordor, Sauron é derrotado
            e perde tanto sua forma física como o próprio Anel Mestre.
          </p>
        </RingText>
      </DivImgAndTextRing>

      <DivSecondImgAndText>
        <DivGloveRingText>
          <p>
            Ele foi criado com o propósito de aumentar o poder de Sauron, o que
            o faria o Senhor Supremo da Terra-Média. O Um Anel poderia ser usado
            para controlar os que estivessem usando os outros dezenove anéis,
            que foram feitos pelos Elfo Celebrimbor e seu povo com a assistência
            do próprio Sauron.
          </p>
        </DivGloveRingText>
        <DivGloveRing>
          <img src={Ring2} />
        </DivGloveRing>
      </DivSecondImgAndText>
    </Ring>
  );
};
