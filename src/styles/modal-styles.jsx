import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: auto;
  margin-top: 37px;
  //border: 2px solid yellow;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  position: fixed;
  z-index: 1000;
  img {
    width: 1200px;
    height: 850px;
    justify-content: flex-end;
    //border: 2px solid #f2ca53;
  }
  p {
    justify-self: flex-start;
    height: 850px;
    //border: 2px solid blue;
    color: #2c2315;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
  }
`;
