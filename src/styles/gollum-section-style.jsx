import styled from "styled-components";

export const Gollum = styled.section`
  height: auto;
  background-color: #1d1d1d;
`;

export const ImageGollumMain = styled.div`
  img {
    width: 100%;
    height: auto;
    box-shadow: 12px 12px 20px 0px #00000085;
  }
`;

export const TitleGollum = styled.div`
  position: absolute;
  .title-gollum {
    font-size: 80px;
    color: #9bb8cc;
    margin: 100px 0 0 70px;
    @media (max-width: 1200px) {
      font-size: 65px;
      margin-top: 160px;
    }
    @media (max-width: 930px) {
      font-size: 65px;
      margin-top: 140px;
      margin-left: 35px;
    }

    @media (max-width: 830px) {
      font-size: 65px;
      margin-top: 120px;
      margin-left: 35px;
    }
    @media (max-width: 769px) {
      font-size: 65px;
      margin-top: 120px;
      margin-left: 35px;
    }
    @media (max-width: 480px) {
      font-size: 35px;
      margin: 60px 0px 0px 10px;
    }
  }
  .text-gollum {
    color: #9bb8cc;
    margin: 20px 0 0 70px;
    font-size: 42px;
    @media (max-width: 1450px) {
      font-size: 60px;
    }

    @media (max-width: 1350px) {
      font-size: 40px;
    }

    @media (max-width: 1250px) {
      font-size: 40px;
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
      margin-left: 40px;
    }

    @media (max-width: 830px) {
      font-size: 25px;
      margin-top: 5px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      margin: 0px 0px 0px 10px;
    }
  }
`;

export const DivGollumShadow = styled.div`
  padding: 20px 60px 40px 60px;
`;

export const DivImageAndTextgollum = styled.div`
  display: flex;
  background-color: #1d1d1d;
  margin-top: 20px;
  box-shadow: 12px 12px 20px 0px #00000086;
  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const DivImageGollum = styled.div`
  flex: 1;
  @media (max-width: 480px) {
    padding: 0px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 3px 0 0;
  }
`;

export const DivTextGollum = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 42px;
  padding: 25px;
  color: #9bb8cc;
  @media (max-width: 1200px) {
    //margin-top: -40px;
    font-size: 38px;
  }

  @media (max-width: 1130px) {
    //margin-top: -40px;
    font-size: 34px;
  }

  @media (max-width: 1060px) {
    //margin-top: -40px;
    font-size: 30px;
  }

  @media (max-width: 915px) {
    //margin-top: -40px;
    font-size: 26px;
  }

  @media (max-width: 795px) {
    //margin-top: -40px;
    font-size: 22px;
  }
  @media (max-width: 769px) {
    //margin-top: -40px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 15px;
    margin-top: 0px;
  }
`;

export const DivTwoImageGollumShadow = styled.div`
  padding: 0 80px 50px 80px;
`;

export const DivTwoImgGollum = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20px;
  background-color: #1d1d1d;
  box-shadow: 12px 12px 20px 0px #00000086;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    margin-top: 0px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ImageGollumFisrt = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;
export const ImageGollumLast = styled.div`
  flex: 1;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const DivCenterTextGollum = styled.div`
  color: #9bb8cc;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 0 15px 0px 15px;
  background-color: #1d1d1d;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
