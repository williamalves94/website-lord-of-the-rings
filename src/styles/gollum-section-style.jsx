import styled from "styled-components";

export const Gollum = styled.section`
  height: auto;
  background-color: #1d1d1d;
`;

export const ImageGollumMain = styled.div`
  img {
    width: 100%;
    height: auto;
    box-shadow: 12px 12px 20px 0px #00000086;
  }
`;

export const TitleGollum = styled.div`
  position: absolute;
  .title-gollum {
    font-size: 80px;
    color: #9bb8cc;
    margin: 170px 0 0 70px;
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
      margin: 60px 0px 0px 15px;
    }
    @media (max-width: 400px) {
      margin: 40px 0px 0px 10px;
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
      font-size: 17px;
      margin: 0px 0px 0px 15px;
    }
    @media (max-width: 400px) {
      margin: 0px 0px 0px 10px;
    }
  }
`;

export const DivGollumShadow = styled.div`
  padding: 20px 60px 40px 60px;
  @media (max-width: 480px) {
    padding: 20px 32px 35px 32px;
  }
`;

export const DivImageAndTextgollum = styled.div`
  display: flex;
  background-color: #1d1d1d;
  margin-top: 10px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 12px 12px 20px 0px #00000086;
  @media (max-width: 480px) {
    flex-direction: column;
    //height: 100%;
    border-radius: 3px;
  }
`;

export const DivImageGollum = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 0 0 3px;
    @media (max-width: 480px) {
      border-radius: 3px 3px 0 0;
    }
  }
`;

export const DivTextGollum = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 42px;
  padding: 0 20px 0px 20px;
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
  @media (max-width: 480px) {
    padding: 0 31.6px 50px 31.6px;
  }
`;

export const DivTwoImgGollum = styled.div`
  //flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  //margin-top: 20px;
  background-color: #1d1d1d;
  box-shadow: 12px 12px 20px 0px #00000086;
  border-radius: 3px;
  @media (max-width: 480px) {
    flex-direction: column;
    //margin-top: 0px;
  }
`;

export const ImageGollumFisrt = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 0 0 3px;
    @media (max-width: 480px) {
      border-radius: 3px 3px 0 0;
    }
  }
`;
export const ImageGollumLast = styled.div`
  flex: 1;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 3px 3px 0;
    @media (max-width: 480px) {
      margin-bottom: 0;
      border-radius: 0px 0px 3px 3px;
    }
  }
`;
export const DivCenterTextGollum = styled.div`
  flex: 1;
  padding: 10px 15px 10px 15px;
  background-color: #1d1d1d;
  p {
    color: #9bb8cc;
    font-size: 28px;
    @media (max-width: 1850px) {
      font-size: 28px;
    }
    @media (max-width: 1750px) {
      font-size: 26px;
    }
    @media (max-width: 1650px) {
      font-size: 23px;
    }
    @media (max-width: 1590px) {
      font-size: 20px;
    }
    @media (max-width: 1450px) {
      font-size: 18px;
    }
    @media (max-width: 1350px) {
      font-size: 17px;
    }
    @media (max-width: 1250px) {
      font-size: 16px;
    }
    @media (max-width: 1170px) {
      font-size: 14px;
    }
    @media (max-width: 1050px) {
      font-size: 12px;
    }
    @media (max-width: 930px) {
      font-size: 10px;
    }
    @media (max-width: 480px) {
      font-size: 17px;
    }
  }
`;
