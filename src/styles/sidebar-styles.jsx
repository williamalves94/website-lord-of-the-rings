import styled from "styled-components";

export const DivSidebar = styled.div`
  background-color: black;
  border-bottom: 2px solid #f2ca53;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 8%;
  top: 100px;
  width: 100%;

  left: ${(props) => (props.sidebar ? "0" : "100%")};

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const DivTags = styled.div`
  a {
    color: #f2ca53;
    font-size: 30px;
    cursor: pointer;
    margin: 0 25px 0 25px;
    text-decoration: none;
    :hover {
      color: #d4af37;
      transition: all.3s;
    }
  }
`;
