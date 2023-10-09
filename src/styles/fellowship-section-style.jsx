import styled from 'styled-components';

export const Fellowship = styled.section`
    height: auto;
    display: flex;
    justify-content: center;    
    background-color: black;
    padding: 60px 60px 40px 60px;
`;

export const DivMainFellowship = styled.div`    
    height: auto;
    background-color: #141414; //201f1f
    flex-wrap: wrap;
    display: flex;
`;

export const ImageFellowship =styled.div`
    flex: 1;
    img{
        width: 100%;
        height: auto;        
    }
`;

export const DivTextFellowship = styled.div`
    width: auto;
    flex: 1;
    margin-left: 30px;
    p{
        font-size: 35px;
        padding: 20px;
        color: #F2CA53;
        flex: 3;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .title-fellowship{
        justify-content: flex-start;
        color:#F2CA53;
        font-size: 60px
    }
`;