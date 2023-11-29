import styled from "styled-components";

export const Ring = styled.section`
  height: auto;
  border-top: 2px solid #f2ca53;
  background-color: black;
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
  }
`;

export const DivImgAndTextRing = styled.div`
  display: flex;
  background-color: #141414;
  padding: 30px;
`;

export const RingImages = styled.div`
  flex: 1;
  img {
    width: 100%;
    border: 2px solid #f2ca53;
    border-radius: 4px;
  }
`;
export const RingText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 40px;
  p {
    color: #f2ca53;
    font-size: 35px;
  }
`;

export const DivSecondImgAndText = styled.div`
  display: flex;
  background-color: #141414;
  padding: 30px 30px 60px 30px;
`;

export const DivGloveRing = styled.div`
  flex: 2;
  img {
    width: 100%;
    border: 2px solid #f2ca53;
    border-radius: 4px;
  }
`;

export const DivGloveRingText = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding: 40px;
  p {
    color: #f2ca53;
    font-size: 35px;
  }
`;
