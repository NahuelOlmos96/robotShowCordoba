import React from 'react'
import "../estilos/contactos.css"
import whatapp from "../imganes/whatapp.png";
import tiktok from "../imganes/tiktok.png";
import instagram from "../imganes/instagram.png";

function Contactos() {
    return (
        <div>
            <div className="contactos row">
               
                <div className="containerfotos col-12 row">
                    <img   src={whatapp} class=" col-4" alt="..." />
                    <img src={instagram} class=" col-4" alt="..." />
                    <img src={tiktok} class=" col-4" alt="..." />
                </div>
                <div className='row col'>
                    <a href='https://www.google.com/' className='col-4'>whatapp</a>
                    <a href='https://www.instagram.com/robotshowcordoba/' className='col-4'>@robotshowcordoba</a>
                    <a href='https://www.tiktok.com/@robotshowcordoba_' className='col-4'>robotshowcordoba_</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Contactos