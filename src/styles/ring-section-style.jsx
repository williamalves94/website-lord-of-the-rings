import styled from "styled-components";

export const Ring = styled.section`
  height: auto;
  border-top: 2px solid #f2ca53;
  background-color: #1d1d1d;
`;

export const ImageRingMain = styled.div`
  img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #f2ca53;
    border-radius: 4px;
  }
`;

export const TitleRing = styled.div`
  position: absolute;
  .title-ring {
    font-size: 70px;
    color: #f2ca53;
    margin: 100px 0 0 70px;

    @media (max-width: 1350px) {
      font-size: 65px;
      margin-top: 70px;
    }

    @media (max-width: 1125px) {
      font-size: 60px;
      margin-top: 60px;
    }

    @media (max-width: 1025px) {
      font-size: 56px;
      margin-top: 45px;
    }

    @media (max-width: 930px) {
      font-size: 47px;
      margin-top: 40px;
    }

    @media (max-width: 830px) {
      font-size: 45px;
      margin-top: 30px;
    }
    @media (max-width: 480px) {
      font-size: 35px;
      margin: 5px 0px 0px 10px;
    }
    @media (max-width: 461px) {
      font-size: 30px;
    }
    @media (max-width: 415px) {
      font-size: 30px;
    }
    @media (max-width: 365px) {
      font-size: 30px;
    }
  }
  .text-ring {
    color: #f2ca53;
    font-size: 42px;
    margin: 20px 0 0 70px;

    @media (max-width: 1450px) {
      font-size: 40px;
    }

    @media (max-width: 1350px) {
      font-size: 36px;
    }

    @media (max-width: 1250px) {
      font-size: 36px;
    }

    @media (max-width: 1250px) {
      font-size: 36px;
    }

    @media (max-width: 1125px) {
      font-size: 32px;
    }

    @media (max-width: 1025px) {
      font-size: 30px;
    }

    @media (max-width: 930px) {
      font-size: 28px;
      margin-top: 10px;
    }

    @media (max-width: 830px) {
      font-size: 25px;
      margin-top: 5px;
    }
    @media (max-width: 480px) {
      font-size: 17px;
      margin: 0px 0px 0px 10px;
    }
    @media (max-width: 461px) {
      font-size: 15px;
    }
    @media (max-width: 415px) {
      font-size: 13px;
    }
    @media (max-width: 365px) {
      font-size: 11px;
    }
  }
`;

export const DivImgAndTextRing = styled.div`
  display: flex;
  background-color: #1d1d1d;
  box-shadow: 12px 12px 20px 0px #0000009e;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const RingImages = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    //border: 2px solid #f2ca53;
    border-radius: 3px;
  }
`;
export const RingText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 40px;

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 10px;
  }
  p {
    color: #f2ca53;
    font-size: 35px;

    @media (max-width: 1200px) {
      margin-top: -40px;
      font-size: 23px;
    }

    @media (max-width: 1167px) {
      margin-top: -40px;
      font-size: 23px;
    }
    @media (max-width: 1096px) {
      margin-top: -40px;
      font-size: 21px;
    }
    @media (max-width: 1011px) {
      margin-top: -40px;
      font-size: 19px;
    }
    @media (max-width: 921px) {
      margin-top: -40px;
      font-size: 16px;
    }
    @media (max-width: 795px) {
      margin-top: -30px;
      font-size: 15px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      margin-top: 0px;
    }
  }
`;

export const DivSecondImgAndText = styled.div`
  display: flex;
  background-color: #1d1d1d;
  box-shadow: 12px 12px 20px 0px #0000009e;
  //padding: 30px 30px 60px 30px;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const DivGloveRing = styled.div`
  flex: 2;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

export const DivGloveRingText = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding: 40px;
  @media (max-width: 480px) {
    padding: 15px;
  }
  p {
    color: #f2ca53;
    font-size: 35px;
    @media (max-width: 1200px) {
      margin-top: -40px;
      font-size: 26px;
    }

    @media (max-width: 1167px) {
      margin-top: -40px;
      font-size: 23px;
    }
    @media (max-width: 1096px) {
      margin-top: -40px;
      font-size: 23px;
    }
    @media (max-width: 1011px) {
      margin-top: -40px;
      font-size: 23px;
    }
    @media (max-width: 921px) {
      margin-top: -40px;
      font-size: 22px;
    }
    @media (max-width: 900px) {
      margin-top: -40px;
      font-size: 20px;
    }
    @media (max-width: 817px) {
      margin-top: -40px;
      font-size: 18px;
    }
    @media (max-width: 795px) {
      margin-top: -30px;
      font-size: 18px;
    }
    @media (max-width: 769px) {
      margin-top: -30px;
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      margin-top: 0px;
    }
  }
`;

export const DivRingShadow = styled.div`
  padding: 20px 60px 40px 60px;
  @media (max-width: 480px) {
    padding: 20px 25px 15px 25px;
  }
`;
export const DivGloveShadow = styled.div`
  padding: 0px 60px 40px 60px;
  @media (max-width: 480px) {
    padding: 20px 25px 40px 25px;
  }
`;
