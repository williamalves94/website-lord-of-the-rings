import styled from "styled-components";

export const Ring = styled.section`
    height: auto;
    border-top: 2px solid #F2CA53;
    background-color: black;
`;

export const ImageRingMain = styled.div`
    img{
        width: 100%;
        height: auto;
        border-bottom: 2px solid #F2CA53;
    }
`;

export const TitleRing = styled.div`
    position: absolute;    
    .title-ring{       
        font-size: 70px;        
        color: #F2CA53;
        margin: 100px 0 0 70px;   
    }
    .text-ring{
        color: #F2CA53;
        font-size: 42px;
        margin: 20px 0 0 70px;
    }
    
`;

export const DivImgAndTextRing = styled.div`
    display: flex;    
    background-color: #141414;
`;

export const RingImages = styled.div`
    flex: 1;
    img{
        width: 100%;
    }
`;
export const RingText = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 40px;
    p{
        color: #F2CA53;
        font-size: 35px;
    }
`;

export const DivSecondImgAndText = styled.div`
    display: flex;
    background-color: #141414;
`;

export const DivGloveRing = styled.div`
    flex: 2;
    img{
        width: 100%;
    }
`;

export const DivGloveRingText = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    padding: 40px;
    p{
        color: #F2CA53;
        font-size: 35px;
    }
`;


