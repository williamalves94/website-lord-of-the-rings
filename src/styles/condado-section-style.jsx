import styled from 'styled-components';

export const Condado = styled.section`
    height: auto;
    background-color: black;
    
    border-top: 3px solid #F2CA53;
    padding: 40px 40px 20px 40px;
    p{
        color: #F2CA53;
        font-size: 70px;
        margin-top: 30px;
        justify-content: center;
        display: flex;
    }
`;

export const DivMain = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    background-color: black;
    flex-wrap: wrap;
    border: 3px solid #F2CA53;
`;

export const DivImg = styled.div`
    flex: 2 1;
    height: 100%;
    img{
        width: 100%;
        
    }
`;

export const DivText = styled.div`
    border: 3px solid blue;
    h4{
        color: #fff;
        font-size: 60px;
    }
`;