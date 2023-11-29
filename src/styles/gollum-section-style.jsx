import styled from "styled-components";

export const Gollum = styled.section`
  height: auto;
  background-color: #141414;
`;

export const ImageGollumMain = styled.div`
  img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #9bb8cc;
    border-top: 2px solid #9bb8cc;
  }
`;

export const TitleGollum = styled.div`
  position: absolute;
  .title-gollum {
    font-size: 80px;
    color: #9bb8cc;
    margin: 100px 0 0 70px;
    @media (max-width: 1350px) {
      font-size: 65px;
      margin-top: 70px;
    }

    @media (max-width: 1125px) {
      font-size: 60px;
    }

    @media (max-width: 1025px) {
      font-size: 56px;
    }

    @media (max-width: 930px) {
      font-size: 47px;
      margin-top: 40px;
      margin-left: 40px;
    }

    @media (max-width: 830px) {
      font-size: 45px;
      margin-top: 30px;
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

export const DivImageAndTextgollum = styled.div`
  display: flex;
  background-color: #141414;
  margin-top: 20px;
`;

export const DivImageGollum = styled.div`
  flex: 1;
  img {
    width: 100%;
    border: 2px solid #9bb8cc;
    border-radius: 4px;
  }
`;

export const DivTextGollum = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 42px;
  padding: 40px;
  color: #9bb8cc;
`;

export const DivTwoImgGollum = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20px;
  background-color: #111111;
`;

export const ImagesGollum = styled.div`
  flex: 1;
  img {
    width: 100%;
    border: 2px solid #9bb8cc;
    border-radius: 4px;
  }
`;

export const DivCenterTextGollum = styled.div`
  color: #9bb8cc;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 35px;
  padding: 20px;
  background-color: #111111;
`;
