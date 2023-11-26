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
  cursor: pointer;
  position: absolute;
  position: fixed;
  z-index: 999;
  img {
    width: 1200px;
    height: 850px;
    display: flex;
    //border: 2px solid #f2ca53;
  }
  .button {
    position: absolute;
  }
`;
