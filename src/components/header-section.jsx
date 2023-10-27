import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Head, NavHeader, LogoImg } from '../styles/header-style';
import LogoMain from '../assets/logosf.png';
import { ModalMap } from '../components/modal-map';

export const HeaderSection = () => {
    const [openModal, setOpenModal ] = useState(false);
    
    return (
        <Head>     
        <LogoImg>
            <img src={ LogoMain }/>
        </LogoImg>              
           <NavHeader>                      
                <Link to="/"><a>Terra Média</a></Link>
                <p onClick={ () => { setOpenModal(true) }} className='mapa'>Mapa</p>
                <ModalMap isOpen={ openModal } />                                  
                <Link to="/mordor"><a>Mordor</a></Link>       
            </NavHeader>
        </Head>
    );
};