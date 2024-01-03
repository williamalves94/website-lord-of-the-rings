import styled from "styled-components";

export const MordorImageMain = styled.div`
  background-color: #1d1d1d;
  margin-top: -8px;
  border-bottom: 2px solid #f2ca53;
  img {
    width: 100%;
    //height: 100vh;
    border-radius: 4px;
  }
`;

export const MainImageEagle = styled.div`
  img {
    width: 100%;
    height: auto;
    box-shadow: 12px 12px 20px 0px #00000086;
    @media (max-width: 480px) {
      margin-top: 90px;
    }
  }
`;

export const TitleMordor = styled.div`
  display: flex;
  //align-items: center;
  position: absolute;
  height: 100vh;
  margin-top: 420px;
  margin-left: 120px;

  .title-mordor {
    font-size: 220px;
    color: #f2ca53;
    @media (max-width: 1599px) {
      font-size: 200px;
      //margin-top: -320px;
    }
    @media (max-width: 1460px) {
      font-size: 180px;
      margin-top: -100px;
    }
    @media (max-width: 1300px) {
      font-size: 160px;
      margin-top: -130px;
      margin-left: -50px;
    }
    @media (max-width: 1155px) {
      font-size: 140px;
      margin-top: -160px;
    }
    @media (max-width: 960px) {
      font-size: 120px;
      margin-top: -180px;
    }
    @media (max-width: 890px) {
      font-size: 100px;
      margin-top: -200px;
    }
    @media (max-width: 780px) {
      font-size: 90px;
      margin-top: -220px;
    }
    @media (max-width: 480px) {
      font-size: 60px;
      margin-left: -90px;
    }
    @media (max-width: 414px) {
      font-size: 50px;
      margin-top: -230px;
      margin-left: -90px;
    }
    @media (max-width: 375px) {
      font-size: 50px;
      margin-top: -250px;
      margin-left: -90px;
    }
  }
`;

export const DivShadowOne = styled.div`
  display: flex;
  padding: 25px 60px 15px 60px;
  @media (max-width: 480px) {
    padding: 20px 30px 0 30px;
  }
`;

export const DivImgAndTextMordorOne = styled.div`
  display: flex;
  background-color: #111111;
  margin: 20px 0 0 0;
  box-shadow: 12px 12px 20px 0px #00000085;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImageMordorOne = styled.div`
  background-color: #111111;
  //padding: 20px 20px 10px 20px;
  flex: 2;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const DivTextOne = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px 20px 30px;
  background-color: #111111;
  flex: 1;
  p {
    color: #f2ca53;
    font-size: 38px;
    @media (max-width: 1829px) {
      font-size: 30px;
    }
    @media (max-width: 1473px) {
      font-size: 28px;
    }
    @media (max-width: 1381px) {
      font-size: 25px;
    }
    @media (max-width: 1244px) {
      font-size: 22px;
    }
    @media (max-width: 1110px) {
      font-size: 20px;
    }
    @media (max-width: 1025px) {
      font-size: 18px;
    }
    @media (max-width: 930px) {
      font-size: 16px;
    }
    @media (max-width: 840px) {
      font-size: 14px;
    }
    @media (max-width: 750px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const DivShadowTwo = styled.div`
  display: flex;
  padding: 25px 60px 17px 60px;
  @media (max-width: 480px) {
    padding: 35px 30px 0 30px;
  }
`;

export const DivImgAndTextMordorTwo = styled.div`
  display: flex;
  background-color: #111111;
  box-shadow: 12px 12px 20px 0px #00000085;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImageMordorTwo = styled.div`
  background-color: #111111;
  flex: 2;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const DivTextTwo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px 20px 30px;
  background-color: #111111;
  flex: 1;
  p {
    color: #f2ca53;
    font-size: 38px;
    @media (max-width: 1829px) {
      font-size: 30px;
    }
    @media (max-width: 1473px) {
      font-size: 28px;
    }
    @media (max-width: 1381px) {
      font-size: 25px;
    }
    @media (max-width: 1244px) {
      font-size: 22px;
    }
    @media (max-width: 1110px) {
      font-size: 20px;
    }
    @media (max-width: 1025px) {
      font-size: 18px;
    }
    @media (max-width: 930px) {
      font-size: 16px;
    }
    @media (max-width: 840px) {
      font-size: 14px;
    }
    @media (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

export const DivMountainShadow = styled.div`
  display: flex;
  padding: 20px 60px 60px 60px;
  @media (max-width: 480px) {
    padding: 35px 30px 60px 30px;
  }
`;

export const Mountain = styled.div`
  display: flex;
  background-color: #111111;
  box-shadow: 12px 12px 20px 0px #00000085;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImgMountain = styled.div`
  background-color: #111111;
  flex: 2;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextMountain = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 60px 20px 60px;
  background-color: #111111;
  flex: 1;
  p {
    color: #f2ca53;
    font-size: 38px;
    @media (max-width: 1829px) {
      font-size: 30px;
    }
    @media (max-width: 1473px) {
      font-size: 28px;
    }
    @media (max-width: 1381px) {
      font-size: 25px;
    }
    @media (max-width: 1244px) {
      font-size: 22px;
    }
    @media (max-width: 1110px) {
      font-size: 20px;
    }
    @media (max-width: 1025px) {
      font-size: 18px;
    }
    @media (max-width: 930px) {
      font-size: 16px;
    }
    @media (max-width: 840px) {
      font-size: 14px;
    }
    @media (max-width: 750px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 0 0 20px 0;
      //margin-top: -20px;
    }
  }
`;
