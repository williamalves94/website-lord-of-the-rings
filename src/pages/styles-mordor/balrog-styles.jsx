import styled from "styled-components";

export const Balrog = styled.section`
  width: 100%;
  background-color: #1d1d1d;
`;

export const BalrogImageMain = styled.div`
  img {
    width: 100%;
    height: auto;
    box-shadow: 12px 12px 20px 0px #00000086;
  }
`;

export const TitleBalrog = styled.div`
  display: flex;
  position: absolute;
  height: 100vh;
  margin-top: 380px;
  margin-left: 100px;
  .title-Balrog {
    font-size: 220px;
    color: #312c2c;
    @media (max-width: 1777px) {
      font-size: 210px;
      margin-top: -100px;
    }
    @media (max-width: 1500px) {
      font-size: 170px;
      margin-top: -100px;
    }
    @media (max-width: 1250px) {
      font-size: 150px;
      margin-top: -160px;
      margin-left: -50px;
    }
    @media (max-width: 1138px) {
      font-size: 140px;
      margin-top: -180px;
    }
    @media (max-width: 1035px) {
      font-size: 130px;
      margin-top: -180px;
    }
    @media (max-width: 860px) {
      font-size: 110px;
      margin-top: -230px;
      margin-left: -70px;
    }
    @media (max-width: 769px) {
      font-size: 110px;
      margin-top: -230px;
      margin-left: -70px;
    }

    @media (max-width: 480px) {
      font-size: 60px;
      margin-top: -290px;
      margin-left: -80px;
    }
    @media (max-width: 450px) {
      font-size: 55px;
      margin-top: -305px;
      margin-left: -80px;
    }
    @media (max-width: 380px) {
      font-size: 45px;
      margin-top: -315px;
      margin-left: -80px;
    }
    @media (max-width: 330px) {
      font-size: 40px;
      margin-top: -320px;
      margin-left: -85px;
    }
  }
`;

export const DivShadowBalrogOne = styled.div`
  display: flex;
  padding: 45px 60px 0px 60px;
  @media (max-width: 480px) {
    padding: 35px 30px 0px 30px;
  }
`;

export const DivImgAndTextOne = styled.div`
  display: flex;
  box-shadow: 12px 12px 20px 0px #00000086;
  background-color: #111111;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DivImageBalrogOne = styled.div`
  flex: 3;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 0px 0px 3px;
    @media (max-width: 480px) {
      border-radius: 3px 3px 0 0;
    }
  }
`;

export const DivTextBalrogOne = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  p {
    color: #f2ca53;
    font-size: 36px;
    padding: 10px 20px 10px 20px;
    @media (max-width: 1476px) {
      font-size: 34px;
    }
    @media (max-width: 1410px) {
      font-size: 32px;
    }
    @media (max-width: 1345px) {
      font-size: 29px;
    }
    @media (max-width: 1240px) {
      font-size: 26px;
    }
    @media (max-width: 1140px) {
      font-size: 23px;
    }
    @media (max-width: 1041px) {
      font-size: 20px;
    }
    @media (max-width: 942px) {
      font-size: 17px;
    }
    @media (max-width: 843px) {
      font-size: 15px;
    }
  }
`;

export const DivShadowBalrogTwo = styled.div`
  display: flex;
  padding: 45px 60px 60px 60px;
  @media (max-width: 480px) {
    padding: 37px 30px 60px 30px;
  }
`;

export const DivImgAndTextTwo = styled.div`
  display: flex;
  box-shadow: 12px 12px 20px 0px #00000086;
  background-color: #111111;
  border-radius: 3px;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const DivImageBalrogTwo = styled.div`
  flex: 3;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0px 3px 3px 0px;
    @media (max-width: 480px) {
      border-radius: 3px 3px 0 0;
    }
  }
`;

export const DivTextBalrogTwo = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  p {
    color: #f2ca53;
    font-size: 36px;
    padding: 10px 20px 20px 20px;
    @media (max-width: 1516px) {
      font-size: 34px;
    }
    @media (max-width: 1455px) {
      font-size: 32px;
    }
    @media (max-width: 1380px) {
      font-size: 29px;
    }
    @media (max-width: 1276px) {
      font-size: 26px;
    }
    @media (max-width: 1173px) {
      font-size: 23px;
    }
    @media (max-width: 1071px) {
      font-size: 20px;
    }
    @media (max-width: 970px) {
      font-size: 17px;
    }
    @media (max-width: 864px) {
      font-size: 15px;
    }
    @media (max-width: 864px) {
      font-size: 14px;
    }
    @media (max-width: 769px) {
      font-size: 14px;
    }
  }
`;
