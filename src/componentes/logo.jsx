import React from 'react';
import logoempresa from '../imganes/logoempresa.jpeg'
import '../estilos/logo.css'    
export const Logo = () =>{
    return(
        <div >
        <img className='logo' src={logoempresa} alt="no sale" />
            
        </div>
    );
} 