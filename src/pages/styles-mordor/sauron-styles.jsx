import styled from "styled-components";

export const Sauron = styled.section`
  background-color: #111111;
  width: 100%;
  height: auto;
`;

export const TitleSauron = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: #f2ca52;
    font-size: 100px;
    margin-top: 50px;
  }
`;

export const DivImgAndTextSauron = styled.div`
  display: flex;
  background-color: #111111;
  padding: 30px;
  margin-top: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DivImgSauron = styled.div`
  flex: 2;
  border-radius: 4px;
  img {
    width: 100%;
    height: auto;
    border: 2px solid #f2ca52;
    border-radius: 4px;
  }
`;

export const DivTextSauron = styled.div`
  flex: 1;
  font-size: 38px;
  color: #f2ca52;
  padding: 30px;
  p {
    @media (max-width: 1600px) {
      font-size: 35px;
    }
    @media (max-width: 1475px) {
      font-size: 32px;
    }
    @media (max-width: 1350px) {
      font-size: 28px;
    }
    @media (max-width: 1217px) {
      font-size: 25px;
    }
    @media (max-width: 1125px) {
      font-size: 22px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 890px) {
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

export const DivThreeImgSauron = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImageSauron = styled.div`
  display: flex;
  background-color: #111111;
  padding: 20px;
  border-radius: 4px;
  padding: 30px 30px 50px 30px;
  img {
    width: 100%;
    border: 2px solid #f2ca52;
    border-radius: 4px;
  }
`;
