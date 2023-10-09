import styled from 'styled-components';

export const Fellowship = styled.section`
    height: auto;
    display: flex;
    justify-content: center;    
    background-color: black;
    padding: 60px 60px 40px 60px;
    p{
        margin-top: 40px;
        font-size: 70px;
        color: #fff;
        flex: 3;
    }
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
    flex: 1;
    display: flex;
    margin-left: 30px;
`;