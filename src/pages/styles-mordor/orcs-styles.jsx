import styled from "styled-components";

export const Orcs = styled.section`
  width: 100%;
  background-color: #111111;
`;

export const OrcsImageMain = styled.div`
  img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #f2ca53;
  }
`;

export const TitleOrcs = styled.div`
  display: flex;
  position: absolute;
  height: 100vh;
  margin-top: 400px;
  margin-left: 100px;
  .title-orcs {
    font-size: 220px;
    color: #f2ca53;
    @media (max-width: 1550px) {
      font-size: 180px;
      margin-top: -100px;
    }
    @media (max-width: 1350px) {
      font-size: 150px;
      margin-top: -150px;
      margin-left: -50px;
    }
    @media (max-width: 1040px) {
      font-size: 130px;
      margin-top: -180px;
      margin-left: -50px;
    }
    @media (max-width: 850px) {
      font-size: 110px;
      margin-top: -220px;
      margin-left: -70px;
    }
    @media (max-width: 769px) {
      font-size: 100px;
      margin-top: -240px;
      margin-left: -70px;
    }
    @media (max-width: 769px) {
      font-size: 60px;
      margin-top: -300px;
      margin-left: -80px;
    }
  }
`;

export const DivImagesOrcsAndTextOne = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20px;
  background-color: #111111;
  padding: 0px 20px 20px 20px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const ImgOrcs = styled.div`
  flex: 1;
  img {
    width: 100%;
    border: 2px solid #f2ca53;
    border-radius: 4px;
  }
`;
export const TextOrcs = styled.div`
  color: #f2ca53;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 36px;
  padding: 10px 20px 20px 20px;
  background-color: #111111;
  p {
    @media (max-width: 1812px) {
      font-size: 32px;
    }
    @media (max-width: 1624px) {
      font-size: 28px;
    }
    @media (max-width: 1436px) {
      font-size: 24px;
    }
    @media (max-width: 1248px) {
      font-size: 21px;
    }
    @media (max-width: 1107px) {
      font-size: 18px;
    }
    @media (max-width: 980px) {
      font-size: 15px;
    }
    @media (max-width: 850px) {
      font-size: 13px;
    }
    @media (max-width: 769px) {
      font-size: 13px;
    }
  }
`;
