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
  align-items: center;
  position: absolute;
  height: 100vh;
  margin-left: 100px;
  .title-orcs {
    font-size: 220px;
    color: #f2ca53;
  }
`;

export const DivImagesOrcsAndTextOne = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20px;
  background-color: #111111;
  padding: 20px;
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
  font-size: 35px;
  padding: 40px;
  background-color: #111111;
`;
