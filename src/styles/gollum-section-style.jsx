import styled from "styled-components";

export const Gollum = styled.section`
    height: auto;       
    background-color: black;
`;

export const ImageGollumMain = styled.div`
    img{
        width: 100%;
        height: 100vh;
        border-bottom: 2px solid #9bb8cc;
    }
`;

export const TitleGollum = styled.div`
    position: absolute;
    .title-gollum{
        font-size: 80px;
        color: #9bb8cc;
        margin: 100px 0 0 70px;
    }
    .text-gollum{
        color: #9bb8cc;
        margin: 20px 0 0 70px;
        font-size: 42px;
    }
`;

export const DivImageAndTextgollum = styled.div`
    display: flex;
    background-color: #141414;
    margin-top: 20px;
`;

export const DivImageGollum = styled.div`
    flex: 1;
    img{
        width: 100%;
        border: 2px solid #9bb8cc;

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

export const DivTwoImgGollum =styled.div`
    flex: 1;
    display: flex;
    margin-top: 20px;
    background-color: #141414;
`;

export const ImagesGollum =styled.div`
flex: 1;
    img{
        width: 100%;
        border: 2px solid #9bb8cc;
    }
`;

export const DivCenterTextGollum =styled.div`
    color: #9bb8cc;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 35px;
    padding: 20px;
    background-color: #141414;
`;
